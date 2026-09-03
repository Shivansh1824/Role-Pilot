# Role-Pilot: Hackathon Project Context (EchoSphere Agora Conversational AI)

## Target Problem Statement
**EchoSphere: Agora Conversational AI Hackathon — PS11: Adaptive Voice Interview Platform with Multi-Role AI Panel**

### Core Objective
Build an adaptive voice interview platform where one or more AI interviewers represent different roles (Alex: Tech Lead, Maya: Product Manager, David: Hiring Manager / Behavioral). The panel adapts questions dynamically based on the candidate's answers, with real-time interruptible voice, shared context, turn-taking, vague/contradictory answer detection, dynamic difficulty adjustment, and evidence-based transcript feedback.

## Active Tech Stack & Keys
* **Voice Layer**: Agora Conversational AI Engine (Cloud STT Nova-3 + LLM + TTS MiniMax / ElevenLabs)
* **SDKs & Libraries**: `agora-agents`, `agora-rtc-react`, `agora-agent-client-toolkit`, `agora-agent-uikit`, `agora-token`
* **Credentials**: Stored securely in `.env` (git-ignored)
  * `NEXT_PUBLIC_AGORA_APP_ID`
  * `NEXT_AGORA_APP_CERTIFICATE`
  * `SUPABASE_URL`
  * `SUPABASE_ANON_KEY`
  * `GEMINI_API_KEY`
* **Database & Auth**: Supabase (`@supabase/supabase-js`)
  * Existing candidate authentication flow is preserved and untouched.

## Architectural Priorities
1. **Multi-Role Voice Interview Room**:
   - Conference table UI with 3 interviewer avatars:
     - Alex (Technical Lead)
     - Maya (Product Manager)
     - David (Hiring Manager / Behavioral)
   - Real-time WebRTC audio with native barge-in / speech interruption (160ms VAD threshold).
2. **Turn-Taking & Shared Context Orchestrator**:
   - Single agent session using role tags (`[Alex]`, `[Maya]`, `[David]`) or dynamic multi-agent handoffs.
   - Shared memory tracking candidate claims, missing business impact, contradictions, and difficulty tier.
3. **Evidence-Based Scorecard**:
   - Structured assessment linking specific critiques directly to transcript timestamps and quotes.

## Deprioritized / Out-of-Scope (Hackathon Speed Optimization)
* **Recruiter Portal & Login**: Dropped / bypassed (`dashboard-recruiter.html`, `login-recruiter.html`, `form-recruiter.html`).
* **ATS Tailor & Coding Arena**: Maintained as static reference; zero active dev hours until voice panel is done.
* **Auth**: Keep existing Supabase login flow untouched.
