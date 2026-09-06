import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const { transcript, currentState } = await request.json();

    if (!transcript) {
      return NextResponse.json({ error: 'Transcript is required' }, { status: 400 });
    }

    const systemInstruction = `You are the UI State Manager for the Role-Pilot Onboarding Assistant.
Your job is to listen to the conversation transcript between the User and the Setup Agent (Nova) and update the JSON state of the application.

Current State:
${JSON.stringify(currentState || {}, null, 2)}

Instructions:
- Extract the user's "name" if they provide one.
- Extract the "target_role" (e.g. Software Engineer, Sales Manager) if they provide one.
- Extract the "experience_level" (must be mapped to one of: "Junior", "Mid-Level", "Senior", "Staff", "Principal").
- Extract the "resume_choice" (must be "existing", "new", or "none" if they explicitly skip).
- Do not overwrite existing values unless the user explicitly corrects them (e.g. "Actually, my name is John").
- If a value has not been mentioned yet, leave it as null.

You MUST output ONLY valid JSON in the exact following structure:
{
  "name": string | null,
  "target_role": string | null,
  "experience_level": string | null,
  "resume_choice": string | null
}`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: [
        systemInstruction,
        `Latest Conversation Transcript:\n${transcript}`
      ],
      config: {
        temperature: 0.1,
        responseMimeType: 'application/json'
      }
    });

    const output = response.text?.trim() || '{}';
    
    try {
      const parsedJson = JSON.parse(output);
      return NextResponse.json({ success: true, state: parsedJson });
    } catch (parseError) {
      console.error('Failed to parse Gemini JSON:', output);
      return NextResponse.json({ error: 'Failed to extract valid JSON state' }, { status: 500 });
    }

  } catch (error: any) {
    console.error('Error in state parsing:', error);
    return NextResponse.json({ error: error.message || 'Internal Server Error' }, { status: 500 });
  }
}
