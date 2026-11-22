# RI&E: koppeling website → dashboard

**Stand van zaken:** zelf registreren en afrekenen zijn nog niet operationeel.
De site linkt daarom nergens naar de app. Zolang `RIE` in `src/config.ts` leeg is,
toont `/rie/` een wachtstand en verwijst naar `/contact/`.

## Wat de klant moet kunnen (vereisten voor de koppeling)

1. Een nieuwe klant kan vanaf de site zelf beginnen: een account aanmaken en
   afrekenen (eerst in testmodus), en komt daarna in het RI&E-dashboard.
2. Een bestaande klant kan inloggen en verder gaan waar hij gebleven was.
3. Een klant die de betaling afbreekt, komt op een duidelijke pagina terug en
   kan het opnieuw proberen of contact opnemen.
4. Een klant die betaald heeft maar nog geen toegang ziet, krijgt een begrijpelijke
   melding en een contactroute.
5. De prijs is vastgesteld en bevestigd voordat hij op de site staat.

## Wat de website nodig heeft van `Haldrecht/rie-compliance-dashboard`

| Config | Betekenis | Status |
|---|---|---|
| `RIE.appUrl` | https-oorsprong van het gedeployde dashboard | nog te bevestigen |
| `RIE.startPad` | waar een nieuwe klant begint (account + afrekenen) | nog niet beschikbaar |
| `RIE.loginPad` | waar een bestaande klant inlogt | nog te bevestigen |

Zodra de dashboard-engineer een werkende, geverifieerde route oplevert, vult een
vervolgcommit deze drie velden in. Niets anders hoeft te veranderen;
`npm test` controleert beide taalversies.

## Meetpunten

Klikken met `data-event` sturen een `CustomEvent("haldrecht:event")` op `document`
(`rie_start`, `rie_toegang_aanvragen`, `rie_login`, `advies_aanvragen`). Er wordt niets
verstuurd of opgeslagen; een luisteraar is er pas als iemand er een toevoegt.
