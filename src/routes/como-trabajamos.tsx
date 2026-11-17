import { createFileRoute } from "@tanstack/react-router";
import { PROCESS } from "@/content/site";
import { SLOTS } from "@/content/images";
import { Breadcrumbs, EditorialImage, PageHero, PrimaryCTA, ProcessSteps, Reveal } from "@/components/site/primitives";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/como-trabajamos")({
  head: () =>
    seo({
      title: "Cómo trabajamos · Gestión de proyecto FF&E | Efilogic",
      description: "Gestión de proyecto FF&E en seis fases: briefing, compra, fabricación, consolidación, entrega e instalación, con un único responsable.",
      path: "/como-trabajamos",
      crumbs: [{ name: "Cómo trabajamos", path: "/como-trabajamos" }],
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <div className="bg-crema"><Breadcrumbs items={[{ label: "Cómo trabajamos" }]} /></div>
      <PageHero
        eyebrow="Cómo trabajamos"
        title="Planificamos desde el día de apertura hacia atrás."
        lead="Cada pieza tiene su fecha y cada fecha, su responsable. Así sabes en qué punto está tu proyecto sin tener que preguntarlo."
      >
        <PrimaryCTA />
      </PageHero>
      <section className="bg-blanco section-y">
        <div className="wrap">
          <ProcessSteps steps={PROCESS} />
        </div>
      </section>
      <section className="bg-crema section-y">
        <div className="wrap space-y-24">
          {PROCESS.map((p, i) => (
            <Reveal key={p.title}>
              <div className="grid items-center gap-10 md:grid-cols-12">
                <div className={i % 2 ? "md:col-span-6 md:order-2 md:col-start-7" : "md:col-span-6"}>
                  <EditorialImage alt={`Fase de ${p.title.toLowerCase()} en un proyecto FF&E hotelero`} ratio="3/2" slot={SLOTS.comoTrabajamos(p.title)} />
                </div>
                <div className={i % 2 ? "md:col-span-5 md:order-1" : "md:col-span-5 md:col-start-8"}>
                  <p className="t-eyebrow">Fase {String(i + 1).padStart(2, "0")}</p>
                  <h2 className="t-h2 mt-4">{p.title}</h2>
                  <p className="mt-6 measure">{p.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
