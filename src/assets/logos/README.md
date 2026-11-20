# Logos de marcas hoteleras

Esta sección de la web ("La confianza de los líderes del sector", en la
portada) muestra el logo real de cada cadena cuando hay un archivo aquí, y
si no, su nombre en texto. Todos los logos se fuerzan a color negro
automáticamente (filtro `logo-mono` en `styles.css`), así que no hace falta
que el archivo original sea negro: da igual su color.

Ya están subidos: `valentin`, `radisson`, `melia`, `dunas`, `hd-hotels`,
`lopesan`. Para añadir los que faltan (`axel-hotels`, `sercotel`,
`arguineguin-park`, `pierre-vacances`, `adrian-hoteles`, `ereza`):

1. Pide el archivo de logo (preferible en `.svg` con fondo transparente;
   también vale `.png` o `.webp`, siempre que el fondo sea transparente y no
   blanco — si no, el filtro a negro lo convertiría en un bloque opaco) a la
   propia cadena o desde su kit de prensa.
2. Guárdalo en esta carpeta con el nombre exacto de su `slug`, tal como
   aparece en `TRUSTED_BRANDS` dentro de `src/content/site.ts` — por ejemplo
   `sercotel.svg`.
3. Listo: el logo sustituye automáticamente al nombre en texto, sin tocar
   ningún componente.
