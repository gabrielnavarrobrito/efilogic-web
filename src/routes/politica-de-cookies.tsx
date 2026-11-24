import { createFileRoute } from "@tanstack/react-router";
import { LEGAL_PAGES } from "@/content/site";
import { LegalPage } from "@/components/site/LegalPage";
import { seo } from "@/lib/seo";

const PAGE = LEGAL_PAGES["politica-de-cookies"];

export const Route = createFileRoute("/politica-de-cookies")({
  head: () =>
    seo({
      title: `${PAGE.title} | Efilogic`,
      description: PAGE.description,
      path: "/politica-de-cookies",
      crumbs: [{ name: PAGE.title, path: "/politica-de-cookies" }],
    }),
  component: () => <LegalPage slug="politica-de-cookies" />,
});
