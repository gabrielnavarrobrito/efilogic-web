#!/usr/bin/env bash
# Genera el build y lo empaqueta en un .zip listo para subir a Dinahosting.
set -euo pipefail
cd "$(dirname "$0")/.."

npm ci
npm run lint
npm test
npm run build

STAMP=$(date +%Y%m%d-%H%M)
ZIP="efilogic-web-$STAMP.zip"
(cd dist/client && zip -qr "../../$ZIP" . -x '*.DS_Store')
echo "Listo: $ZIP — descomprímelo dentro de public_html/ (ver docs/DEPLOY.md)."
