import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";

// Sitio estático: cada ruta se prerenderiza a HTML en dist/client y se sirve
// desde Apache (Dinahosting). El formulario de contacto usa public/api/contact.php.
export default defineConfig({
  server: { port: 8081 },
  plugins: [
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
      pages: [
        { path: "/sitemap.xml" },
        // Página 404 estática que Apache sirve con ErrorDocument (ver public/.htaccess).
        { path: "/404", prerender: { enabled: true, outputPath: "/404.html" } },
      ],
    }),
    viteReact(),
  ],
  build: {
    sourcemap: false,
  },
});
