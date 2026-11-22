/* Eén plek die bepaalt waar een RI&E-knop heen gaat.
   Zonder geverifieerde dashboard-route in config geeft dit null en toont de
   pagina de wachtstand. Er wordt nooit een URL samengesteld uit gokwerk. */
export type RieConfig = { appUrl: string; startPad: string; loginPad: string };

export function appLink(cfg: RieConfig, pad: string): string | null {
  if (!cfg.appUrl || !pad) return null;
  let basis: URL;
  try {
    basis = new URL(cfg.appUrl);
  } catch {
    return null;
  }
  if (basis.protocol !== "https:" && basis.hostname !== "localhost") return null;
  if (!pad.startsWith("/") || pad.startsWith("//")) return null;
  return new URL(pad, basis.origin).href;
}

export function rieRoutes(cfg: RieConfig) {
  return {
    start: appLink(cfg, cfg.startPad),
    login: appLink(cfg, cfg.loginPad),
  };
}
