import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS } from "@/content/site";
import { PageHero, Reveal } from "@/components/site/primitives";
import { CaseStudyBlock } from "@/components/site/blocks";
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
      <section className="bg-blanco section-y">
        <div className="wrap space-y-28">
          {PROJECTS.map((c, i) => (
            <Reveal key={c.slug}>
              <CaseStudyBlock c={c} reverse={i % 2 === 1} headingLevel="h2" />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
