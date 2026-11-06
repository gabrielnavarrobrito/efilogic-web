import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, EditorialImage, PageHero, PrimaryCTA, Reveal } from "@/components/site/primitives";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/para-compras-y-pm")({
  head: () =>
    seo({
      title: "Para compras y project managers · FF&E para aperturas | Efilogic",
      description: "Un único responsable, presupuesto controlado y cronograma blindado para tu apertura hotelera. FF&E con trazabilidad completa.",
      path: "/para-compras-y-pm",
      crumbs: [{ name: "Para compras y PM", path: "/para-compras-y-pm" }],
    }),
  component: Page,
});

const COMPRAS = [
  "Un contrato y un interlocutor para todo el FF&E",
  "Presupuesto cerrado por partidas y sin desvíos ocultos",
  "Documentación de compra y aduana preparada desde el origen",
  "Trazabilidad por pieza, planta y habitación",
];
const PM = [
  "Cronograma inverso desde la fecha de apertura",
  "Hitos con responsable y seguimiento semanal",
  "Coordinación directa con constructora y operador",
  "Entrega por plantas lista para recibir huéspedes",
];

function Page() {
  return (
    <>
      <div className="bg-crema"><Breadcrumbs items={[{ label: "Para compras y PM" }]} /></div>
      <PageHero eyebrow="Compras · Project management · Expansión" title="Cero desvíos. Apertura garantizada por diseño." lead="Integramos todo el FF&E de tu hotel bajo un único responsable para que el presupuesto y el cronograma dejen de ser un riesgo.">
        <PrimaryCTA />
      </PageHero>
      <section className="bg-blanco section-y">
        <div className="wrap grid gap-16 md:grid-cols-2">
          {[
            { e: "Compras", t: "Cero desvíos. Un único responsable.", l: COMPRAS },
            { e: "PM y expansión", t: "Apertura garantizada por diseño.", l: PM },
          ].map((b) => (
            <Reveal key={b.e}>
              <p className="t-eyebrow">{b.e}</p>
              <h2 className="t-h2 mt-4">{b.t}</h2>
              <ul className="mt-10 space-y-4">
                {b.l.map((x) => (
                  <li key={x} className="border-t border-line-strong pt-4">{x}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-crema section-y">
        <div className="wrap">
          <EditorialImage alt="Lobby de hotel terminado el día de su apertura" caption="Lobby · Gran Canaria · 2025" ratio="16/7" />
        </div>
      </section>
    </>
  );
}
