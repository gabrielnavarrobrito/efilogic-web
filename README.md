# Efilogic — web corporativa

Web de Efilogic (FF&E y equipamiento contract hotelero). Se genera como HTML
estático y se publica en Dinahosting.

## Desarrollo

Requisitos: Node.js 22 o superior.

```sh
npm install
npm run dev          # http://localhost:8081
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Genera la web estática en `dist/client` (con CSP) |
| `npm run serve:static` | Sirve `dist/client` en local para revisarla |
| `npm run lint` / `npm run typecheck` / `npm test` | Comprobaciones |
| `npm run audit` | Auditoría de seguridad de dependencias |
| `./deploy/package.sh` | Comprueba, compila y crea el `.zip` para subir |

## Estructura

```
├── deploy/            Script de empaquetado y plantilla de configuración privada
├── docs/              Despliegue, seguridad y roadmap
├── public/            Se copia tal cual a la raíz de la web
│   ├── .htaccess      HTTPS, cabeceras de seguridad, URLs limpias, caché
│   └── api/contact.php  Endpoint del formulario (Resend)
├── scripts/           Postbuild (CSP con hashes) y servidor estático local
└── src/
    ├── assets/        brand/ (logos), home/ (portada), images/ (huecos), logos/ (clientes)
    ├── components/site/  Componentes de la web
    ├── content/       Textos y mapa de imágenes
    ├── lib/           Utilidades y SEO
    ├── routes/        Una ruta por archivo (TanStack Router)
    └── test/
```

## Publicar

Ver [docs/DEPLOY.md](docs/DEPLOY.md). Seguridad: [docs/SEGURIDAD.md](docs/SEGURIDAD.md).
