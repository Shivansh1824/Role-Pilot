# 🚀 Role-Pilot

> **The AI-Powered Career Accelerator & Job Readiness Platform**
> 
> Role-Pilot is a next-generation, dual-sided job readiness and hiring ecosystem. By combining voice-interactive AI coaching, adaptive coding arenas, and an open recruiter pipeline, Role-Pilot empowers candidates to master their career path and lets companies hire verified top talent directly from the leaderboard.

---

## 🌟 Executive Summary
In today's competitive job market, candidate preparation is disjointed, and recruiter sourcing is inefficient. Candidates cycle through multiple platforms for coding practice, resume optimization, and behavioral prep. Recruiters spend hours sorting through unverified resumes and keyword-stuffed profiles.

**Role-Pilot bridges this gap.** It offers a unified, gamified, AI-driven preparation pipeline that continuously scores candidate capabilities across multiple dimensions: technical coding, aptitude, resume-to-job description fit (ATS), and real-time verbal communication. The results feed into a global leaderboard, turning interview preparation into a verifiable showcase for hiring managers.

---

## 🛠️ Core Feature Suites

### 1. 🎤 TruGen AI-Powered Mock Interviews
* **Voice & Behavioral Diagnostics**: Practice live, voice-interactive mock sessions with hyper-realistic AI interview avatars (e.g., Elara, Senior Tech Recruiter).
* **STAR Method Scoring**: The AI analyzes response structures based on the Situation, Task, Action, and Result (STAR) framework.
* **Fluency & Sentiment Feedback**: Receive instant ratings on English fluency, communication clarity, tone modulation, and filler-word frequency.

### 2. 💻 The Technical Arena
* **Level-Based Coding Challenges**: Progress through dynamically scaling coding problems across different difficulty tiers.
* **Real-time AI Complexity Evaluation**: Immediate analysis of Big-O time and space complexity upon solution submission.
* **Multiple Job Rounds**: Interactive suites covering technical coding assessments, domain-specific Multiple Choice Questions (MCQs), and cognitive aptitude assessments.

### 3. 🎯 ATS Diagnostics & Tailoring
* **Resume-Job Fit Score**: Scans resumes against live job descriptions to check ATS compatibility.
* **Semantic Keyword Extraction**: Highlights structural errors, formatting red flags, and missing target keywords (e.g., React, System Design, Node.js).

### 4. 🏆 Dual-Sided Global Leaderboard
* **For Candidates**: Earn Experience Points (XP) as you complete assessments, move up the global ranks, and compare performance with developers worldwide.
* **For Recruiters**: Access a verified directory of top-scoring candidates. Recruiters can browse portfolios, verify assessment scores, and invite top performers to fast-track interview rounds directly from the platform.

### 5. 🧠 Personalized Learning & Remediation
* **AI-Generated Study Roadmaps**: Based on coding and interview feedback, the system generates customized guidance.
* **Targeted Recommendations**: Recommends specific topics, coding paradigms, and mock focus areas to patch identified skill gaps.

---

## 🔮 Co-Founder's Strategic Roadmap (Planned Improvements)

As we scale Role-Pilot from a functional MVP to an industry-leading hiring hub, here are the strategic enhancements we propose to add:

### 🛡️ AI Proctoring & Anti-Cheat Engine
* **Goal**: Maintain the integrity of the recruiter pipeline.
* **Details**: Implement browser-focus tracking, tab-switching alerts, and keystroke dynamics analysis for the Coding Arena. For voice interviews, integrate simple audio-visual validation to prevent candidates from reading scripts off-screen.

### 📜 "Proof of Skill" Verifiable Credentials
* **Goal**: Provide candidates with shareable, immutable validation.
* **Details**: Generate encrypted, secure credentials (e.g., "Role-Pilot Certified Frontend Engineer") that candidates can embed directly into their resumes or LinkedIn profiles. Each credential links back to a public, verifiable report detailing their assessment performance.

### 🏢 Company-Specific Sandbox Tracks
* **Goal**: Simulate exact hiring environments for target companies.
* **Details**: Introduce specialized training tracks matching the interview styles, question banks, and cultural criteria of target companies (e.g., Google's data structure rounds, McKinsey's case studies, Stripe's systems integration tasks).

### ⚡ Smart Matchmaking & Recruiter Alerts
* **Goal**: Shorten the time-to-hire pipeline.
* **Details**: Allow recruiters to set criteria profiles (e.g., *"Show me candidates in the top 5% of React developers who score 'Fluent' in communication"*). When a candidate meets these criteria, send an automated Match Alert to the recruiter's dashboard.

### 👥 Peer-to-Peer Mock Exchanges
* **Goal**: Enhance community-driven learning.
* **Details**: Let high-ranking players act as human peer-mock interviewers for other candidates. High-scorers earn additional XP or rewards for mentoring, creating an active, self-sustaining community loop.

---

## 💻 Tech Stack & Architecture

* **Frontend**: HTML5, Vanilla JavaScript, and Custom CSS (leveraging high-end glassmorphism, responsive grids, and micro-animations for a premium 2026 SaaS feel).
* **Database & Auth**: Supabase (PostgreSQL for transaction storage, secure Row-Level Security, and automated email verification flows using 8-digit OTPs).
* **AI Integration**: Custom Edge Functions interfacing with TruGen AI APIs for video/voice agent processing and OpenAI/Gemini models for technical complexity evaluation.

---

## 🚀 Getting Started

### 📋 Prerequisites
* A web browser supporting ES6 modules.
* A [Supabase](https://supabase.com) account and active project database.

### 🔧 Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/Shivansh1824/Role-Pilot.git
   cd Role-Pilot
   ```

2. Configure your environment variables:
   Create a `.env` file in the root directory:
   ```env
   SUPABASE_URL=https://your-supabase-project.supabase.co
   SUPABASE_ANON_KEY=your-supabase-anon-key
   ```

3. Launch your local development server:
   ```bash
   # Using a simple local server (e.g., python, live-server, etc.)
   python3 -m http.server 8000
   ```
   Open your browser and navigate to `http://localhost:8000`.
