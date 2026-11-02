// Explicit network diagnostic; never prints keys, tokens or provider error bodies.
import { existsSync } from 'node:fs';
if (existsSync('.env.local')) process.loadEnvFile('.env.local');
const names = ['GEMINI_API_KEY', 'GEMINI_API_KEY_NOVA', 'GEMINI_API_KEY_INTERVIEW', 'GEMINI_API_KEY_APP'];
let failures = 0;
for (const name of names) {
  const key = process.env[name]?.trim();
  if (!key) { console.log(`${name}: not configured`); continue; }
  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
      body: JSON.stringify({ contents: [{ parts: [{ text: 'Reply with OK.' }] }], generationConfig: { maxOutputTokens: 32 } }),
      signal: AbortSignal.timeout(15000),
    });
    const body = await response.json();
    const hasText = body.candidates?.some(candidate => candidate.content?.parts?.some(part => part.text?.trim()));
    const ok = response.ok && hasText;
    if (!ok) failures++;
    console.log(`${name}: ${ok ? 'PASS (generated text)' : `FAIL (HTTP ${response.status}; ${body.error?.status || 'no text'})`}`);
  } catch { failures++; console.log(`${name}: FAIL (network error or timeout)`); }
}
if (!names.some(name => process.env[name]?.trim())) { failures++; console.log('FAIL: no Gemini credentials configured'); }
process.exitCode = failures ? 1 : 0;
