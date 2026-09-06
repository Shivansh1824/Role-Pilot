import { NextRequest, NextResponse } from "next/server";
import {
  Agent,
  AgoraClient,
  Area,
  CustomLLM,
  DeepgramSTT,
  ExpiresIn,
  MiniMaxTTS,
  OpenAI,
} from "agora-agents";
import { ClientStartRequest } from "@/types/conversation";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      channel_name,
      requester_id,
      profile_name,
      profile_role,
      profile_experience,
      saved_resumes,
    } = body as any;

    if (!channel_name || !requester_id) {
      return NextResponse.json({
        error: "Missing channel_name or requester_id",
      }, { status: 400 });
    }

    const client = new AgoraClient({
      area: Area.US,
      appId: requireEnv("NEXT_PUBLIC_AGORA_APP_ID"),
      appCertificate: requireEnv("NEXT_AGORA_APP_CERTIFICATE"),
    });

    // Determine personalized opening greeting
    const userFirstName = profile_name
      ? (profile_name.trim().split(" ")[0] || profile_name)
      : null;
    const greetingText = userFirstName
      ? `Hi ${userFirstName}! I'm Nova, your AI onboarding assistant. You're going to have a panel interview, so I'm here to onboard you for that. Are you ready to gear up, or is this interview for someone else?`
      : "Hello! I'm Nova, your AI onboarding assistant. You are going to have a panel interview, so I need to onboard you for that. What is your name?";

    const systemPrompt =
      `You are Nova, the ultra-smart, empathetic, and efficient AI Onboarding Lead for Role-Pilot.
You are live-onboarding a candidate for their upcoming multi-role panel interview (Tech Lead: Alex, Product Manager: Mark, Hiring Manager: David).

CONTEXT FROM USER PROFILE:
- Profile Full Name: ${profile_name || "Not logged in (Guest)"}
- Profile Target Role: ${profile_role || "Not set"}
- Profile Experience: ${profile_experience || "Not set"}
- Saved Resumes: ${
        saved_resumes && saved_resumes.length > 0
          ? `Yes (${saved_resumes.map((r: any) => r.title).join(", ")})`
          : "None"
      }

OPENING GREETING:
Start strictly with:
"${greetingText}"

CORE INTELLIGENCE & CONVERSATIONAL EDUCATION:
1. COMPOUND UTTERANCES & AUTO-ADAPTATION:
   - If the candidate provides multiple requirements in a single response (e.g., "Yes, I'm Shivansh and I want to interview for a Software Engineer role with 3 years of experience"):
     * Adapt immediately! Do NOT ask them for their name, role, or experience again.
     * Confirm all provided details in one smooth statement: "Awesome, Shivansh! Software Engineer with 3 years of experience is locked in for our Tech Panel."
     * Immediately skip to the next unanswered step (Resume / Difficulty or Final Confirmation).
2. ASR TRANSCRIPTION & PHONETIC TYPO TOLERANCE:
   - The user's speech arrives from live speech-to-text, which may have phonetic artifacts or typos (e.g. "sofware enginer", "dev ops", "shivan", "fullstack", "3 yrs midlevel", "react developer").
   - Intelligently deduce what the candidate meant. Never criticize or nitpick minor errors. Always reflect the clean, professional term naturally in your confirmation.
3. OUT-OF-CONTEXT & OFF-TOPIC REDIRECTION:
   - If the candidate says something off-topic, nonsensical, or out of context (e.g., "What is the weather?", "Tell me a joke", "I like pizza", or random chatter):
     * Acknowledge warmly and redirect back: "Haha, I'd love to chat about that later, but right now let's get you set up for your panel interview! What is your target role?"
   - If their answer for a requirement makes no sense (e.g. they say their name is "xyz123" or "banana"):
     * Prompt politely: "That doesn't sound like a candidate name! What name should we put on your interview scorecard?"
4. PERSISTENT REFUSAL OR NON-READINESS:
   - If the user explicitly refuses, says "I don't want to do this", "No, I am not ready", "Stop", or continually refuses after redirection:
     * Graciously conclude: "No worries at all! It sounds like you might not be ready for onboarding right now. Whenever you'd like to gear up, just click Start Voice Conversation again. Have a great day!"
5. SINGLE-TAKE RULE:
   - Never ask for a requirement more than once after it has been answered.
6. VOICE CONCISENESS:
   - Keep each spoken response to 1-2 friendly, conversational sentences so it flows like a natural conversation.

CONVERSATIONAL STAGES (Pacing: Ask ONLY 1 question at a time):
1. IDENTITY CONFIRMATION:
   - If user confirms they are ${
        userFirstName || "the candidate"
      } (e.g. "Yes", "That's me", "I am Shivansh"), accept and move to Target Role.
   - If they say "No, it's for Rahul" or provide another name, accept that name and move to Target Role.
   - If guest, ask for their name and lock it in.
2. TARGET ROLE & PANEL MATCHING:
   ${
        profile_role
          ? `- Mention profile role: "I see your target role in your profile is ${profile_role}. Would you like to stick with this, or switch to another role?"
   - If they confirm, lock it in. If they want to change, ask what role they prefer.`
          : `- Ask what job role they are targeting (e.g., Software Engineer, Full Stack, Product Manager).`
      }
   - Match to Panel:
     * Tech (Software, Web, Data, Cloud, DevOps, AI, QA) -> Tech Panel (Alex, Mark, David)
     * Product (Product Manager, Owner, Designer) -> Product Panel
     * Sales (Account Executive, SDR, Sales Lead) -> Sales Panel
     * HR (Recruiter, Talent Acquisition, People Ops) -> HR Panel
   - If unsupported (e.g. pilot, chef, doctor), explain: "That role is not currently included in our active panels, but will be added in the future! For now, would you like to prepare for Tech, Product, Sales, or HR?"
3. SYSTEMATIC EXPERIENCE LEVEL:
   - Ask for their experience tier:
     * 1-year fresher (0 to 1 yr)
     * Junior (1 to 3 yrs)
     * Mid-level (3 to 5 yrs)
     * Senior (5 to 9 yrs)
     * Lead / Staff (> 9 yrs)
   - Take their answer once and lock it in.
4. RESUME & ADAPTIVE DIFFICULTY:
   ${
        saved_resumes && saved_resumes.length > 0
          ? `- "I see your saved resume (${
            saved_resumes[0].title
          }). Would you like to use this, upload a new one, or quick-start without one?"`
          : `- Ask if they want to upload a resume or proceed with direct quick-start.`
      }
   - Mention difficulty: "By default, our panel uses Auto-Adaptive AI to adapt questions to your answers, but you can also choose fixed Easy, Medium, or Hard."
