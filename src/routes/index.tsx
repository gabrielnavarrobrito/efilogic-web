import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AUDIENCES,
  ENTITY,
  FAQ,
  PILLARS,
  PROCESS,
  PROJECTS,
  RESOURCES,
  SERVICES,
  STATS,
} from "@/content/site";
import { EditorialImage, Eyebrow, PrimaryCTA, ProcessSteps, Reveal, SectionHeader, Stat } from "@/components/site/primitives";
import { CaseStudyBlock, ContactForm, FaqList, ResourceCard } from "@/components/site/blocks";
import { faqLd, seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Efilogic · Director de orquesta FF&E para hoteles",
      description: `Transformamos tu visión en realidad. ${ENTITY}`,
      path: "/",
      jsonLd: [faqLd(FAQ)],
    }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* 1. Hero */}
      <section className="bg-grafito text-blanco">
        <div className="wrap grid items-center gap-12 py-20 md:grid-cols-12 md:py-28">
          <div className="md:col-span-6">
            <Eyebrow>Director de orquesta FF&E · Contract hotelero</Eyebrow>
            <h1 className="t-h1 mt-8">Transformamos tu visión en realidad.</h1>
            <p className="t-lead mt-8 measure">
              Lo que diseñas es exactamente lo que se instala, el día que se abre. Custodiamos cada pieza de tu proyecto, de la fábrica a la habitación.
            </p>
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <PrimaryCTA dark />
              <p className="t-eyebrow border-l border-line-inverse pl-6">+25 años de operativa internacional</p>
            </div>
          </div>
          <div className="md:col-span-6">
            <EditorialImage alt="Suite de hotel terminada con luz natural y mobiliario a medida" caption="Suite · Gran Canaria · 2025" ratio="5/6" />
          </div>
        </div>
      </section>

      {/* 2. Promesa + pilares */}
      <section className="bg-blanco section-y">
        <div className="wrap">
          <Reveal>
            <blockquote className="t-quote max-w-4xl">“Tu apertura tiene fecha. Nuestro plan empieza en ella.”</blockquote>
          </Reveal>
          <ol className="mt-20 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, i) => (
              <li key={p.title} className="border-t border-grafito pt-6">
                <span className="t-eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="t-h3 mt-4">{p.title}</h2>
                <p className="mt-3 text-[16px] leading-relaxed">{p.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Servicios */}
      <section className="bg-crema section-y">
        <div className="wrap">
          <SectionHeader
            eyebrow="Servicios FF&E"
            title="Una sola orquestación, de la especificación a la apertura."
            lead="FF&E es el mobiliario, la iluminación, los textiles y el equipamiento que convierten una obra en un hotel. Lo integramos todo bajo un único responsable."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Link key={s.slug} to="/servicios-ffe" hash={s.slug} className="card-edit flex flex-col bg-blanco p-8 md:p-10">
                <span className="t-eyebrow">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-h3 mt-8">{s.title}</h3>
                <p className="mt-4 text-[16px] leading-relaxed">{s.short}</p>
                <span className="mt-auto pt-8 text-[14px] font-semibold underline underline-offset-4">Ver servicio</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cómo trabajamos */}
      <section className="bg-blanco section-y">
        <div className="wrap">
          <SectionHeader eyebrow="Cómo trabajamos" title="Seis fases. Un único responsable." />
          <div className="mt-16">
            <ProcessSteps steps={PROCESS} />
          </div>
          <div className="mt-24 grid items-center gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <EditorialImage alt="Medición de una pieza singular antes de su embalaje a medida" ratio="1/1" caption="Backstage · Embalaje a medida" />
            </div>
            <div className="md:col-span-6 md:col-start-7">
              <Reveal>
                <p className="t-quote">La precisión es invisible cuando todo sale bien.</p>
                <p className="mt-6 measure">
                  Medimos, protegemos y etiquetamos cada pieza por planta y habitación. La consolidación en guante blanco es el trabajo que no se ve el día de la apertura.
                </p>
                <Link to="/como-trabajamos" className="link-text mt-8 inline-block font-medium">Conocer el proceso</Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Proyectos */}
      <section className="bg-crema section-y">
        <div className="wrap">
          <SectionHeader eyebrow="Proyectos" title="Hoteles abiertos en fecha, idénticos a su diseño." />
          <div className="mt-16 space-y-24">
            {PROJECTS.slice(0, 2).map((c, i) => (
              <Reveal key={c.slug}>
                <CaseStudyBlock c={c} reverse={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
          <Link to="/proyectos" className="btn btn-secondary mt-20">Ver todos los proyectos</Link>
        </div>
      </section>

      {/* 6. Cita */}
      <section className="bg-grafito text-blanco">
        <div className="wrap py-24 text-center md:py-36">
          <p className="t-h2 mx-auto max-w-3xl">Sin intermediarios. Sin pérdida de diseño.</p>
        </div>
      </section>

      {/* 7. Audiencias */}
      <section className="bg-blanco section-y">
        <div className="wrap">
          <SectionHeader eyebrow="Para quién trabajamos" title="Un mismo proyecto, tres prioridades." />
          <div className="mt-16 grid gap-12 md:grid-cols-3">
            {AUDIENCES.map((a) => (
              <div key={a.eyebrow} className="border-t border-grafito pt-6">
                <Eyebrow>{a.eyebrow}</Eyebrow>
                <h3 className="t-h3 mt-4">{a.title}</h3>
                <p className="mt-3 text-[16px] leading-relaxed">{a.text}</p>
                <Link to={a.to} className="link-text mt-6 inline-block text-[15px] font-medium">{a.link}</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Sobre */}
      <section className="bg-crema section-y">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <SectionHeader eyebrow="Sobre Efilogic" title="Partner, no proveedor." />
            <p className="mt-6 measure">{ENTITY}</p>
            <Link to="/sobre-efilogic" className="link-text mt-8 inline-block font-medium">Conocer Efilogic</Link>
          </div>
          <div className="grid gap-10 sm:grid-cols-3 md:col-span-6 md:col-start-7 md:self-end">
            {STATS.map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. Recursos */}
      <section className="bg-blanco section-y">
        <div className="wrap">
          <SectionHeader eyebrow="Recursos" title="Conocimiento para tu próxima apertura." />
          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {RESOURCES.map((r) => (
              <ResourceCard key={r.slug} r={r} />
            ))}
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="bg-crema section-y">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionHeader eyebrow="Preguntas frecuentes" title="Lo que suelen preguntarnos." />
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <FaqList items={FAQ} />
          </div>
        </div>
      </section>

      {/* 11. Contacto */}
      <section className="bg-blanco section-y" aria-labelledby="contacto-home">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow>Contacto</Eyebrow>
            <h2 id="contacto-home" className="t-h2 mt-6">Tu visión, instalada.</h2>
            <p className="mt-6">Cuéntanos tu proyecto y tu fecha de apertura. Te responderemos personalmente.</p>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
