/* Teksten van de RI&E-productpagina, NL en EN. Geen cijfers, geen prijs,
   geen klantnamen: de prijs staat in de dashboard-repo als aanname en is
   niet vrijgegeven voor publicatie. */
import type { Taal } from "../config";

export type RieTekst = {
  titel: string;
  beschrijving: string;
  kop: string;
  lead: string;
  start: string;
  toegang: string;
  login: string;
  wachtstand: string;
  loginWacht: string;
  inhoudKop: string;
  inhoud: { kop: string; tekst: string }[];
  keuzeKop: string;
  software: { kop: string; tekst: string; actie: string };
  advies: { kop: string; tekst: string; actie: string };
  klantKop: string;
  klantTekst: string;
  grensKop: string;
  grens: string[];
};

export const RIE_TEKST: Record<Taal, RieTekst> = {
  nl: {
    titel: "RI&E-software",
    beschrijving:
      "RI&E-software voor werkgevers: risico's per categorie inventariseren, maatregelen vastleggen en het plan van aanpak bijhouden.",
    kop: "RI&E-software voor werkgevers",
    lead:
      "Volgens artikel 5 van de Arbowet legt de werkgever de risico's van het werk schriftelijk vast in een risico-inventarisatie en -evaluatie (RI&E), met een plan van aanpak. Met deze software loop je de risico's van je werkplek stap voor stap door, leg je de maatregelen vast en houd je het plan van aanpak op één plek bij.",
    start: "Start met RI&E",
    toegang: "Toegang aanvragen",
    login: "Inloggen",
    wachtstand:
      "Zelf starten staat nog niet open. Vraag toegang aan, dan laten we het weten zodra het kan.",
    loginWacht: "Inloggen op het dashboard is nog niet vanaf deze site beschikbaar.",
    inhoudKop: "Wat je ermee doet",
    inhoud: [
      {
        kop: "Risico's per categorie",
        tekst:
          "Je werkt langs de gebieden waar op een werkplek iets mis kan gaan, en beoordeelt elk risico op kans en effect.",
      },
      {
        kop: "Maatregelen en acties",
        tekst:
          "Per risico leg je vast wat er al is en wat er moet komen, met een eigenaar en een datum.",
      },
      {
        kop: "Rapport",
        tekst:
          "Wat je invult kun je als RI&E-rapport exporteren, zodat je het kunt laten toetsen of delen.",
      },
    ],
    keuzeKop: "Software kopen of advies vragen",
    software: {
      kop: "De software",
      tekst:
        "Je stelt de RI&E zelf op, in je eigen tempo, met een vast stramien. Geen gesprek nodig om te beginnen.",
      actie: "Naar de software",
    },
    advies: {
      kop: "Advies",
      tekst:
        "Wil je dat iemand meekijkt, of speelt er een eis van een opdrachtgever waar de RI&E maar een deel van is? Dat is een gesprek, en het staat los van de software.",
      actie: "Gesprek aanvragen",
    },
    klantKop: "Al klant?",
    klantTekst: "Log in om verder te gaan waar je gebleven was.",
    grensKop: "Wat dit niet is",
    grens: [
      "De software vervangt geen deskundig oordeel. Welke eisen voor jouw bedrijf gelden, hangt van je situatie af.",
      "Een ingevulde RI&E is geen garantie op een goede inspectie of toets.",
    ],
  },
  en: {
    titel: "RI&E software",
    beschrijving:
      "RI&E software for employers: inventory workplace risks by category, record measures and keep the action plan up to date.",
    kop: "RI&E software for employers",
    lead:
      "Under article 5 of the Dutch Working Conditions Act (Arbowet), employers record the risks of the work in writing in a risk inventory and evaluation (RI&E), including an action plan. This software walks you through your workplace risks step by step, records the measures and keeps the action plan in one place.",
    start: "Start with RI&E",
    toegang: "Request access",
    login: "Log in",
    wachtstand:
      "Self-service sign-up is not open yet. Request access and we will tell you as soon as it is.",
    loginWacht: "Logging in to the dashboard is not available from this site yet.",
    inhoudKop: "What you do with it",
    inhoud: [
      {
        kop: "Risks by category",
        tekst:
          "You work through the areas where something can go wrong at a workplace and rate each risk on likelihood and impact.",
      },
      {
        kop: "Measures and actions",
        tekst:
          "For each risk you record what is already in place and what must follow, with an owner and a date.",
      },
      {
        kop: "Report",
        tekst:
          "What you enter can be exported as an RI&E report, so you can have it reviewed or share it.",
      },
    ],
    keuzeKop: "Buy the software or ask for advice",
    software: {
      kop: "The software",
      tekst:
        "You draw up the RI&E yourself, at your own pace, in a fixed structure. No conversation needed to begin.",
      actie: "To the software",
    },
    advies: {
      kop: "Advice",
      tekst:
        "Want someone to look along, or is the RI&E only part of a requirement a buyer has set? That is a conversation, and it is separate from the software.",
      actie: "Request a conversation",
    },
    klantKop: "Already a customer?",
    klantTekst: "Log in to continue where you left off.",
    grensKop: "What this is not",
    grens: [
      "The software does not replace expert judgement. Which requirements apply to your company depends on your situation.",
      "A completed RI&E is no guarantee of passing an inspection or review.",
    ],
  },
};
