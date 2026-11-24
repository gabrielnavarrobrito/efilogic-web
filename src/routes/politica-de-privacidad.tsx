import { createFileRoute } from "@tanstack/react-router";
import { LEGAL_PAGES } from "@/content/site";
import { LegalPage } from "@/components/site/LegalPage";
import { seo } from "@/lib/seo";

const PAGE = LEGAL_PAGES["politica-de-privacidad"];

export const Route = createFileRoute("/politica-de-privacidad")({
  head: () =>
    seo({
      title: `${PAGE.title} | Efilogic`,
      description: PAGE.description,
      path: "/politica-de-privacidad",
      crumbs: [{ name: PAGE.title, path: "/politica-de-privacidad" }],
    }),
  component: () => <LegalPage slug="politica-de-privacidad" />,
});
