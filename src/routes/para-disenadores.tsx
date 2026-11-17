import { createFileRoute } from "@tanstack/react-router";
import { Breadcrumbs, EditorialImage, PageHero, PrimaryCTA, Reveal } from "@/components/site/primitives";
import { SLOTS } from "@/content/images";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/para-disenadores")({
  head: () =>
    seo({
      title: "Para arquitectos e interioristas · FF&E bespoke | Efilogic",
      description: "Custodiamos tu diseño de la especificación a la instalación: prototipos, acabados aprobados y piezas singulares sin sustituciones.",
      path: "/para-disenadores",
      crumbs: [{ name: "Para diseñadores", path: "/para-disenadores" }],
    }),
  component: Page,
});

const POINTS = [
  { t: "Especificación como contrato", d: "Tu especificación es nuestra referencia. Cualquier alternativa se presenta y se aprueba contigo antes de fabricar." },
  { t: "Prototipos y habitación modelo", d: "Validamos proporciones, tapicerías y acabados en fábrica y en una habitación modelo antes de la serie." },
  { t: "Piezas singulares", d: "Fabricación bespoke con talleres seleccionados y embalaje diseñado para cada pieza de autor." },
  { t: "Revisión final contigo", d: "Recorremos cada planta con tu estudio antes de la apertura y cerramos la lista de remates." },
];

function Page() {
  return (
    <>
      <div className="bg-crema"><Breadcrumbs items={[{ label: "Para diseñadores" }]} /></div>
      <PageHero eyebrow="Arquitectura e interiorismo" title="Tu diseño, intacto." lead="Lo que diseñas es exactamente lo que se instala. Somos el partner que protege tu visión en cada decisión de compra, fabricación e instalación.">
        <PrimaryCTA />
      </PageHero>
      <section className="bg-blanco section-y">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <EditorialImage alt="Detalle de tapicería y madera en una suite de hotel" caption="Detalle · Madrid · 2024" ratio="4/5" slot={SLOTS.paraDisenadores.detalle} />
          </div>
          <div className="space-y-10 md:col-span-5 md:col-start-8">
            {POINTS.map((p) => (
              <Reveal key={p.t}>
                <div className="border-t border-grafito pt-6">
                  <h2 className="t-h3">{p.t}</h2>
                  <p className="mt-3">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-crema">
        <div className="wrap py-24 text-center md:py-32">
          <p className="t-quote mx-auto max-w-3xl">Sin intermediarios. Sin pérdida de diseño.</p>
        </div>
      </section>
    </>
  );
}
