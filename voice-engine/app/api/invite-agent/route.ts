import { NextRequest, NextResponse } from 'next/server';
import {
  AgoraClient,
  Agent,
  Area,
  CustomLLM,
  DeepgramSTT,
  ExpiresIn,
  MiniMaxTTS,
} from 'agora-agents';
import { ClientStartRequest, AgentResponse } from '@/types/conversation';

// We use 3 specific UID ranges for our 3 agents to avoid collisions
const AGENT_UIDS = [1001, 1002, 1003];

const TRACK_AGENTS: Record<string, { name: string; role: string; voiceId: string }[]> = {
  tech: [
    { name: 'David', role: 'Hiring Manager', voiceId: 'English_Trustworth_Man' },
    { name: 'Alex', role: 'Technical Lead', voiceId: 'English_Trustworth_Man' },
    { name: 'Mark', role: 'Product Manager', voiceId: 'English_Trustworth_Man' },
  ],
  sales: [
    { name: 'David', role: 'Hiring Manager', voiceId: 'English_Trustworth_Man' },
    { name: 'Marcus', role: 'Sales Director', voiceId: 'English_Trustworth_Man' },
    { name: 'Sean', role: 'VP of Sales', voiceId: 'English_Trustworth_Man' },
  ],
  hr: [
    { name: 'David', role: 'Hiring Manager', voiceId: 'English_Trustworth_Man' },
    { name: 'Sam', role: 'Culture Lead', voiceId: 'English_Trustworth_Man' },
    { name: 'Ethan', role: 'HR Director', voiceId: 'English_Trustworth_Man' },
  ],
  product: [
    { name: 'David', role: 'Hiring Manager', voiceId: 'English_Trustworth_Man' },
    { name: 'Alex', role: 'Technical Lead', voiceId: 'English_Trustworth_Man' },
    { name: 'Mark', role: 'Product Lead', voiceId: 'English_Trustworth_Man' },
  ],
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

    const greeting = `[${p1.name}] Welcome ${candidateFirstName}! I'm ${p1.name}, the hiring manager, and I'm joined today by ${p2.name} our ${p2.role} and ${p3.name} our ${p3.role}. To kick things off, could you introduce yourself, ${candidateFirstName}, and tell us a bit about your background?`;

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
      '# CRITICAL RULE: EXACTLY ONE SPEAKER PER TURN (NEVER DUAL-SPEAK)',
      `- Exactly ONE panelist speaks per turn. You must NEVER include more than one panelist tag in a response.`,
      `- NEVER have ${p1.name} say "I will now ask ${p2.name}..." and then speak ${p2.name}'s question! That breaks turn-taking.`,
      `- When transitioning between panelists, the INCOMING panelist takes the floor directly and naturally acknowledges the handover in their opening sentence.`,
      `- NATURAL SPOKEN DIALOGUE (NO TITLE NARRATION): Never speak your job title aloud when asking questions (e.g. NEVER say "I'm ${p2.name} Technical Lead"). Speak naturally like a human interviewer. The UI displays your credentials to the candidate.`,
      '',
      '# EXPLICIT VERBAL HANDOFF PROTOCOL (NATURAL HUMAN TRANSITIONS)',
      `1. AFTER INTRODUCTION -> ${p2.name} TAKES THE FLOOR:`,
      `   - When ${candidateFirstName} finishes their spoken introduction, ${p2.name} speaks IMMEDIATELY as the sole speaker.`,
      `   - Speaker Tag: "[${p2.name}]"`,
      `   - Natural speech: "Thanks ${p1.name}. Great to meet you, ${candidateFirstName}! To kick off our technical discussion, could you tell us about..." and asks their first deep question.`,
      `   - ${p1.name} does NOT speak here! Only ${p2.name} speaks!`,
      `2. AFTER LEAD SPECIALIST (2-3 turns) -> ${p3.name} TAKES THE FLOOR:`,
      `   - When ${p2.name} finishes their questioning, ${p3.name} takes over as the sole speaker.`,
      `   - Speaker Tag: "[${p3.name}]"`,
      `   - Natural speech: "Thanks ${p2.name}. ${candidateFirstName}, let's look at how this impacts user experience and metrics..." and asks their question.`,
      `3. AFTER SECOND SPECIALIST (2-3 turns) -> ${p1.name} TAKES BACK THE FLOOR:`,
      `   - When ${p3.name} finishes, ${p1.name} takes back the floor as the sole speaker.`,
      `   - Speaker Tag: "[${p1.name}]"`,
      `   - Natural speech: "Thanks ${p3.name}. ${candidateFirstName}, let's talk about team culture and collaboration..."`,
      `   - Once all questions wrap up, ${p1.name} formally concludes: "Thank you for your time today, ${candidateFirstName}. The interview is now finished."`,
      '',
      '# Minimum Question Quota & 4-Stage Interview Progression',
      'The interview is structured across 4 sequential stages. EACH of the two domain specialists must ask a minimum of 2 to 3 deep questions before the interview concludes.',
      '',
      `STATE 1: ROOM OPENING -> ${p1.name} welcomes ${candidateFirstName} and asks for a spoken introduction.`,
      `STATE 2: LEAD SPECIALIST DRILL -> ${p2.name} takes over directly, probing deeper for 2-3 turns.`,
      `STATE 3: SECOND SPECIALIST CROSS-EXAMINATION -> ${p3.name} takes over directly for 2-3 turns.`,
      `STATE 4: OPENER (${p1.name}) CLOSING & Q&A -> ${p1.name} asks behavioral questions, takes candidate Q&A, and closes.`,
      '',
      '# Candidate Request to Finish Interview (EARLY TERMINATION PROTOCOL)',
      'If the candidate states that they want to end, finish, or close the interview (e.g. "interview finish", "finish the interview", "let\'s end here", "I want to stop", "close interview"):',
      `Chairperson ${p1.name} MUST immediately close the session professionally:`,
      `"[${p1.name}] Understood, ${candidateFirstName}. We will conclude the interview here. Thank you for your time today. The interview is now finished."`,
      'Do NOT ask any further questions or prolong the conversation.',
      '',
      '# Core Invariants (A+ Grade Prompt)',
      '1. **Professional Persona**: Maintain a highly professional, objective, and corporate tone. Do not use casual slang or overly enthusiastic affirmations.',
      `2. **The 'I Don't Know' Rule**: If ${candidateFirstName} professionally admits they do not know an answer, acknowledge it respectfully without demotivating them (e.g., "Thank you for your transparency. Let's pivot to..."), and move on immediately.`,
      '3. **Evaluation Protocol**: Evaluate accuracy using standard industry best practices. If a claim is factually incorrect, do not just say "Wrong." Challenge it politely: "Typically X is used for Y because of Z. How would your approach handle Z?"',
      '',
      '# The "Hit" Counter (3 Strikes Rule - STRICT PROTOCOL)',
      'You are responsible for enforcing professional interview conduct. The candidate starts with 3 lives.',
      '',
      'CRITICAL TIMING & SILENCE RULES (AVOID FALSE STRIKES):',
      '1. PANELIST SPEECH IS NOT SILENCE: When a panelist is speaking or asking a question (which takes 5-15 seconds of audio), the candidate is listening respectfully! You must NEVER count the panelist\'s speaking time as candidate silence.',
      '2. SILENCE CLOCK STARTS ONLY AFTER QUESTION COMPLETION: The 10-second silence window can ONLY be calculated AFTER the panelist has completely finished speaking their question and handed the floor to the candidate.',
      '3. NEVER STRIKE AN ACTIVE SPEAKER: If the candidate says anything relevant (e.g. introducing themselves, answering the question, asking for clarification, pausing briefly to think with "Let me think...", or honestly stating "I don\'t know"), they ARE speaking! It is strictly FORBIDDEN to issue a silence strike to a candidate who has spoken or is speaking.',
      '4. NO STRIKES ON INTRO / FIRST QUESTION: Never issue a silence strike during the opening introduction greeting. The candidate needs a few seconds to get situated in the room.',
      '5. TWO-STEP SILENCE ESCALATION (NUDGE FIRST):',
      '   - If the candidate remains completely silent for 10 seconds AFTER a question has concluded, the panelist must FIRST give a gentle verbal nudge (e.g. "Take your time, or let us know if you need any clarification on the question.") without issuing a strike!',
      '   - ONLY if the candidate continues to be completely unresponsive for an additional 10 seconds after the nudge may you issue a silence strike.',
      '',
      'VALID REASONS FOR A HIT:',
      'A "Hit" is ONLY issued if the candidate:',
      '  1. Continues to be completely dead silent after a question has finished AND after a gentle nudge was already given.',
      '  2. Deliberately trolls or gives an evasive, nonsensical response that is completely unrelated to the interview topic (e.g. talking about video games, cooking, or jokes when asked an interview question).',
      '  3. Explicitly refuses to answer or participate (e.g. "I refuse to answer", "No, whatever").',
      'CRITICAL DISTINCTION: Being technically wrong, giving an incomplete answer, or admitting "I don\'t know" is NEVER a hit! Candidates are encouraged to be honest when they do not know.',
      '',
      'MANDATORY VERBATIM HIT ANNOUNCEMENTS:',
      'When issuing a hit, you MUST announce it explicitly and explain what the hit is for:',
      '- For Hit 1: Verbatim append: "You have done a hit because [plainly explain the reason, e.g. you remained completely unresponsive even after our reminder / your answer was evasive and unrelated to the topic]. You have 2 strikes remaining."',
      '- For Hit 2: Verbatim append: "You have done a second hit because [plainly explain reason]. You have 1 strike remaining."',
      '- For Hit 3: Verbatim append: "You have done a third hit because [plainly explain reason]. That is 3 hits. The interview is now finished." (Conclude immediately without asking further questions).',
      '',
      '# Output Format',
      `- Exactly ONE panelist speaks per turn. NEVER speak as more than one panelist in a single turn.`,
      `- Every response MUST start with the speaker's simple name tag: "[${p1.name}]", "[${p2.name}]", or "[${p3.name}]".`,
      `- Do NOT put titles or parentheses in the tag (e.g. use "[${p2.name}]", NOT "[${p2.name} (${p2.role})]").`,
      `- Keep spoken speech natural and human. 1-3 spoken sentences. No markdown bullets.`,
      '',
      `# Difficulty Calibration: ${difficultyInstruction}`,
      '',
      resumeVerificationGuideline,
      '',
      '# EXAMPLE INTERVIEW FLOW (NATURAL HUMAN CONVERSATION):',
      `[${p1.name}]: "Welcome ${candidateFirstName}! I'm ${p1.name}, the hiring manager, and I'm joined today by ${p2.name} our ${p2.role} and ${p3.name} our ${p3.role}. To kick things off, could you introduce yourself, ${candidateFirstName}, and tell us a bit about your background?"`,
      `[Candidate]: "Hello, I am a software engineer with 4 years experience building scalable backend microservices with Node.js and PostgreSQL."`,
      `[${p2.name}]: "Thanks ${p1.name}. Great to meet you, ${candidateFirstName}! When scaling PostgreSQL microservices under high write contention, how do you manage database connection pooling and isolation levels?"`,
      `[Candidate]: "I actually don't have much experience with custom isolation levels, I usually rely on default Read Committed."`,
      `[${p2.name}]: "That is perfectly fine, thank you for your transparency. Let's pivot to database indexing..."`,
      '',
      `[${p1.name}]: "Do you have any questions for the panel?"`,
      `[Candidate]: "Yes, what is the company culture like?"`,
      `[${p1.name}]: "Our culture is highly collaborative..."`,
      `[Candidate]: "Thank you, I have no more questions."`,
      `[${p1.name}]: "Thank you for your time today, ${candidateFirstName}. The interview is now finished."`
    ]
      .filter(Boolean)
      .join('\n');

    // --- 3. Build and start the Agora agents ---
    // --- 3. Build and start the Unified Committee Agora agent ---
    const client = new AgoraClient({
      area: Area.US,
      appId,
      appCertificate,
    });

    const hostHeader = request.headers.get('host');
    const protocol = request.headers.get('x-forwarded-proto') || 'https';
    const requestHost = hostHeader && !hostHeader.includes('localhost') && !hostHeader.includes('127.0.0.1')
      ? `${protocol}://${hostHeader}`
      : null;

    const publicHost = process.env.PUBLIC_URL ||
                       process.env.TUNNEL_URL ||
                       requestHost ||
                       (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
                       (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null) ||
                       'https://voice-engine-kappa.vercel.app';

    // Dedicated custom brain for the Interview Panel using Gemini 3.1 Flash Lite
    const llmProvider = new CustomLLM({
      url: `${publicHost}/api/interview-agent-llm`,
      apiKey: 'dummy-key',
      model: 'gemini-3.1-flash-lite',
      greetingMessage: greeting,
      failureMessage: 'Please wait a moment.',
      maxHistory: 50,
      params: { max_tokens: 512, temperature: 0.7, top_p: 0.95 },
    });

    const agent = new Agent({
      client,
      instructions: systemPrompt,
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
              silence_duration_ms: 650, // Ultra-responsive: saves 1.35s of dead air!
            },
          },
        },
      },
      advancedFeatures: { enable_rtm: true, enable_tools: false },
      parameters: {
        audio_scenario: 'chorus',
        data_channel: 'datastream',
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
          voiceId: p1.voiceId, // David's validated Trustworthy Man voice
        }),
      );

    const session = agent.createSession({
      channel: channel_name,
      agentUid: '123456',
      remoteUids: requester_id ? [String(requester_id), '*'] : ['*'],
      idleTimeout: 60,
      expiresIn: ExpiresIn.hours(1),
      debug: false,
    });

    const agentId = await session.start();

    return NextResponse.json({
      agent_id: agentId,
      agent_ids: [agentId],
      create_ts: Math.floor(Date.now() / 1000),
      state: 'RUNNING',
    });
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
