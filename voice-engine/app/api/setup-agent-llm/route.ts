import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

function getGenAIKeys() {
  const keys = Array.from(
    new Set(
      [
        process.env.GEMINI_API_KEY_NOVA,
        process.env.GEMINI_API_KEY,
        process.env.GEMINI_API_KEY_INTERVIEW,
        process.env.GEMINI_API_KEY_APP,
      ].filter(Boolean) as string[],
    ),
  );
  if (keys.length === 0) {
    throw new Error('No Gemini API keys configured');
  }
  return keys;
}

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': '*',
};

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: corsHeaders,
  });
}

export async function POST(request: NextRequest) {
  try {
    const keys = getGenAIKeys();
    const body = await request.json();
    const { messages = [], stream = false } = body;

    // Extract system instruction from system messages
    const systemMessage = messages.find((m: any) => m.role === 'system')?.content || '';
    const userMessages = messages.filter((m: any) => m.role !== 'system');

    // Convert OpenAI style to Gemini style
    const geminiContents = userMessages
      .map((m: any) => {
        let text = '';
        if (typeof m.content === 'string') {
          text = m.content;
        } else if (Array.isArray(m.content)) {
          text = m.content.map((c: any) => c.text || '').join(' ');
        } else if (m.content) {
          text = JSON.stringify(m.content);
        }
        return {
          role: m.role === 'assistant' ? 'model' : 'user',
          parts: [{ text: text.trim() }],
        };
      })
      .filter((c: any) => c.parts[0].text.length > 0);

    // Ensure contents are never empty to avoid Gemini API rejection
    const activeContents =
      geminiContents.length > 0
        ? geminiContents
        : [{ role: 'user', parts: [{ text: 'Hello, please proceed with onboarding.' }] }];

    // Primary model is gemini-3.1-flash-lite as explicitly requested
    const modelsToTry = ['gemini-3.1-flash-lite', 'gemini-3.6-flash'];

    const isStream =
      Boolean(stream) ||
      request.headers.get('accept')?.includes('text/event-stream') ||
      request.headers.get('content-type')?.includes('text/event-stream');

    // If Agora or client requests streaming (SSE)
    if (isStream) {
      const encoder = new TextEncoder();
      const sseChunk = (delta: any, finishReason: string | null = null) =>
        encoder.encode(
          `data: ${JSON.stringify({
            id: `chatcmpl-${Date.now()}`,
            object: 'chat.completion.chunk',
            created: Math.floor(Date.now() / 1000),
            model: 'gemini-3.1-flash-lite',
            choices: [{ index: 0, delta, finish_reason: finishReason }],
          })}\n\n`,
        );

      const readableStream = new ReadableStream({
        async start(controller) {
          try {
            // First chunk with role per OpenAI convention
            controller.enqueue(sseChunk({ role: 'assistant', content: '' }));

            let streamStarted = false;
            for (const key of keys) {
              const client = new GoogleGenAI({ apiKey: key });
              for (const modelName of modelsToTry) {
                try {
                  const responseStream = await client.models.generateContentStream({
                    model: modelName,
                    contents: activeContents,
                    config: {
                      systemInstruction: systemMessage,
                      temperature: 0.6,
                    },
                  });

                  for await (const chunk of responseStream) {
                    if (chunk.text) {
                      controller.enqueue(sseChunk({ content: chunk.text }));
                      streamStarted = true;
                    }
                  }
                  if (streamStarted) break;
                } catch (err) {
                  console.warn(`[Setup Agent LLM Stream] Key ...${key.slice(-4)} ${modelName} failed:`, err);
                }
              }
              if (streamStarted) break;
            }

            controller.enqueue(sseChunk({}, 'stop'));
            controller.enqueue(encoder.encode('data: [DONE]\n\n'));
            controller.close();
          } catch (err) {
            console.error('[Setup Agent LLM Stream Error]:', err);
            controller.error(err);
          }
        },
      });

      return new NextResponse(readableStream, {
        status: 200,
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
          ...corsHeaders,
        },
      });
    }

    // Non-streaming response
    let outputText = '';
    let lastError = null;

    for (const key of keys) {
      const client = new GoogleGenAI({ apiKey: key });
      for (const modelName of modelsToTry) {
        try {
          const response = await client.models.generateContent({
            model: modelName,
            contents: activeContents,
            config: {
              systemInstruction: systemMessage,
              temperature: 0.6,
            },
          });
          outputText = response.text || '';
          if (outputText) break;
        } catch (err: any) {
          lastError = err;
          console.warn(`[Setup Agent LLM] Key ...${key.slice(-4)} ${modelName} failed:`, err);
        }
      }
      if (outputText) break;
    }

    if (!outputText && lastError) {
      throw lastError;
    }

    return NextResponse.json(
      {
        id: `chatcmpl-${Date.now()}`,
        object: 'chat.completion',
        created: Math.floor(Date.now() / 1000),
        model: 'gemini-3.1-flash-lite',
        choices: [
          {
            index: 0,
            message: { role: 'assistant', content: outputText },
            finish_reason: 'stop',
          },
        ],
      },
      {
        headers: corsHeaders,
      },
    );
  } catch (error: any) {
    console.error('Setup Agent LLM Error:', error);
    return NextResponse.json(
      { error: error.message || 'Internal Server Error' },
      { status: 500, headers: corsHeaders },
    );
  }
}
