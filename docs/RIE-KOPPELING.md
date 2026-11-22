# RI&E: koppeling website → dashboard

De site linkt alleen naar het dashboard als `RIE` in `src/config.ts` is ingevuld.
Leeg (nu) toont `/rie/` een wachtstand en verwijst naar `/contact/`.

## Wat de website nodig heeft van `Haldrecht/rie-compliance-dashboard`

| Config | Betekenis | Status |
|---|---|---|
| `RIE.appUrl` | https-oorsprong van het gedeployde dashboard | **onbekend**: niet geverifieerd welke URL in productie staat |
| `RIE.startPad` | waar een nieuwe klant begint (registratie of checkout) | **bestaat nog niet** |
| `RIE.loginPad` | login voor bestaande klanten | `/login` bestaat in code op `main`; nog niet bevestigd als contract |

## Gevonden in de dashboard-repo (alleen gelezen, op `main` e3a2227)

- `/register` en `POST /api/auth/register` zijn bewust uitgeschakeld ("Account aanmaken uitgeschakeld"; accounts worden door een beheerder aangemaakt).
- `POST /api/payment/create-checkout` verwacht `{ userId, email, plan }`: een bestaand gebruikers-ID. Er is dus geen publieke route die een nieuwe bezoeker naar Stripe brengt.
- `success_url` is `/payment/success`, `cancel_url` is `/register?canceled=true`, dat nu naar de uitgeschakelde pagina leidt.
- Het bedrag in die route (49900, jaarabonnement) staat er als aanname; de website publiceert geen prijs.
- De branch `feat/o2c-vertical-slice` had bij inspectie geen commits boven `main`.

## Wat de dashboard-engineer moet opleveren voordat `startPad` gevuld mag worden

1. Een publieke, werkende start-URL (registratie → Stripe test-checkout → dashboard).
2. De definitieve productie-oorsprong.
3. Wat terugkerende klanten zien en waar een geannuleerde betaling landt.
4. Bevestiging van de prijs, als die op de site moet.

Daarna: vul de drie velden in `src/config.ts` in. Niets anders hoeft te veranderen;
`npm test` controleert beide taalversies.

## Meetpunten

Klikken met `data-event` sturen een `CustomEvent("haldrecht:event")` op `document`
(`rie_start`, `rie_toegang_aanvragen`, `rie_login`, `advies_aanvragen`). Er wordt niets
verstuurd of opgeslagen; een luisteraar is er pas als iemand er een toevoegt.
