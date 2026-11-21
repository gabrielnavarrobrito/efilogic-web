# Publicar en Dinahosting

La web es HTML estático más un único archivo PHP (el formulario). No necesita
Node.js en el servidor.

## 1. Preparar Resend (una sola vez)

1. Crea una cuenta en [resend.com](https://resend.com).
2. En **Domains**, añade `efilogic.com` y crea en el DNS de Dinahosting los
   registros que te indique (SPF, DKIM). Espera a que aparezca como *Verified*.
3. En **API Keys**, crea una clave con permiso **Sending access** limitada al
   dominio `efilogic.com`.

## 2. Configurar el hosting (una sola vez)

En el panel de Dinahosting:

1. **PHP**: selecciona PHP 8.1 o superior para el dominio.
2. **SSL**: activa el certificado gratuito (Let's Encrypt) para `efilogic.com`
   y `www.efilogic.com`.
3. Por FTP/SFTP o el gestor de archivos, sube
   `deploy/efilogic-config.example.php` **fuera** de `public_html`, junto a
   ella, con el nombre `efilogic-config.php`:

   ```
   /                       ← raíz de tu cuenta
   ├── efilogic-config.php ← aquí (privado)
   └── public_html/        ← la web
   ```

4. Edita `efilogic-config.php` y pon la clave de Resend, el email que recibe
   las solicitudes y una cadena aleatoria en `RATE_LIMIT_SALT`.

## 3. Generar y subir la web (cada vez que haya cambios)

```sh
./deploy/package.sh
```

Esto instala dependencias, pasa lint y tests, compila y crea
`efilogic-web-AAAAMMDD-HHMM.zip`.

1. Haz copia del contenido actual de `public_html` (por si hay que volver atrás).
2. Vacía `public_html` (excepto `.well-known/` si existe) y descomprime el
   `.zip` dentro. Comprueba que `.htaccess` se ha subido (es un archivo oculto).

## 4. Comprobar tras publicar

- `http://efilogic.com` redirige a `https://www.efilogic.com/`.
- Navega por varias páginas y abre una que no exista: debe salir la 404.
- Envía el formulario de contacto y comprueba que llega el email.
- Revisa las cabeceras en [securityheaders.com](https://securityheaders.com)
  (objetivo: A o A+) y el SSL en [ssllabs.com](https://www.ssllabs.com/ssltest/).

## Dominio

El dominio canónico es `https://www.efilogic.com`. Si se quiere usar otro,
cámbialo en `src/content/site.ts` (`SITE_URL`), `public/.htaccess`,
`public/robots.txt` y `ALLOWED_ORIGINS` de `efilogic-config.php`.
