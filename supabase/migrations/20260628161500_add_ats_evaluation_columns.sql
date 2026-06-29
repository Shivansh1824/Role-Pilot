-- Migration to add structured ATS scoring columns to resume_evaluations

ALTER TABLE public.resume_evaluations
ADD COLUMN IF NOT EXISTS target_job_description TEXT,
ADD COLUMN IF NOT EXISTS ai_score_reasoning TEXT,
ADD COLUMN IF NOT EXISTS ai_improvement_tips JSONB,
ADD COLUMN IF NOT EXISTS matched_skills JSONB,
ADD COLUMN IF NOT EXISTS missing_skills JSONB;
