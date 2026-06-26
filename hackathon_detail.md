# Role-Pilot: Intelligent Candidate Discovery & Ranking (Hackathon Integration)

**Date:** June 18, 2026
**Target:** Redrob Hackathon - "India runs Data & AI Challenge"

This document serves as the master blueprint for integrating the Redrob Hackathon problem statement into the existing **Role-Pilot** ecosystem. Any future AI agents or developers reading this should refer to this document for context on the architecture and dataset usage.

---

## 1. The Hackathon Goal
**Problem Statement:** Recruiters go through hundreds of profiles and often miss the right person because keyword filters fail to capture true capability.
**Objective:** Build an AI system that ranks 100,000 candidates against a specific Job Description, looking at career history, skills, and behavioral signals to generate a trusted Top 100 shortlist.

---

## 2. The Role-Pilot Concept Bridge
Instead of treating the hackathon as a standalone script, we are presenting the hackathon solution as the **"Recruiter Pipeline" of Role-Pilot**.

We treat the provided dataset (`candidates.jsonl`) as the **live user database of the Role-Pilot platform**.
*   **Coding Arena Scores:** The `skill_assessment_scores` found in the dataset's `redrob_signals` object are treated as scores the candidate achieved in Role-Pilot's Technical Coding Arena.
*   **Mock Interview Reliability:** Metrics like `interview_completion_rate` and `recruiter_response_rate` are treated as the candidate's behavioral history on Role-Pilot's platform.
*   **Resume Extraction:** The `career_history` and `skills` simulate the data candidates submitted via our existing `form.html` onboarding flow.

By doing this, the AI ranking algorithm isn't just parsing raw data—it's analyzing "Role-Pilot Verified Users."

---

## 3. The Dataset (`India_runs_data_and_ai_challenge`)
The dataset is located at: `@[/Users/shivanshrana/Desktop/Role-Pilot/India_runs_data_and_ai_challenge]`.

### Key Files:
*   `job_description.docx`: The specific AI Engineer role we are ranking candidates for. Focuses on vector search, retrieval systems, and Python experience. Warns against pure "keyword stuffers".
*   `candidates.jsonl`: The massive 100k candidate pool.
*   `candidate_schema.json`: Explains the structure. The most important node is `redrob_signals` which contains the behavioral and assessment metrics.
*   `sample_submission.csv`: The target output format for the Top 100.

---

## 4. Supabase Integration Strategy
To make this a true Full-Stack SaaS feature, we will connect the AI Ranker to our existing Supabase backend.

1.  **AI Data Pipeline (Python Backend)**:
    *   A Python script will parse `candidates.jsonl` and process embeddings for the `career_history`.
    *   It will run semantic similarity against the `job_description.docx` criteria.
    *   It will apply weight multipliers based on Role-Pilot `skill_assessment_scores` and penalize "ghosts" using `recruiter_response_rate`.
    *   The script will identify the Top 100 candidates.
2.  **Supabase Storage (`hackathon_candidates` table)**:
    *   Instead of just saving a CSV locally, the Python script will securely push the Top 100 candidates into a new Supabase table: `hackathon_candidates`.
    *   **Schema Schema:** `candidate_id`, `anonymized_name`, `match_score`, `ai_reasoning` (a brief text explaining why they fit), and `signals_summary` (JSON).
3.  **Role-Pilot Frontend (`ats-recruiter.html`)**:
    *   We will build a glassmorphic **Recruiter Dashboard** in Role-Pilot.
    *   This page will use the Supabase Javascript Client to fetch the data from `hackathon_candidates`.
    *   It will display a premium leaderboard for recruiters, showcasing the Top 100 candidates with visual tags explaining *why* the AI selected them (e.g., "Role-Pilot Verified: 95/100 Python Score").

---

## 5. Development Phases
1.  **Phase 1:** Build the Python AI Ranker (Chunking, Embeddings, Scoring Logic) and test it on `sample_candidates.json`.
2.  **Phase 2:** Set up the `hackathon_candidates` table in Supabase and write the script to push the Top 100 results there.
3.  **Phase 3:** Develop the UI (`ats-recruiter.html`) in Role-Pilot to read from Supabase and beautifully visualize the shortlisted talent for the judges.
4.  **Phase 4:** Run the final script on the full 100k dataset to generate the `sample_submission.csv` and populate the database.
