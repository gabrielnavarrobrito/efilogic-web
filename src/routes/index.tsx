import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import {
  ENTITY,
  HOME_INTRO,
  HOME_SOLUTIONS,
  PROJECTS,
  TRUSTED_BRANDS,
  projectMeta,
} from "@/content/site";
import { Eyebrow, ImageFeature, Reveal } from "@/components/site/primitives";
import { BrandMark, ContactForm } from "@/components/site/blocks";
import { seo } from "@/lib/seo";
import heroImage from "@/assets/home/beach-restaurant.webp";
import aboutImage from "@/assets/home/lobby-lounge.webp";
import solutionsImage from "@/assets/home/rooftop-sea-view.webp";
import processImage from "@/assets/home/bedroom-boho.webp";
import projectSercotelCanteras from "@/assets/home/proyecto-sercotel-canteras.webp";
import projectValetinSomni from "@/assets/home/proyecto-valetin-somni.webp";
import projectMeliaTrinidad from "@/assets/home/proyecto-melia-trinidad-peninsula.jpg";

export const Route = createFileRoute("/")({
  head: () =>
    seo({
      title: "Efilogic · FF&E y equipamiento hotelero",
      description: `Del diseño a la apertura. ${ENTITY}`,
      path: "/",
    }),
  component: Home,
});

