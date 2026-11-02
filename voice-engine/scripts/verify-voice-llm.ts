import assert from 'node:assert/strict';
import { NextRequest } from 'next/server';
import { createGeminiVoiceHandler } from '../lib/gemini-voice';

async function main() {
const keyName = 'ROLEPILOT_TEST_GEMINI_KEY';
const backupName = 'ROLEPILOT_TEST_BACKUP_KEY';
process.env[keyName] = 'test-key';
process.env[backupName] = 'backup-key';
const options = { keyNames: [keyName, backupName], temperature: 0.6, initialMessage: 'Hello' };
const request = (stream = true) => new NextRequest('http://localhost/api/setup-agent-llm', {
  method: 'POST', body: JSON.stringify({ stream, messages: [{ role: 'system', content: 'Be helpful.' }, { role: 'user', content: 'I am ready.' }] }),
});
const reject = async () => { throw Object.assign(new Error('Credential rejected'), { status: 401 }); };
const failed = createGeminiVoiceHandler(options, () => ({ models: { generateContentStream: reject, generateContent: reject } }) as never);
for (const stream of [true, false]) {
  const response = await failed(request(stream));
  assert.equal(response.status, 502, 'All-key failure must never be an empty HTTP 200');
  assert.equal((await response.json()).code, 'GEMINI_UNAVAILABLE');
}
const empty = createGeminiVoiceHandler(options, () => ({ models: {
  generateContentStream: async function* () { yield { text: '' }; },
  generateContent: async () => ({ text: '' }),
} }) as never);
for (const stream of [true, false]) assert.equal((await empty(request(stream))).status, 502);
let calls = 0;
const fallback = createGeminiVoiceHandler(options, (key) => ({ models: {
  generateContentStream: async function* () {
    calls++;
    if (key === 'test-key') throw Object.assign(new Error('Rejected'), { status: 401 });
    yield { text: 'Hello ' }; yield { text: 'candidate.' };
  },
} }) as never);
const response = await fallback(request());
assert.equal(response.status, 200);
const wire = await response.text();
assert.match(wire, /Hello /);
assert.match(wire, /candidate\./);
assert.match(wire, /data: \[DONE\]\n\n$/);
const chunks = wire.split('\n\n').filter(line => line.startsWith('data: {')).map(line => JSON.parse(line.slice(6)));
assert.equal(new Set(chunks.map(chunk => chunk.id)).size, 1, 'A turn must have a stable SSE id');
assert.equal(calls, 2, 'Rejected credentials should skip other models and try the next key');
let partialCalls = 0;
const partial = createGeminiVoiceHandler(options, () => ({ models: {
  generateContentStream: async function* () { partialCalls++; yield { text: 'Partial reply' }; throw new Error('Disconnected'); },
} }) as never);
await assert.rejects(() => partial(request()).then(response => response.text()));
assert.equal(partialCalls, 1, 'Never append a fallback generation after partial output');
const success = createGeminiVoiceHandler(options, () => ({ models: { generateContent: async () => ({ text: 'Ready for your interview.' }) } }) as never);
assert.equal((await (await success(request(false))).json()).choices[0].message.content, 'Ready for your interview.');
assert.equal((await failed(new NextRequest('http://localhost/api/test', { method: 'POST', body: '{invalid' }))).status, 400);
assert.equal((await failed(new NextRequest('http://localhost/api/test', { method: 'POST', body: JSON.stringify({ messages: null }) }))).status, 400);
delete process.env[keyName]; delete process.env[backupName];
assert.equal((await failed(request())).status, 503);
// The same handler backs both canonical and /chat/completions alias endpoints.
for (const path of ['setup-agent-llm', 'interview-agent-llm']) {
  const route = await import(`../app/api/${path}/route`);
  assert.equal(typeof route.POST, 'function');
  assert.equal((await route.OPTIONS()).status, 204);
}
console.log('Voice LLM regression checks passed');

}
main().catch(error => { console.error(error); process.exitCode = 1; });
