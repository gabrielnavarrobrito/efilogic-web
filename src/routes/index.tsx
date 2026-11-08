import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ENTITY, FAQ, SERVICES, STATS } from "@/content/site";
import { Eyebrow, PrimaryCTA, Reveal, SectionHeader, Stat } from "@/components/site/primitives";
import { ContactForm, FaqList } from "@/components/site/blocks";
import { faqLd, seo } from "@/lib/seo";
import heroSuite from "@/assets/hero-hotel-suite.jpg";
import hotelLobby from "@/assets/hotel-lobby-detail.jpg";

export const Route = createFileRoute("/")({
  head: () => seo({
    title: "Efilogic · FF&E y equipamiento hotelero",
    description: `Del diseño a la apertura. ${ENTITY}`,
    path: "/",
    jsonLd: [faqLd(FAQ)],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <section className="home-hero relative isolate overflow-hidden bg-grafito text-blanco">
        <img src={heroSuite} alt="Interior de una suite de hotel con mobiliario a medida" width={1376} height={768} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div aria-hidden className="hero-shade absolute inset-0 -z-10" />
        <div className="wrap flex h-full flex-col justify-end pb-16 pt-28 md:pb-20">
          <h1 className="t-h1 max-w-2xl">Efilogic</h1>
          <p className="mt-5 max-w-xl text-[24px] font-light leading-snug md:text-[32px]">Transformamos tu visión en realidad.</p>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed">FF&E hotelero. Del diseño a la apertura.</p>
          <div className="mt-8"><PrimaryCTA dark /></div>
        </div>
      </section>

      <section className="section-y bg-blanco">
        <div className="wrap">
          <Reveal>
            <SectionHeader eyebrow="Soluciones" title="Cada pieza. Un único responsable." />
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3 md:gap-12">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} to="/servicios-ffe" hash={s.slug} className="group border-t border-line-strong pt-6">
                <div className="flex items-center justify-between">
                  <span className="t-eyebrow">{String(i + 1).padStart(2, "0")}</span>
                  <ArrowUpRight aria-hidden className="h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" strokeWidth={1.5} />
                </div>
                <h3 className="t-h3 mt-8">{s.title}</h3>
                <p className="mt-4 max-w-sm text-[16px] leading-relaxed">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blanco pb-20 md:pb-32">
        <div className="wrap">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <SectionHeader eyebrow="Proyectos" title="Espacios que cobran vida." />
            <Link to="/proyectos" className="link-text inline-flex items-center gap-3 text-[14px] font-medium">Ver proyectos <ArrowUpRight aria-hidden className="h-5 w-5" /></Link>
          </div>
          <img src={hotelLobby} alt="Mobiliario e iluminación en un interior hotelero contemporáneo" loading="lazy" width={1536} height={1024} className="aspect-[4/3] w-full object-cover md:aspect-[16/8]" />
        </div>
      </section>

      <section className="section-y bg-grafito text-blanco">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <Eyebrow>Cómo trabajamos</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-xl">Tu apertura tiene fecha. Nuestro plan empieza en ella.</h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 md:self-end">
            <p className="max-w-sm text-[17px] font-light leading-relaxed">Compra, fabricación, consolidación e instalación. Un proceso conectado, de principio a fin.</p>
            <Link to="/como-trabajamos" className="link-text mt-8 inline-flex items-center gap-3 text-[14px] font-medium">Conocer el proceso <ArrowUpRight aria-hidden className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      <section className="section-y bg-blanco">
        <div className="wrap grid gap-14 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeader eyebrow="Nosotros" title="Partner, no proveedor." />
            <Link to="/sobre-efilogic" className="link-text mt-8 inline-flex items-center gap-3 text-[14px] font-medium">Conocer Efilogic <ArrowUpRight aria-hidden className="h-5 w-5" /></Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 md:col-span-7 md:col-start-6 md:self-end">
            {STATS.map((s) => <Stat key={s.label} {...s} />)}
          </div>
        </div>
      </section>

      <section className="section-y bg-crema">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4"><SectionHeader eyebrow="Preguntas frecuentes" title="Resolvemos tus dudas." /></div>
          <div className="md:col-span-7 md:col-start-6"><FaqList items={FAQ} /></div>
        </div>
      </section>

      <section className="section-y bg-blanco" aria-labelledby="contacto-home">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Contacto</Eyebrow>
            <h2 id="contacto-home" className="t-h2 mt-6">Hablemos de tu proyecto.</h2>
            <p className="mt-6 max-w-sm text-[16px]">Cuéntanos qué tienes en mente y tu fecha de apertura.</p>
          </div>
          <div className="md:col-span-7 md:col-start-6"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}
