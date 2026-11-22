import { createFileRoute } from "@tanstack/react-router";
import { EditorialImage, PageHero, PrimaryCTA, Reveal } from "@/components/site/primitives";
import { SLOTS } from "@/content/images";
import { seo } from "@/lib/seo";

const TITLE = "Fidelidad técnica, sin sorpresas en obra.";
const LEAD =
  "Desarrollo técnico, fabricación a medida y montaje final, fieles a tu especificación.";
const CIERRE = "¿Buscas un partner operativo para tu próximo proyecto?";

export const Route = createFileRoute("/para-disenadores")({
  head: () =>
    seo({
      title: "Para interioristas y estudios · FF&E bespoke | Efilogic",
      description: LEAD,
      path: "/para-disenadores",
      crumbs: [{ name: "Para diseñadores", path: "/para-disenadores" }],
    }),
  component: Page,
});

const POINTS = [
  { t: "Fichas técnicas", d: "Tu concepto, traducido a documentación constructiva precisa." },
  { t: "Muestras y prototipos", d: "Validados contigo antes de producir en serie." },
  { t: "Sourcing y fabricación", d: "Red de fabricantes seleccionados en varios continentes." },
  { t: "Logística y montaje", d: "Cada pieza, intacta hasta su instalación final." },
];

function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Para diseñadores" }]} title={TITLE} />
      <section className="bg-blanco section-y">
        <div className="wrap grid items-center gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <EditorialImage
              alt="Detalle de tapicería y madera en una suite de hotel"
              caption="Detalle · Madrid · 2024"
              ratio="4/5"
              slot={SLOTS.paraDisenadores.detalle}
            />
          </div>
          <div className="grid gap-8 sm:grid-cols-2 md:col-span-5">
            {POINTS.map((p) => (
              <Reveal key={p.t}>
                <div className="border-t border-grafito pt-5">
                  <h2 className="t-h3 text-[18px]">{p.t}</h2>
                  <p className="mt-2 text-[15px]">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-crema">
        <div className="wrap py-24 text-center md:py-32">
          <p className="t-quote mx-auto max-w-3xl">{CIERRE}</p>
          <div className="mt-10 flex justify-center">
            <PrimaryCTA />
          </div>
        </div>
      </section>
    </>
  );
}
