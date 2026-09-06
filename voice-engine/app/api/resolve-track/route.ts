import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { target_role } = body;

    if (!target_role || typeof target_role !== 'string') {
      return NextResponse.json({ error: 'target_role is required' }, { status: 400 });
    }

    const systemInstruction = `You are a highly precise Job Role Classifier for the Role-Pilot Interview System.
Your task is to classify a given job title ("Target Role") into exactly ONE of four supported interview tracks, or mark it as unsupported.

The 4 Supported Tracks:
1. "tech" - Software Engineering, Data Science, QA, DevOps, IT, Web Development, Cybersecurity, Architecture.
2. "sales" - Account Executive, SDR, VP of Sales, Revenue Operations, Business Development, Sales Manager.
3. "hr" - Human Resources, Talent Acquisition, People Operations, Culture Lead, Recruiter, HR Business Partner.
4. "product" - Product Manager, Product Owner, UI/UX Designer, Product Marketing, Growth Lead.

Rules:
- If the role strongly aligns with one of the 4 tracks, output exactly the track name in lowercase: "tech", "sales", "hr", or "product".
- If the role does not logically fit into any of these tracks (e.g., "Astronaut", "Chef", "Doctor", "Construction Worker", "Pilot", "Mechanic"), you MUST output exactly: "unsupported".
- You must output ONLY the exact string. No markdown formatting, no punctuation, and no explanation.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash-lite',
      contents: `${systemInstruction}\n\nTarget Role to classify: ${target_role}`,
      config: {
        temperature: 0.1, // Low temperature for highly deterministic classification
      }
    });

    const output = response.text?.trim().toLowerCase() || 'unsupported';
    
    // Ensure the output strictly matches our allowed enum
    const validTracks = ['tech', 'sales', 'hr', 'product'];
    const resolvedTrack = validTracks.includes(output) ? output : 'unsupported';

    return NextResponse.json({
      original_role: target_role,
      resolved_track: resolvedTrack
    });

  } catch (error) {
    console.error('Error in track resolution:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
