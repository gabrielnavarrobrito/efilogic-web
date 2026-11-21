import { createFileRoute } from "@tanstack/react-router";
import { ENTITY } from "@/content/site";
import { Breadcrumbs, Eyebrow } from "@/components/site/primitives";
import { ContactForm } from "@/components/site/blocks";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contacto")({
  head: () =>
    seo({
      title: "Contacto · Hablemos de tu proyecto | Efilogic",
      description:
        "Cuéntanos tu proyecto hotelero y tu fecha de apertura. Efilogic, partner FF&E con sede en Las Palmas de Gran Canaria.",
      path: "/contacto",
      crumbs: [{ name: "Contacto", path: "/contacto" }],
    }),
  component: Page,
});

function Page() {
  return (
    <>
      <div className="bg-crema">
        <Breadcrumbs items={[{ label: "Contacto" }]} />
      </div>
      <section className="bg-crema">
        <div className="wrap pt-16 pb-20 md:pt-24">
          <Eyebrow>Contacto</Eyebrow>
          <h1 className="t-h1 mt-6 max-w-4xl">Hablemos de tu proyecto.</h1>
          <p className="t-lead mt-6 measure">
            Tu apertura tiene fecha. Cuéntanos tu visión y empezamos el plan desde ella.
          </p>
        </div>
      </section>
      <section className="bg-blanco section-y">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <div className="border-t border-grafito pt-6">
              <p className="t-eyebrow">Sede</p>
              <address className="mt-4 not-italic">
                C. Nicolás Estévanez 53, Local Izquierdo
                <br />
                Las Palmas de Gran Canaria, 35007
                <br />
                España
              </address>
            </div>
            <p className="mt-10 text-[16px]">{ENTITY}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
