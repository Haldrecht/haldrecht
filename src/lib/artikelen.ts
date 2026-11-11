import { getCollection, type CollectionEntry } from "astro:content";

/* Eén filter voor elke lijst en voor de statische paden.
   Concepten horen in dev, niet in de productiebuild. Een index die ze
   wél linkt, wijst in productie naar een pagina die er niet is. */

export async function nederlandseArtikelen(): Promise<
  CollectionEntry<"artikelen">[]
> {
  const alles = await getCollection(
    "artikelen",
    ({ data, id }) =>
      id.startsWith("nl/") &&
      (import.meta.env.DEV || data.status === "gepubliceerd"),
  );
  return alles.sort((a, b) => b.data.datum.valueOf() - a.data.datum.valueOf());
}

export function artikelPad(id: string): string {
  return `/artikelen/${id.replace(/^nl\//, "")}/`;
}
