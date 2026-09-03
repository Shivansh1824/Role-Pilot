# EchoSphere: Agora Conversational AI Hackathon — Master Blueprint

**Target:** EchoSphere: Agora Conversational AI Hackathon  
**Problem Statement:** PS11 — Adaptive Voice Interview Platform with Multi-Role AI Panel  

This document serves as the master blueprint for integrating the EchoSphere Hackathon problem statement into the **Role-Pilot** ecosystem.

---

## 1. The Hackathon Goal & Problem Statement (PS11)

### Problem Statement Details:
Build an adaptive voice interview platform in which one or more AI interviewers represent different roles.

The interview panel includes:
* **Alex (Technical Lead)**: Evaluates technical implementation, algorithm efficiency, code correctness, and system design edge cases.
* **Maya (Product Manager)**: Challenges the candidate on business implications, customer UX impact, product tradeoffs, and metrics.
* **David (Hiring Manager / Behavioral)**: Tests STAR (Situation, Task, Action, Result) methodology, communication clarity, leadership, and team collaboration.

### Core Capabilities Required:
1. **Real-Time & Interruptible Voice**: Powered natively by Agora Conversational AI low-latency WebRTC streams.
2. **Multiple Personas & Controlled Turn-Taking**: Dynamic handover between Alex, Maya, and David based on candidate responses and interview phase.
3. **Shared Candidate Context**: Unified state memory updated during the session so all panel members are aware of previous answers.
4. **Dynamic Follow-Up & Difficulty Adjustment**:
   * Auto-adjusts question difficulty based on candidate performance depth.
   * Identifies vague or contradictory answers and triggers dynamic follow-up questions.
5. **Evidence-Based Feedback**: Structured evaluation where every piece of feedback is explicitly linked to verbatim quotes/timestamps from the transcript.
6. **AI Disclosure**: Explicit pre-session transparency informing candidates that they are interacting with AI interviewers.

---

## 2. The Role-Pilot Concept Bridge

Instead of building a temporary demo script, PS11 is integrated directly as **Role-Pilot's Flagship AI Mock Interview Panel**.

* **Candidate Dashboard Integration (`dashboard.html`)**: Candidates launch adaptive multi-role panel interviews, review transcript-linked evidence scorecards, and track skill growth over time.
* **Recruiter Pipeline Integration (`dashboard-recruiter.html`)**: Recruiter dashboards display candidates with verified interview panel scores (e.g., *"Scored 92/100 by AI Panel for PM + Technical Alignment"*).
* **Supabase Telemetry Store**: Audio transcripts, role-by-role evaluations, and timestamped quotes are saved securely in Supabase (`interview_sessions`, `interview_transcripts`, `interview_feedbacks`).

---

## 3. Technical Architecture & Tech Stack

```
[Candidate Browser (Mic/Speaker)] 
       ▲
       │ Low-Latency WebRTC Audio
       ▼
[Agora Conversational AI Engine] <───> [Multi-Role Panel Orchestrator]
 (Speech-to-Speech / STT-LLM-TTS)         ├─ Alex (Tech Lead)
                                          ├─ Maya (Product Manager)
                                          └─ David (Hiring Manager)
                                                   │
                                                   ▼
                                         [Shared Candidate Context State]
                                                   │
                                                   ▼
                                       [Evidence-Based Scoring Engine]
                                                   │
                                                   ▼
                                       [Supabase Database & Edge Functions]
```

### Stack Components:
* **Voice Layer**: Agora Conversational AI SDK + Agora RTC WebRTC Channel.
* **Orchestration**: Panel Agent Manager (controlling turn-taking triggers, role prompts, and interruption recovery).
* **Persistence & APIs**: Supabase PostgreSQL + Edge Functions for secret key exchange, transcript processing, and STAR metric calculations.
* **Frontend**: HTML5, Vanilla JavaScript (`/js/interview-panel.js`), and Glassmorphic CSS (`/css/styles.css`).

---

## 4. Execution Phases

* **Phase 1 (Agora Integration & RTC Setup)**: Establish low-latency audio connection with Agora Conversational AI WebRTC RTC channel and setup AI disclosure modal.
* **Phase 2 (Multi-Persona Prompting & Turn-Taking)**: Program the persona prompts for Alex, Maya, and David with shared context state injection and tool-calling for handoffs.
* **Phase 3 (Adaptive & Vague Answer Detection Engine)**: Implement real-time transcript evaluation to catch vague/contradictory responses and adjust question difficulty tiers.
* **Phase 4 (Evidence-Based Scoring & UI Scorecard)**: Build the post-interview report UI displaying timestamped transcript quotes linked to performance feedback and STAR metrics.
