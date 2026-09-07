import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';


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
   - Can ONLY be confirmed when a "User: ..." utterance in the transcript confirms it (e.g. User says "Yes, I am Shivansh", "Yes, ready to gear up", "I'm ready", "Yes", "That's me").
   - If candidate introduces a new name (e.g. User says "No, it's for Rahul"), extract that new name.
   - CRITICAL: Never extract name from Nova's speech! While candidate has not yet answered in a "User: ..." utterance, "name" MUST remain null.
2. "is_own_profile": boolean | null - true if candidate confirms it's their own profile, false if for someone else.
3. "target_role": The target job role (e.g. "Software Engineer", "Full Stack Developer", "Product Manager", "Mobile Developer") or null if not yet provided.
   - CRITICAL: "target_role" can ONLY be confirmed when the CANDIDATE (User) explicitly states, selects, or confirms their role in a "User: ..." message!
   - When Nova is asking a question (e.g. "Since your profile lists your target as a Mobile Developer, would you like to stick with that role, or would you prefer to switch to something else?"), Nova is asking a question. The candidate has NOT answered yet!
   - "target_role" MUST REMAIN NULL until the candidate actually answers in a "User: ..." message!
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
   - CRITICAL: "experience_tier" can ONLY be confirmed when the CANDIDATE (User) states it in a "User: ..." message.
6. "resume_choice": "saved" | "upload" | "quick" | null.
7. "difficulty_mode": "auto" | "easy" | "medium" | "hard" | null.
8. "active_step": Determine which step is currently active:
   - "name": Candidate has not yet confirmed identity or readiness in a "User:" message.
   - "role": Identity is confirmed by candidate, and target role is being asked or chosen.
   - "experience": Target role is confirmed by candidate, and experience level is being asked or chosen.
   - "overview": Both target role and experience tier are confirmed by candidate, and Nova is discussing the final overview, resume, difficulty, or readiness.
   - "ready": Candidate confirms readiness to launch into the panel room.
9. "armed_modal": The NEXT modal that is pre-armed and gated to open the exact millisecond Nova finishes speaking her question:
   - "role-popup": ONLY when candidate has ALREADY confirmed identity/name in a "User:" message, and Nova is moving to or currently asking Stage 2 (Target Role). During Stage 1, armed_modal MUST BE null.
   - "exp-popup": ONLY when candidate has ALREADY confirmed target role in a "User:" message, and Nova is moving to or currently asking Stage 3 (Experience Level). If candidate has not yet answered their target role, armed_modal MUST NOT be "exp-popup"!
   - "overview-popup": ONLY when candidate has ALREADY confirmed experience level in a "User:" message, and Nova is moving to or currently presenting Stage 5 (Final Overview / Readiness).
   - null: When candidate has not yet answered the current stage question, or when no modal is armed, or when stage is already answered.
10. "modal_to_display": The EXACT UI modal to display on the candidate's screen right now:
   - "none":
     * During Stage 1 (name/identity confirmation) — NO MODAL MUST EVER BE DISPLAYED DURING STAGE 1!
     * While Nova is asking a question until Nova finishes speaking!
     * AS SOON AS THE CANDIDATE ANSWERS A QUESTION! (When the candidate answers or selects their target role, the role modal MUST CLOSE immediately -> return "none". When the candidate answers or selects their experience tier, the experience modal MUST CLOSE immediately -> return "none").
     * When Nova is acknowledging an answer, summarizing, or transitioning between steps.
     * When Nova is asking about resumes or difficulty (Stage 4).
     * When the interview is launching or ready.
   - "role-popup": ONLY when Nova's latest utterance is actively asking the candidate to choose or state their target role (Stage 2 question), AND the candidate has NOT yet answered it in the transcript.
     CRITICAL: As soon as the candidate answers their role, modal_to_display MUST BE "none". It must NEVER open in later stages!
   - "exp-popup": ONLY when Nova's latest utterance is actively asking the candidate for their experience tier (Stage 3 question), AND the candidate has NOT yet answered it in the transcript.
     CRITICAL: As soon as the candidate answers their experience tier, modal_to_display MUST BE "none". It must NEVER open again!
   - "overview-popup": ONLY when Nova's latest utterance is actively presenting the final overview or asking if the candidate is ready for their panel interview to begin (Stage 5 question), AND the candidate has not yet launched.
11. "ready_to_launch": boolean - true ONLY if candidate verbally confirms readiness ("Yes", "I'm ready", "Open the interview", "Start") or Nova announces opening the panel room.
12. PERMANENT MODAL LOCK INVARIANT: Once a requirement is answered by the candidate, that modal is PERMANENTLY LOCKED and closed. If target_role is known, role-popup can NEVER be armed or displayed again. If experience_tier is known, exp-popup can NEVER be armed or displayed again. Once answered, modal_to_display MUST BE "none". It will NEVER open again and again.
13. SINGLE-TAKE RULE: Never clear or overwrite an already-confirmed field unless the candidate explicitly corrects it.
14. COMPOUND EXTRACTION: If the candidate provides multiple answers in one sentence (e.g. "I'm Shivansh, looking for Software Engineer with 3 years experience"), extract "name", "target_role", and "experience_tier" all at once, set active_step to "overview", and set modal_to_display to "overview-popup".
15. TYPO & ASR TOLERANCE: Normalize phonetic STT errors (e.g. "sofware enginer" -> "Software Engineer").
16. OFF-TOPIC FILTERING: Ignore off-topic chatter and preserve existing state.

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
  "armed_modal": "role-popup" | "exp-popup" | "overview-popup" | null,
  "modal_to_display": "none" | "role-popup" | "exp-popup" | "overview-popup",
  "ready_to_launch": boolean
}`;

    const keys = Array.from(
      new Set(
        [
          process.env.GEMINI_API_KEY_APP,
          process.env.GEMINI_API_KEY_NOVA,
          process.env.GEMINI_API_KEY_INTERVIEW,
          process.env.GEMINI_API_KEY,
        ].filter(Boolean) as string[],
      ),
    );

    let responseText = '';
    let lastError = null;

    for (const key of keys) {
      const client = new GoogleGenAI({ apiKey: key });
      for (const modelName of ['gemini-3.1-flash-lite', 'gemini-3.6-flash']) {
        try {
          const response = await client.models.generateContent({
            model: modelName,
            contents: [
              systemInstruction,
              `Latest Conversation Transcript:\n${transcript}`,
            ],
            config: {
              temperature: 0.1,
              responseMimeType: 'application/json',
            },
          });
          responseText = response.text?.trim() || '{}';
          if (responseText) break;
        } catch (err: any) {
          lastError = err;
          console.warn(`[State Parser] Key ...${key.slice(-4)} with ${modelName} failed:`, err.message || err);
        }
      }
      if (responseText) break;
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
