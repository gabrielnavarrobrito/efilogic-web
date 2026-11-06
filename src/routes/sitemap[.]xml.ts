import { createFileRoute } from "@tanstack/react-router";
import { PROJECTS, RESOURCES } from "@/content/site";

const STATIC = [
  "/",
  "/servicios-ffe",
  "/como-trabajamos",
  "/proyectos",
  "/para-disenadores",
  "/para-compras-y-pm",
  "/sobre-efilogic",
  "/recursos",
  "/contacto",
];

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: ({ request }) => {
        const origin = new URL(request.url).origin;
        const paths = [
          ...STATIC,
          ...PROJECTS.map((p) => `/proyectos/${p.slug}`),
          ...RESOURCES.map((r) => `/recursos/${r.slug}`),
        ];
        const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${paths
          .map((p) => `  <url><loc>${origin}${p}</loc></url>`)
          .join("\n")}\n</urlset>\n`;
        return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
      },
    },
  },
});
