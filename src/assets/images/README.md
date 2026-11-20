# Fotos del sitio

Esta carpeta es donde se suben las fotos reales del sitio. Cada hueco de foto
de la web corresponde a una ruta de archivo exacta aquí dentro. Mientras el
archivo no exista, esa foto se muestra como un marcador gris ("Imagen de
proyecto · sustituir") — así se ve de un vistazo qué falta por subir.

## Cómo subir una foto

1. Localiza la ruta del hueco que quieres rellenar en la lista de abajo.
2. Guarda tu foto con ese nombre exacto dentro de esta carpeta, en formato
   `.jpg`, `.jpeg`, `.png` o `.webp` (solo uno de los cuatro por hueco).
3. Sube el cambio (commit) al repositorio. No hace falta tocar ningún
   archivo de código: la foto aparece sola en su sitio, recortada
   automáticamente a la proporción de ese hueco.

Ejemplo: para la foto de portada del proyecto "HD Sensarena",
guarda el archivo en `src/assets/images/proyectos/hd-sensarena/hero.jpg`.

## Huecos disponibles

- `servicios/<slug-del-servicio>` — foto de cada bloque en **Gestión integral
  FF&E**. Slugs actuales: `equipamiento-integral`, `fabricacion`,
  `instalacion-mobiliario-hotelero`.
- `como-trabajamos/<ancla>` — foto de cada fase en **Cómo trabajamos**.
  Anclas actuales: `estudio-previo`, `prototipado`, `control-calidad`,
  `logistica`, `instalacion`.
- `para-disenadores/detalle` — foto única de la página **Para diseñadores**.
- `para-compras-y-pm/lobby` — foto única de la página **Para compras y PM**.
- `sobre-efilogic/restaurante` — foto única de la página **Sobre Efilogic**.
- `proyectos/<slug-del-proyecto>/hero` — foto principal del proyecto (se usa
  tanto en el listado de **Proyectos** como en la ficha del proyecto).
- `proyectos/<slug-del-proyecto>/habitacion` — foto de habitación, en la
  galería de la ficha del proyecto.
- `proyectos/<slug-del-proyecto>/detalle` — foto de detalle de materiales.
- `proyectos/<slug-del-proyecto>/zona-comun` — foto de zona común.
- `proyectos/<slug-del-proyecto>/restaurante` — foto de restaurante.
  Slugs de proyecto actuales: `hd-sensarena`, `sercotel-canteras`,
  `valetin-somni`, `melia-trinidad-peninsula`.
- `recursos/<slug-del-recurso>/portada` — foto de portada de cada recurso
  (se usa tanto en la tarjeta del listado como en el artículo).
  Slugs actuales: `guia-ffe-hotelero`, `calendario-ffe-aperturas`,
  `embalaje-a-medida-piezas-singulares`.

Si en el futuro se añade un nuevo servicio, proyecto o recurso en
`src/content/site.ts`, su hueco de foto aparece solo siguiendo el mismo
patrón de ruta (usa su `slug` tal cual está en ese archivo).

## Fotos de marca (logo, portada de inicio)

El logo y las fotos de la portada de inicio no están aquí: viven directamente
en `src/assets/` (fuera de esta carpeta) porque son activos de marca fijos,
no huecos de contenido que cambien por proyecto. Para sustituirlas, cambia
directamente esos archivos y mantén el mismo nombre.
