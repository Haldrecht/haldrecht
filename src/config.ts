/* De enige plek waar naam, contact en tekstvarianten staan.
   Wijzig hier, nergens anders. */

export const SITE = {
  /* WERKNAAM — vervang zodra de naam vaststaat. Verder nergens hardcoderen. */
  naam: "Haldrecht",
  domein: "haldrecht.com",

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