function Home() {
  return (
    <div className="flex flex-col gap-4 md:gap-6">
      <section className="home-hero relative isolate overflow-hidden bg-grafito text-blanco">
        <img
          src={heroImage}
          alt="Restaurante de hotel frente al mar con pérgola de madera y vistas tropicales"
          width={1376}
          height={768}
          fetchPriority="high"
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div aria-hidden className="hero-shade-soft absolute inset-0 -z-10" />
        <div className="wrap flex h-full flex-col justify-between pb-16 pt-40 md:pb-20 md:pt-48">
          <h1 className="hero-rise max-w-[480px] text-[28px] font-semibold leading-[1.18] lg:text-[40px]">
            Hacemos realidad tu proyecto hotelero.
          </h1>
          <p
            className="hero-rise ml-auto max-w-[460px] text-right text-[15px] font-medium leading-snug lg:text-[17px]"
            style={{ animationDelay: "350ms" }}
          >
            Partners estratégicos en equipamiento Contract y proyectos llave en mano. Gestionamos el
            aprovisionamiento global, la consolidación y el montaje en obra con trazabilidad total
            en cada fase.
          </p>
        </div>
      </section>

      <div className="pt-14 md:pt-20">
        <Reveal>
          <ImageFeature
            image={aboutImage}
            imageAlt="Lounge de hotel con mobiliario contract y luz natural"
            tag="Efilogic"
            title={HOME_INTRO.title}
            titleId="home-about"
          >
            {HOME_INTRO.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link
              to="/sobre-efilogic"
              className="link-text inline-flex items-center gap-3 text-[14px] font-semibold"
            >
              Sobre nosotros <ArrowUpRight aria-hidden className="h-5 w-5 text-ambar" />
            </Link>
          </ImageFeature>
        </Reveal>
      </div>

      <Reveal>
        <section
          className="bg-blanco pt-14 pb-14 md:pt-20 md:pb-20"
          aria-labelledby="home-solutions"
        >
          <div className="wrap grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
            <ol className="flex flex-col gap-8 md:gap-10 lg:order-1">
              {HOME_SOLUTIONS.map((solution) => (
                <li key={solution.title}>
                  <Link
                    to={solution.to}
                    {...(solution.anchor ? { hash: solution.anchor } : {})}
                    className="group text-[24px] font-semibold leading-snug md:text-[30px]"
                  >
                    <span className="link-text">{solution.title}</span>{" "}
                    <ArrowUpRight
                      aria-hidden
                      className="ml-2 inline h-7 w-7 text-ambar transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 md:h-8 md:w-8"
                      strokeWidth={1.5}
                    />
                  </Link>
                </li>
              ))}
            </ol>
            <div className="relative isolate aspect-[5/4] overflow-hidden bg-grafito text-blanco lg:order-2">
              <img
                src={solutionsImage}
                alt="Terraza de hotel con vistas al mar en Las Palmas de Gran Canaria"
                loading="lazy"
                width={1536}
                height={1024}
                className="absolute inset-0 -z-20 h-full w-full object-cover"
              />
              <div aria-hidden className="hero-shade absolute inset-0 -z-10" />
              <h2
                id="home-solutions"
                className="absolute bottom-8 left-6 right-6 text-center text-[24px] font-semibold leading-snug md:bottom-10 md:text-[28px]"
              >
                Soluciones a medida
                <br />
                para cada proyecto
              </h2>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <ProjectsShowcase />
      </Reveal>

      <div className="pb-14 md:pb-20">
        <Reveal>
          <ImageFeature
            image={processImage}
            imageAlt="Suite de hotel terminada e instalada, con detalle de cabecero textil"
            tag="Cómo trabajamos"
            title="Planificamos desde el día de apertura hacia atrás."
            titleId="home-process"
            reverse
          >
            <p>
              Cada pieza tiene su fecha y cada fecha, su responsable. Fábrica, almacén y montaje
              siguen el mismo calendario: el de tu hotel.
            </p>
            <Link
              to="/como-trabajamos"
              className="link-text inline-flex items-center gap-3 text-[14px] font-semibold"
            >
              Ver cómo dirigimos un proyecto{" "}
              <ArrowUpRight aria-hidden className="h-5 w-5 text-ambar" />
            </Link>
          </ImageFeature>
        </Reveal>
      </div>

      <Reveal>
        <section className="section-y bg-arena text-grafito" aria-labelledby="home-trusted">
          <div className="wrap flex flex-col items-center gap-10">
            <h2 id="home-trusted" className="t-h2 write-in text-center">
              La confianza de los líderes del sector
            </h2>
            <ul className="flex w-full flex-nowrap items-center justify-center gap-x-2 sm:gap-x-5 md:gap-x-8 lg:gap-x-14">
              {TRUSTED_BRANDS.map((brand) => (
                <li key={brand.slug} className="flex shrink-0 items-center">
                  <BrandMark brand={brand} />
                </li>
              ))}
            </ul>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="section-y bg-blanco" aria-labelledby="contacto-home">
          <div className="wrap grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <Eyebrow>Contacto</Eyebrow>
              <h2 id="contacto-home" className="t-h2 mt-6">
                Hablemos de tu proyecto.
              </h2>
              <p className="mt-6 max-w-sm text-[16px]">
                Cuéntanos qué tienes en mente y tu fecha de apertura.
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <ContactForm />
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}

// Proyectos del carrusel de la portada: no son necesariamente todos los de
// PROJECTS (p. ej. HD Sensarena queda fuera), ni en el mismo orden.
const CAROUSEL_PROJECTS = ["melia-trinidad-peninsula", "sercotel-canteras", "valetin-somni"].map(
  (slug) => ({
    project: PROJECTS.find((p) => p.slug === slug)!,
    image: {
      "melia-trinidad-peninsula": projectMeliaTrinidad,
      "sercotel-canteras": projectSercotelCanteras,
      "valetin-somni": projectValetinSomni,
    }[slug],
  }),
);

const SLIDE_INTERVAL_MS = 6000;

function ProjectsShowcase() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % CAROUSEL_PROJECTS.length),
      SLIDE_INTERVAL_MS,
    );
    return () => window.clearTimeout(id);
  }, [index, paused]);

  return (
    <section className="section-y bg-blanco" aria-label="Proyectos destacados">
      <div
        className="relative aspect-[4/3] w-full overflow-hidden bg-grafito text-blanco md:aspect-[16/7]"
        aria-roledescription="carrusel"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onFocus={() => setPaused(true)}
        onBlur={() => setPaused(false)}
      >
        <div
          className="flex h-full transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {CAROUSEL_PROJECTS.map(({ project, image }, i) => (
            <div
              key={project.slug}
              className="relative isolate h-full w-full shrink-0"
              aria-roledescription="diapositiva"
              aria-label={`${i + 1} de ${CAROUSEL_PROJECTS.length}`}
              aria-hidden={i !== index}
              inert={i !== index}
            >
              <img
                src={image}
                alt={`Proyecto ${project.name} en ${project.location}`}
                loading="lazy"
                width={1536}
                height={1024}
                className="absolute inset-0 -z-20 h-full w-full object-cover"
              />
              <div aria-hidden className="hero-shade absolute inset-0 -z-10" />
              <div className="absolute left-0 top-0 p-6 md:p-12">
                <h3 className="text-[26px] font-semibold leading-snug md:text-[38px]">
                  {project.name}
                </h3>
                <p className="mt-2 text-[15px] text-blanco/80 md:text-[17px]">
                  {projectMeta(project)}
                </p>
              </div>
              <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12">
                <Link
                  to="/proyectos/$slug"
                  params={{ slug: project.slug }}
                  className="inline-flex items-center gap-3 border border-blanco/60 px-6 py-3 text-[14px] font-medium transition-colors duration-300 hover:bg-blanco hover:text-grafito"
                >
                  Ver este proyecto <ArrowUpRight aria-hidden className="h-5 w-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <span
          key={`progress-${index}`}
          aria-hidden
          className="slide-progress absolute bottom-0 left-0 h-[3px] w-full bg-ambar"
          style={{
            animationDuration: `${SLIDE_INTERVAL_MS}ms`,
            animationPlayState: paused ? "paused" : "running",
          }}
        />
        <div className="absolute bottom-6 right-4 flex items-center md:bottom-12 md:right-10">
          <span className="mr-3 text-[13px] font-medium tabular-nums tracking-[0.08em]" aria-hidden>
            {String(index + 1).padStart(2, "0")}{" "}
            <span className="text-blanco/50">
              / {String(CAROUSEL_PROJECTS.length).padStart(2, "0")}
            </span>
          </span>
          {CAROUSEL_PROJECTS.map(({ project }, i) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Ver ${project.name}`}
              aria-current={i === index}
              className="group flex h-10 w-8 cursor-pointer items-center justify-center"
            >
              <span
                className={`slider-dot block h-2.5 w-2.5 border border-blanco transition-colors duration-300 ${i === index ? "bg-blanco" : "bg-transparent group-hover:bg-blanco/60"}`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
