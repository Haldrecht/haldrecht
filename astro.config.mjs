import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import keystatic from "@keystatic/astro";

/* Keystatic injecteert /keystatic en /api/keystatic met prerender: false.
   In Astro 5 zet één zo'n route de hele build op server, en zonder adapter
   faalt `astro build`. De editor schrijft bestanden op schijf en hoort
   alleen in dev; de productiebuild blijft statisch. */
const editorInDev = process.argv.includes("dev");

export default defineConfig({
  // Zet dit op het echte domein zodra het er is: nodig voor sitemap en
  // canonical links.
  site: "https://example.nl",

  integrations: editorInDev ? [react(), keystatic()] : [],

  /* De API-module importeert astro:env/server. Vite's prebundler (esbuild)
     kent die virtuele module niet en de editor blijft leeg. Buiten de
     prebundler lost Vite hem wel op. React zelf is CJS; zonder prebundle
     heeft de browser geen named export useState. */
  vite: {
    optimizeDeps: {
      exclude: ["@keystatic/astro", "@keystatic/astro/api"],
      include: ["react", "react-dom", "react/jsx-runtime", "react-dom/client"],
    },
  },

  i18n: {
    defaultLocale: "nl",
    locales: ["nl", "en"],
    routing: {
      // Nederlands staat op /, Engels op /en/.
      prefixDefaultLocale: false,
    },
  },

  build: {
    // Schone URL's: /artikelen/slug/ in plaats van /artikelen/slug.html
    format: "directory",
  },
});
