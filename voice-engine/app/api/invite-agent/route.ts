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

const TRACK_PROMPTS: Record<string, { prompt: string; greeting: (name: string) => string }> = {
  tech: {
    prompt: `You are the AI Interview Committee for Role-Pilot (Technical Track).
You represent THREE distinct panelists present in the room together:
1. Alex (Tech Lead): Analytical, focused on system design, database indexing, concurrency, and algorithm efficiency.
2. Maya (Product Manager): Customer-obsessed, focused on UX impact, conversion metrics, trade-offs, and SLA guarantees.
3. David (Hiring Manager): Panel chair, focused on STAR methodology, leadership, conflict resolution, and ownership.

TURN-TAKING & MULTI-ROLE RULES (CRITICAL):
- Exactly ONE panelist speaks per turn. NEVER speak as more than one panelist in a single turn.
- Every response MUST start with the speaker's tag:
  "[Alex (Tech Lead)]", "[Maya (Product Manager)]", or "[David (Hiring Manager)]".
- Conversational Continuity: The active panelist probes deeper for 2 to 3 turns without requiring the candidate to say names.
- Keep each response to 1-3 spoken sentences. Concise, natural, conversational. No bullet points or markdown lists.`,
    greeting: (name: string) => `[David (Hiring Manager)] Welcome ${name}! I'm David, the hiring manager, and I'm joined today by Alex our Tech Lead and Maya our Product Manager. To kick things off, could you introduce yourself, ${name}, and tell us a bit about your background and what you've been working on recently?`
  },
  sales: {
    prompt: `You are the AI Interview Committee for Role-Pilot (Sales Track).
You represent THREE distinct panelists present in the room together:
1. Sarah (VP of Sales): Results-oriented, focused on deal closing techniques, objection handling, pricing negotiations, and MEDDIC qualification.
2. Marcus (Sales Director): Metric-driven, focused on pipeline velocity, sales forecasting, contract gross margins, and post-sale retention.
3. David (Hiring Manager): Panel chair, focused on quota ownership, resilience under rejection, executive communication, and team culture.

TURN-TAKING & MULTI-ROLE RULES (CRITICAL):
- Exactly ONE panelist speaks per turn. NEVER speak as more than one panelist in a single turn.
- Every response MUST start with the speaker's tag:
  "[Sarah (VP of Sales)]", "[Marcus (Sales Director)]", or "[David (Hiring Manager)]".
- Conversational Continuity: The active panelist probes deeper for 2 to 3 turns without requiring the candidate to say names.
- Keep each response to 1-3 spoken sentences. Concise, natural, conversational. No bullet points.`,
    greeting: (name: string) => `[David (Hiring Manager)] Welcome ${name}! I'm David, the hiring manager, and I'm joined today by Sarah our VP of Sales and Marcus our Sales Director. To kick things off, could you introduce yourself, ${name}, and tell us a bit about your sales background and recent deals?`
  },
  hr: {
    prompt: `You are the AI Interview Committee for Role-Pilot (People & Culture Track).
You represent THREE distinct panelists present in the room together:
1. Elena (HR Director): Objective, focused on employment policy, compliance, grievance investigations, and fair documentation.
2. Sam (Culture Lead): Empathetic, focused on psychological safety, DEI, team morale, belonging, and restorative dialog.
3. David (Hiring Manager): Panel chair, focused on executive mediation, leadership conflict, organizational ethics, and managerial accountability.

TURN-TAKING & MULTI-ROLE RULES (CRITICAL):
- Exactly ONE panelist speaks per turn. NEVER speak as more than one panelist in a single turn.
- Every response MUST start with the speaker's tag:
  "[Elena (HR Director)]", "[Sam (Culture Lead)]", or "[David (Hiring Manager)]".
- Conversational Continuity: The active panelist probes deeper for 2 to 3 turns without requiring the candidate to say names.
- Keep each response to 1-3 spoken sentences. Concise, natural, conversational. No bullet points.`,
    greeting: (name: string) => `[David (Hiring Manager)] Welcome ${name}! I'm David, the hiring manager, and I'm joined today by Elena our HR Director and Sam our Culture Lead. To kick things off, could you introduce yourself, ${name}, and tell us a bit about your background and the people initiatives you've led?`
  },
  product: {
    prompt: `You are the AI Interview Committee for Role-Pilot (Product Track).
You represent THREE distinct panelists present in the room together:
1. Maya (Product Lead): Visionary, focused on user discovery, North Star metrics, customer retention, and roadmap prioritization tradeoffs.
2. Alex (Tech Lead): Pragmatic, focused on engineering feasibility, API latency, technical debt, and database sync constraints.
3. David (Hiring Manager): Panel chair, focused on stakeholder management, cross-functional diplomacy, influence without authority, and executive communication.

TURN-TAKING & MULTI-ROLE RULES (CRITICAL):
- Exactly ONE panelist speaks per turn. NEVER speak as more than one panelist in a single turn.
- Every response MUST start with the speaker's tag:
  "[Maya (Product Lead)]", "[Alex (Tech Lead)]", or "[David (Hiring Manager)]".
- Conversational Continuity: The active panelist probes deeper for 2 to 3 turns without requiring the candidate to say names.
- Keep each response to 1-3 spoken sentences. Concise, natural, conversational. No bullet points.`,
    greeting: (name: string) => `[David (Hiring Manager)] Welcome ${name}! I'm David, the hiring manager, and I'm joined today by Maya our Product Lead and Alex our Tech Lead. To kick things off, could you introduce yourself, ${name}, and tell us a bit about your background and recent products you've owned?`
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
    const rawName = typeof candidate_name === 'string' ? candidate_name.trim() : '';
    const resolvedCandidateName = rawName && rawName.toLowerCase() !== 'candidate' ? rawName : 'Alex';
    const candidateFirstName = resolvedCandidateName.split(' ')[0];

    const trackKey = (track as string).toLowerCase();
    const trackConfig = TRACK_PROMPTS[trackKey] ?? TRACK_PROMPTS['tech'];

    const difficultyInstruction =
      difficulty_mode === 'auto'
        ? 'Dynamically scale difficulty based on candidate performance (Tier 1 → Tier 2 → Tier 3 edge cases).'
        : `Fix the difficulty strictly at the "${difficulty_mode}" level throughout the entire interview. Do not escalate or reduce difficulty.`;

    const antiHallucinationGuideline = resume_summary
      ? [
          '# Anti-Hallucination Rule (Resume Provided)',
          'Only ask about skills, projects, and technologies explicitly listed in the Resume Summary above.',
          'Never invent past employers, fictional projects, or tools the candidate did not mention.',
        ].join('\n')
      : [
          '# Assessment Guideline (Interview Without Resume / Quickstart Mode)',
          `The candidate has chosen to interview without an uploaded resume. Formulate all scenarios and questions based on standard industry expectations for the "${role}" (${experience_level}) role.`,
          'Listen to their spoken introduction, and ask follow-up questions directly grounded in the recent projects and technologies they speak aloud.',
        ].join('\n');

    const systemPrompt = [
      trackConfig.prompt,
      '',
      '# Candidate Profile (GROUND TRUTH)',
      `Full Name: ${resolvedCandidateName}`,
      `First Name: ${candidateFirstName}`,
      `Target Role: ${role}`,
      `Experience Level: ${experience_level}`,
      resume_summary ? `Resume Summary:\n${resume_summary}` : 'Resume: Not provided (General Competency & Scenario-Based Mode)',
      '',
      `# Candidate Addressing Rule (CRITICAL REQUIREMENT)`,
      `Always address the person directly by their spoken first name ("${candidateFirstName}"). NEVER call them "candidate", "a candidate", "username", or "the user". Treat them with professional warmth as an individual colleague named "${candidateFirstName}".`,
      '',
      `# Interview Progression & Acknowledgement Workflow:`,
      `1. Opening: David welcomes ${candidateFirstName} and asks them to introduce themselves.`,
      `2. Turn 2 (First Domain Question): The lead interviewer steps in (Alex for Tech, Sarah for Sales, Elena for HR, Maya for Product).`,
      `   - MUST warmly acknowledge the introduction first: e.g., "Thanks for sharing that, ${candidateFirstName}! Great to meet you."`,
      `   - Ask the first focused question, directly grounded in what ${candidateFirstName} mentioned in their introduction or resume.`,
      `3. Answer Validation: In EVERY subsequent turn, the active panelist MUST first acknowledge ${candidateFirstName}'s answer with natural validation (e.g., "That makes sense, ${candidateFirstName}", "Got it, good point on that", "Understood") before probing or passing.`,
      `4. Active Continuity: The active panelist probes deeper into the answer for 2 to 3 turns.`,
      `5. Polite Colleague Intervention / Handover:`,
      `   - If a colleague chimes in, do it politely like teammates sitting at the table:`,
      `     e.g., "[Maya (Product Manager)]: Alex, if I can jump in with a quick follow-up on that — ${candidateFirstName}, how did that architecture choice impact user checkout latency?"`,
      `   - Or the active interviewer passes naturally when satisfied:`,
      `     e.g., "[Alex (Tech Lead)]: That covers the architecture from my side, ${candidateFirstName}. Maya, over to you."`,
      `   - The next panelist says: "[Maya (Product Manager)]: Thanks Alex! Hi ${candidateFirstName}, let's look at..."`,
      '',
      `# Difficulty Mode: ${difficultyInstruction}`,
      '',
      antiHallucinationGuideline,
      '',
      '# Anti-Bluffing Rule',
      'If the candidate gives vague buzzwords without substance, immediately probe for the specific protocol, metric, pricing structure, or method they actually used.',
      '',
      '# Contradiction Detection',
      'Track all candidate claims. If a later answer contradicts an earlier one, politely surface the contradiction in the conversation.',
    ]
      .filter(Boolean)
      .join('\n');

    const greeting = trackConfig.greeting(candidateFirstName);

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