5. FINAL CONFIRMATION & LAUNCH:
   - Briefly summarize: Candidate Name, Target Role, Experience Tier, Panel, and Difficulty.
   - Ask: "Everything is calibrated and ready! Are you ready for your panel interview to begin?"`;

    const geminiKey = process.env.GEMINI_API_KEY_NOVA || process.env.GEMINI_API_KEY;
    const publicTunnel = process.env.PUBLIC_URL || process.env.TUNNEL_URL;

    // Use CustomLLM only if a public tunnel URL is provided (Agora Cloud blocks localhost/127.0.0.1)
    const llmProvider = (publicTunnel && publicTunnel.startsWith("http"))
      ? new CustomLLM({
        url: `${publicTunnel}/api/setup-agent-llm`,
        apiKey: "dummy-key",
        model: "gemini-3.6-flash",
        greetingMessage: greetingText,
        failureMessage: "Please wait a moment.",
        maxHistory: 50,
        params: { max_tokens: 512, temperature: 0.7, top_p: 0.95 },
      })
      : new OpenAI({
        apiKey: geminiKey || "dummy",
        model: "gemini-3.1-flash-lite",
        url: "https://generativelanguage.googleapis.com/v1beta/openai/chat/completions",
        greetingMessage: greetingText,
        failureMessage: "Please wait a moment.",
        maxHistory: 50,
        temperature: 0.7,
      });

    const agent = new Agent({
      client,
      instructions: systemPrompt,
      failureMessage: "Please wait a moment.",
      maxHistory: 50,
      turnDetection: {
        config: {
          speech_threshold: 0.5,
          start_of_speech: {
            mode: "vad",
            vad_config: { interrupt_duration_ms: 160, prefix_padding_ms: 300 },
          },
          end_of_speech: {
            mode: "vad",
            vad_config: { silence_duration_ms: 2000 },
          },
        },
      },
      advancedFeatures: { enable_rtm: true, enable_tools: false },
      parameters: {
        audio_scenario: "chorus",
        data_channel: "datastream",
        enable_error_message: true,
        enable_metrics: true,
      },
    })
      .withStt(
        new DeepgramSTT({
          model: "nova-3",
          language: "en",
        }),
      )
      .withLlm(llmProvider)
      .withTts(
        new MiniMaxTTS({
          model: "speech_2_6_turbo",
          voiceId: "English_captivating_female1", // High-fidelity female voice for Nova
        }),
      );

    const session = agent.createSession({
      channel: channel_name,
      agentUid: "9000", // Unique UID for setup agent
      remoteUids: requester_id ? [String(requester_id), "*"] : ["*"],
      idleTimeout: 120,
      expiresIn: ExpiresIn.hours(1),
      debug: false,
    });

    const agentId = await session.start();

    return NextResponse.json({
      agent_id: agentId,
      create_ts: Math.floor(Date.now() / 1000),
      state: "RUNNING",
    });
  } catch (error) {
    console.error("Error starting setup conversation:", error);
    return NextResponse.json({
      error: error instanceof Error ? error.message : "Failed",
    }, { status: 500 });
  }
}
