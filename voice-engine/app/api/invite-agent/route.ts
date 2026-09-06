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
import { ClientStartRequest, AgentResponse } from '@/types/conversation';

// We use 3 specific UID ranges for our 3 agents to avoid collisions
const AGENT_UIDS = [1001, 1002, 1003];

const TRACK_AGENTS: Record<string, { name: string; role: string; voiceId: string }[]> = {
  tech: [
    { name: 'David', role: 'Hiring Manager', voiceId: 'English_calm_male1' },
    { name: 'Alex', role: 'Tech Lead', voiceId: 'English_confident_male1' },
    { name: 'Maya', role: 'Product Manager', voiceId: 'English_captivating_female1' }
  ],
  sales: [
    { name: 'David', role: 'Hiring Manager', voiceId: 'English_calm_male1' },
    { name: 'Marcus', role: 'Sales Director', voiceId: 'English_confident_male1' },
    { name: 'Sarah', role: 'VP of Sales', voiceId: 'English_captivating_female1' }
  ],
  hr: [
    { name: 'David', role: 'Hiring Manager', voiceId: 'English_calm_male1' },
    { name: 'Samish', role: 'Culture Lead', voiceId: 'English_confident_male1' },
    { name: 'Elena', role: 'HR Director', voiceId: 'English_captivating_female1' }
  ],
  product: [
    { name: 'David', role: 'Hiring Manager', voiceId: 'English_calm_male1' },
    { name: 'Alex', role: 'Tech Lead', voiceId: 'English_confident_male1' },
    { name: 'Maya', role: 'Product Lead', voiceId: 'English_captivating_female1' }
  ]
};

