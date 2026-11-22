import { createFileRoute } from "@tanstack/react-router";
import { PROCESS, PROCESS_INTRO } from "@/content/site";
import { SLOTS } from "@/content/images";
import {
  EditorialImage,
  PageHero,
  PrimaryCTA,
  ProcessSteps,
  Reveal,
} from "@/components/site/primitives";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/como-trabajamos")({
  head: () =>
    seo({
      title: "Cómo trabajamos · Método operativo FF&E | Efilogic",
      description: PROCESS_INTRO.lead,
      path: "/como-trabajamos",
      crumbs: [{ name: "Cómo trabajamos", path: "/como-trabajamos" }],
    }),
  component: Page,
});

// Tamaños variados a propósito, para que la galería no se vea como una
// cuadrícula repetitiva: 7+5 llenan la primera fila, 4+8 la segunda, 6 la última.
const PROCESS_LAYOUT = [
  { span: "md:col-span-7", ratio: "16/10" },
  { span: "md:col-span-5", ratio: "3/4" },
  { span: "md:col-span-4", ratio: "1/1" },
  { span: "md:col-span-8", ratio: "16/9" },
  { span: "md:col-span-6", ratio: "4/3" },
];

function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Cómo trabajamos" }]} title={PROCESS_INTRO.title} />
      <section className="bg-blanco section-y">
        <div className="wrap">
          <ProcessSteps steps={PROCESS} />
        </div>
      </section>
      <section className="bg-crema section-y">
        <div className="wrap grid gap-x-6 gap-y-14 md:grid-cols-12">
          {PROCESS.map((p, i) => (
            <Reveal key={p.title} className={PROCESS_LAYOUT[i]!.span}>
              <div id={p.anchor} className="scroll-mt-24">
                <EditorialImage
                  alt={`Fase de ${p.title.toLowerCase()} en un proyecto FF&E hotelero`}
                  ratio={PROCESS_LAYOUT[i]!.ratio}
                  slot={SLOTS.comoTrabajamos(p.anchor)}
                />
                <p className="t-eyebrow mt-5">Fase {String(i + 1).padStart(2, "0")}</p>
                <h2 className="t-h3 mt-2">{p.title}</h2>
                <p className="mt-2 text-[15px] leading-relaxed">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="bg-blanco">
        <div className="wrap py-16 text-center md:py-20">
          <p className="t-quote mx-auto max-w-2xl">{PROCESS_INTRO.cierre}</p>
          <div className="mt-8 flex justify-center">
            <PrimaryCTA />
          </div>
        </div>
      </section>
    </>
  );
}
