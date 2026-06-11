-- Create buckets
INSERT INTO storage.buckets (id, name, public) 
VALUES ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO storage.buckets (id, name, public) 
VALUES ('resumes', 'resumes', false)
ON CONFLICT (id) DO NOTHING;

-- Avatars RLS (Public Read, Authenticated Write)
CREATE POLICY "Avatar images are publicly accessible."
  ON storage.objects FOR SELECT
  USING ( bucket_id = 'avatars' );

CREATE POLICY "Users can upload their own avatar."
  ON storage.objects FOR INSERT
  WITH CHECK ( bucket_id = 'avatars' AND auth.uid() = owner );

CREATE POLICY "Users can update their own avatar."
  ON storage.objects FOR UPDATE
  USING ( bucket_id = 'avatars' AND auth.uid() = owner );

CREATE POLICY "Users can delete their own avatar."
  ON storage.objects FOR DELETE
  USING ( bucket_id = 'avatars' AND auth.uid() = owner );

-- Resumes RLS (Private Read/Write)
CREATE POLICY "Users can see their own resumes."
  ON storage.objects FOR SELECT
  USING ( bucket_id = 'resumes' AND auth.uid() = owner );

CREATE POLICY "Users can upload their own resumes."
  ON storage.objects FOR INSERT
  WITH CHECK ( bucket_id = 'resumes' AND auth.uid() = owner );

CREATE POLICY "Users can update their own resumes."
  ON storage.objects FOR UPDATE
  USING ( bucket_id = 'resumes' AND auth.uid() = owner );

CREATE POLICY "Users can delete their own resumes."
  ON storage.objects FOR DELETE
  USING ( bucket_id = 'resumes' AND auth.uid() = owner );
