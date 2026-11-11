# Werkafspraken voor deze repo

Lees dit voordat je iets wijzigt. Deze afspraken bestaan omdat één persoon
deze site onderhoudt naast een studie; alles wat hier staat is bedoeld om
later werk te voorkomen.

## Wat dit is

Statische site in Astro voor een adviespraktijk rond markttoegang: het mkb
helpen voldoen aan de eisen die grote afnemers en aanbestedende diensten
stellen, zodat ze opdrachten kunnen winnen die nu buiten bereik liggen.

**Artikelen schrijf je in de editor, de rest komt uit data.** De kaart en de
scan worden gebouwd uit `src/data/eisen.json`. Dat bestand komt uit een
extractiepijplijn over aanbestedingsdocumenten en wordt nooit met de hand
bewerkt. Artikelen zijn Markdown in deze repo; de editor schrijft die
bestanden, er is geen gehost CMS.

## Harde regels

1. **Nooit een pagina bouwen die met de hand moet worden bijgewerkt als de
   data verandert.** Alles wat uit `eisen.json` kan komen, komt uit
   `eisen.json`.
2. **Nooit een cijfer in een artikel hardcoderen.** Getallen komen uit de
   datalaag, zodat ze meeveranderen en blijven kloppen.
3. **Geen trackers, geen cookies, geen externe fonts.** Deze praktijk verkoopt
   gegevensbescherming; een pagina vol third-party requests weerlegt zichzelf.
   Daarom ook geen cookiebanner — die is niet nodig als er niets te melden is.
4. **Geen afhankelijkheid toevoegen zonder reden.** Vraag het eerst. Elke
   dependency is onderhoud.
5. **Niets publiceren dat niet geverifieerd is.** Geen klantnamen, geen
   omzetcijfers, geen percentages zonder bron. Zie "Claimgrens".

## Claimgrens

Het corpus bevat **wat aanbestedingen eisen**, niet **wie is afgewezen en
waarom**. Afwijzingsgronden zitten niet in de data.

Dus nooit: *"X% van de bedrijven valt af om vermijdbare redenen."*

Wel: *"In deze sector sluit X% van de opdrachten je uit op een omzeteis die je
niet kunt veranderen; Y% op een certificaat dat je binnen zes maanden kunt
halen."*

Onder elke pagina met cijfers hoort het verantwoordingsblok uit
`src/components/Verantwoording.astro`: bron, periode, CPV-codes, aantallen, en
wat er niet in zit (Mercell-publicaties zonder DOC-metadata ontbreken).

## Taalregels voor teksten

Nooit openen met: compliance, norm, certificaat, ISO, aanbesteding,
geschiktheidseisen, audit, procedure, bureaucratie.

Wel openen met: de opdracht, de klant, de omzet, binnenkomen, meedingen,
wat er tussen jou en de opdracht staat.

Vaktermen mogen vallen — ze bewijzen vakkennis — maar nooit in de eerste zin
en nooit in een kop.

Uitzondering, lancering: home, `/klant-eist-iso-27001/` en
`/iso-27001-gap-scan/` (en de Engelse tegenhangers) openen met de klanteis
ISO 27001 of een security questionnaire. Dat is de propositie. De oude
regel geldt niet voor die pagina's.

`/diensten/` en `/artikelen/` staan op `noindex` en niet in het menu. Of ze
een 301 krijgen, is een open keuze. `/kaart` en `/scan` worden niet gebouwd.
Het conceptartikel blijft uit de productiebuild. `catalogus.ts` wordt niet
meer als OfferCatalog op elke pagina gezet. De zoektermen `externe ISO auditor`
en `interne auditor inhuren` blijven in dat bestand staan.

## Structuur

```
keystatic.config.ts             editor; schrijft src/content/artikelen/nl/*.md
src/
  content/artikelen/nl/*.md     artikelen, Nederlands
  content/artikelen/en/*.md     artikelen, Engels (voorlopig leeg)
  content.config.ts             schema; build faalt bij ontbrekende velden
  data/eisen.json               gegenereerd, niet met de hand bewerken
  data/diensten.ts              zoekpagina's per eis; de term hoort in de kop
  layouts/Base.astro            enige layout
  components/                   kleine, herbruikbare stukken
  lib/artikelen.ts              welke stukken in welke build staan
  pages/                        NL op /, Engels op /en/
  styles/global.css             alle styling, geen framework
```

## Talen

NL is de standaard en staat op `/`. EN staat op `/en/`.

Vertaald worden: home, over, contact, en de interface van kaart en scan.
Artikelen blijven Nederlands tot er een Engelstalige lezer is die we kunnen
aanwijzen. Reden: de kosten zitten in onderhoud, niet in techniek.

