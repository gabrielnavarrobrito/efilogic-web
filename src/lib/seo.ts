import { ENTITY } from "@/content/site";

type Crumb = { name: string; path: string };

export function seo({
  title,
  description,
  path,
  type = "website",
  crumbs,
  jsonLd = [],
}: {
  title: string;
  description: string;
  path: string;
  type?: string;
  crumbs?: Crumb[];
  jsonLd?: object[];
}) {
  const scripts: object[] = [...jsonLd];
  if (crumbs) {
    scripts.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [{ name: "Inicio", path: "/" }, ...crumbs].map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.path,
      })),
    });
  }
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: path },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: path }],
    scripts: scripts.map((s) => ({ type: "application/ld+json", children: JSON.stringify(s) })),
  };
}

export const ORGANIZATION_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Efilogic",
  description: ENTITY,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Palmas de Gran Canaria",
    addressRegion: "Canarias",
    addressCountry: "ES",
  },
  areaServed: "Internacional",
  knowsAbout: ["FF&E hotelero", "Equipamiento contract", "Instalación de mobiliario hotelero"],
};

export function faqLd(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
