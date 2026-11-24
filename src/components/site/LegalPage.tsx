import { LEGAL_PAGES } from "@/content/site";
import { PageHero } from "./primitives";

/** Plantilla de las páginas legales (aviso legal, privacidad, cookies). */
export function LegalPage({ slug }: { slug: keyof typeof LEGAL_PAGES }) {
  const page = LEGAL_PAGES[slug];
  return (
    <>
      <PageHero crumbs={[{ label: page.title }]} title={page.title} />
      <section className="bg-blanco pb-20 md:pb-28">
        <div className="wrap">
          <div className="max-w-3xl space-y-12">
            {page.sections.map((s) => (
              <div key={s.title} className="border-t border-grafito pt-6">
                <h2 className="t-h3">{s.title}</h2>
                <div className="mt-4 space-y-4 text-[16px] leading-relaxed">
                  {s.paragraphs.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
            <p className="t-eyebrow text-grafito/60">
              Última actualización:{" "}
              <time dateTime={page.updated}>
                {new Date(page.updated).toLocaleDateString("es-ES", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
