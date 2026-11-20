import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, EditorialImage, PageHero, PrimaryCTA, Reveal } from "@/components/site/primitives";
import { SLOTS } from "@/content/images";
import { seo } from "@/lib/seo";

const TITLE = "Control total de costes, plazos y proveedores.";
const LEAD = "Un único interlocutor para toda la cadena de suministro, para que tu apertura no se retrase ni se desvíe de presupuesto.";
const CIERRE = "Reduce riesgos en tu próxima apertura.";

export const Route = createFileRoute("/para-compras-y-pm")({
  head: () =>
    seo({
      title: "Para compras y project managers · FF&E para aperturas | Efilogic",
      description: LEAD,
      path: "/para-compras-y-pm",
      crumbs: [{ name: "Para compras y PM", path: "/para-compras-y-pm" }],
    }),
  component: Page,
});

const COMPRAS = ["Compras y facturación centralizadas", "Rentabilidad y durabilidad testadas"];
const PM = ["Cronogramas sin desviaciones", "Trazabilidad e incidencias en tiempo real"];

function Page() {
  return (
    <>
      <div className="bg-crema"><Breadcrumbs items={[{ label: "Para compras y PM" }]} /></div>
      <PageHero eyebrow="Compras · Project management · Expansión" title={TITLE} lead={LEAD}>
        <PrimaryCTA />
      </PageHero>
      <section className="bg-blanco section-y">
        <div className="wrap grid items-center gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <EditorialImage alt="Lobby de hotel terminado el día de su apertura" caption="Lobby · Gran Canaria · 2025" ratio="4/5" slot={SLOTS.paraComprasYPm.lobby} />
          </div>
          <div className="grid gap-10 sm:grid-cols-2 md:col-span-7">
            {[
              { e: "Compras", t: "Centralización y rentabilidad.", l: COMPRAS },
              { e: "PM y expansión", t: "Cumplimiento y trazabilidad.", l: PM },
            ].map((b) => (
              <Reveal key={b.e}>
                <p className="t-eyebrow">{b.e}</p>
                <h2 className="t-h3 mt-4">{b.t}</h2>
                <ul className="mt-6 space-y-3">
                  {b.l.map((x) => (
                    <li key={x} className="border-t border-line-strong pt-3 text-[15px]">{x}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-blanco">
        <div className="wrap py-16 text-center md:py-20">
          <p className="t-quote mx-auto max-w-2xl">{CIERRE}</p>
          <div className="mt-8 flex justify-center"><PrimaryCTA /></div>
        </div>
      </section>
    </>
  );
}
