import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { RESOURCES } from "@/content/site";
import { Breadcrumbs, EditorialImage, PrimaryCTA } from "@/components/site/primitives";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/recursos/$slug")({
  loader: ({ params }) => {
    const resource = RESOURCES.find((r) => r.slug === params.slug);
    if (!resource) throw notFound();
    return { resource };
  },
  head: ({ loaderData, params }) =>
    loaderData
      ? seo({
          title: `${loaderData.resource.title} | Efilogic`,
          description: loaderData.resource.excerpt,
          path: `/recursos/${params.slug}`,
          type: "article",
          crumbs: [
            { name: "Recursos", path: "/recursos" },
            { name: loaderData.resource.title, path: `/recursos/${params.slug}` },
          ],
          jsonLd: [
            {
              "@context": "https://schema.org",
              "@type": "Article",
              headline: loaderData.resource.title,
              description: loaderData.resource.excerpt,
              datePublished: loaderData.resource.date,
              inLanguage: "es-ES",
              author: { "@type": "Organization", name: "Efilogic" },
              publisher: { "@type": "Organization", name: "Efilogic" },
            },
          ],
        })
      : { meta: [{ title: "Recurso no disponible | Efilogic" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const { resource: r } = Route.useLoaderData();
  return (
    <>
      <div className="bg-crema">
        <Breadcrumbs items={[{ label: "Recursos", to: "/recursos" }, { label: r.title }]} />
      </div>
      <article>
        <header className="bg-crema">
          <div className="wrap pt-16 pb-20 md:pt-24">
            <span className="tag bg-blanco">{r.kind}</span>
            <h1 className="t-h1 mt-6 max-w-4xl">{r.title}</h1>
            <p className="t-lead mt-6 measure">{r.excerpt}</p>
            <p className="t-eyebrow mt-8">
              <time dateTime={r.date}>{new Date(r.date).toLocaleDateString("es-ES", { day: "numeric", month: "long", year: "numeric" })}</time>
            </p>
          </div>
        </header>
        <div className="wrap section-y grid gap-16 md:grid-cols-12">
          <div className="space-y-6 md:col-span-7">
            {r.body.map((p, i) => (
              <p key={i} className={i === 0 ? "t-lead" : ""}>{p}</p>
            ))}
            <div className="flex flex-wrap items-center gap-8 pt-10">
              <PrimaryCTA />
              <Link to="/recursos" className="link-text font-medium">Más recursos</Link>
            </div>
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <EditorialImage alt={`Imagen editorial: ${r.title}`} ratio="4/5" />
          </div>
        </div>
      </article>
    </>
  );
}
