import { NextRequest, NextResponse } from 'next/server';
import {
  AgoraClient,
  Agent,
  Area,
  DeepgramSTT,
  ExpiresIn,
  MiniMaxTTS,
  OpenAI,
} from 'agora-agents';
import { ClientStartRequest, AgentResponse } from '@/types/conversation';
import { DEFAULT_AGENT_UID } from '@/lib/agora';

const TRACK_PROMPTS: Record<string, { prompt: string; greeting: string }> = {
  tech: {
    prompt: `You are the AI Interview Committee for Role-Pilot (Technical Track). Conduct an adaptive, multi-role interview with THREE distinct panelists:
1. Alex (Tech Lead): Analytical, focused on system design, algorithms, and concurrency.
2. Maya (Product Manager): Strategic, focused on user requirements and trade-offs.
3. David (Hiring Manager): Behavioral, focused on ownership and problem solving.

Protocol:
- Every turn must start with [Panelist Name].
- Keep responses to 1-3 sentences.
- No bullet points or lists.
- Dynamically adapt technical difficulty based on candidate performance.`,
    greeting: `[David (Hiring Manager)] Welcome to your Technical interview! I'm David, joined by Alex and Maya. Alex, could you open with a system design scenario? [Alex (Tech Lead)] Certainly. How would you design a high-traffic rate-limiting service that scales across multiple regions?`
  },
  sales: {
    prompt: `You are the AI Interview Committee for Role-Pilot (Sales Track). Conduct an adaptive, multi-role interview with THREE distinct panelists:
1. Sarah (VP Sales): Results-oriented, focused on closing techniques and pipeline management.
2. Mark (Customer Success): Focused on retention, empathy, and long-term relationships.
3. David (Hiring Manager): Behavioral, focused on resilience and negotiation style.

Protocol:
- Every turn must start with [Panelist Name].
- Keep responses to 1-3 sentences.
- No bullet points or lists.
- Test for objection handling and discovery skills.`,
    greeting: `[David (Hiring Manager)] Welcome to your Sales interview! I'm David, joined by Sarah and Mark. Sarah, why don't you start with a discovery challenge? [Sarah (VP Sales)] Thanks. You're pitching a high-value product to a skeptical prospect who just mentioned they have a 20% budget cut. How do you pivot the conversation?`
  },
  hr: {
    prompt: `You are the AI Interview Committee for Role-Pilot (HR/People Ops Track). Conduct an adaptive, multi-role interview with THREE distinct panelists:
1. Elena (HR Director): Focused on policy, compliance, and employee relations.
2. Sam (Culture Lead): Focused on DEI, retention, and organizational health.
3. David (Hiring Manager): Behavioral, focused on mediation and communication.

Protocol:
- Every turn must start with [Panelist Name].
- Keep responses to 1-3 sentences.
- No bullet points or lists.
- Focus on delicate handling of personnel issues.`,
    greeting: `[David (Hiring Manager)] Welcome to your HR interview! I'm David, joined by Elena and Sam. Elena, would you start with a conflict resolution scenario? [Elena (HR Director)] Sure. We have a manager who is high-performing but has been reported for toxic communication. How do you approach this initial investigation?`
  },
  product: {
    prompt: `You are the AI Interview Committee for Role-Pilot (Product Track). Conduct an adaptive, multi-role interview with THREE distinct panelists:
1. Maya (Product Lead): Focused on strategy, roadmap, and prioritization.
2. Alex (Tech Lead): Focused on engineering feasibility and technical debt.
3. David (Hiring Manager): Behavioral, focused on stakeholder alignment.

Protocol:
- Every turn must start with [Panelist Name].
- Keep responses to 1-3 sentences.
- No bullet points or lists.
- Focus on product trade-offs and user discovery.`,
    greeting: `[David (Hiring Manager)] Welcome to your Product interview! I'm David, joined by Maya and Alex. Maya, please start us off with a prioritization scenario. [Maya (Product Lead)] Gladly. Your team has two critical features: a revenue-generating upgrade and a crucial stability fix. How do you decide which comes first?`
  }
};

const agentUid = String(DEFAULT_AGENT_UID);

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