## Commando's

```
npm install
npm run dev      lokaal op http://127.0.0.1:4321/
npm run build    naar dist/
npm run preview  build bekijken
```

Artikelen schrijven, terwijl `npm run dev` draait:

http://127.0.0.1:4321/keystatic

De editor zit alleen in dev. Keystatic zet routes die Astro anders tot een
serverbuild maakt; `npm run build` laat ze weg en blijft statisch. Een stuk
met `status: concept` schrijft hij wel weg, maar de site neemt het niet op
in de productiebuild. Zet de status op `gepubliceerd` om het mee te nemen.
Engelse artikelen hebben geen editor: die collectie bestaat niet.

## Bezwaren en open vragen gaan naar Notion, niet alleen naar de chat

Als je een blokkade, bezwaar, open vraag of onverifieerbare claim tegenkomt,
**log hem in Notion** in plaats van hem alleen te noemen. Noem hem ook in de
chat, maar de chat is geen opslag: wat daar blijft staan is over een week weg.

Database: **Command Centre → Life**
`collection://b2e102de-5569-4359-bcb0-7f32831cde5c`

Eén regel per item, met deze velden ingevuld:

| Veld | Waarde |
|---|---|
| `Type` | `Task` |
| `Area` | `Career` · `Degree` · `Online presence` · `Writing & thinking` · `Trading` · `Body` · `Personal training` · `Fund` · `Dance` · `MSaaS` |
| `Status` | `To do` |
| `Impact` | `High` als het iets anders blokkeert of een publicatie onjuist zou maken |
| `Effort` | `S` onder 2 uur · `M` halve dag · `L` meer |
| `Life goal` | `1 · Authority` · `2 · Network & social` · `3 · Money` |
| `Note` | **waaróm het een probleem is, en wat het beslist.** Niet de taak herhalen. |

De `Note` is het hele punt. Een regel die zegt *"artikel 21 verifiëren"* is
waardeloos; een regel die zegt *"de bronnen spreken elkaar tegen over de
ingangsdatum en ik heb de strekking maar niet de tekst, dus hier niet over
publiceren"* is bruikbaar over drie weken.

**Wat wél wordt gelogd:** iets dat verder werk blokkeert, een feit dat
geverifieerd moet worden voor het extern gebruikt wordt, een aanname waarop
een plan rust, een beslissing die alleen Ramon kan nemen, een risico dat niet
in een model zit.

**Wat niet:** meningsverschillen over smaak, dingen die in hetzelfde gesprek
opgelost worden, en adviezen die hij meteen kan opvolgen.

Niet ongevraagd een nieuwe database of pagina aanmaken. Deze bestaat.

## Wat nog niet bestaat

- `src/data/eisen.json` bevat nu alleen voorbeelddata met het juiste schema.
  De echte extractie is niet vrijgegeven voor publicatie: gewogen
  marktresultaten en sectorvergelijkingen wachten op de blokken in
  `tender-onderzoek/tender-fase-1C-stap1-terugkoppeling.md`.
- `/kaart` en `/scan` zijn daarom nog niet gebouwd. Bouw ze pas als de data er
  is; een lege kaart is erger dan geen kaart.
- De firmanaam staat in `src/config.ts`: `naam` is Haldrecht, `woordmerk` is
  HALDRECHT, `descriptor` is Regulatory Affairs & Assurance. Het kop- en
  voetmerk lezen het woordmerk. Domein en e-mail blijven een placeholder
  (`example.nl`, leeg e-mailadres). Het enige domein is haldrecht.com, bij
  Squarespace geregistreerd en niet gekoppeld. Zet het niet in de config en
  niet in DNS. De intake op `/contact/` staat
  uit zolang `SITE.email` leeg is: het formulier verstuurt nergens heen.
- Het eerste artikel staat op `status: concept` tot het stemprofiel er is.
  Concepten zijn zichtbaar in `npm run dev` en ontbreken in `npm run build`.
- De lanceringstekst is een concept (`SITE.concept`). Open vragen, niet
  beantwoord: goedkeuring van de propositie; praktijkmail en reactietermijn;
  wanneer KvK en
  rechtsvorm in de voet mogen; of de oude QHSE-zin over geslaagde
  certificeringen mag blijven; wanneer Lead Auditor en CIPP/E verwacht
  worden; of Engels bij de lancering mee mag; of "assurance" in de descriptor
  een accountantsrapport suggereert; of de naam Haldrecht Register zichtbaar
  mag zijn. De zin over eerdere QHSE-certificeringen staat nog op Over en
  wacht op toestemming. Haldrecht Register staat niet op de site.
