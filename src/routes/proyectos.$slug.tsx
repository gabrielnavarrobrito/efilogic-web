import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PROJECTS, projectMeta } from "@/content/site";
import { SLOTS, getFolderImages, getSlotImage } from "@/content/images";

const FIXED = [
  { key: "habitacion", label: "Habitación" },
  { key: "detalle", label: "Detalle de materiales" },
  { key: "zonaComun", label: "Zona común" },
  { key: "restaurante", label: "Restaurante" },
] as const;
import { EditorialImage, PageHero, PrimaryCTA, Stat } from "@/components/site/primitives";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/proyectos/$slug")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.slug === params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? seo({
          title: `${loaderData.project.name} · Caso FF&E | Efilogic`,
          description: loaderData.project.summary,
          path: `/proyectos/${params.slug}`,
          type: "article",
          crumbs: [
            { name: "Proyectos", path: "/proyectos" },
            { name: loaderData.project.name, path: `/proyectos/${params.slug}` },
          ],
        })
      : {
          meta: [
            { title: "Proyecto no disponible | Efilogic" },
            { name: "robots", content: "noindex" },
          ],
        },
  component: Page,
});

function Page() {
  const { project: c } = Route.useLoaderData();
  const slots = SLOTS.proyectos(c.slug);
  // Galería: primero los huecos fijos que tengan foto, después la carpeta galeria/.
  const gallery = [
    ...FIXED.flatMap((f) => {
      const src = getSlotImage(slots[f.key]);
      return src ? [{ src, alt: `${f.label} de ${c.name}` }] : [];
    }),
    ...getFolderImages(slots.galeria).map((img) => ({
      src: img.url,
      alt: `${c.name}: ${c.photoAlts?.[img.key.split("/").pop() ?? ""] ?? altFromFile(img.key)}`,
    })),
  ];
  return (
    <>
      <PageHero
        crumbs={[{ label: "Proyectos", to: "/proyectos" }, { label: c.name }]}
        title={c.name}
      />
      <div className="wrap -mt-2">
        <EditorialImage
          alt={`Vista general de ${c.name}`}
          caption={`${c.name} · ${projectMeta(c)}`}
          ratio="16/8"
          className="mt-0"
          slot={SLOTS.proyectos(c.slug).hero}
        />
      </div>
      <section className="bg-blanco section-y">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <div className="space-y-14 md:col-span-7">
            {(
              [
                ["Reto", c.reto],
                ["Solución", c.solucion],
                ["Resultado", c.resultado],
              ] as const
            ).map(([k, v]) => (
              <div key={k} className="border-t border-grafito pt-6">
                <h2 className="t-h3">{k}</h2>
                <p className="mt-4 measure">{v}</p>
              </div>
            ))}
          </div>
          <div className="grid content-start gap-10 md:col-span-4 md:col-start-9">
            {c.figures.map((f) => (
              <Stat key={f.label} {...f} />
            ))}
          </div>
        </div>
      </section>
      <section className="bg-crema section-y">
        <div className="wrap">
          <h2 className="t-h2">Galería</h2>
          {gallery.length ? (
            <div className="mt-12 gap-6 md:columns-2">
              {gallery.map((img) => (
                <figure key={img.src} className="mb-6 break-inside-avoid">
                  <img src={img.src} alt={img.alt} loading="lazy" className="w-full" />
                </figure>
              ))}
            </div>
          ) : (
            // Sin fotos todavía: huecos de referencia para saber qué subir.
            <div className="mt-12 grid gap-6 md:grid-cols-12">
              {FIXED.map((f, i) => (
                <EditorialImage
                  key={f.key}
                  className={i % 3 === 0 ? "md:col-span-7" : "md:col-span-5"}
                  alt={`${f.label} de ${c.name}`}
                  ratio={i % 3 === 0 ? "4/3" : "4/5"}
                  slot={slots[f.key]}
                />
              ))}
            </div>
          )}
          <div className="mt-16 flex flex-wrap items-center gap-8">
            <PrimaryCTA />
            <Link to="/proyectos" className="link-text font-medium">
              Ver más proyectos
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

// "proyectos/x/galeria/01-terraza-vistas-mar" -> "terraza vistas mar"
function altFromFile(key: string) {
  return (key.split("/").pop() ?? "")
    .replace(/^\d+[-_]?/, "")
    .replace(/[-_]+/g, " ")
    .trim();
}
