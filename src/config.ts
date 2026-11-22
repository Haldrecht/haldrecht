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

/* Koppeling met het RI&E-dashboard (aparte repo: rie-compliance-dashboard).
   Leeg = die route bestaat nog niet of is niet geverifieerd. De site linkt dan
   nergens heen en zegt dat eerlijk. Verzin hier geen URL: vul alleen in wat
   de dashboard-repo als werkend contract oplevert (zie docs/RIE-KOPPELING.md).
   - appUrl: oorsprong van het dashboard, zonder slash, bv. https://app.example
   - startPad: waar een nieuwe klant begint (registratie of checkout)
   - loginPad: waar een bestaande klant inlogt */
export const RIE = {
  appUrl: "",
  startPad: "",
  loginPad: "",
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
      rie: "RI&E",
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
      rie: "RI&E",
      over: "About",
      contact: "Contact",
    },
    cta: "Request a conversation",
  },
} as const;

export type Taal = keyof typeof TEKST;
