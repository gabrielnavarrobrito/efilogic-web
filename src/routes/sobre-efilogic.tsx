import { createFileRoute } from "@tanstack/react-router";
import { ENTITY, PILLARS, STATS } from "@/content/site";
import { Breadcrumbs, EditorialImage, PageHero, PrimaryCTA, Stat } from "@/components/site/primitives";
import { seo } from "@/lib/seo";

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
      <div className="bg-crema"><Breadcrumbs items={[{ label: "Sobre Efilogic" }]} /></div>
      <PageHero eyebrow="Sobre Efilogic" title="Director de orquesta FF&E." lead={ENTITY}>
        <PrimaryCTA />
      </PageHero>
      <section className="bg-blanco section-y">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <div className="md:col-span-6">
            <h2 className="t-h2">Partner, no proveedor.</h2>
            <p className="mt-6 measure">
              No somos un fabricante ni un catálogo. Somos el equipo que se sienta en la mesa de tu proyecto para que la visión del estudio, el presupuesto de compras y la fecha del operador lleguen intactos a la apertura.
            </p>
            <p className="mt-4 measure">
              Desde Las Palmas de Gran Canaria orquestamos proyectos contract en Europa, América y África, con fabricantes de varios continentes y un mismo método.
            </p>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <EditorialImage alt="Restaurante de hotel terminado con luz natural" ratio="4/5" />
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
