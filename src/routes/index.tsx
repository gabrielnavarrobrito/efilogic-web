import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { ENTITY, FAQ, HOME_INTRO, HOME_SOLUTIONS, PROJECTS } from "@/content/site";
import { Eyebrow, GlobeMark, Reveal, SectionHeader, Signed } from "@/components/site/primitives";
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
        <div className="wrap flex h-full flex-col justify-between gap-8 pb-12 pt-36 md:pb-14 md:pt-40">
          <h1 className="max-w-[560px] text-[36px] font-semibold leading-[1.15] lg:text-[52px]"><Signed>Solución a medida para proyectos contract.</Signed></h1>
          <div className="flex flex-col-reverse gap-8 md:flex-row md:items-end md:justify-between">
            <p className="flex items-center gap-3 text-[12.5px] font-medium tracking-[0.08em] text-blanco/85">
              <GlobeMark className="h-4 w-4 text-ambar" />
              <span className="tabular-nums">28°08′N · 15°25′O</span>
              <span aria-hidden className="h-px w-6 bg-blanco/50" />
              <span>Gran Canaria</span>
            </p>
            <p className="max-w-[380px] text-[21px] font-medium leading-snug lg:text-[25px]">Convertimos tus ideas en realidad, sin poner límites a la creatividad.</p>
          </div>
        </div>
      </section>

      <section className="section-y bg-blanco" aria-labelledby="home-about">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="max-w-lg">
            <Eyebrow index="01">Efilogic</Eyebrow>
            <h2 id="home-about" className="t-h2 mt-6 max-w-md"><Signed>{HOME_INTRO.title}</Signed></h2>
            {HOME_INTRO.paragraphs.map((paragraph) => <p key={paragraph} className="mt-6 text-[16px] leading-relaxed">{paragraph}</p>)}
            <Link to="/sobre-efilogic" className="link-text mt-8 inline-flex items-center gap-3 text-[14px] font-semibold">Sobre nosotros <ArrowUpRight aria-hidden className="h-5 w-5 text-ambar" /></Link>
          </Reveal>
          <div className="plan-marks relative isolate aspect-[6/5] w-full" aria-label="Interiores y detalles de mobiliario hotelero">
            <img src={hotelLobby} alt="Interior hotelero con mobiliario e iluminación contemporáneos" loading="lazy" width={1536} height={1024} className="absolute right-0 top-0 h-[84%] w-[78%] object-cover" />
            <img src={heroSuite} alt="Detalle de mobiliario a medida en una suite" loading="lazy" width={1376} height={768} className="absolute bottom-0 left-0 h-[58%] w-[56%] border-r-[10px] border-t-[10px] border-blanco object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-blanco pb-14 md:pb-20" aria-labelledby="home-solutions">
        <div className="wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="relative isolate aspect-[5/4] overflow-hidden bg-grafito text-blanco">
            <img src={hotelLobby} alt="Espacio hotelero con mobiliario contract" loading="lazy" width={1536} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover" />
            <div aria-hidden className="hero-shade absolute inset-0 -z-10" />
            <h2 id="home-solutions" className="absolute bottom-8 left-6 right-6 text-center text-[24px] font-semibold leading-snug md:bottom-10 md:text-[28px]">Soluciones a medida<br />para cada proyecto</h2>
          </div>
          <ol className="flex flex-col gap-6 md:gap-8">
            {HOME_SOLUTIONS.map((solution, i) => (
              <li key={solution.title} className="flex items-baseline gap-4 md:gap-5">
                <span className="shrink-0 text-[20px] font-light md:text-[24px]">{i + 1}.</span>
                <Link to="/servicios-ffe" hash={solution.anchor} className="group text-[20px] font-semibold leading-snug md:text-[24px]">
                  <span className="link-text">{solution.title}</span>{" "}
                  <ArrowUpRight aria-hidden className="ml-2 inline h-6 w-6 text-ambar transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:h-7 md:w-7" strokeWidth={1.5} />
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProjectsShowcase />

      <section className="section-y bg-blanco" aria-labelledby="home-process">
        <div className="wrap grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow index="03">Cómo trabajamos</Eyebrow>
            <h2 id="home-process" className="t-h2 mt-6 max-w-xl"><Signed>Planificamos desde el día de apertura hacia atrás.</Signed></h2>
            <p className="mt-6 max-w-sm text-[16px] leading-relaxed">Cada pieza tiene su fecha y cada fecha, su responsable. Fábrica, almacén y montaje siguen el mismo calendario: el de tu hotel.</p>
            <Link to="/como-trabajamos" className="link-text mt-8 inline-flex items-center gap-3 text-[14px] font-semibold">Ver cómo dirigimos un proyecto <ArrowUpRight aria-hidden className="h-5 w-5 text-ambar" /></Link>
          </div>
          <div className="plan-marks relative md:col-span-6 md:col-start-7">
            <img src={heroSuite} alt="Suite de hotel terminada e instalada" loading="lazy" width={1376} height={768} className="aspect-[3/2] w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="section-y bg-crema">
        <div className="wrap grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4"><SectionHeader eyebrow="Preguntas frecuentes" index="04" title="Resolvemos tus dudas." /></div>
          <div className="md:col-span-7 md:col-start-6"><FaqList items={FAQ} /></div>
        </div>
      </section>

      <section className="section-y bg-blanco" aria-labelledby="contacto-home">
        <div className="wrap grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <Eyebrow index="05">Contacto</Eyebrow>
            <h2 id="contacto-home" className="t-h2 mt-6"><Signed>Hablemos de tu proyecto.</Signed></h2>
            <p className="mt-6 max-w-sm text-[16px]">Cuéntanos qué tienes en mente y tu fecha de apertura.</p>
          </div>
          <div className="md:col-span-7 md:col-start-6"><ContactForm /></div>
        </div>
      </section>
    </>
  );
}

const PROJECT_IMAGES = [hotelLobby, heroSuite, hotelLobby];

const SLIDE_INTERVAL_MS = 6000;

function ProjectsShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(() => setIndex((i) => (i + 1) % PROJECTS.length), SLIDE_INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [index, paused]);

  return (
    <section className="bg-blanco pb-14 md:pb-20" aria-label="Proyectos destacados">
      <div className="wrap mb-8 flex flex-wrap items-end justify-between gap-6">
        <SectionHeader eyebrow="Proyectos" index="02" title="Espacios que cobran vida." />
        <Link to="/proyectos" className="link-text inline-flex items-center gap-3 text-[14px] font-medium">Ver proyectos <ArrowUpRight aria-hidden className="h-5 w-5" /></Link>
      </div>
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-grafito text-blanco md:aspect-[16/7]"
        aria-roledescription="carrusel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div className="flex h-full transition-transform duration-700 ease-out" style={{ transform: `translateX(-${index * 100}%)` }}>
          {PROJECTS.map((project, i) => (
            <div key={project.slug} className="relative isolate h-full w-full shrink-0" aria-roledescription="diapositiva" aria-label={`${i + 1} de ${PROJECTS.length}`} aria-hidden={i !== index} inert={i !== index}>
              <img src={PROJECT_IMAGES[i % PROJECT_IMAGES.length]} alt={`Proyecto ${project.name} en ${project.location}`} loading="lazy" width={1536} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover" />
              <div aria-hidden className="hero-shade absolute inset-0 -z-10" />
              <div className="absolute left-0 top-0 p-6 md:p-12">
                <h3 className="text-[26px] font-semibold leading-snug md:text-[38px]">{project.name}</h3>
                <p className="mt-2 text-[15px] text-blanco/80 md:text-[17px]">{project.location} · {project.year}</p>
              </div>
              <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                <Link to="/proyectos/$slug" params={{ slug: project.slug }} className="inline-flex items-center gap-3 border border-blanco/60 px-6 py-3 text-[14px] font-medium transition-colors duration-300 hover:bg-blanco hover:text-grafito">
                  Ver este proyecto <ArrowUpRight aria-hidden className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <span key={`progress-${index}`} aria-hidden className="slide-progress absolute bottom-0 left-0 h-[3px] w-full bg-ambar" style={{ animationDuration: `${SLIDE_INTERVAL_MS}ms`, animationPlayState: paused ? "paused" : "running" }} />
        <div className="absolute bottom-6 right-4 flex items-center md:bottom-12 md:right-10">
          <span className="mr-3 text-[13px] font-medium tabular-nums tracking-[0.08em]" aria-hidden>
            {String(index + 1).padStart(2, "0")} <span className="text-blanco/50">/ {String(PROJECTS.length).padStart(2, "0")}</span>
          </span>
          {PROJECTS.map((project, i) => (
            <button key={project.slug} type="button" onClick={() => setIndex(i)} aria-label={`Ver ${project.name}`} aria-current={i === index} className="group flex h-10 w-8 cursor-pointer items-center justify-center">
              <span className={`slider-dot block h-2.5 w-2.5 border border-blanco transition-colors duration-300 ${i === index ? "bg-blanco" : "bg-transparent group-hover:bg-blanco/60"}`} />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
