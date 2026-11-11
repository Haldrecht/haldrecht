import type { APIRoute } from "astro";

/* Alleen de lancering. De oude catalogus en de artikelen zijn noindex
   en horen niet in de sitemap. /kaart en /scan bestaan niet. */

const PAGINAS = [
  "/",
  "/en/",
  "/klant-eist-iso-27001/",
  "/en/klant-eist-iso-27001/",
  "/iso-27001-gap-scan/",
  "/en/iso-27001-gap-scan/",
  "/over/",
  "/en/over/",
  "/contact/",
  "/en/contact/",
];

function escapeXml(waarde: string): string {
  return waarde
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export const GET: APIRoute = async ({ site }) => {
  if (!site) {
    throw new Error(
      "site ontbreekt in astro.config; de sitemap heeft absolute URL's nodig.",
    );
  }

  const paden = [...PAGINAS];
  const urls = paden
    .map((pad) => `  <url><loc>${escapeXml(new URL(pad, site).href)}</loc></url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
