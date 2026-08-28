# ai-context.md — Project Context for Role-Pilot

## 🚀 Project Overview
**Role-Pilot** is an AI-powered career accelerator and dual-sided job readiness ecosystem. It provides candidates with adaptive coding challenges, ATS resume diagnostics, and real-time voice-interactive mock interviews. For recruiters, Role-Pilot acts as an intelligent candidate discovery and verification platform.

---

## 🏆 Current Hackathon Focus
* **Event**: EchoSphere — Agora Conversational AI Hackathon (Hybrid / Delhi Finale)
* **Target Problem Statement**: **PS11 — Adaptive Voice Interview Platform with Multi-Role AI Panel**
* **Core Challenge**: Build a voice-native, real-time, interruptible AI interview panel representing multiple roles (Technical Lead, Product Manager, Hiring Manager) with shared candidate context, controlled turn-taking, dynamic difficulty adjustments, vague response detection, and evidence-based feedback linked to transcript quotes.

---

## 🛠️ Technology Stack
* **Frontend**: HTML5, Vanilla JavaScript (ES Modules), Custom Vanilla CSS (Glassmorphism design system, no Tailwind unless explicitly requested).
* **Voice & Agent Layer**: **Agora Conversational AI** (WebRTC RTC Engine + Speech-to-Speech / STT-LLM-TTS Agent Pipeline + Tool Calling).
* **Database & Auth**: Supabase (PostgreSQL, Row Level Security, Edge Functions, OTP authentication).
* **AI & Evaluation Layer**: Supabase Edge Functions / Gemini / OpenAI APIs for ATS parsing, code complexity evaluation, and evidence-based STAR interview scoring.

---

## 📌 Architecture & Design Rules
1. **No Framework Overkill**: Keep code modular using native ES modules and vanilla JS (`/js` directory).
2. **File Size Limit**: Keep new JavaScript and HTML modules modular and under 600 lines per file where applicable.
3. **Design Excellence**: Preserve glassmorphic dark mode styling, modern typography (Inter/Outfit), fluid gradients, and micro-animations.
4. **AI Disclosure**: Ensure explicit candidate-facing notice ("Powered by Agora Conversational AI") before starting voice interviews.
5. **No AI Assistant Attribution in Commits**: Never include AI assistant names (e.g. Antigravity, Gemini, Claude) in git commit messages or contributor lists.
