import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/* Het schema is streng met opzet: een ontbrekend of fout veld breekt de
   build. Dat is beter dan een pagina die stilletjes verkeerd is. */

const artikelen = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/artikelen" }),
  schema: z.object({
    titel: z.string(),
    ondertitel: z.string().optional(),

    /* 1 = de markt maken (verspreiden), 2 = het moment van verlies
       (gevonden worden), 3 = naslag (bewaard en gedeeld) */
    fase: z.union([z.literal(1), z.literal(2), z.literal(3)]),

    /* concept blijft uit de productiebuild; zie pages/artikelen/index.astro */
    status: z.enum(["concept", "gepubliceerd"]).default("concept"),

    datum: z.date(),
    leestijd: z.string().optional(),

    /* Zet op true zodra een stuk cijfers uit eisen.json toont. De layout
       plaatst dan automatisch het verantwoordingsblok eronder. */
    gebruiktData: z.boolean().default(false),

    beschrijving: z.string().max(160).optional(),
  }),
});

export const collections = { artikelen };