export async function POST(request: NextRequest) {
  try {
    // --- 1. Parse request ---
    const body = await request.json();
    const {
      requester_id,
      channel_name,
      // Interview setup fields (from interview-setup.html wizard)
      track = 'tech',          // 'tech' | 'sales' | 'hr' | 'product'
      candidate_name = 'Candidate',
      role = 'Software Engineer',
      experience_level = 'Mid-Level',
      difficulty_mode = 'auto', // 'auto' | 'easy' | 'medium' | 'hard' | 'expert'
      resume_summary = '',      // Compact 300-word resume fact-sheet (injected for grounding)
    } = body;

    const appId = requireEnv('NEXT_PUBLIC_AGORA_APP_ID');
    const appCertificate = requireEnv('NEXT_AGORA_APP_CERTIFICATE');

    if (!channel_name || !requester_id) {
      return NextResponse.json(
        { error: 'channel_name and requester_id are required' },
        { status: 400 },
      );
    }

    // --- 2. Resolve panel track and build personalised system prompt ---
    const trackKey = (track as string).toLowerCase();
    const trackConfig = TRACK_PROMPTS[trackKey] ?? TRACK_PROMPTS['tech'];

    const difficultyInstruction =
      difficulty_mode === 'auto'
        ? 'Dynamically scale difficulty based on candidate performance (Tier 1 → Tier 2 → Tier 3 edge cases).'
        : `Fix the difficulty strictly at the "${difficulty_mode}" level throughout the entire interview. Do not escalate or reduce difficulty.`;

    const systemPrompt = [
      trackConfig.prompt,
      '',
      '# Candidate Profile (GROUND TRUTH — Do NOT invent details beyond this)',
      `Name: ${candidate_name}`,
      `Target Role: ${role}`,
      `Experience Level: ${experience_level}`,
      resume_summary ? `Resume Summary: ${resume_summary}` : '',
      '',
      `# Difficulty Mode: ${difficultyInstruction}`,
      '',
      '# Anti-Hallucination Rule',
      'Only ask about skills, projects, and technologies explicitly listed in the Resume Summary above.',
      'Never invent past employers, fictional projects, or tools the candidate did not mention.',
      '',
      '# Anti-Bluffing Rule',
      'If the candidate gives vague buzzwords ("cloud", "microservices", "AI"), immediately probe:',
      'Ask for the specific protocol, configuration, metric, or data structure they actually used.',
      '',
      '# Contradiction Detection',
      'Track all candidate claims. If a later answer contradicts an earlier one, politely surface the contradiction.',
    ]
      .filter(Boolean)
      .join('\n');

    const greeting = trackConfig.greeting.replace('Candidate', candidate_name);

    // --- 3. Build and start the Agora agent ---
    const client = new AgoraClient({
      area: Area.US,
      appId,
      appCertificate,
    });

    const agent = new Agent({
      client,
      instructions: systemPrompt,
      greeting,
      failureMessage: 'Please wait a moment.',
      maxHistory: 50,
      turnDetection: {
        config: {
          speech_threshold: 0.5,
          start_of_speech: {
            mode: 'vad',
            vad_config: {
              interrupt_duration_ms: 160,
              prefix_padding_ms: 300,
            },
          },
          end_of_speech: {
            mode: 'vad',
            vad_config: {
              silence_duration_ms: 480,
            },
          },
        },
      },
      advancedFeatures: { enable_rtm: true, enable_tools: true },
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
        new OpenAI({
          model: 'gpt-4o-mini',
          greetingMessage: greeting,
          failureMessage: 'Please wait a moment.',
          maxHistory: 15,
          params: {
            max_tokens: 1024,
            temperature: 0.7,
            top_p: 0.95,
          },
        }),
      )
      .withTts(
        new MiniMaxTTS({
          model: 'speech_2_6_turbo',
          voiceId: 'English_captivating_female1',
        }),
      );

    const session = agent.createSession({
      channel: channel_name,
      agentUid,
      remoteUids: [requester_id],
      idleTimeout: 30,
      expiresIn: ExpiresIn.hours(1),
      debug: false,
    });

    const agentId = await session.start();

    return NextResponse.json({
      agent_id: agentId,
      create_ts: Math.floor(Date.now() / 1000),
      state: 'RUNNING',
    } as AgentResponse);
  } catch (error) {
    console.error('Error starting conversation:', error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : 'Failed to start conversation',
      },
      { status: 500 },
    );
  }
}
