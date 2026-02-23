CREATE TABLE public.inscricoes (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  country TEXT NOT NULL,
  cep TEXT NOT NULL,
  estado TEXT NOT NULL,
  cidade TEXT NOT NULL,
  bairro TEXT NOT NULL,
  endereco TEXT NOT NULL,
  numero TEXT NOT NULL,
  complemento TEXT,
  cpf TEXT NOT NULL,
  ddd_pais TEXT DEFAULT '+55',
  telefone TEXT NOT NULL,
  titulo_poema TEXT,
  file_urls TEXT[],
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Public table, no RLS needed since anyone can submit
ALTER TABLE public.inscricoes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public inserts" ON public.inscricoes
  FOR INSERT TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow read for authenticated" ON public.inscricoes
  FOR SELECT TO authenticated
  USING (true);