import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { ENTITY, FAQ, HOME_INTRO, HOME_SOLUTIONS, PROJECTS } from "@/content/site";
import { Eyebrow, Reveal, SectionHeader } from "@/components/site/primitives";
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
          <h1 className="max-w-[560px] text-[36px] font-semibold leading-[1.15] lg:text-[52px]">Solución a medida para proyectos contract.</h1>
          <p className="max-w-[380px] self-end text-[21px] font-medium leading-snug lg:text-[25px]">Convertimos tus ideas en realidad, sin poner límites a la creatividad.</p>
        </div>
      </section>

      <section className="section-y bg-blanco" aria-labelledby="home-about">
        <div className="wrap grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal className="max-w-lg">
            <Eyebrow>Efilogic</Eyebrow>
            <h2 id="home-about" className="t-h2 mt-6 max-w-md">{HOME_INTRO.title}</h2>
            {HOME_INTRO.paragraphs.map((paragraph) => <p key={paragraph} className="mt-6 text-[16px] leading-relaxed">{paragraph}</p>)}
            <Link to="/sobre-efilogic" className="link-text mt-8 inline-flex items-center gap-3 text-[14px] font-semibold">Sobre nosotros <ArrowUpRight aria-hidden className="h-5 w-5 text-ambar" /></Link>
          </Reveal>
          <div className="relative isolate aspect-[6/5] w-full" aria-label="Interiores y detalles de mobiliario hotelero">
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

      <section className="section-y bg-grafito text-blanco">
        <div className="wrap grid items-center gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Eyebrow>Cómo trabajamos</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-xl">Tu apertura tiene fecha. Nuestro plan empieza en ella.</h2>
            <p className="mt-6 max-w-sm text-[17px] font-light leading-relaxed">Compra, fabricación, consolidación e instalación. Un proceso conectado, de principio a fin.</p>
            <Link to="/como-trabajamos" className="link-text mt-8 inline-flex items-center gap-3 text-[14px] font-medium">Conocer el proceso <ArrowUpRight aria-hidden className="h-5 w-5" /></Link>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <img src={heroSuite} alt="Suite de hotel terminada e instalada" loading="lazy" width={1376} height={768} className="aspect-[3/2] w-full object-cover" />
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

const PROJECT_IMAGES = [hotelLobby, heroSuite, hotelLobby];

function ProjectsShowcase() {
  const [index, setIndex] = useState(0);
  const project = PROJECTS[index]!;
  const go = (step: number) => setIndex((i) => (i + step + PROJECTS.length) % PROJECTS.length);

  return (
    <section className="bg-blanco pb-14 md:pb-20" aria-label="Proyectos destacados">
      <div className="wrap mb-8 flex flex-wrap items-end justify-between gap-6">
        <SectionHeader eyebrow="Proyectos" title="Espacios que cobran vida." />
        <Link to="/proyectos" className="link-text inline-flex items-center gap-3 text-[14px] font-medium">Ver proyectos <ArrowUpRight aria-hidden className="h-5 w-5" /></Link>
      </div>
      <div className="relative isolate aspect-[4/3] w-full overflow-hidden bg-grafito text-blanco md:aspect-[16/7]">
        <img key={project.slug} src={PROJECT_IMAGES[index % PROJECT_IMAGES.length]} alt={`Proyecto ${project.name} en ${project.location}`} loading="lazy" width={1536} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div aria-hidden className="hero-shade absolute inset-0 -z-10" />
        <div className="absolute left-0 top-0 p-6 md:p-12">
          <h3 className="text-[26px] font-semibold leading-snug md:text-[38px]">{project.name}</h3>
          <p className="mt-2 text-[15px] lowercase text-blanco/80 md:text-[17px]">{project.location} · {project.year}</p>
        </div>
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
          <Link to="/proyectos/$slug" params={{ slug: project.slug }} className="inline-flex items-center gap-3 border border-blanco/60 px-6 py-3 text-[14px] font-medium transition-colors duration-300 hover:bg-blanco hover:text-grafito">
            Ver este proyecto <ArrowUpRight aria-hidden className="h-5 w-5" />
          </Link>
        </div>
        <div className="absolute bottom-6 right-6 flex gap-2 md:bottom-12 md:right-12">
          <button type="button" onClick={() => go(-1)} aria-label="Proyecto anterior" className="flex h-12 w-12 cursor-pointer items-center justify-center border border-blanco/60 transition-colors duration-300 hover:bg-blanco hover:text-grafito">
            <ArrowLeft strokeWidth={1.5} className="h-5 w-5" />
          </button>
          <button type="button" onClick={() => go(1)} aria-label="Proyecto siguiente" className="flex h-12 w-12 cursor-pointer items-center justify-center border border-blanco/60 transition-colors duration-300 hover:bg-blanco hover:text-grafito">
            <ArrowRight strokeWidth={1.5} className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
