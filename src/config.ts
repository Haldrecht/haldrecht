/* De enige plek waar naam, contact en tekstvarianten staan.
   Wijzig hier, nergens anders. */

export const SITE = {
  /* Firm name in titles and metadata. The header and footer use the wordmark. */
  naam: "Haldrecht",
  woordmerk: "HALDRECHT",
  descriptor: "Regulatory Affairs & Assurance",
  /* haldrecht.nl and haldrecht.com are not registered. Keep this placeholder. */
  domein: "example.nl",

  /* Vul in zodra bekend. Leeg laten is beter dan verzinnen: een onjuist
     KvK-nummer op een site die over naleving gaat is een slechte grap. */
  kvk: "",
  btw: "",

  email: "",
  telefoon: "",

  persoon: {
    naam: "Ramon Sanders",
    rol: "Adviseur markttoegang en compliance",
  },
} as const;

export const TEKST = {
  nl: {
    taalnaam: "Nederlands",
    kop: "Binnenkomen bij opdrachtgevers die nu buiten bereik liggen",
    pitch:
      "Veel bedrijven verliezen opdrachten die ze hadden kunnen winnen, omdat " +
      "ze worden afgewezen voordat iemand naar hun aanbod heeft gekeken. Ik " +
      "zorg dat ze die poort door komen.",
    nav: {
      diensten: "Diensten",
      artikelen: "Artikelen",
      kaart: "Kaart",
      over: "Over",
      contact: "Contact",
    },
    cta: "Gesprek aanvragen",
  },
  en: {
    taalnaam: "English",
    kop: "Getting in with buyers that are out of reach today",
    pitch:
      "Many companies lose contracts they could have won, because they are " +
      "ruled out before anyone reads what they offered. I get them through " +
      "that gate.",
    nav: {
      diensten: "Services",
      artikelen: "Articles",
      kaart: "Map",
      over: "About",
      contact: "Contact",
    },
    cta: "Request a conversation",
  },
} as const;

export type Taal = keyof typeof TEKST;
