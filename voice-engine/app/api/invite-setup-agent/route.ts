import { NextRequest, NextResponse } from 'next/server';
import {
  AgoraClient,
  Agent,
  Area,
  DeepgramSTT,
  ExpiresIn,
  MiniMaxTTS,
  CustomLLM,
  Gemini,
} from 'agora-agents';
import { ClientStartRequest } from '@/types/conversation';

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
      return NextResponse.json({ error: 'Missing channel_name or requester_id' }, { status: 400 });
    }

    const client = new AgoraClient({
      area: Area.US,
      appId: requireEnv('NEXT_PUBLIC_AGORA_APP_ID'),
      appCertificate: requireEnv('NEXT_AGORA_APP_CERTIFICATE'),
    });

    // Determine personalized opening greeting
    const userFirstName = profile_name ? (profile_name.trim().split(' ')[0] || profile_name) : null;
    const greetingText = userFirstName
      ? `Hi ${userFirstName}! I'm Nova, your AI onboarding assistant. You're going to have a panel interview, so I'm here to onboard you for that. Are you ready to gear up, or is this interview for someone else?`
      : "Hello! I'm Nova, your AI onboarding assistant. You are going to have a panel interview, so I need to onboard you for that. What is your name?";

    const systemPrompt = `You are Nova, an ultra-smooth, friendly, and efficient AI Onboarding Assistant for Role-Pilot.
You are onboarding the user for their upcoming multi-role panel interview.

CONTEXT FROM USER PROFILE:
- Profile Name: ${profile_name || 'Not logged in (Guest)'}
- Profile Target Role: ${profile_role || 'Not set'}
- Profile Experience: ${profile_experience || 'Not set'}
- Saved Resumes: ${saved_resumes && saved_resumes.length > 0 ? `Yes (${saved_resumes.map((r: any) => r.title).join(', ')})` : 'None'}

OPENING:
Start with:
"${greetingText}"

STRICT CONVERSATIONAL FLOW & PACING (Ask ONLY 1 question at a time):
1. IDENTITY CONFIRMATION:
   - If the candidate confirms they are ${userFirstName || 'the user'}, accept it immediately and move to Step 2.
   - If they say "No, it's for [Name]" or "No", ask for their name, accept it, and move to Step 2.
   - If guest, take whatever name they provide.
2. TARGET ROLE:
   ${profile_role ? `- Mention their profile target role: "I see your target role in your profile is ${profile_role}. Would you like to stick with this, or change it?"
   - If they stick with it, confirm it. If they want to change, ask what role they'd prefer.` : `- Ask what job role they are targeting (e.g. Software Engineer, Product Manager).`}
   - If the role fits Tech, Product, Sales, or HR, confirm that panel match.
   - If unsupported (e.g. pilot, chef, doctor), politely explain that this role is not currently included in our active panels and will be added in the future, then suggest selecting Tech, Product, Sales, or HR.
3. SYSTEMATIC EXPERIENCE LEVEL:
   - Ask for their experience level from our systematic tiers:
     * 0 to 1 year (1-year fresher)
     * 1 to 3 years (fresher)
     * 3 to 5 years (mid-level)
     * 5 to 8 or 9 years (senior)
     * More than 9 years (lead)
   - Take their answer once and lock it in.
4. RESUME & DIFFICULTY:
   ${saved_resumes && saved_resumes.length > 0 ? `- Mention their saved resume: "I see your saved resume (${saved_resumes[0].title}). Would you like to use this, upload a new one, or quick-start without one?"` : `- Ask if they want to upload a resume or proceed with direct quick-start without one.`}
   - Explain difficulty: By default we use Auto-Adaptive AI (the interviewers dynamically adapt question complexity to their answers). If they prefer manual fixed difficulty (Easy, Medium, Hard), explain that too.
5. FINAL CONFIRMATION:
   - Briefly summarize: candidate name, role, experience level, panel, and difficulty.
   - Ask: "Everything is set! Are you ready for your panel interview to begin?"

RULES:
- Single-Take Rule: Never ask for a requirement more than once after it has been answered.
- Concise: Keep each utterance to 1-2 friendly, conversational sentences.`;

    const geminiKey = process.env.GEMINI_API_KEY;
    const publicTunnel = process.env.PUBLIC_URL || process.env.TUNNEL_URL;

    // Use CustomLLM only if a public tunnel URL is provided (Agora Cloud blocks localhost/127.0.0.1)
    const llmProvider = (publicTunnel && publicTunnel.startsWith('http'))
      ? new CustomLLM({
          url: `${publicTunnel}/api/setup-agent-llm`,
          apiKey: 'dummy-key',
          model: 'gemini-3.6-flash',
          greetingMessage: greetingText,
          failureMessage: 'Please wait a moment.',
          maxHistory: 50,
          params: { max_tokens: 512, temperature: 0.7, top_p: 0.95 },
        })
      : new Gemini({
          apiKey: geminiKey || 'dummy',
          model: 'gemini-3.6-flash',
          greetingMessage: greetingText,
          failureMessage: 'Please wait a moment.',
          maxHistory: 50,
          temperature: 0.7,
        });

    const agent = new Agent({
      client,
      instructions: systemPrompt,
      greeting: greetingText,
      failureMessage: 'Please wait a moment.',
      maxHistory: 50,
      turnDetection: {
        config: {
          speech_threshold: 0.5,
          start_of_speech: {
            mode: 'vad',
            vad_config: { interrupt_duration_ms: 160, prefix_padding_ms: 300 },
          },
          end_of_speech: {
            mode: 'vad',
            vad_config: { silence_duration_ms: 1500 }, // Under 2000ms limit
          },
        },
      },
      advancedFeatures: { enable_rtm: true, enable_tools: false },
      parameters: {
        audio_scenario: 'chorus',
        data_channel: 'rtm',
        enable_error_message: true,
        enable_metrics: true,
      },
    })
      .withStt(
        new DeepgramSTT({
          model: 'nova-3',
          language: 'en',
        }),
      )
      .withLlm(llmProvider)
      .withTts(
        new MiniMaxTTS({
          model: 'speech_2_6_turbo',
          voiceId: 'English_captivating_female1', // High-fidelity female voice for Nova
        }),
      );

    const session = agent.createSession({
      channel: channel_name,
      agentUid: '9000', // Unique UID for setup agent
      remoteUids: requester_id ? [String(requester_id), '*'] : ['*'],
      idleTimeout: 120,
      expiresIn: ExpiresIn.hours(1),
      debug: false,
    });

    const agentId = await session.start();

    // Proactively speak the personalized greeting into the channel via TTS immediately
    try {
      await session.say(greetingText);
    } catch (sayErr) {
      console.warn('session.say error (non-fatal, greetingMessage configured on LLM):', sayErr);
    }

    return NextResponse.json({
      agent_id: agentId,
      create_ts: Math.floor(Date.now() / 1000),
      state: 'RUNNING',
    });
  } catch (error) {
    console.error('Error starting setup conversation:', error);
    return NextResponse.json({ error: error instanceof Error ? error.message : 'Failed' }, { status: 500 });
  }
}
