import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Global state for deduplication across the 3 concurrent agent requests
// In Next.js dev, use globalThis to preserve across hot reloads.
const globalState = globalThis as unknown as {
  activeTurns: Map<string, { promise: Promise<string>; timestamp: number }>;
};

if (!globalState.activeTurns) {
  globalState.activeTurns = new Map();
}

export async function POST(request: NextRequest) {
  try {
    const url = new URL(request.url);
    const agentName = url.searchParams.get('agent');
    const channel = url.searchParams.get('channel');

    if (!agentName || !channel) {
      return NextResponse.json({ error: 'Missing agent or channel parameter' }, { status: 400 });
    }

    const body = await request.json();
    const messages = body.messages || [];
    
    // We only trigger a new LLM call if there isn't an active one for this channel within the last 2 seconds.
    const now = Date.now();
    let turn = globalState.activeTurns.get(channel);

    if (!turn || now - turn.timestamp > 2000) {
      // First request of the cluster, or a new turn entirely.
      // We start the Gemini call and store the promise.
      
      const systemMessage = messages.find((m: any) => m.role === 'system')?.content || '';
      const userMessages = messages.filter((m: any) => m.role !== 'system');
      
      // Convert OpenAI style messages to Gemini style
      const geminiContents = userMessages.map((m: any) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }]
      }));

      const geminiPromise = ai.models.generateContent({
        model: 'gemini-3.5-flash-lite',
        contents: geminiContents,
        config: {
          systemInstruction: systemMessage,
          temperature: 0.7,
        }
      }).then(response => {
        return response.text || '';
      }).catch(err => {
        console.error('Gemini error:', err);
        return '';
      });

      turn = { promise: geminiPromise, timestamp: now };
      globalState.activeTurns.set(channel, turn);
    }

    // Await the shared Gemini response
    const geminiText = await turn.promise;

    // The prompt instructs the LLM to start with a bracketed tag, e.g. "[Maya (Product Manager)] Hello!"
    // We need to parse who is supposed to speak.
    let responseText = '';
    const match = geminiText.match(/^\[([^\]]+)\]\s*(.*)$/s);
    
    if (match) {
      const speakerTag = match[1]; // e.g., "Maya (Product Manager)"
      const messageContent = match[2];
      
      // Check if the current agent's name is in the speaker tag
      if (speakerTag.toLowerCase().includes(agentName.toLowerCase())) {
        responseText = messageContent;
      } else {
        // Not this agent's turn. Return empty.
        responseText = '';
      }
    } else {
      // Fallback: If the LLM failed to use the tag, we default to the Chairperson (David)
      if (agentName.toLowerCase() === 'david') {
        responseText = geminiText;
      } else {
        responseText = '';
      }
    }

    // Return in OpenAI format for the CustomLLM adapter
    return NextResponse.json({
      id: `chatcmpl-${Date.now()}`,
      object: 'chat.completion',
      created: Math.floor(Date.now() / 1000),
      model: 'gemini-3.5-flash-lite',
      choices: [
        {
          index: 0,
          message: {
            role: 'assistant',
            content: responseText
          },
          finish_reason: 'stop'
        }
      ]
    });

  } catch (error) {
    console.error('Error in LLM Router:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
