/* De enige plek waar naam, contact en tekstvarianten staan.
   Wijzig hier, nergens anders. */

export const SITE = {
  /* Firm name in titles and metadata. The header and footer use the wordmark. */
  naam: "Haldrecht",
  woordmerk: "HALDRECHT",
  descriptor: "Regulatory Affairs & Assurance",
  /* haldrecht.com is registered at Squarespace. It is not connected.
     Canonical URLs stay on this placeholder. Do not set DNS from here. */
  domein: "example.nl",
  /* De lanceringstekst is een concept. De Product Owner heeft hem niet goedgekeurd. */
  concept: true,

  /* Vul in zodra bekend. Leeg laten is beter dan verzinnen: een onjuist
     KvK-nummer op een site die over naleving gaat is een slechte grap. */
  kvk: "",
  btw: "",

  email: "",
  telefoon: "",

  persoon: {
    naam: "Ramon Sanders",
    rol: "ISO 27001-voorbereiding en interne audit",
  },
} as const;

export const TEKST = {
  nl: {
    taalnaam: "Nederlands",
    kop: "Uw klant vraagt om ISO 27001 of een ingevulde security questionnaire.",
    pitch:
      "Concept, niet goedgekeurd. Ik help Nederlandse software- en IT-bedrijven " +
      "een klanteis om te zetten in een systeem dat een interne audit kan volgen. " +
      "Ik certificeer mijn eigen werk niet.",
    nav: {
      home: "Home",
      aanleiding: "Aanleiding",
      aanbod: "Aanbod",
      over: "Over",
      contact: "Contact",
    },
    cta: "Intake voor een gap-scan aanvragen",
  },
  en: {
    taalnaam: "English",
    kop: "Your customer is asking for ISO 27001 or a completed security questionnaire.",
    pitch:
      "Concept, not approved. I help Dutch software and IT firms turn a customer " +
      "demand into a system an internal audit can follow. I never certify my own work.",
    nav: {
      home: "Home",
      aanleiding: "The demand",
      aanbod: "The offer",
      over: "About",
      contact: "Contact",
    },
    cta: "Request a gap-scan intake",
  },
} as const;

export type Taal = keyof typeof TEKST;

/* Eén gepubliceerde instap. Geen andere bedragen op de site. */
export const PRIJZEN = {
  instap: {
    nl: "vanaf €1.950 excl. btw, vaste prijs na intake",
    en: "from €1,950 excl. VAT, fixed price after intake",
  },
} as const;
