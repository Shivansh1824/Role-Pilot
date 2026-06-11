-- 1. Create the `resumes` table
CREATE TABLE IF NOT EXISTS public.resumes (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    title TEXT NOT NULL,
    file_url TEXT NOT NULL,
    parsed_text TEXT,
    is_primary BOOLEAN DEFAULT false,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 2. Update `profiles` table (Drop old columns if they exist)
ALTER TABLE public.profiles 
DROP COLUMN IF EXISTS resume_url,
DROP COLUMN IF EXISTS resume_text;

-- 3. Update `resume_evaluations` table
-- Note: We assume the table already exists based on your ER diagram.
-- If the table needs to be created from scratch, this ALTER will fail and we should do a CREATE TABLE instead.
-- We will rename ats_score, add new columns, and add the resume_id foreign key.

ALTER TABLE public.resume_evaluations
-- Rename the existing ats_score to original_ats_score
RENAME COLUMN ats_score TO original_ats_score;

ALTER TABLE public.resume_evaluations
ADD COLUMN IF NOT EXISTS resume_id UUID REFERENCES public.resumes(id) ON DELETE CASCADE,
ADD COLUMN IF NOT EXISTS refined_ats_score INT4,
ADD COLUMN IF NOT EXISTS refined_resume_content TEXT;

-- 4. Row Level Security (RLS) for the `resumes` table
ALTER TABLE public.resumes ENABLE ROW LEVEL SECURITY;

-- Policy: Users can insert their own resumes
CREATE POLICY "Users can insert their own resumes" 
ON public.resumes FOR INSERT 
WITH CHECK (auth.uid() = user_id);

-- Policy: Users can view their own resumes
CREATE POLICY "Users can view their own resumes" 
ON public.resumes FOR SELECT 
USING (auth.uid() = user_id);

-- Policy: Users can update their own resumes (e.g., set is_primary)
CREATE POLICY "Users can update their own resumes" 
ON public.resumes FOR UPDATE 
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

-- Policy: Users can delete their own resumes
CREATE POLICY "Users can delete their own resumes" 
ON public.resumes FOR DELETE 
USING (auth.uid() = user_id);
