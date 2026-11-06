CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  nombre text NOT NULL CHECK (char_length(nombre) BETWEEN 1 AND 120),
  email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  empresa text NOT NULL CHECK (char_length(empresa) BETWEEN 1 AND 160),
  perfil text NOT NULL CHECK (perfil IN ('arquitectura','compras','pm','propiedad','otro')),
  descripcion text NOT NULL CHECK (char_length(descripcion) BETWEEN 10 AND 3000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_submissions TO anon, authenticated;
GRANT ALL ON public.contact_submissions TO service_role;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Cualquiera puede enviar una solicitud" ON public.contact_submissions FOR INSERT TO anon, authenticated WITH CHECK (true);