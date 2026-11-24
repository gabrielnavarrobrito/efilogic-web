import { createFileRoute } from "@tanstack/react-router";
import { ENTITY, SEDE } from "@/content/site";
import { PageHero } from "@/components/site/primitives";
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
      <PageHero crumbs={[{ label: "Contacto" }]} title="Hablemos de tu proyecto." />
      <section className="bg-blanco section-y">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
          <aside className="md:col-span-4 md:col-start-9">
            <address className="space-y-8 not-italic">
              <div className="border-t border-grafito pt-6">
                <p className="t-eyebrow">Sede Gran Canaria</p>
                <p className="mt-4">
                  C. Nicolás Estévanez 53, Local Izquierdo
                  <br />
                  35007 Las Palmas de Gran Canaria
                  <br />
                  España
                </p>
              </div>
              <div className="border-t border-grafito pt-6">
                <p className="t-eyebrow">Teléfono</p>
                <a href={SEDE.phoneHref} className="link-text mt-4 inline-block">
                  {SEDE.phone}
                </a>
              </div>
              <div className="border-t border-grafito pt-6">
                <p className="t-eyebrow">Email</p>
                <a href={`mailto:${SEDE.email}`} className="link-text mt-4 inline-block">
                  {SEDE.email}
                </a>
              </div>
            </address>
            <p className="mt-10 text-[16px]">{ENTITY}</p>
          </aside>
        </div>
      </section>
    </>
  );
}
