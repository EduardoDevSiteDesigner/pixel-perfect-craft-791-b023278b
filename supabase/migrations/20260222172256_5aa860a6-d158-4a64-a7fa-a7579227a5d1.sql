INSERT INTO storage.buckets (id, name, public) VALUES ('inscricoes-files', 'inscricoes-files', true);

CREATE POLICY "Allow public uploads" ON storage.objects
  FOR INSERT TO anon, authenticated
  WITH CHECK (bucket_id = 'inscricoes-files');

CREATE POLICY "Allow public reads" ON storage.objects
  FOR SELECT TO anon, authenticated
  USING (bucket_id = 'inscricoes-files');