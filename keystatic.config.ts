import { config, fields, collection } from "@keystatic/core";

/* Lokale editor voor de Nederlandse artikelen. De velden volgen
   src/content.config.ts. Een concept blijft uit de productiebuild omdat
   de pagina's op status filteren; deze config schrijft alleen het bestand. */

export default config({
  storage: { kind: "local" },
  locale: "nl-NL",
  collections: {
    artikelen: collection({
      label: "Artikelen",
      slugField: "titel",
      path: "src/content/artikelen/nl/*",
      format: { contentField: "inhoud" },
      columns: ["status", "fase", "datum"],
      schema: {
        titel: fields.slug({
          name: {
            label: "Titel",
            description:
              "Niet openen met compliance, norm, certificaat, ISO of aanbesteding.",
            validation: { isRequired: true },
          },
        }),
        ondertitel: fields.text({
          label: "Ondertitel",
          description: "Optioneel. Staat onder de titel.",
        }),
        fase: fields.integer({
          label: "Fase",
          defaultValue: 1,
          description:
            "1 de markt maken, 2 het moment van verlies, 3 naslag.",
          validation: { isRequired: true, min: 1, max: 3 },
        }),
        status: fields.select({
          label: "Status",
          description:
            "Concept blijft uit npm run build. Alleen gepubliceerd gaat mee.",
          options: [
            { label: "Concept", value: "concept" },
            { label: "Gepubliceerd", value: "gepubliceerd" },
          ],
          defaultValue: "concept",
        }),
        datum: fields.date({
          label: "Datum",
          defaultValue: { kind: "today" },
          validation: { isRequired: true },
        }),
        leestijd: fields.text({
          label: "Leestijd",
          description: "Optioneel, bijvoorbeeld 5 min.",
        }),
        gebruiktData: fields.checkbox({
          label: "Gebruikt data",
          defaultValue: false,
          description:
            "Aan als het stuk cijfers uit eisen.json toont. De pagina zet dan het verantwoordingsblok eronder.",
        }),
        beschrijving: fields.text({
          label: "Beschrijving",
          multiline: true,
          description:
            "Meta-description, maximaal 160 tekens. Zelfde openingsregel als de titel.",
          validation: { length: { max: 160 } },
        }),
        inhoud: fields.markdoc({
          label: "Tekst",
          extension: "md",
          description:
            "De pagina heeft al een h1, de titel. Begin hier bij kop 2.",
          options: {
            heading: [2, 3],
            image: false,
          },
        }),
      },
    }),
  },
});
