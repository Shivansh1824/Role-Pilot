-- Enable RLS (just in case)
ALTER TABLE public.resume_evaluations ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist to prevent duplicate errors
DROP POLICY IF EXISTS "Users can insert their own evaluations" ON public.resume_evaluations;
DROP POLICY IF EXISTS "Users can view their own evaluations" ON public.resume_evaluations;
DROP POLICY IF EXISTS "Users can update their own evaluations" ON public.resume_evaluations;
DROP POLICY IF EXISTS "Users can delete their own evaluations" ON public.resume_evaluations;

-- 1. Policy: Users can insert evaluations for their own resumes
CREATE POLICY "Users can insert their own evaluations" 
ON public.resume_evaluations FOR INSERT 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.resumes 
    WHERE id = resume_evaluations.resume_id AND user_id = auth.uid()
  )
);

-- 2. Policy: Users can view evaluations for their own resumes
CREATE POLICY "Users can view their own evaluations" 
ON public.resume_evaluations FOR SELECT 
USING (
  EXISTS (
    SELECT 1 FROM public.resumes 
    WHERE id = resume_evaluations.resume_id AND user_id = auth.uid()
  )
);

-- 3. Policy: Users can update evaluations for their own resumes
CREATE POLICY "Users can update their own evaluations" 
ON public.resume_evaluations FOR UPDATE 
USING (
  EXISTS (
    SELECT 1 FROM public.resumes 
    WHERE id = resume_evaluations.resume_id AND user_id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM public.resumes 
    WHERE id = resume_evaluations.resume_id AND user_id = auth.uid()
  )
);

-- 4. Policy: Users can delete evaluations for their own resumes
CREATE POLICY "Users can delete their own evaluations" 
ON public.resume_evaluations FOR DELETE 
USING (
  EXISTS (
    SELECT 1 FROM public.resumes 
    WHERE id = resume_evaluations.resume_id AND user_id = auth.uid()
  )
);
