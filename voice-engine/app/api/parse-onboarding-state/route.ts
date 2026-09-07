import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY_APP || process.env.GEMINI_API_KEY });

export async function POST(request: NextRequest) {
  try {
    const { transcript, currentState } = await request.json();

    if (!transcript) {
      return NextResponse.json({ error: 'Transcript is required' }, { status: 400 });
    }

    const systemInstruction = `You are the AI UI State Manager for the Role-Pilot Voice Onboarding Assistant.
Your job is to analyze the live conversation transcript between the Candidate (User) and the Setup Agent (Nova) and determine the exact UI state and which modal should be displayed.

Current State:
${JSON.stringify(currentState || {}, null, 2)}

Instructions:
1. "name": Candidate's confirmed name (string | null).
   - If candidate confirms their profile name (e.g. "Yes, I am Shivansh" or "Yes, that's me"), lock in their name.
   - If candidate introduces a new name, extract that new name.
2. "is_own_profile": boolean | null - true if candidate confirms it's their own profile, false if for someone else.
3. "target_role": The target job role (e.g. "Software Engineer", "Full Stack Developer", "Product Manager") or null if not yet provided.
4. "resolved_track": Classify target_role into:
   - "tech" (Software, Web, Data, DevOps, Cloud, QA, AI/ML, Security)
   - "product" (Product Manager, Owner, UI/UX Designer, Product Marketing)
   - "sales" (Sales Executive, SDR, Account Executive, Business Development)
   - "hr" (Recruiter, Talent Acquisition, People Operations, HRBP)
   - "unsupported" (e.g. pilot, chef, doctor)
   - null if target_role is null.
5. "experience_tier": EXACTLY one of:
   - "1-year fresher" (0 to 1 year)
   - "fresher" (1 to 3 years / junior)
   - "mid-level" (3 to 5 years)
   - "senior" (5 to 8 or 9 years)
   - "lead" (more than 9 years)
   - null if not yet stated.
6. "resume_choice": "saved" | "upload" | "quick" | null.
7. "difficulty_mode": "auto" | "easy" | "medium" | "hard" | null.
8. "active_step": Determine which step is currently active:
   - "name": Identity is being confirmed or candidate has not confirmed who they are.
   - "role": Identity is confirmed, and target role is being asked or chosen.
   - "experience": Target role is confirmed, and experience level is being asked or chosen.
   - "overview": Target role AND experience tier are BOTH confirmed, and Nova is discussing the final overview, resume, difficulty, or readiness.
   - "ready": Candidate confirms readiness to launch into the panel room.
9. "modal_to_display": The EXACT UI modal to display on the candidate's screen right now:
   - "none": When on "name" step, during initial greeting, or when candidate and Nova are chatting with no modal needed.
     IMPORTANT: NEVER display a modal when the candidate has just arrived or is confirming their name!
   - "role-popup": ONLY when active_step is "role" AND target_role is not yet confirmed.
   - "exp-popup": ONLY when active_step is "experience" AND target_role is confirmed, and experience_tier is not yet confirmed.
   - "overview-popup": ONLY when active_step is "overview" (BOTH target_role and experience_tier are confirmed, and Nova is discussing the final overview or readiness).
10. "ready_to_launch": boolean - true ONLY if candidate verbally confirms readiness ("Yes", "I'm ready", "Open the interview", "Start") or Nova announces opening the panel room.
11. SINGLE-TAKE RULE: Never clear or overwrite an already-confirmed field unless the candidate explicitly corrects it.
12. COMPOUND EXTRACTION: If the candidate provides multiple answers in one sentence (e.g. "I'm Shivansh, looking for Software Engineer with 3 years experience"), extract "name", "target_role", and "experience_tier" all at once, set active_step to "overview", and set modal_to_display to "overview-popup".
13. TYPO & ASR TOLERANCE: Normalize phonetic STT errors (e.g. "sofware enginer" -> "Software Engineer").
14. OFF-TOPIC FILTERING: Ignore off-topic chatter and preserve existing state.

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
  "modal_to_display": "none" | "role-popup" | "exp-popup" | "overview-popup",
  "ready_to_launch": boolean
}`;

    let responseText = '';
    const modelsToTry = ['gemini-3.6-flash', 'gemini-3.1-flash-lite'];
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
