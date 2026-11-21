import { createFileRoute } from "@tanstack/react-router";
import { NotFound } from "@/components/site/NotFound";

// Se prerenderiza como /404.html para que Apache la sirva en rutas inexistentes.
export const Route = createFileRoute("/404")({
  head: () => ({
    meta: [{ title: "Página no encontrada · Efilogic" }, { name: "robots", content: "noindex" }],
  }),
  component: NotFound,
});
