import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const { transcript, currentState } = await request.json();

    if (!transcript) {
      return NextResponse.json({ error: 'Transcript is required' }, { status: 400 });
    }

    const systemInstruction = `You are the UI State Manager for the Role-Pilot Voice Onboarding Assistant.
Your job is to listen to the live conversation transcript between the User and the Setup Agent (Nova) and update the JSON state of the onboarding cockpit.

Current State:
${JSON.stringify(currentState || {}, null, 2)}

Instructions:
1. "name": Candidate's confirmed name.
   - If user confirms their profile name (e.g. "Yes, I am Shivansh" or "Yes, that's me"), lock in their profile name.
   - If user says "No, it's for Rahul" or introduces a new name, extract the new name.
2. "is_own_profile": boolean | null - true if user confirms it's their own account/profile, false if for someone else.
3. "target_role": The target job role (e.g. "Full Stack Developer", "Product Manager", "Enterprise Sales Lead").
4. "resolved_track": Classify the target_role into:
   - "tech" (Software, Web, Data, DevOps, Cloud, QA, AI/ML, Security)
   - "product" (Product Manager, Owner, UI/UX Designer, Product Marketing)
   - "sales" (Sales Executive, SDR, Account Executive, Business Development)
   - "hr" (Recruiter, Talent Acquisition, People Operations, HRBP)
   - "unsupported" (if not fitting tech, product, sales, or hr, e.g. pilot, chef, doctor)
   - null if target_role not yet provided.
5. "experience_tier": Map candidate's stated experience to EXACTLY one of:
   - "1-year fresher" (0 to 1 year)
   - "fresher" (1 to 3 years / junior)
   - "mid-level" (3 to 5 years)
   - "senior" (5 to 8 or 9 years)
   - "lead" (more than 9 years)
   - null if not yet stated.
6. "resume_choice": "saved" (using previous Supabase resume), "upload" (uploading new), "quick" (no resume / quick start), or null.
7. "difficulty_mode": "auto" (default Auto-Adaptive AI), "easy", "medium", "hard", or null.
8. "active_step": Determine which step is currently active or should be shown:
   - "name" (if name is being discussed or not confirmed)
   - "role" (if name is confirmed but target_role is being asked/discussed)
   - "experience" (if target_role is confirmed but experience_tier is being asked/discussed)
   - "overview" (if name, role, and experience are collected, and resume/difficulty/final confirmation are being discussed)
   - "ready" (if candidate confirms they are ready to enter the interview room)
9. "ready_to_launch": boolean - true if the candidate has confirmed readiness or all essential fields (name, role, experience) are confirmed.
10. SINGLE-TAKE RULE: Never clear or overwrite an already-confirmed field unless the candidate explicitly corrects it.

You MUST output ONLY valid JSON in the exact following structure:
{
  "name": string | null,
  "is_own_profile": boolean | null,
  "target_role": string | null,
  "resolved_track": "tech" | "product" | "sales" | "hr" | "unsupported" | null,
  "experience_tier": "1-year fresher" | "fresher" | "mid-level" | "senior" | "lead" | null,
  "resume_choice": "saved" | "upload" | "quick" | null,
  "difficulty_mode": "auto" | "easy" | "medium" | "hard" | null,
  "active_step": "name" | "role" | "experience" | "overview" | "ready",
  "ready_to_launch": boolean
}`;

    let responseText = '';
    const modelsToTry = ['gemini-3.6-flash', 'gemini-3.5-flash-lite', 'gemini-3.7-flash', 'gemini-flash-latest'];
    let lastError = null;

    for (const modelName of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents: [
            systemInstruction,
            `Latest Conversation Transcript:\n${transcript}`
          ],
          config: {
            temperature: 0.1,
            responseMimeType: 'application/json'
          }
        });
        responseText = response.text?.trim() || '{}';
        if (responseText) break;
      } catch (err) {
        lastError = err;
        console.warn(`Model ${modelName} failed, attempting next model...`, err);
      }
    }

    if (!responseText && lastError) {
      throw lastError;
    }

    const output = responseText;
    
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
