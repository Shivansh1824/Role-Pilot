import { NextRequest, NextResponse } from 'next/server';
import {
  AgoraClient,
  Agent,
  DeepgramSTT,
  ExpiresIn,
  MiniMaxTTS,
  CustomLLM,
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
    const { channel_name, requester_id } = body as ClientStartRequest;

    if (!channel_name || !requester_id) {
      return NextResponse.json({ error: 'Missing channel_name or requester_id' }, { status: 400 });
    }

    const client = new AgoraClient({
      appId: requireEnv('AGORA_APP_ID'),
      appCertificate: requireEnv('AGORA_APP_CERTIFICATE'),
    });

    const llmRouterHost = 'http://127.0.0.1:3000'; // Target the local API route
    
    // Nova's exact instructions
    const systemPrompt = `You are Nova, a friendly, ultra-professional AI Setup Assistant for Role-Pilot Mock Interviews.
Your job is to verbally onboard the user into their mock interview.

INSTRUCTIONS:
1. Greet the user warmly and ask for their first name.
2. Once they provide their name, ask what Job Role they are targeting (e.g. Software Engineer, Sales Manager).
3. Once they provide the role, ask about their experience level (Junior, Mid-Level, Senior, Staff, Principal).
4. Once they provide experience, ask if they want to upload a new resume or proceed without one.
5. If they upload a resume (the UI will handle the upload), ask them to "Please check the verified data on your screen."
6. Finally, confirm if they are ready to start the interview panel.

RULES:
- Be concise! Do not give long speeches. Ask ONE question at a time.
- Wait for the user to answer before moving to the next question.
- Do not make up form data; wait for the user to provide it.
- Your voice is friendly, encouraging, and clear.`;

    const agent = new Agent({
      client,
      instructions: systemPrompt,
      greeting: 'Hi! I am Nova, your setup assistant. What is your name?',
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
            vad_config: { silence_duration_ms: 1500 }, // Faster turn taking for setup
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
      .withLlm(
        new CustomLLM({
          url: `${llmRouterHost}/api/setup-agent-llm`,
          apiKey: 'dummy-key',
          model: 'gemini-3.5-flash',
          greetingMessage: 'Hi! I am Nova, your setup assistant. What is your name?',
          failureMessage: 'Please wait a moment.',
          maxHistory: 50,
          params: { max_tokens: 512, temperature: 0.7, top_p: 0.95 },
        }),
      )
      .withTts(
        new MiniMaxTTS({
          model: 'speech_2_6_turbo',
          voiceId: 'Female-01', // A standard clear female voice for Nova
        }),
      );

    const session = agent.createSession({
      channel: channel_name,
      agentUid: '9000', // Unique UID for setup agent
      remoteUids: [requester_id],
      idleTimeout: 60,
      expiresIn: ExpiresIn.hours(1),
      debug: false,
    });

    const agentId = await session.start();

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
