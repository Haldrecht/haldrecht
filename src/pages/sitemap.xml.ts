import type { APIRoute } from "astro";
import { dienstPaden } from "../data/diensten";
import { artikelPad, nederlandseArtikelen } from "../lib/artikelen";

/* Zelfde filter als de pagina's: een concept hoort niet in de sitemap
   van de productiebuild. Vaste pagina's, geen pakket. */

const PAGINAS = [
  "/",
  "/en/",
  "/artikelen/",
  "/en/artikelen/",
  "/rie/",
  "/en/rie/",
  "/over/",
  "/en/over/",
  "/contact/",
  "/en/contact/",
  ...dienstPaden(),
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

  const artikelen = await nederlandseArtikelen();
  const paden = [...PAGINAS, ...artikelen.map((a) => artikelPad(a.id))];
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
