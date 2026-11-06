import { createFileRoute } from "@tanstack/react-router";
import { FAQ, RESOURCES } from "@/content/site";
import { Breadcrumbs, PageHero } from "@/components/site/primitives";
import { FaqList, ResourceCard } from "@/components/site/blocks";
import { faqLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/recursos/")({
  head: () =>
    seo({
      title: "Recursos FF&E hotelero · Guías y calendario | Efilogic",
      description: "Guías, calendario FF&E para aperturas y artículos técnicos sobre equipamiento contract e instalación de mobiliario hotelero.",
      path: "/recursos",
      crumbs: [{ name: "Recursos", path: "/recursos" }],
      jsonLd: [faqLd(FAQ)],
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <div className="bg-crema"><Breadcrumbs items={[{ label: "Recursos" }]} /></div>
      <PageHero eyebrow="Recursos" title="Conocimiento para tu próxima apertura." lead="Definiciones claras, procesos paso a paso y aprendizajes de más de 25 años en proyectos FF&E hoteleros." />
      <section className="bg-blanco section-y">
        <div className="wrap grid gap-6 md:grid-cols-3">
          {RESOURCES.map((r) => (
            <ResourceCard key={r.slug} r={r} />
          ))}
        </div>
      </section>
      <section className="bg-crema section-y">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <h2 className="t-h2 md:col-span-4">Preguntas frecuentes</h2>
          <div className="md:col-span-7 md:col-start-6"><FaqList items={FAQ} /></div>
        </div>
      </section>
    </>
  );
}
