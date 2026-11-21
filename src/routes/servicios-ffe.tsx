import { createFileRoute } from "@tanstack/react-router";
import { ENTITY, FAQ, SERVICES, SERVICES_INTRO } from "@/content/site";
import { SLOTS } from "@/content/images";
import {
  Breadcrumbs,
  EditorialImage,
  PageHero,
  PrimaryCTA,
  Reveal,
} from "@/components/site/primitives";
import { FaqList } from "@/components/site/blocks";
import { faqLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/servicios-ffe")({
  head: () =>
    seo({
      title: "Gestión integral FF&E · Equipamiento hotelero llave en mano | Efilogic",
      description: SERVICES_INTRO.lead,
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

// Tamaños variados: 7+5 llenan la fila, el tercero va de banner ancho.
const SERVICES_LAYOUT = ["md:col-span-7", "md:col-span-5", "md:col-span-12"];
const SERVICES_LAYOUT_RATIO = ["4/3", "3/4", "21/9"];

function Page() {
  return (
    <>
      <div className="bg-crema">
        <Breadcrumbs items={[{ label: "Servicios FF&E" }]} />
      </div>
      <PageHero
        eyebrow={SERVICES_INTRO.eyebrow}
        title={SERVICES_INTRO.title}
        lead={SERVICES_INTRO.lead}
      >
        <PrimaryCTA />
      </PageHero>
      <section className="bg-blanco section-y">
        <div className="wrap grid gap-x-6 gap-y-14 md:grid-cols-12">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} className={SERVICES_LAYOUT[i]!}>
              <div id={s.slug} className="scroll-mt-24">
                <EditorialImage
                  alt={`${s.title} en un hotel terminado`}
                  ratio={SERVICES_LAYOUT_RATIO[i]!}
                  slot={SLOTS.servicios(s.slug)}
                />
                <p className="t-eyebrow mt-5">{String(i + 1).padStart(2, "0")}</p>
                <h2 className="t-h3 mt-2">{s.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed">{s.short}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="tag bg-crema">
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-crema">
        <div className="wrap py-16 text-center md:py-20">
          <p className="t-quote mx-auto max-w-2xl">{SERVICES_INTRO.cierre}</p>
          <div className="mt-8 flex justify-center">
            <PrimaryCTA />
          </div>
        </div>
      </section>
      <section className="bg-blanco section-y">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <h2 className="t-h2 md:col-span-4">Preguntas frecuentes</h2>
          <div className="md:col-span-7 md:col-start-6">
            <FaqList items={FAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
