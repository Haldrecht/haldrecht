/* Meetpunt zonder derde partij. Een klik op een element met data-event
   wordt een CustomEvent "haldrecht:event" op document. Er wordt niets
   verstuurd. Wil Ramon later meten, dan hangt hij daar één luisteraar aan;
   tot die tijd gebeurt er niets. Geen cookies, geen opslag, geen netwerk. */
export type Gebeurtenis = { naam: string; plek?: string; taal?: string };

export function startGebeurtenissen(root: Document = document) {
  root.addEventListener("click", (e) => {
    const el = (e.target as Element | null)?.closest<HTMLElement>("[data-event]");
    if (!el) return;
    const detail: Gebeurtenis = {
      naam: el.dataset.event ?? "",
      plek: el.dataset.plek,
      taal: root.documentElement.lang || undefined,
    };
    root.dispatchEvent(new CustomEvent("haldrecht:event", { detail }));
  });
}
