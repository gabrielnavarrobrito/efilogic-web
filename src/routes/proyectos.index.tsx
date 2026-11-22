import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS } from "@/content/site";
import { PageHero, Reveal } from "@/components/site/primitives";
import { ProjectCard } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/proyectos/")({
  head: () =>
    seo({
      title: "Proyectos FF&E hoteleros · Casos | Efilogic",
      description:
        "Casos de FF&E para aperturas y renovaciones hoteleras: reto, solución y resultado de cada proyecto contract.",
      path: "/proyectos",
      crumbs: [{ name: "Proyectos", path: "/proyectos" }],
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Proyectos" }]}
        title="Hoteles abiertos en fecha, idénticos a su diseño."
      />
      <section className="bg-blanco pb-20 md:pb-28">
        <ul className="wrap grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-y-16">
          {PROJECTS.map((c) => (
            <li key={c.slug}>
              <Reveal>
                <ProjectCard c={c} />
              </Reveal>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
