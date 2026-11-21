# Efilogic web — instrucciones del proyecto

Sitio corporativo de Efilogic. TanStack Start + React + Tailwind, exportado como
HTML estático y publicado en Dinahosting (Apache + PHP). No depende de Lovable
ni de ningún backend externo salvo Resend para el envío del formulario.

## Reglas

- Mantén la portada como secciones editoriales sin marco que usan fotos
  incluidas en el repositorio (`src/assets/home/`). No uses imágenes inventadas
  de proyectos.
- Todo el texto editable vive en `src/content/site.ts`; las fotos por hueco en
  `src/assets/images/` (ver su README).
- No añadas scripts, fuentes ni imágenes de terceros (CDN, Google Fonts,
  analítica…) sin actualizar la CSP de `scripts/postbuild.mjs`.
- Nunca subas secretos al repositorio. La clave de Resend vive en
  `efilogic-config.php` fuera de `public_html` (ver `docs/DEPLOY.md`).
- `src/routeTree.gen.ts` se genera solo; no lo edites a mano.
- Antes de publicar: `npm run lint && npm test && npm run build`.
