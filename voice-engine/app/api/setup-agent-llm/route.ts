import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY_NOVA || process.env.GEMINI_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json();
    
    // Extract system instruction from the first system message
    const systemMessage = messages.find((m: any) => m.role === 'system')?.content || '';
    const userMessages = messages.filter((m: any) => m.role !== 'system');
    
    // Convert OpenAI style to Gemini style
    const geminiContents = userMessages.map((m: any) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.content }]
    }));

    let outputText = '';
    const modelsToTry = ['gemini-3.6-flash', 'gemini-3.1-flash-lite', 'gemini-2.5-flash'];
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: geminiContents,
          config: {
            systemInstruction: systemMessage,
            temperature: 0.6,
          }
        });
        outputText = response.text || '';
        if (outputText) break;
      } catch (err) {
        lastError = err;
        console.warn(`[Setup Agent LLM] ${modelName} failed, trying fallback...`, err);
      }
    }

    if (!outputText && lastError) {
      throw lastError;
    }

    return NextResponse.json({
      id: `chatcmpl-${Date.now()}`,
      object: 'chat.completion',
      created: Math.floor(Date.now() / 1000),
      model: 'gemini-3.6-flash',
      choices: [
        {
          index: 0,
          message: { role: 'assistant', content: outputText },
          finish_reason: 'stop',
        },
      ],
    });
  } catch (error: any) {
    console.error('Setup Agent LLM Error:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
