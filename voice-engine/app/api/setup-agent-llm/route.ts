import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

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

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: geminiContents,
      config: {
        systemInstruction: systemMessage,
        temperature: 0.6,
      }
    });

    const outputText = response.text || '';
    return NextResponse.json({
      id: `chatcmpl-${Date.now()}`,
      object: 'chat.completion',
      created: Math.floor(Date.now() / 1000),
      model: 'gemini-3.5-flash',
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
