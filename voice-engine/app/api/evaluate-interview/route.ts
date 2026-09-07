import { NextRequest, NextResponse } from 'next/server';
import { GoogleGenAI } from '@google/genai';
import { PANEL_CONFIGS } from '@/lib/panel';
import { isAgentUid } from '@/lib/agora';

// Dedicated 3rd Key - Quota isolated from live room & setup agent
const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY_APP || process.env.GEMINI_API_KEY,
});

export type EvaluationTranscriptEntry = {
  uid?: number | string;
  text?: string;
  speaker?: string;
  createdAt?: number;
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      transcript = [],
      agentUID = '',
      role = 'Software Engineer',
      level = 'Mid-Level',
      difficulty = 'auto',
      track = 'tech',
      candidateName = 'Candidate',
    } = body;

    const trackKey = (track || 'tech').toLowerCase();
    const panelists = PANEL_CONFIGS[trackKey] || PANEL_CONFIGS.tech;
    const p1 = panelists[0] || { name: 'Alex', role: 'Technical Lead' };
    const p2 = panelists[1] || { name: 'Mark', role: 'Product Manager' };
    const p3 = panelists[2] || { name: 'David', role: 'Hiring Manager' };

    // Format transcript turns clearly for the evaluation model
    const formattedTranscript = Array.isArray(transcript)
      ? transcript
          .filter((t: EvaluationTranscriptEntry) => t && typeof t.text === 'string' && t.text.trim().length > 0)
          .map((t: EvaluationTranscriptEntry, idx: number) => {
            const rawText = (t.text || '').trim();
            const isAgent =
              isAgentUid(t.uid) ||
              String(t.uid) === String(agentUID) ||
              String(t.uid) === '1000' ||
              String(t.uid) === '123456' ||
              /^\[(Alex|Mark|David|Sean|Marcus|Ethan|Sam)/i.test(rawText) ||
              /^(Alex|Mark|David|Sean|Marcus|Ethan|Sam):/i.test(rawText);

            const speakerName = isAgent
              ? 'AI Interview Committee'
              : candidateName && candidateName.toLowerCase() !== 'candidate'
              ? candidateName
              : 'Candidate';

            return `[Turn ${idx + 1}] ${speakerName}: ${rawText}`;
          })
          .join('\n')
      : '';

    // If transcript is empty or negligible, return a calibrated diagnostic response
    if (!formattedTranscript || formattedTranscript.length < 20) {
      return NextResponse.json({
        overallScore: 65,
        decision: 'Needs Review',
        starRating: 3.0,
        executiveSummary: 'Session ended prematurely without sufficient transcript dialogue for a full hiring committee assessment.',
        experienceCalibration: `Candidate was evaluated for ${role} at ${level} tier on ${difficulty} difficulty. Minimal conversation recorded.`,
        impactAnalysis: {
          verdict: 'Insufficient conversational turns to demonstrate quantifiable business or architectural impact.',
          impactScore: 50,
          hits: [],
          misses: ['No substantive technical or behavioral answers recorded in the session.'],
        },
        breakdown: {
          panelist1: { name: p1.name, roleTitle: p1.role, score: 65, feedback: 'Insufficient technical depth recorded.' },
          panelist2: { name: p2.name, roleTitle: p2.role, score: 65, feedback: 'No cross-functional or product context discussed.' },
          panelist3: { name: p3.name, roleTitle: p3.role, score: 65, feedback: 'Limited communication samples available.' },
        },
        evidenceList: [],
      });
    }

    const systemPrompt = `<context>
You are the Senior Hiring Committee Evaluation Engine for Role-Pilot, an elite multi-agent interview platform.
You evaluate the full verbatim interview transcript between an interview panel (${p1.name}, ${p2.name}, ${p3.name}) and the candidate.
Your evaluation must be rigorous, objective, and calibrated like a top-tier tech hiring committee (e.g. Google, Meta, Stripe).
</context>

<candidate_metadata>
- Target Role: ${role}
- Experience Tier: ${level}
- Interview Difficulty: ${difficulty}
- Track: ${trackKey.toUpperCase()}
- Candidate Name: ${candidateName}
- Panelists:
  1. ${p1.name} (${p1.role} - Domain & Technical Execution)
  2. ${p2.name} (${p2.role} - Product Sense, Trade-offs & Stakeholders)
  3. ${p3.name} (${p3.role} - Leadership, STAR, Culture & Communication)
</candidate_metadata>

<evaluation_rubric>
1. FACTUAL & TECHNICAL CORRECTNESS (Non-negotiable Baseline):
   - Scrutinize technical claims, algorithms, architecture designs, trade-offs, and terminology.
   - Penalize hallucinations, factual errors, hand-waving, or buzzword soup.
   - Reward accurate, grounded technical reasoning.

2. HIT & IMPACT ANALYSIS (Primary Differentiator):
   - A "Hit" occurs when the candidate articulates concrete, quantifiable real-world impact (e.g., "reduced p99 latency by 35%", "handled 15k QPS with Redis clustering", "prevented double spend using idempotent transaction IDs", "boosted retention by 14%").
   - A "Miss" occurs when the candidate stays in abstract textbook definitions, dodges trade-offs, or fails to explain *how* their solution succeeded in practice.
   - Candidates with high hit density receive significant score boosts; generic theoretical answers receive moderate or lower scores.

3. EXPERIENCE TIER CALIBRATION:
   - "Fresher / Entry (0-1 yrs)": Expect solid mastery of computer science fundamentals, clean algorithmic logic, structured problem solving, and genuine curiosity. Do NOT penalize for lacking enterprise distributed scale or team management, but reward strong fundamentals.
   - "Junior (1-3 yrs)": Expect practical feature implementation, debugging capability, edge-case handling, and familiarity with standard production tools.
   - "Mid-Level (3-5 yrs)": Expect independent system ownership, solid architectural design patterns, fault tolerance, testing strategies, and clear trade-off justification.
   - "Senior (5-8 yrs)": High bar. Must demonstrate scalable system architecture, operational resilience, deep trade-off evaluation, cross-functional impact, and mentoring. Basic or superficial answers from a Senior must be heavily penalized.
   - "Lead / Staff (8+ yrs)": Highest bar. Strategic technical vision, cross-team consensus, organizational risk mitigation, and long-term architectural evolution.

4. DIFFICULTY CALIBRATION:
   - "Easy": Direct, standard questions. Candidate is expected to be crisp and flawless.
   - "Medium": Multi-faceted questions involving edge cases and trade-offs.
   - "Hard" / "Auto-Adaptive": Pushes into failure modes, high concurrency, and distributed bottlenecks. Generously credit candidates who maintain analytical composure and principled reasoning under hard conditions.

5. VERBATIM EVIDENCE LINKING:
   - Extract actual verbatim quotes spoken by the candidate from the transcript.
   - Link each quote to a panelist domain (${p1.name}, ${p2.name}, or ${p3.name}).
   - Categorize as 'strength' (technical hit / accurate insight) or 'gap' (missed impact / superficial claim / inaccuracy).
   - Provide an incisive committee description and an impact rating ('High' | 'Medium' | 'Low').
</evaluation_rubric>

<constraints>
- Return ONLY a valid JSON object matching the output schema.
- All quotes in 'quotedText' must be taken directly from candidate turns in the transcript.
- Overall score is an integer between 0 and 100.
- Star rating is a float between 1.0 and 5.0 (rounded to 1 decimal place, e.g., 4.5).
- Decision must be one of: "Strong Hire", "Hire", "Lean Hire", "Needs Review", "No Hire".
- Each panelist in breakdown MUST have 'score' as an integer (0-100) and 'feedback' as a concise 1-2 sentence string.
</constraints>

<output_format>
{
  "overallScore": 85,
  "decision": "Hire",
  "starRating": 4.2,
  "executiveSummary": "Candidate demonstrated strong domain execution with clear architectural reasoning...",
  "experienceCalibration": "Calibrated against Senior Engineer tier on Hard difficulty: demonstrated solid trade-offs...",
  "impactAnalysis": {
    "verdict": "Demonstrated high quantifiable impact across backend scaling...",
    "impactScore": 88,
    "hits": ["Quantified 40% reduction in API latency", "Architected distributed lock mechanism using Redis"],
    "misses": ["Did not elaborate on disaster recovery SLA during database failover question"]
  },
  "breakdown": {
    "panelist1": {
      "name": "${p1.name}",
      "roleTitle": "${p1.role}",
      "score": 86,
      "feedback": "Strong understanding of concurrency and caching layers."
    },
    "panelist2": {
      "name": "${p2.name}",
      "roleTitle": "${p2.role}",
      "score": 82,
      "feedback": "Connected technical architecture to product SLA requirements well."
    },
    "panelist3": {
      "name": "${p3.name}",
      "roleTitle": "${p3.role}",
      "score": 88,
      "feedback": "Articulate communication with structured STAR examples."
    }
  },
  "evidenceList": [
    {
      "id": "ev-1",
      "speaker": "${p1.name}",
      "roleTitle": "${p1.role}",
      "type": "strength",
      "title": "Concurrency & Caching Architecture",
      "description": "Accurately detailed distributed locking and caching invalidation strategies.",
      "quotedText": "exact quote from candidate",
      "impactRating": "High"
    }
  ]
}
</output_format>`;

    const userPrompt = `<source_transcript>
${formattedTranscript}
</source_transcript>

Perform the official Role-Pilot Senior Hiring Committee evaluation now based on the rubric.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.5-flash',
      contents: [
        { role: 'user', parts: [{ text: `${systemPrompt}\n\n${userPrompt}` }] },
      ],
      config: {
        temperature: 0.2,
        responseMimeType: 'application/json',
      },
    });

    const rawResponseText = response.text || '{}';
    let evaluationData: any;

    try {
      evaluationData = JSON.parse(rawResponseText);
    } catch {
      const jsonMatch = rawResponseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        evaluationData = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Failed to parse evaluation response as JSON');
      }
    }

    // Defensive normalization to ensure type contracts match the frontend perfectly
    const overallScore = typeof evaluationData.overallScore === 'number'
      ? Math.min(100, Math.max(0, Math.round(evaluationData.overallScore)))
      : 78;

    const starRating = typeof evaluationData.starRating === 'number'
      ? Math.min(5, Math.max(1, Math.round(evaluationData.starRating * 10) / 10))
      : Math.round((overallScore / 20) * 10) / 10;

    const parsePanelistScore = (val: any, defaultScore: number) => {
      if (typeof val === 'number') return Math.min(100, Math.max(0, Math.round(val)));
      if (val && typeof val.score === 'number') return Math.min(100, Math.max(0, Math.round(val.score)));
      return defaultScore;
    };

    const parsePanelistFeedback = (val: any, defaultFb: string) => {
      if (typeof val === 'string') return val;
      if (val && typeof val.feedback === 'string') return val.feedback;
      return defaultFb;
    };

    const normalizedBreakdown = {
      panelist1: {
        name: evaluationData.breakdown?.panelist1?.name || p1.name,
        roleTitle: evaluationData.breakdown?.panelist1?.roleTitle || p1.role,
        score: parsePanelistScore(evaluationData.breakdown?.panelist1, overallScore),
        feedback: parsePanelistFeedback(evaluationData.breakdown?.panelist1, 'Evaluated core domain execution and technical depth.'),
      },
      panelist2: {
        name: evaluationData.breakdown?.panelist2?.name || p2.name,
        roleTitle: evaluationData.breakdown?.panelist2?.roleTitle || p2.role,
        score: parsePanelistScore(evaluationData.breakdown?.panelist2, Math.max(0, overallScore - 4)),
        feedback: parsePanelistFeedback(evaluationData.breakdown?.panelist2, 'Evaluated trade-offs and cross-functional user impact.'),
      },
      panelist3: {
        name: evaluationData.breakdown?.panelist3?.name || p3.name,
        roleTitle: evaluationData.breakdown?.panelist3?.roleTitle || p3.role,
        score: parsePanelistScore(evaluationData.breakdown?.panelist3, Math.min(100, overallScore + 2)),
        feedback: parsePanelistFeedback(evaluationData.breakdown?.panelist3, 'Evaluated behavioral clarity and structured communication.'),
      },
    };

    const normalizedCalibration = typeof evaluationData.experienceCalibration === 'string'
      ? evaluationData.experienceCalibration
      : typeof evaluationData.experienceCalibration === 'object' && evaluationData.experienceCalibration !== null
      ? (evaluationData.experienceCalibration.justification || evaluationData.experienceCalibration.calibratedLevel || JSON.stringify(evaluationData.experienceCalibration))
      : `Calibrated for ${role} at ${level} level.`;

    const normalizedEvidenceList = Array.isArray(evaluationData.evidenceList)
      ? evaluationData.evidenceList.map((item: any, idx: number) => ({
          id: item.id || `ev-${idx}`,
          speaker: typeof item.speaker === 'string' ? item.speaker : p1.name,
          roleTitle: typeof item.roleTitle === 'string' ? item.roleTitle : '',
          type: item.type === 'strength' || item.type === 'gap' ? item.type : 'strength',
          title: typeof item.title === 'string' ? item.title : 'Evaluation Finding',
          description: typeof item.description === 'string' ? item.description : '',
          quotedText: typeof item.quotedText === 'string' ? item.quotedText : '',
          impactRating: item.impactRating === 'High' || item.impactRating === 'Medium' || item.impactRating === 'Low' ? item.impactRating : 'Medium',
        }))
      : [];

    return NextResponse.json({
      overallScore,
      decision: evaluationData.decision || (overallScore >= 85 ? 'Strong Hire' : overallScore >= 75 ? 'Hire' : 'Needs Review'),
      starRating,
      executiveSummary: typeof evaluationData.executiveSummary === 'string' ? evaluationData.executiveSummary : 'Evaluation completed based on transcript review.',
      experienceCalibration: normalizedCalibration,
      impactAnalysis: {
        verdict: typeof evaluationData.impactAnalysis?.verdict === 'string'
          ? evaluationData.impactAnalysis.verdict
          : 'Analysis of quantifiable impact and technical depth.',
        impactScore: typeof evaluationData.impactAnalysis?.impactScore === 'number'
          ? Math.min(100, Math.max(0, Math.round(evaluationData.impactAnalysis.impactScore)))
          : overallScore,
        hits: Array.isArray(evaluationData.impactAnalysis?.hits)
          ? evaluationData.impactAnalysis.hits.map((h: any) => (typeof h === 'string' ? h : String(h?.hit || h?.description || h)))
          : [],
        misses: Array.isArray(evaluationData.impactAnalysis?.misses)
          ? evaluationData.impactAnalysis.misses.map((m: any) => (typeof m === 'string' ? m : String(m?.miss || m?.description || m)))
          : [],
      },
      breakdown: normalizedBreakdown,
      evidenceList: normalizedEvidenceList,
    });
  } catch (error: any) {
    console.error('Error in evaluate-interview route:', error);
    return NextResponse.json(
      {
        error: 'Evaluation generation failed',
        details: error?.message || String(error),
      },
      { status: 500 },
    );
  }
}
