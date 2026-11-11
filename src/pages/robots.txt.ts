import type { APIRoute } from "astro";

/* Statisch bestand in de build. Sitemap-URL komt uit Astro.site, dezelfde
   plek als de canonical. */

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error(
      "site ontbreekt in astro.config; robots.txt kan de sitemap niet linken.",
    );
  }

  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("sitemap.xml", site).href}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
