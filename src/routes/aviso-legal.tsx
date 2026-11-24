import { createFileRoute } from "@tanstack/react-router";
import { LEGAL_PAGES } from "@/content/site";
import { LegalPage } from "@/components/site/LegalPage";
import { seo } from "@/lib/seo";

const PAGE = LEGAL_PAGES["aviso-legal"];

export const Route = createFileRoute("/aviso-legal")({
  head: () =>
    seo({
      title: `${PAGE.title} | Efilogic`,
      description: PAGE.description,
      path: "/aviso-legal",
      crumbs: [{ name: PAGE.title, path: "/aviso-legal" }],
    }),
  component: () => <LegalPage slug="aviso-legal" />,
});
