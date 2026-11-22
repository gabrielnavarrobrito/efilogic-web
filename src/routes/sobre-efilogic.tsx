import { createFileRoute } from "@tanstack/react-router";
import { ENTITY, PILLARS, STATS } from "@/content/site";
import { EditorialImage, PageHero, PrimaryCTA, Stat } from "@/components/site/primitives";
import { SLOTS } from "@/content/images";
import { seo } from "@/lib/seo";

const LEAD =
  "Llevamos más de 25 años sentados en la mesa de cada proyecto, no detrás de un catálogo.";

export const Route = createFileRoute("/sobre-efilogic")({
  head: () =>
    seo({
      title: "Sobre Efilogic · Partner FF&E en Las Palmas de Gran Canaria",
      description: ENTITY,
      path: "/sobre-efilogic",
      crumbs: [{ name: "Sobre Efilogic", path: "/sobre-efilogic" }],
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Sobre Efilogic" }]} title="Partner, no proveedor." />
      <section className="bg-blanco section-y">
        <div className="wrap grid items-center gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <EditorialImage
              alt="Restaurante de hotel terminado con luz natural"
              ratio="4/5"
              slot={SLOTS.sobreEfilogic.restaurante}
            />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <h2 className="t-h2">Así trabajamos contigo.</h2>
            <p className="mt-6 measure">
              No vendemos mobiliario suelto. Nos implicamos en tu proyecto para que el diseño, el
              presupuesto y la fecha de apertura lleguen intactos.
            </p>
            <p className="mt-4 measure">
              Desde 2002, en Efilogic conectamos mercados internacionales ofreciendo soluciones
              integrales de producción, transporte y logística. Nacimos dominando la cadena de
              suministro global y evolucionamos para dar respuesta a las exigencias reales del
              equipamiento hotelero y el canal Contract.
            </p>
            <p className="mt-4 measure">
              Nuestra filosofía se basa en un compromiso innegociable: la fiabilidad operativa y la
              tranquilidad del cliente. Combinamos cercanía en el trato, control directo en cuatro
              continentes y supervisión en cada fase para acompañar a cadenas hoteleras y gestores
              de proyectos de principio a fin, garantizando resultados a medida y aperturas sin
              imprevistos.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-crema section-y">
        <div className="wrap grid gap-10 sm:grid-cols-3">
          {STATS.map((s) => (
            <Stat key={s.label} {...s} />
          ))}
        </div>
      </section>
      <section className="bg-blanco section-y">
        <div className="wrap grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="border-t border-grafito pt-6">
              <h2 className="t-h3">{p.title}</h2>
              <p className="mt-3 text-[16px]">{p.text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
