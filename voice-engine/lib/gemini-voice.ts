import { randomUUID } from 'node:crypto';
import { GoogleGenAI, type Content } from '@google/genai';
import { NextRequest, NextResponse } from 'next/server';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': '*',
};

export function voiceOptions() {
  return new NextResponse(null, { status: 204, headers: corsHeaders });
}

type VoiceOptions = {
  keyNames: string[];
  temperature: number;
  initialMessage: string;
};
type ClientFactory = (key: string) => Pick<GoogleGenAI, 'models'>;

// Keep both voice assistants on the same error and OpenAI streaming contract.
export function createGeminiVoiceHandler(
  options: VoiceOptions,
  createClient: ClientFactory = (key) => new GoogleGenAI({
    apiKey: key,
    httpOptions: { timeout: 15000, retryOptions: { attempts: 1 } },
  }),
) {
  return async function POST(request: NextRequest) {
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400, headers: corsHeaders });
    }
    if (!body || !Array.isArray(body.messages) || body.messages.some(
      (message: unknown) => !message || typeof message !== 'object' || !('role' in message) ||
        !['system', 'user', 'assistant'].includes(String(message.role)),
    )) {
      return NextResponse.json({ error: 'messages must be an array of chat messages' }, { status: 400, headers: corsHeaders });
    }

    const keys = [...new Set(options.keyNames.map((name) => process.env[name]?.trim()).filter((key): key is string => Boolean(key)))];
    if (!keys.length) {
      return NextResponse.json({ error: 'Configure a valid Gemini API key on the voice-engine server.', code: 'GEMINI_NOT_CONFIGURED' }, { status: 503, headers: corsHeaders });
    }

    type Message = { role: string; content?: unknown };
    const messages = body.messages as Message[];
    const textOf = (content: unknown): string => {
      if (typeof content === 'string') return content.trim();
      if (Array.isArray(content)) return content.map((part) => typeof part?.text === 'string' ? part.text : '').join(' ').trim();
      return '';
    };
    const systemInstruction = messages.filter((message) => message.role === 'system').map((message) => textOf(message.content)).join('\n');
    const contents: Content[] = messages.filter((message) => message.role !== 'system')
      .map((message) => ({ role: message.role === 'assistant' ? 'model' : 'user', parts: [{ text: textOf(message.content) }] }))
      .filter((content) => content.parts[0].text);
    if (!contents.length) contents.push({ role: 'user', parts: [{ text: options.initialMessage }] });

    const streaming = body.stream === true || Boolean(request.headers.get('accept')?.includes('text/event-stream'));
    const models = ['gemini-3.1-flash-lite', 'gemini-3.6-flash'];
    const id = `chatcmpl-${randomUUID()}`;
    const created = Math.floor(Date.now() / 1000);
    for (const key of keys) {
      const client = createClient(key);
      for (const model of models) {
        try {
          const params = { model, contents, config: { systemInstruction, temperature: options.temperature, abortSignal: request.signal } };
          if (!streaming) {
            const response = await client.models.generateContent(params);
            if (!response.text?.trim()) throw new Error('Empty Gemini response');
            return NextResponse.json({ id, object: 'chat.completion', created, model, choices: [{ index: 0, message: { role: 'assistant', content: response.text }, finish_reason: 'stop' }] }, { headers: corsHeaders });
          }

          const upstream = await client.models.generateContentStream(params);
          const iterator = upstream[Symbol.asyncIterator]();
          // Wait for actual text before committing HTTP 200. Auth, quota and empty
          // responses must reach Agora as failures, not successful silent turns.
          let first = await iterator.next();
          while (!first.done && !first.value.text?.trim()) first = await iterator.next();
          if (first.done) throw new Error('Empty Gemini response');
          const firstText = first.value.text;
          const encoder = new TextEncoder();
          const chunk = (delta: Record<string, string>, finishReason: string | null = null) => encoder.encode(`data: ${JSON.stringify({ id, object: 'chat.completion.chunk', created, model, choices: [{ index: 0, delta, finish_reason: finishReason }] })}\n\n`);
          const stream = new ReadableStream({
            async start(controller) {
              try {
                controller.enqueue(chunk({ role: 'assistant', content: '' }));
                controller.enqueue(chunk({ content: firstText! }));
                for (let next = await iterator.next(); !next.done; next = await iterator.next()) {
                  if (next.value.text) controller.enqueue(chunk({ content: next.value.text }));
                }
                controller.enqueue(chunk({}, 'stop'));
                controller.enqueue(encoder.encode('data: [DONE]\n\n'));
                controller.close();
              } catch {
                // Never retry after output: mixing two generations corrupts the turn.
                controller.error(new Error('Gemini response interrupted. Please retry this turn.'));
              } finally {
                await iterator.return?.(undefined);
              }
            },
            async cancel() { await iterator.return?.(undefined); },
          });
          return new NextResponse(stream, { headers: { ...corsHeaders, 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', 'X-Accel-Buffering': 'no' } });
        } catch (error) {
          const status = typeof error === 'object' && error !== null && 'status' in error ? Number(error.status) : undefined;
          // Do not log SDK error bodies or keys; only the provider status/model.
          console.warn('[voice-llm] Gemini attempt failed', { model, status });
          if (request.signal.aborted) return NextResponse.json({ error: 'Request cancelled' }, { status: 499, headers: corsHeaders });
          // A rejected credential cannot work with another model.
          if (status === 401 || status === 403) break;
        }
      }
    }
    return NextResponse.json({
      error: 'The AI reply service is unavailable. Check Gemini API key validity, billing and quota on the voice-engine server, then retry.',
      code: 'GEMINI_UNAVAILABLE',
    }, { status: 502, headers: corsHeaders });
  };
}
