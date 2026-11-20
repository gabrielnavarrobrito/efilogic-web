// Registro de logos de marcas hoteleras. Ver src/assets/logos/README.md
// para instrucciones de cómo sustituir el nombre en texto por el logo real.

const logoModules = import.meta.glob<string>("/src/assets/logos/**/*.{svg,png,webp}", {
  eager: true,
  import: "default",
});

const logosBySlug = new Map<string, string>();
for (const [filePath, url] of Object.entries(logoModules)) {
  const slug = filePath.replace(/^\/src\/assets\/logos\//, "").replace(/\.(svg|png|webp)$/i, "");
  logosBySlug.set(slug, url);
}

/** Devuelve la URL del logo subido en src/assets/logos/<slug>.*, o undefined si aún no existe. */
export function getBrandLogo(slug: string): string | undefined {
  return logosBySlug.get(slug);
}
