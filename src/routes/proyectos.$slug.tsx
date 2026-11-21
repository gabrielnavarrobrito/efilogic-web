import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PROJECTS } from "@/content/site";
import { SLOTS } from "@/content/images";
import { Breadcrumbs, EditorialImage, PrimaryCTA, Stat } from "@/components/site/primitives";
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
  return (
    <>
      <div className="bg-crema">
        <Breadcrumbs items={[{ label: "Proyectos", to: "/proyectos" }, { label: c.name }]} />
      </div>
      <section className="bg-crema">
        <div className="wrap pt-16 pb-20 md:pt-24">
          <span className="tag bg-blanco">{c.type}</span>
          <h1 className="t-h1 mt-6 max-w-4xl">{c.name}</h1>
          <p className="t-lead mt-6 measure">{c.summary}</p>
          <p className="t-eyebrow mt-8">
            {c.location} · {c.year}
          </p>
        </div>
      </section>
      <div className="wrap -mt-2">
        <EditorialImage
          alt={`Vista general de ${c.name}`}
          caption={`${c.name} · ${c.location} · ${c.year}`}
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
            ).map(([k, v], i) => (
              <div key={k} className="border-t border-grafito pt-6">
                <p className="t-eyebrow">
                  {String(i + 1).padStart(2, "0")} · {k}
                </p>
                <h2 className="t-h3 mt-4">{k}</h2>
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
          <div className="mt-12 grid gap-6 md:grid-cols-12">
            <EditorialImage
              className="md:col-span-7"
              alt={`Habitación de ${c.name}`}
              ratio="4/3"
              slot={SLOTS.proyectos(c.slug).habitacion}
            />
            <EditorialImage
              className="md:col-span-5"
              alt={`Detalle de materiales en ${c.name}`}
              ratio="4/5"
              slot={SLOTS.proyectos(c.slug).detalle}
            />
            <EditorialImage
              className="md:col-span-5"
              alt={`Zona común de ${c.name}`}
              ratio="4/5"
              slot={SLOTS.proyectos(c.slug).zonaComun}
            />
            <EditorialImage
              className="md:col-span-7"
              alt={`Restaurante de ${c.name}`}
              ratio="4/3"
              slot={SLOTS.proyectos(c.slug).restaurante}
            />
          </div>
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
