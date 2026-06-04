-- Create Profiles Table (maps 1:1 with auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    email TEXT,
    full_name TEXT,
    username TEXT UNIQUE,
    avatar_url TEXT,
    target_role TEXT,
    experience_level TEXT,
    skills TEXT[],
    resume_url TEXT,
    resume_text TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row-Level Security (RLS) on profiles
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- Profiles RLS Policies
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);


-- Create Interviews Table (Mock Interviews History)
CREATE TABLE IF NOT EXISTS public.interviews (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    role_profile TEXT NOT NULL,
    trugen_session_id TEXT UNIQUE,
    status TEXT NOT NULL CHECK (status IN ('scheduled', 'in_progress', 'completed', 'failed')),
    overall_score INTEGER,
    evaluation_report JSONB,
    transcript JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on interviews
ALTER TABLE public.interviews ENABLE ROW LEVEL SECURITY;

-- Interviews RLS Policies
CREATE POLICY "Users can view their own interviews" ON public.interviews
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own interviews" ON public.interviews
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own interviews" ON public.interviews
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own interviews" ON public.interviews
    FOR DELETE USING (auth.uid() = user_id);

-- Create Index on interviews(user_id) for faster lookups
CREATE INDEX IF NOT EXISTS interviews_user_id_idx ON public.interviews(user_id);


-- Create Resume Evaluations Table (ATS Score History)
CREATE TABLE IF NOT EXISTS public.resume_evaluations (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    job_title TEXT NOT NULL,
    job_description TEXT NOT NULL,
    ats_score INTEGER NOT NULL CHECK (ats_score >= 0 AND ats_score <= 100),
    matched_skills TEXT[],
    missing_skills TEXT[],
    feedback JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on resume_evaluations
ALTER TABLE public.resume_evaluations ENABLE ROW LEVEL SECURITY;

-- Resume Evaluations RLS Policies
CREATE POLICY "Users can view their own evaluations" ON public.resume_evaluations
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own evaluations" ON public.resume_evaluations
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete their own evaluations" ON public.resume_evaluations
    FOR DELETE USING (auth.uid() = user_id);

-- Create Index on resume_evaluations(user_id)
CREATE INDEX IF NOT EXISTS resume_evaluations_user_id_idx ON public.resume_evaluations(user_id);


-- Create Roadmaps Table (Personalized Roadmaps)
CREATE TABLE IF NOT EXISTS public.roadmaps (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
    target_role TEXT NOT NULL,
    roadmap_steps JSONB NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable RLS on roadmaps
ALTER TABLE public.roadmaps ENABLE ROW LEVEL SECURITY;

-- Roadmaps RLS Policies
CREATE POLICY "Users can view their own roadmaps" ON public.roadmaps
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own roadmaps" ON public.roadmaps
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own roadmaps" ON public.roadmaps
    FOR UPDATE USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own roadmaps" ON public.roadmaps
    FOR DELETE USING (auth.uid() = user_id);

-- Create Index on roadmaps(user_id)
CREATE INDEX IF NOT EXISTS roadmaps_user_id_idx ON public.roadmaps(user_id);


-- Create PostgreSQL Sync Trigger for auth.users -> public.profiles
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    new.id,
    new.email,
    COALESCE(new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'name'),
    new.raw_user_meta_data->>'avatar_url'
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger execution after signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
