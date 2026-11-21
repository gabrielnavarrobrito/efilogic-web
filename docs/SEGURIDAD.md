# Seguridad

Revisión hecha el 21/11/2026 al dejar de depender de Lovable.

## Problemas encontrados y corregidos

| Problema | Riesgo | Solución |
| --- | --- | --- |
| `.env` con claves de Supabase subido a git | Exposición de credenciales del backend | Eliminado del repo y añadido a `.gitignore` |
| El navegador escribía directamente en la base de datos (Supabase, clave pública + política `INSERT ... WITH CHECK (true)`) | Cualquiera podía llenar la tabla de spam sin límite saltándose el formulario | Formulario reenviado a un endpoint propio con validación y límites (ver abajo) |
| Dependencias con vulnerabilidades altas (`vite` 8.1.5, `zod` 3.x) | Ejecución de comandos en desarrollo / agotamiento de memoria | `vite` actualizado a 8.1.6; `zod` eliminado (no se usaba). `npm audit`: 0 vulnerabilidades |
| Unos 45 paquetes y 46 componentes de interfaz sin usar (shadcn, Supabase, Drizzle, React Query…) | Más superficie de ataque y de cadena de suministro | Eliminados |
| Google Fonts cargado desde Google | Envío de la IP del visitante a terceros (RGPD) e impide una CSP estricta | Montserrat incluida en la propia web |
| Scripts de Lovable (reporte de errores, configuración de Vite) | Dependencia de un tercero en producción | Eliminados |
| Sin cabeceras de seguridad | Clickjacking, sniffing de MIME, XSS sin mitigar | Añadidas (ver abajo) |

## Capa de seguridad añadida

**Navegador (cabeceras y CSP)**

- Content-Security-Policy por página con hash SHA-256 de cada script inline
  (`scripts/postbuild.mjs`): solo se ejecuta el código de la propia web; nada
  de `unsafe-inline` ni `unsafe-eval` para scripts.
- `public/.htaccess`: HTTPS forzado + HSTS, `frame-ancestors 'none'` y
  `X-Frame-Options: DENY`, `nosniff`, `Referrer-Policy`, `Permissions-Policy`,
  `Cross-Origin-Opener-Policy`/`Resource-Policy`, sin listado de carpetas.
- Bloqueo de archivos ocultos, copias de seguridad, código fuente y cualquier
  PHP que no sea el del formulario.

**Formulario (`public/api/contact.php`)**

- Solo `POST` con JSON y desde los orígenes permitidos (protección CSRF).
- Límite de tamaño (16 KB) y validación en servidor de todos los campos.
- Anti-spam: campo trampa invisible y tiempo mínimo de relleno.
- Límite de 5 envíos por IP y hora (IPs guardadas solo como hash).
- Texto saneado contra inyección de cabeceras y escapado en el email (sin XSS).
- La clave de Resend vive fuera de la carpeta pública y nunca llega al navegador.

**Build**

- El postbuild falla si encuentra en `dist/` claves o referencias a
  Supabase/Lovable.
- Sin source maps en producción.

## Pendiente (fuera del código)

- Desconectar el proyecto en Lovable y revocar su acceso a GitHub (ver más abajo).
- Ver si el proyecto de Lovable Cloud/Supabase guarda solicitudes de contacto
  antiguas. Si las hay, exportarlas y después borrar el proyecto: sus claves
  públicas siguen en el historial de git.
- Publicar una **política de privacidad** y enlazarla desde el formulario
  (obligatorio por RGPD al recoger nombre y email).
- Activar la autenticación en dos pasos en GitHub, Dinahosting y Resend.

## Mantenimiento

- `npm run audit` cada mes y antes de cada publicación.
- Si se añade cualquier recurso externo (analítica, mapas, vídeo…), hay que
  añadir su dominio a `BASE_CSP` en `scripts/postbuild.mjs`.