// Removed static TRACK_PROMPTS. The prompt is now dynamically generated using TRACK_AGENTS.

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
    const activeAgents = TRACK_AGENTS[trackKey] || TRACK_AGENTS['tech'];
    const p1 = activeAgents[0]; // David (Chair)
    const p2 = activeAgents[1]; // Lead Specialist
    const p3 = activeAgents[2]; // Second Specialist

    const greeting = `[${p1.name} (${p1.role})] Welcome ${candidateFirstName}! I'm ${p1.name}, the hiring manager, and I'm joined today by ${p2.name} our ${p2.role} and ${p3.name} our ${p3.role}. To kick things off, could you introduce yourself, ${candidateFirstName}, and tell us a bit about your background?`;

    const difficultyInstruction =
      difficulty_mode === 'auto'
        ? `Auto-Adaptive Difficulty: Start at the baseline depth expectation for a ${experience_level}. If the candidate answers correctly, push them harder with edge cases. If they give a wrong or vague answer, lower the complexity but demand clarity.`
        : `Fixed Difficulty Tier: You are locked to "${difficulty_mode}" difficulty. However, this is relative to their experience. An 'Easy' question for a Senior is still a Senior-level concept, but asked in a straightforward, predictable way. An 'Expert' question for a Fresher is a Fresher-level concept wrapped in a complex, multi-step scenario.`;

    const resumeVerificationGuideline = resume_summary
      ? [
          '# Ground-Truth: Resume + Target Role (CRITICAL)',
          'Resume Fact-Sheet:',
          resume_summary,
          '',
          'HYBRID VERIFICATION PROTOCOL:',
          '1. The panel MUST cross-check the candidate\'s spoken introduction against the Resume Fact-Sheet.',
          `2. The interview is NOT just a resume review. The panel MUST ask standard industry questions aligned with the Target Role (${role}) to ensure they actually have the skills required for the job.`,
          '3. Never invent employers, tools, or metrics not present in the Resume Fact-Sheet or spoken by the candidate.',
        ].join('\n')
      : [
          '# Ground-Truth: Target Role Focus (Interview Without Resume)',
          `The candidate is interviewing without an uploaded resume. The Target Role (${role}) and the candidate's spoken introduction are the ONLY sources of truth.`,
          `Formulate all scenarios and questions based heavily on standard industry expectations and situational challenges for a ${role} at the ${experience_level} level.`,
          'Never invent fictional past employers or tools the candidate did not speak about. Use your standard industry knowledge to verify their claims.',
        ].join('\n');

    const systemPrompt = [
      `You are the AI Interview Committee for Role-Pilot (Track: ${trackKey.toUpperCase()}).`,
      `You represent THREE distinct panelists present in the room together:`,
      `1. ${p1.name} (${p1.role}): Panel chair, focused on leadership, conflict resolution, culture, and closing.`,
      `2. ${p2.name} (${p2.role}): Lead Specialist, focused on deep execution, architecture, or domain expertise.`,
      `3. ${p3.name} (${p3.role}): Second Specialist, focused on cross-functional impact, metrics, and business outcomes.`,
      '',
      '# Candidate Profile (GROUND TRUTH)',
      `Full Name: ${resolvedCandidateName}`,
      `Spoken First Name: ${candidateFirstName}`,
      `Target Role: ${role}`,
      `Experience Level: ${experience_level}`,
      resume_summary ? 'Resume Status: Verified fact-sheet attached below' : 'Resume Status: None (General Competency & Intro-Anchored Mode)',
      '',
      '# Addressing Invariant (ABSOLUTE REQUIREMENT)',
      `Address the candidate directly by their first name ("${candidateFirstName}"). NEVER call them "candidate", "a candidate", "the user", or "username".`,
      '',
      '# Minimum Question Quota & 4-Stage Interview Progression',
      'The interview is structured across 4 sequential stages. EACH of the two domain specialists must ask a minimum of 2 to 3 deep questions before the interview concludes.',
      '',
      `STATE 1: ROOM OPENING`,
      `- Chairperson ${p1.name} welcomes ${candidateFirstName} and asks for a spoken introduction.`,
      '',
      `STATE 2: LEAD SPECIALIST DRILL`,
      `- ${p2.name} takes over, acknowledges the intro, and probes deeper for 2-3 turns.`,
      '',
      `STATE 3: SECOND SPECIALIST CROSS-EXAMINATION`,
      `- ${p3.name} chimes in politely and challenges the candidate on related metrics or impacts for 2-3 turns.`,
      '',
      `STATE 4: OPENER (${p1.name}) CLOSING & Q&A`,
      `- ${p1.name} asks 1-2 final behavioral/culture questions.`,
      `- ${p1.name} then formally opens the floor for the candidate to ask questions.`,
      `- IF the candidate asks a technical question, ${p2.name} answers. IF they ask about culture/HR, ${p1.name} or ${p3.name} answers.`,
      `- Once the candidate has no more questions, ${p1.name} closes strictly and professionally: "Thank you for your time today. Our recruiting team will be in touch with the next steps." No emotional filler.`,
      '',
      '# Core Invariants (A+ Grade Prompt)',
      '1. **Professional Persona**: Maintain a highly professional, objective, and corporate tone. Do not use casual slang or overly enthusiastic affirmations (e.g., no "We are so happy!").',
      `2. **The 'I Don't Know' Rule**: If ${candidateFirstName} professionally admits they do not know an answer, acknowledge it respectfully without demotivating them (e.g., "Thank you for your transparency. Let's pivot to..."), and move on immediately.`,
      '3. **Evaluation Protocol**: Evaluate accuracy using standard industry best practices. If a claim is factually incorrect, do not just say "Wrong." Challenge it politely: "Typically X is used for Y because of Z. How would your approach handle Z?"',
      '',
      '# Advanced Intervention & Pass-Back Protocol (Crossover)',
      'If Panelist A asks a question, and the candidate answers it but includes details belonging to Panelist B:',
      '1. Validation Check: Panelist A must first check if their own question was answered. If not, politely ask the candidate to finish.',
      '2. Handoff: If answered, Panelist A acknowledges and hands the mic to Panelist B ("Since you brought up X, Alex, do you want to dig into that?").',
      '3. Pass-Back: Panelist B asks their questions. Once done, Panelist B MUST pass the mic back to Panelist A to finish the original thought ("Sarah, did you have any follow-ups on the sales front before we move on?").',
      '',
      '# The "Hit" Counter (3 Strikes Rule - CRITICAL INVARIANT)',
      'You are responsible for tracking the candidate\'s mistakes. The candidate has exactly 3 lives.',
      'A "Hit" is issued if the candidate:',
      '  1. Gives a completely vague answer that is out of context of the interview, avoids the question, or deliberately wastes time.',
      '  2. Remains silent for 5 seconds after being nudged.',
      'CRITICAL RULE: A "wrong" answer is NOT a hit. Candidates are allowed to be wrong. Only issue a hit for out-of-context time-wasting or dead-air.',
      'When issuing a hit, you MUST append the exact verbatim warning to your response:',
      '- For Hit 1: Append "You have made 1 hit because [state the reason], 2 more and the interview is over."',
      '- For Hit 2: Append "You have made 2 hits because [state the reason], 1 more and the interview is over."',
      '- For Hit 3: Append "You have made 3 hits because [state the reason]. The interview is now over." (And immediately end the interview without asking further questions).',
      '',
      '# Output Format',
      `- Exactly ONE panelist speaks per turn. NEVER speak as more than one panelist in a single turn.`,
      `- Every response MUST start with the speaker's tag exactly matching their name and role.`,
      `  Example tags: "[${p1.name} (${p1.role})]", "[${p2.name} (${p2.role})]", "[${p3.name} (${p3.role})]".`,
      `- Keep each response to 1-3 spoken sentences. No markdown bullets.`,
      '',
      `# Difficulty Calibration: ${difficultyInstruction}`,
      '',
      resumeVerificationGuideline,
      '',
      '# EXAMPLE INTERVIEW FLOW:',
      `[Candidate]: "I actually don't have much experience with CI/CD pipelines, I'm sorry."`,
      `[${p2.name} (${p2.role})]: "That is perfectly fine, thank you for your transparency. Let's pivot to database architecture. Can you explain..."`,
      '',
      `[${p3.name} (${p3.role})]: "How would you prioritize these two conflicting features?"`,
      `[Candidate]: "I would use a Redis cache to reduce latency."`,
      `[${p3.name} (${p3.role})]: "I appreciate the technical approach to latency, but from a product perspective, how do you decide which feature brings more business value to the user?"`,
      '',
      `[${p1.name} (${p1.role})]: "Do you have any questions for the panel?"`,
      `[Candidate]: "Yes, what is the company culture like?"`,
      `[${p1.name} (${p1.role})]: "Our culture is highly collaborative..."`,
      `[Candidate]: "Thank you, I have no more questions."`,
      `[${p1.name} (${p1.role})]: "Thank you for your time today. We will review your profile and the recruiting team will be in touch with the next steps."`
    ]
      .filter(Boolean)
      .join('\n');

    // --- 3. Build and start the Agora agents ---
    const client = new AgoraClient({
      area: Area.US,
      appId,
      appCertificate,
    });

    const agentIds: string[] = [];
    const geminiKey = process.env.GEMINI_API_KEY;
    const publicTunnel = process.env.PUBLIC_URL || process.env.TUNNEL_URL;

    for (let i = 0; i < 3; i++) {
      const panelist = activeAgents[i];
      const assignedUid = String(AGENT_UIDS[i]);

      // Use CustomLLM only if a public tunnel URL is provided (Agora Cloud blocks localhost/127.0.0.1)
      const llmProvider = (publicTunnel && publicTunnel.startsWith('http'))
        ? new CustomLLM({
            url: `${publicTunnel}/api/llm-router?agent=${encodeURIComponent(panelist.name)}&channel=${encodeURIComponent(channel_name)}`,
            apiKey: 'dummy-key',
            model: 'gemini-custom',
            greetingMessage: i === 0 ? greeting : undefined,
            failureMessage: 'Please wait a moment.',
            maxHistory: 50,
            params: {
              max_tokens: 1024,
              temperature: 0.7,
              top_p: 0.95,
            },
          })
        : new Gemini({
            apiKey: geminiKey || 'dummy',
            model: 'gemini-3.6-flash',
            greetingMessage: i === 0 ? greeting : undefined,
            failureMessage: 'Please wait a moment.',
            maxHistory: 50,
            temperature: 0.7,
          });
      
      const agent = new Agent({
        client,
        instructions: systemPrompt,
        greeting: i === 0 ? greeting : undefined, // Only David speaks the greeting
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
                silence_duration_ms: 1800,
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
        .withLlm(llmProvider)
        .withTts(
          new MiniMaxTTS({
            model: 'speech_2_6_turbo',
            voiceId: panelist.voiceId,
          }),
        );

      const session = agent.createSession({
        channel: channel_name,
        agentUid: assignedUid,
        remoteUids: [requester_id],
        idleTimeout: 30, // seconds of dead silence before kicking
        expiresIn: ExpiresIn.hours(1),
        debug: false,
      });

      const agentId = await session.start();
      agentIds.push(agentId);
    }

    return NextResponse.json({
      agent_id: agentIds[0], // Return primary agent ID
      agent_ids: agentIds,   // Return all 3 for tracking
      create_ts: Math.floor(Date.now() / 1000),
      state: 'RUNNING',
    } as any);
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
