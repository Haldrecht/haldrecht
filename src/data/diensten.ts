/* Zoekpagina's. De term staat hier bewust in de kop en de titel:
   deze URL's bestaan om gevonden te worden op de naam van de eis.
   Home en artikelen doen dat niet. */

export type Taal = "nl" | "en";

export type DienstTekst = {
  titel: string;
  beschrijving: string;
  lead: string;
  alinea: string[];
  grens: string;
};

export type Dienst = {
  slug: string;
  nl: DienstTekst;
  en: DienstTekst;
  gerelateerd: string[];
};

export const DIENSTEN: Dienst[] = [
  {
    slug: "iso-45001",
    gerelateerd: ["iso-9001", "iso-14001", "risicomanagement"],
    nl: {
      titel: "ISO 45001",
      beschrijving:
        "ISO 45001 (ISO45001) voorbereiden wanneer een opdrachtgever arbomanagement eist. De certificerende instelling beslist.",
      lead:
        "ISO 45001, ook gezocht als ISO45001, is de eis waarmee een opdrachtgever toetst of je arbeid en gezondheid aantoonbaar beheerst.",
      alinea: [
        "Grote afnemers en aanbestedende diensten zetten die eis vóór de inhoudelijke beoordeling. Zonder een werkend arbomanagementsysteem kom je de poort niet door, hoe goed het aanbod daarna ook is.",
        "Ik vertaal ISO 45001 naar een manier van werken die een externe toets doorstaat: rollen, risico's, meldingen en bewijs dat klopt op de peildatum. Geen map die alleen voor de audit bestaat.",
      ],
      grens: "Ik beloof het certificaat niet. Dat geeft de certificerende instelling af.",
    },
    en: {
      titel: "ISO 45001",
      beschrijving:
        "Prepare for ISO 45001 (ISO45001) when a buyer requires occupational health and safety management. The certification body decides.",
      lead:
        "ISO 45001, also searched as ISO45001, is the requirement a buyer uses to test whether you can evidence control of health and safety at work.",
      alinea: [
        "Large buyers and contracting authorities apply it before anyone reads the offer. Without a working system you do not pass the gate.",
        "I turn ISO 45001 into a way of working that survives an external audit: roles, risks, reports, and evidence that is valid on the right date.",
      ],
      grens: "I do not promise the certificate. The certification body issues that.",
    },
  },
  {
    slug: "rtgb",
    gerelateerd: ["agressie", "weerbaarheid", "uniformberoepen"],
    nl: {
      titel: "RTGB",
      beschrijving:
        "RTGB, de Regeling Toetsing Geweldsbeheersing Boa, aantoonbaar organiseren. Ik neem de toets niet af.",
      lead:
        "RTGB is de Regeling Toetsing Geweldsbeheersing Boa. Die geldt voor boa's die geweldsbevoegd zijn, niet voor iedere handhaver.",
      alinea: [
        "Een opdrachtgever of werkgever wil zien dat geweldsbevoegde boa's periodiek aan die toets voldoen: kennis, vaardigheden en professioneel optreden, gekoppeld aan de bevoegdheid die de functie echt heeft.",
        "Ik help de organisatie dat aantoonbaar te maken. Wie onder RTGB valt, welke bevoegdheid erbij hoort, en welk bewijs op de peildatum geldig is.",
      ],
      grens:
        "Ik neem de RTGB-toets niet af en ik beschrijf geen geweldstechnieken. De regeling en de examinator bepalen de toets.",
    },
    en: {
      titel: "RTGB",
      beschrijving:
        "Make RTGB, the Dutch violence-control test for authorised enforcement officers, demonstrable. I do not administer the test.",
      lead:
        "RTGB is the Regeling Toetsing Geweldsbeheersing Boa. It applies to Dutch enforcement officers who are authorised to use force, not to every uniformed role.",
      alinea: [
        "A buyer or employer wants evidence that those officers still meet the periodic test: knowledge, skill, and professional conduct, tied to the powers the role actually has.",
        "I help the organisation make that demonstrable. Who falls under RTGB, which authority comes with the post, and which evidence is valid on the date that matters.",
      ],
      grens:
        "I do not administer the RTGB test and I do not describe use-of-force techniques. The regulation and the examiner set the test.",
    },
  },
  {
    slug: "agressie",
    gerelateerd: ["weerbaarheid", "rtgb", "tactisch"],
    nl: {
      titel: "Agressie",
      beschrijving:
        "Agressie op de werkvloer: een werkwijze voor de-escalatie die een opdrachtgever kan toetsen.",
      lead:
        "Agressie is voor veel uniformberoepen en publieke balies geen incident meer maar een eis: je moet laten zien dat medewerkers het herkennen en kunnen de-escaleren.",
      alinea: [
        "Opdrachtgevers vragen niet om een losse cursusdag. Ze vragen een werkwijze: wie handelt, hoe een melding loopt, en hoe je achteraf kunt tonen dat de aanpak is gebruikt.",
        "Ik zet die eis om in een werkwijze die bij de rest van de organisatie past, naast weerbaarheid en, waar het boa's met een geweldsbevoegdheid betreft, RTGB.",
      ],
      grens: "Ik lever geen fysieke techniektraining en geen certificaat van een opleider.",
    },
    en: {
      titel: "Aggression",
      beschrijving:
        "Aggression at work: a way of de-escalating that a buyer can actually test.",
      lead:
        "Aggression is, for many uniformed roles and public counters, a requirement: you must show that staff recognise it and can de-escalate.",
      alinea: [
        "Buyers do not ask for a one-off course. They ask for a way of working: who acts, how an incident is recorded, and how you can show afterwards that the approach was used.",
        "I turn that requirement into a way of working that fits the rest of the organisation, alongside resilience and, where enforcement officers are authorised to use force, RTGB.",
      ],
      grens: "I do not provide physical technique training or a training provider's certificate.",
    },
  },
  {
    slug: "weerbaarheid",
    gerelateerd: ["agressie", "uniformberoepen", "rtgb"],
    nl: {
      titel: "Weerbaarheid",
      beschrijving:
        "Weerbaarheid voor mensen in uniform: onder druk blijven handelen, en dat kunnen laten zien.",
      lead:
        "Weerbaarheid is de mentale en fysieke basis onder druk. RTGB toetst het wettelijke kader; weerbaarheid is wat iemand nog kan als de situatie vastloopt.",
      alinea: [
        "Voor uniformberoepen vragen opdrachtgevers steeds vaker dat dit geen goed voornemen is maar een terugkerende praktijk, met een eigenaar en een vorm van bewijs.",
        "Ik help bepalen wat je moet kunnen aantonen, en hoe dat aansluit op agressie, tactisch optreden en, als de functie geweldsbevoegd is, RTGB.",
      ],
      grens: "Ik geef de weerbaarheidstraining niet zelf en ik beloof geen trainingscertificaat.",
    },
    en: {
      titel: "Resilience",
      beschrijving:
        "Resilience for people in uniform: keep acting under pressure, and be able to show it.",
      lead:
        "Resilience is the mental and physical base under pressure. RTGB tests the legal frame; resilience is what a person can still do when a situation locks up.",
      alinea: [
        "For uniformed professions, buyers increasingly expect this to be a repeated practice with an owner and some form of evidence, not a good intention.",
        "I help decide what you must be able to show, and how it connects to aggression, tactical conduct and, where the role is authorised to use force, RTGB.",
      ],
      grens: "I do not deliver the resilience course myself and I do not promise a training certificate.",
    },
  },
  {
    slug: "uniformberoepen",
    gerelateerd: ["rtgb", "agressie", "tactisch"],
    nl: {
      titel: "Uniformberoepen",
      beschrijving:
        "Uniformberoepen: RTGB, agressie, weerbaarheid en tactisch optreden vertaald naar wat je aantoont.",
      lead:
        "Uniformberoepen — boa's, handhavers, beveiligers, toezicht — vallen af op eisen die niets met hun vakmanschap te maken hebben en alles met wat ze kunnen aantonen.",
      alinea: [
        "De eis heet dan RTGB, omgaan met agressie, weerbaarheid of tactisch optreden. Zonder bewijs op de juiste datum telt de ervaring op straat niet mee.",
        "Ik scheid wat een poort is van wat een weging is, en zet alleen de poort om in een werkwijze die een opdrachtgever kan afvinken.",
      ],
      grens: "Ik neem geen ambtseed af en ik ken geen bevoegdheid toe. Dat doet de aanstellende instantie.",
    },
    en: {
      titel: "Uniformed professions",
      beschrijving:
        "Uniformed professions: RTGB, aggression, resilience and tactical conduct, turned into what you can evidence.",
      lead:
        "Uniformed professions — enforcement officers, wardens, security staff, inspectors — are ruled out on requirements that have nothing to do with their craft and everything to do with what they can evidence.",
      alinea: [
        "The requirement is then called RTGB, dealing with aggression, resilience, or tactical conduct. Without evidence on the right date, experience on the street does not count.",
        "I separate a gate from a score, and turn only the gate into a way of working a buyer can tick off.",
      ],
      grens: "I do not swear anyone in and I do not grant powers. The appointing authority does that.",
    },
  },
  {
    slug: "tactisch",
    gerelateerd: ["agressie", "weerbaarheid", "uniformberoepen"],
    nl: {
      titel: "Tactisch optreden",
      beschrijving:
        "Tactisch optreden als eis bij uniformberoepen: besluitvorming onder druk, zonder een bevoegdheid te beloven.",
      lead:
        "Tactisch optreden vragen opdrachtgevers aan uniformberoepen als besluitvorming onder druk: positie, communicatie en het moment waarop je stopt.",
      alinea: [
        "In een inkoop staat dat zelden als een losse training. Het zit in de eis dat mensen agressie herkennen, weerbaar blijven en, waar RTGB geldt, binnen hun bevoegdheid handelen.",
        "Ik maak zichtbaar welk deel je moet kunnen aantonen, en welk deel een opleider of examinator blijft.",
      ],
      grens: "Ik beschrijf geen geweldstechnieken en ik leer niemand een middel te gebruiken.",
    },
    en: {
      titel: "Tactical conduct",
      beschrijving:
        "Tactical conduct as a requirement for uniformed professions: decisions under pressure, without promising a power.",
      lead:
        "Buyers ask uniformed professions for tactical conduct as decision-making under pressure: position, communication, and the moment you stop.",
      alinea: [
        "In a procurement this is rarely a standalone course. It sits inside the requirement that people recognise aggression, stay resilient and, where RTGB applies, act within their authority.",
        "I make visible which part you must be able to evidence, and which part stays with a trainer or an examiner.",
      ],
      grens: "I do not describe use-of-force techniques and I do not teach anyone to use a weapon or tool.",
    },
  },
  {
    slug: "risicomanagement",
    gerelateerd: ["iso-45001", "iso-27001", "iso-9001"],
    nl: {
      titel: "Risicomanagement",
      beschrijving:
        "Risicomanagement dat benoemt welke poort dichtzit en welke eis je wel kunt halen.",
      lead:
        "Risicomanagement is hier geen volwassenheidsscore. Het is benoemen welke eis een poort is en welke eis je binnen afzienbare tijd kunt openen.",
      alinea: [
        "ISO 45001, ISO 27001 en ISO 9001 vragen alle drie dat risico's benoemd en bijgehouden worden. Een opdrachtgever leest het register, niet de intentie.",
        "Ik help het register zo op te zetten dat het klopt met hoe het werk echt loopt, en dat een externe toets het kan volgen.",
      ],
      grens: "Ik geef geen cijfer voor volwassenheid. Een score zonder bron is hier waardeloos.",
    },
    en: {
      titel: "Risk management",
      beschrijving:
        "Risk management that names which gate is shut and which requirement you can still meet.",
      lead:
        "Risk management here is not a maturity score. It is naming which requirement is a gate and which one you can open in a foreseeable time.",
      alinea: [
        "ISO 45001, ISO 27001 and ISO 9001 all ask that risks are named and kept up to date. A buyer reads the register, not the intention.",
        "I help set the register up so that it matches how the work actually runs, and so that an external audit can follow it.",
      ],
      grens: "I do not give a maturity number. A score without a source is worthless here.",
    },
  },
  {
    slug: "iso-9001",
    gerelateerd: ["iso-45001", "iso-14001", "risicomanagement"],
    nl: {
      titel: "ISO 9001",
      beschrijving:
        "ISO 9001 (ISO9001) voorbereiden wanneer een afnemer kwaliteitsmanagement eist. Het certificaat geeft de instelling af.",
      lead:
        "ISO 9001, ook gezocht als ISO9001, is nog steeds de eis waarmee een afnemer toetst of je afspraken over kwaliteit nakomt en dat kunt laten zien.",
      alinea: [
        "De poort zit zelden in de tekst van de norm. Hij zit in de vraag of afwijkingen, klachten en verbetering aantoonbaar zijn op het moment van inschrijven.",
        "Ik bouw dat als een manier van werken, niet als een handboek dat niemand opent.",
      ],
      grens: "Ik beloof het certificaat niet. Dat geeft de certificerende instelling af.",
    },
    en: {
      titel: "ISO 9001",
      beschrijving:
        "Prepare for ISO 9001 (ISO9001) when a buyer requires quality management. The certification body issues the certificate.",
      lead:
        "ISO 9001, also searched as ISO9001, is still the requirement a buyer uses to test whether you keep quality promises and can show it.",
      alinea: [
        "The gate is rarely the text of the standard. It is whether deviations, complaints and improvement are demonstrable at the moment you bid.",
        "I build that as a way of working, not as a manual nobody opens.",
      ],
      grens: "I do not promise the certificate. The certification body issues that.",
    },
  },
  {
    slug: "iso-27001",
    gerelateerd: ["privacy", "risicomanagement", "iso-9001"],
    nl: {
      titel: "ISO 27001",
      beschrijving:
        "ISO 27001 (ISO27001) voorbereiden voor informatiebeveiliging die een opdrachtgever vraagt. Geen certificaatbelofte.",
      lead:
        "ISO 27001, ook gezocht als ISO27001, is de eis waarmee een opdrachtgever toetst of je informatiebeveiliging aantoonbaar beheerst.",
      alinea: [
        "De vraag komt vaak binnen als een leveranciersvragenlijst of als een geschiktheidseis. Wat telt is of maatregelen, risico's en bewijs bij elkaar horen.",
        "Ik zet ISO 27001 om in een werkwijze die een externe toets kan volgen, samen met privacy waar de AVG dezelfde feiten raakt.",
      ],
      grens: "Ik beloof het certificaat niet. Dat geeft de certificerende instelling af.",
    },
    en: {
      titel: "ISO 27001",
      beschrijving:
        "Prepare for ISO 27001 (ISO27001) when a buyer requires information security. No promise of a certificate.",
      lead:
        "ISO 27001, also searched as ISO27001, is the requirement a buyer uses to test whether you can evidence control of information security.",
      alinea: [
        "The question often arrives as a supplier questionnaire or as a selection requirement. What counts is whether measures, risks and evidence belong together.",
        "I turn ISO 27001 into a way of working an external audit can follow, together with privacy where data protection law touches the same facts.",
      ],
      grens: "I do not promise the certificate. The certification body issues that.",
    },
  },
  {
    slug: "privacy",
    gerelateerd: ["iso-27001", "risicomanagement", "iso-9001"],
    nl: {
      titel: "Privacy",
      beschrijving:
        "Privacy en de AVG aantoonbaar maken voor een afnemer. Dit is geen voorbehouden juridisch advies.",
      lead:
        "Privacy wordt een poort zodra een afnemer vraagt of je de AVG aantoonbaar naleeft: verwerkingen, bewaartermijnen, en afspraken met partijen die meekijken.",
      alinea: [
        "Ik help dat op een rij te zetten zodat een vragenlijst of een audit de feiten vindt. Waar het antwoord een juridisch oordeel is, stop ik en verwijs ik door.",
        "Privacy raakt ISO 27001 waar dezelfde systemen en dezelfde leveranciers in het spel zijn. Die twee houd ik uit elkaar, en ik laat zien waar ze elkaar nodig hebben.",
      ],
      grens: "Ik lever geen voorbehouden juridisch werk. Een oordeel over de wet is aan een bevoegde jurist.",
    },
    en: {
      titel: "Privacy",
      beschrijving:
        "Make privacy and the GDPR demonstrable for a buyer. This is not reserved legal advice.",
      lead:
        "Privacy becomes a gate when a buyer asks whether you can evidence GDPR compliance: processing, retention, and agreements with parties who also see the data.",
      alinea: [
        "I help put that in order so a questionnaire or an audit finds the facts. Where the answer is a legal judgement, I stop and refer on.",
        "Privacy meets ISO 27001 where the same systems and the same suppliers are involved. I keep the two apart, and I show where they need each other.",
      ],
      grens: "I do not provide reserved legal services. A judgement on the law belongs to a qualified lawyer.",
    },
  },
  {
    slug: "iso-14001",
    gerelateerd: ["iso-9001", "iso-45001", "b-corp"],
    nl: {
      titel: "ISO 14001",
      beschrijving:
        "ISO 14001 (ISO14001) voorbereiden voor milieumanagement dat een opdrachtgever wil zien. De instelling certificeert.",
      lead:
        "ISO 14001, ook gezocht als ISO14001, is de eis waarmee een opdrachtgever toetst of je milieueffecten kent en bijstuurt.",
      alinea: [
        "In bouw, installatie en levering aan overheden staat die eis vaak naast ISO 9001 en ISO 45001. Drie systemen die elkaar moeten gebruiken, niet drie mappen.",
        "Ik zet ISO 14001 op in lijn met hoe het werk loopt, zodat een externe toets de milieudoelen en de afwijkingen kan volgen.",
      ],
      grens: "Ik beloof het certificaat niet. Dat geeft de certificerende instelling af.",
    },
    en: {
      titel: "ISO 14001",
      beschrijving:
        "Prepare for ISO 14001 (ISO14001) when a buyer wants environmental management. The certification body decides.",
      lead:
        "ISO 14001, also searched as ISO14001, is the requirement a buyer uses to test whether you know your environmental effects and act on them.",
      alinea: [
        "In construction, installation and supply to government it often sits next to ISO 9001 and ISO 45001. Three systems that should use each other, not three folders.",
        "I set ISO 14001 up in line with how the work runs, so an external audit can follow the environmental objectives and the deviations.",
      ],
      grens: "I do not promise the certificate. The certification body issues that.",
    },
  },
  {
    slug: "b-corp",
    gerelateerd: ["iso-14001", "iso-9001", "privacy"],
    nl: {
      titel: "B Corp",
      beschrijving:
        "B Corp (B-corp) voorbereiden wanneer een afnemer dat keurmerk vraagt. B Lab beslist, niet ik.",
      lead:
        "B Corp, ook geschreven als B-corp, vragen sommige afnemers als bewijs dat bestuur, medewerkers, milieu en transparantie meetellen.",
      alinea: [
        "Het keurmerk is geen ISO-norm. De poort is wel hetzelfde: zonder bewijs op de gevraagde onderdelen doe je niet mee, ook als het werk inhoudelijk klopt.",
        "Ik help de punten die een afnemer noemt te vertalen naar wat er al ligt — vaak raakt dat ISO 14001, ISO 9001 of privacy — en naar wat er nog ontbreekt.",
      ],
      grens: "Ik ken het keurmerk niet toe. Dat doet B Lab.",
    },
    en: {
      titel: "B Corp",
      beschrijving:
        "Prepare for B Corp (B-corp) when a buyer asks for that certification. B Lab decides, not me.",
      lead:
        "B Corp, also written B-corp, is what some buyers ask for as evidence that governance, workers, environment and transparency count.",
      alinea: [
        "The mark is not an ISO standard. The gate is the same: without evidence on the points they named, you do not get in, even when the work itself is sound.",
        "I help translate the points a buyer names into what you already have — often that touches ISO 14001, ISO 9001 or privacy — and into what is still missing.",
      ],
      grens: "I do not award the mark. B Lab does that.",
    },
  },
];

export function dienstPad(slug: string, taal: Taal): string {
  return taal === "nl" ? `/diensten/${slug}/` : `/en/diensten/${slug}/`;
}

export function dienstPaden(): string[] {
  return [
    "/diensten/",
    "/en/diensten/",
    ...DIENSTEN.flatMap((d) => [dienstPad(d.slug, "nl"), dienstPad(d.slug, "en")]),
  ];
}

export function gerelateerde(slug: string): Dienst[] {
  const bron = DIENSTEN.find((d) => d.slug === slug);
  if (!bron) return [];
  return bron.gerelateerd.flatMap((s) => {
    const gevonden = DIENSTEN.find((d) => d.slug === s);
    return gevonden ? [gevonden] : [];
  });
}
