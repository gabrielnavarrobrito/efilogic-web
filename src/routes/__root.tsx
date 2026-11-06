import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Footer, Header } from "@/components/site/Layout";
import { ORGANIZATION_LD } from "@/lib/seo";

function NotFoundComponent() {
  return (
    <section className="wrap section-y">
      <p className="t-eyebrow">Error 404</p>
      <h1 className="t-h1 mt-6">Esta página no existe.</h1>
      <p className="t-lead mt-6 measure">Puede que se haya movido. Vuelve al inicio para seguir explorando.</p>
      <Link to="/" className="btn btn-secondary mt-10">Volver al inicio</Link>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <section className="wrap section-y">
      <h1 className="t-h2">Esta página no se ha cargado.</h1>
      <p className="mt-4 measure">Algo ha fallado. Puedes intentarlo de nuevo o volver al inicio.</p>
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="btn btn-secondary"
        >
          Intentar de nuevo
        </button>
        <a href="/" className="link-text self-center">Volver al inicio</a>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#1b1f29" },
      { name: "color-scheme", content: "light" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Efilogic" },
      { property: "og:locale", content: "es_ES" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&display=swap",
      },
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(ORGANIZATION_LD) }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <a href="#contenido" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-blanco focus:p-3">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido">
        <Outlet />
      </main>
      <Footer />
    </QueryClientProvider>
  );
}
