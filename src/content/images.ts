// Registro central de fotos del sitio.
//
// Cómo subir una foto:
// 1. Busca en este archivo el "slot" (hueco) que quieres rellenar, por ejemplo
//    SLOTS.proyectos("hotel-costa-atlantica").hero
// 2. Fíjate en la ruta de archivo que indica (p. ej. "proyectos/hotel-costa-atlantica/hero").
// 3. Guarda tu foto en src/assets/images/<esa-ruta>.jpg (también valen .jpeg, .png o .webp).
// 4. Listo: no hay que tocar ningún componente. Si el archivo no existe todavía,
//    la web muestra automáticamente un marcador gris en su lugar.
//
// No hace falta recortar la imagen a mano: cada hueco ya tiene una proporción
// fija (ratio) definida en la página y la foto se recorta sola para rellenarla.

const imageModules = import.meta.glob<string>("/src/assets/images/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  import: "default",
});

const imagesByPath = new Map<string, string>();
for (const [filePath, url] of Object.entries(imageModules)) {
  const key = filePath
    .replace(/^\/src\/assets\/images\//, "")
    .replace(/\.(jpg|jpeg|png|webp)$/i, "");
  imagesByPath.set(key, url);
}

/** Devuelve la URL de la foto subida en src/assets/images/<path>.*, o undefined si aún no existe. */
export function getSlotImage(path: string): string | undefined {
  return imagesByPath.get(path);
}

/** Convierte un título ("Fabricación") en un nombre de archivo ("fabricacion"). */
function slugify(title: string): string {
  return title
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

// Rutas de archivo de cada hueco de foto del sitio, agrupadas por página.
// Sirven de referencia rápida de "dónde va cada foto".
export const SLOTS = {
  servicios: (slug: string) => `servicios/${slug}`,
  comoTrabajamos: (title: string) => `como-trabajamos/${slugify(title)}`,
  paraDisenadores: {
    detalle: "para-disenadores/detalle",
  },
  paraComprasYPm: {
    lobby: "para-compras-y-pm/lobby",
  },
  sobreEfilogic: {
    restaurante: "sobre-efilogic/restaurante",
  },
  proyectos: (slug: string) => ({
    hero: `proyectos/${slug}/hero`,
    habitacion: `proyectos/${slug}/habitacion`,
    detalle: `proyectos/${slug}/detalle`,
    zonaComun: `proyectos/${slug}/zona-comun`,
    restaurante: `proyectos/${slug}/restaurante`,
  }),
  recursos: (slug: string) => `recursos/${slug}/portada`,
} as const;
