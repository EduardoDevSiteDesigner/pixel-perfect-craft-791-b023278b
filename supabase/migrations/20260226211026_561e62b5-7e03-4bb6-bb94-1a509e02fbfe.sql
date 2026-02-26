
-- Drop the broken restrictive policies
DROP POLICY IF EXISTS "Allow public inserts" ON public.inscricoes;
DROP POLICY IF EXISTS "Allow read for authenticated" ON public.inscricoes;

-- Recreate as PERMISSIVE policies
CREATE POLICY "Allow public inserts"
  ON public.inscricoes
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow read for authenticated"
  ON public.inscricoes
  FOR SELECT
  TO authenticated
  USING (true);
