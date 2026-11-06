import { createFileRoute } from "@tanstack/react-router";
import { ENTITY, FAQ, SERVICES } from "@/content/site";
import { Breadcrumbs, EditorialImage, PageHero, PrimaryCTA, Reveal } from "@/components/site/primitives";
import { FaqList } from "@/components/site/blocks";
import { faqLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/servicios-ffe")({
  head: () =>
    seo({
      title: "Servicios FF&E hotelero · Suministro e instalación | Efilogic",
      description: "Suministro FF&E, consolidación y custodia e instalación de mobiliario hotelero bajo un único responsable. Equipamiento contract para aperturas.",
      path: "/servicios-ffe",
      crumbs: [{ name: "Servicios FF&E", path: "/servicios-ffe" }],
      jsonLd: [
        ...SERVICES.map((s) => ({
          "@context": "https://schema.org",
          "@type": "Service",
          name: s.title,
          description: s.long,
          serviceType: "FF&E hotelero",
          provider: { "@type": "Organization", name: "Efilogic", description: ENTITY },
        })),
        faqLd(FAQ),
      ],
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <div className="bg-crema"><Breadcrumbs items={[{ label: "Servicios FF&E" }]} /></div>
      <PageHero
        eyebrow="Servicios FF&E"
        title="Suministro, custodia e instalación FF&E."
        lead="FF&E es todo el equipamiento que convierte una obra terminada en un hotel listo para abrir. Lo orquestamos de principio a fin, sin intermediarios y sin pérdida de diseño."
      >
        <PrimaryCTA />
      </PageHero>
      {SERVICES.map((s, i) => (
        <section key={s.slug} id={s.slug} className={i % 2 ? "bg-crema section-y" : "bg-blanco section-y"}>
          <div className="wrap grid items-center gap-12 md:grid-cols-12">
            <div className={i % 2 ? "md:col-span-7 md:order-2" : "md:col-span-7"}>
              <EditorialImage alt={`${s.title} en un hotel terminado`} ratio="7/5" />
            </div>
            <Reveal className={i % 2 ? "md:col-span-5 md:order-1" : "md:col-span-5"}>
              <p className="t-eyebrow">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="t-h2 mt-6">{s.title}</h2>
              <p className="mt-6">{s.long}</p>
              <ul className="mt-8 space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="border-t border-line-strong pt-3 text-[16px]">{p}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      ))}
      <section className="bg-blanco section-y">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <h2 className="t-h2 md:col-span-4">Preguntas frecuentes</h2>
          <div className="md:col-span-7 md:col-start-6"><FaqList items={FAQ} /></div>
        </div>
      </section>
    </>
  );
}
