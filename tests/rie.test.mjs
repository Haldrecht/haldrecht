/* Geen test-framework: node:test. Draai met `npm test` (bouwt eerst). */
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import { appLink, rieRoutes } from "../src/lib/rie.ts";

const html = (p) => readFileSync(new URL(`../dist/${p}`, import.meta.url), "utf8");

test("appLink: leeg of ongeldig geeft null, nooit een gegokte URL", () => {
  assert.equal(appLink({ appUrl: "", startPad: "/x", loginPad: "" }, "/x"), null);
  assert.equal(appLink({ appUrl: "https://a.example", startPad: "", loginPad: "" }, ""), null);
  assert.equal(appLink({ appUrl: "not a url", startPad: "", loginPad: "" }, "/x"), null);
  assert.equal(appLink({ appUrl: "http://a.example", startPad: "", loginPad: "" }, "/x"), null);
  assert.equal(appLink({ appUrl: "https://a.example", startPad: "", loginPad: "" }, "//evil.example"), null);
  assert.equal(appLink({ appUrl: "https://a.example", startPad: "", loginPad: "" }, "x"), null);
});

test("appLink: geldige config geeft https-URL op de dashboard-oorsprong", () => {
  const r = rieRoutes({ appUrl: "https://app.example/", startPad: "/register", loginPad: "/login" });
  assert.equal(r.start, "https://app.example/register");
  assert.equal(r.login, "https://app.example/login");
});

for (const [pad, taal] of [["rie/index.html", "nl"], ["en/rie/index.html", "en"]]) {
  test(`${pad}: bestaat, juiste taal, één h1`, () => {
    assert.ok(existsSync(new URL(`../dist/${pad}`, import.meta.url)));
    const h = html(pad);
    assert.match(h, new RegExp(`<html lang="${taal}"`));
    assert.equal((h.match(/<h1[ >]/g) || []).length, 1);
  });

  test(`${pad}: zonder dashboardroute geen link naar de app en een duidelijke wachtstand`, () => {
    const h = html(pad);
    assert.match(h, /data-rie-start="wacht"/);
    assert.match(h, /id="rie-wacht"/);
    assert.match(h, /data-event="rie_toegang_aanvragen"/);
    assert.doesNotMatch(h, /data-event="rie_(start|login)"/);
    assert.doesNotMatch(h, /stripe|checkout/i);
  });

  test(`${pad}: software en advies zijn gescheiden acties`, () => {
    const h = html(pad);
    assert.match(h, /id="rie-sw"/);
    assert.match(h, /id="rie-adv"/);
    assert.match(h, /data-event="advies_aanvragen"/);
  });

  test(`${pad}: geen externe scripts, trackers of prijs`, () => {
    const h = html(pad);
    assert.doesNotMatch(h, /<script[^>]+src="https?:/);
    assert.doesNotMatch(h, /€\s?\d|\b499\b/);
  });
}

test("navigatie en sitemap bevatten /rie/", () => {
  assert.match(html("index.html"), /href="\/rie\/"/);
  assert.match(html("en/index.html"), /href="\/en\/rie\/"/);
  const sm = html("sitemap.xml");
  assert.match(sm, /\/rie\//);
  assert.match(sm, /\/en\/rie\//);
});
