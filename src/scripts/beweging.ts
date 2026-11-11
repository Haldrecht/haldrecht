/* Perspectiefveld van vlakken, plus de kop die wegschuift tijdens scrollen.
   Geen dependency: een canvas met eigen projectie is genoeg voor een
   stil institutioneel veld. De hoeken zijn van ons, niet van een foto. */

type Pt = { x: number; y: number; z: number };

type Vlak = {
  hoeken: Pt[];
  vul: string;
  lijn: string;
};

const KOPER = "169, 82, 40";
const GRIS = "220, 219, 220";

function rotY(p: Pt, a: number): Pt {
  const c = Math.cos(a);
  const s = Math.sin(a);
  return { x: p.x * c + p.z * s, y: p.y, z: -p.x * s + p.z * c };
}

function vlak(
  cx: number,
  cy: number,
  cz: number,
  breedte: number,
  hoogte: number,
  yaw: number,
  vul: string,
  lijn: string,
): Vlak {
  const hw = breedte / 2;
  const hh = hoogte / 2;
  const lokaal: Pt[] = [
    { x: -hw, y: -hh, z: 0 },
    { x: hw, y: -hh, z: 0 },
    { x: hw, y: hh, z: 0 },
    { x: -hw, y: hh, z: 0 },
  ];
  return {
    hoeken: lokaal.map((p) => {
      const r = rotY(p, yaw);
      return { x: r.x + cx, y: r.y + cy, z: r.z + cz };
    }),
    vul,
    lijn,
  };
}

/* Een raster van staande vlakken, als gevelvinnen in een hal.
   Vast, zodat het veld elke frame dezelfde figuur draait. */
function veldVlakken(): Vlak[] {
  const uit: Vlak[] = [];
  for (let ix = -3; ix <= 3; ix++) {
    for (let iz = 0; iz < 6; iz++) {
      const diep = (ix + iz) % 2 === 0;
      uit.push(
        vlak(
          ix * 1.65,
          0.15,
          iz * 1.7 - 1.5,
          diep ? 1.05 : 0.72,
          diep ? 1.85 : 1.35,
          0.18,
          diep ? "rgba(18, 18, 18, 0.92)" : `rgba(${KOPER}, 0.16)`,
          `rgba(${KOPER}, 0.55)`,
        ),
      );
    }
  }
  return uit;
}

/* Dichterbij, en groter: het beeld in de hero, geen tweede kopie van het veld. */
function beeldVlakken(): Vlak[] {
  const plaats = [
    { x: -1.15, y: 0.05, z: 0.2, b: 1.7, h: 2.35, yaw: -0.55, vul: "rgba(12, 12, 12, 0.94)" },
    { x: -0.15, y: 0.28, z: -0.35, b: 1.45, h: 2.15, yaw: 0.12, vul: `rgba(${KOPER}, 0.28)` },
    { x: 0.95, y: -0.08, z: 0.45, b: 1.55, h: 2.5, yaw: 0.62, vul: "rgba(32, 32, 32, 0.94)" },
    { x: 0.15, y: 0.55, z: 0.95, b: 2.15, h: 0.95, yaw: 1.05, vul: "rgba(8, 8, 8, 0.9)" },
    { x: -0.55, y: -0.35, z: -0.85, b: 1.15, h: 1.7, yaw: -0.25, vul: `rgba(${KOPER}, 0.14)` },
    { x: 0.45, y: 0.1, z: -1.15, b: 0.85, h: 2.05, yaw: 0.35, vul: "rgba(20, 20, 20, 0.92)" },
  ];
  return plaats.map((p) =>
    vlak(p.x, p.y, p.z, p.b, p.h, p.yaw, p.vul, `rgba(${KOPER}, 0.9)`),
  );
}

const VELD = veldVlakken();
const BEELD = beeldVlakken();

function teken(
  canvas: HTMLCanvasElement,
  vlakken: Vlak[],
  hoek: number,
  opties: { vloer: boolean; horizon: number; cam: number; fov: number },
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const w = canvas.width;
  const h = canvas.height;
  ctx.clearRect(0, 0, w, h);

  const projecteer = (p: Pt) => {
    const r = rotY(p, hoek);
    const z = r.z + opties.cam;
    const s = opties.fov / z;
    return {
      x: w / 2 + r.x * s,
      y: h * opties.horizon - r.y * s,
      z,
    };
  };

  if (opties.vloer) {
    ctx.lineWidth = 1;
    for (let i = -4; i <= 4; i++) {
      const a = projecteer({ x: i * 1.65, y: -1.15, z: -2 });
      const b = projecteer({ x: i * 1.65, y: -1.15, z: 9 });
      ctx.strokeStyle = `rgba(${GRIS}, 0.22)`;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    for (let z = -1; z <= 8; z += 1.5) {
      const a = projecteer({ x: -7, y: -1.15, z });
      const b = projecteer({ x: 7, y: -1.15, z });
      ctx.strokeStyle = `rgba(${GRIS}, 0.16)`;
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
  }

  const gesorteerd = vlakken
    .map((vl) => {
      const hoeken = vl.hoeken.map(projecteer);
      const z = hoeken.reduce((s, p) => s + p.z, 0) / hoeken.length;
      return { hoeken, z, vul: vl.vul, lijn: vl.lijn };
    })
    .filter((vl) => vl.z > 0.8)
    .sort((a, b) => b.z - a.z);

  for (const vl of gesorteerd) {
    const mist = Math.min(1, Math.max(0, (vl.z - 3) / 12));
    ctx.globalAlpha = 1 - mist * 0.8;
    ctx.beginPath();
    vl.hoeken.forEach((p, i) => (i === 0 ? ctx.moveTo(p.x, p.y) : ctx.lineTo(p.x, p.y)));
    ctx.closePath();
    ctx.fillStyle = vl.vul;
    ctx.strokeStyle = vl.lijn;
    ctx.lineWidth = 1.25;
    ctx.fill();
    ctx.stroke();
    ctx.globalAlpha = 1;
  }
}

function pas(canvas: HTMLCanvasElement) {
  const schaal = Math.min(window.devicePixelRatio || 1, 2);
  const rect = canvas.getBoundingClientRect();
  const w = Math.max(1, Math.round(rect.width * schaal));
  const h = Math.max(1, Math.round(rect.height * schaal));
  if (canvas.width !== w || canvas.height !== h) {
    canvas.width = w;
    canvas.height = h;
  }
}

/* De kop verdwijnt terwijl je naar beneden gaat en komt terug bij
   omhoog scrollen of kort nadat het scrollen stopt. Zo blijft de
   navigatie bereikbaar zonder op de banden te blijven liggen. */
function kop() {
  const header = document.querySelector("header.site");
  if (!(header instanceof HTMLElement)) return;
  const rustig = window.matchMedia("(prefers-reduced-motion: reduce)");

  let laatste = window.scrollY;
  let timer = 0;
  window.addEventListener(
    "scroll",
    () => {
      if (rustig.matches) {
        header.classList.remove("is-weg");
        laatste = window.scrollY;
        return;
      }
      const y = window.scrollY;
      if (y > 72 && y > laatste + 6) header.classList.add("is-weg");
      if (y < laatste - 6 || y < 72) header.classList.remove("is-weg");
      laatste = y;
      window.clearTimeout(timer);
      timer = window.setTimeout(() => header.classList.remove("is-weg"), 900);
    },
    { passive: true },
  );
  rustig.addEventListener("change", () => {
    if (rustig.matches) header.classList.remove("is-weg");
  });
}

let bezig = false;

export function startBeweging() {
  if (bezig) return;
  bezig = true;

  const veld = document.querySelector("#veld");
  const beeld = document.querySelector(".beeld");
  const veldCanvas = veld instanceof HTMLCanvasElement ? veld : null;
  const beeldCanvas = beeld instanceof HTMLCanvasElement ? beeld : null;
  const rustig = window.matchMedia("(prefers-reduced-motion: reduce)");

  const STIL = 1.15;

  const frame = (tijd: number) => {
    const hoek = rustig.matches ? STIL : tijd / 1000;
    if (veldCanvas) {
      pas(veldCanvas);
      const kort = Math.min(veldCanvas.width, veldCanvas.height);
      teken(veldCanvas, VELD, hoek * 0.045, {
        vloer: true,
        horizon: 0.58,
        cam: 10,
        fov: kort * 0.85,
      });
    }
    if (beeldCanvas) {
      pas(beeldCanvas);
      teken(beeldCanvas, BEELD, hoek * 0.09 + 0.4, {
        vloer: false,
        horizon: 0.58,
        cam: 4.8,
        fov: beeldCanvas.height * 1.15,
      });
    }
  };

  let lus = 0;
  const loop = (tijd: number) => {
    frame(tijd);
    if (!rustig.matches && !document.hidden) lus = requestAnimationFrame(loop);
  };

  const herstart = () => {
    cancelAnimationFrame(lus);
    if (rustig.matches || document.hidden) {
      frame(STIL * 1000);
      return;
    }
    lus = requestAnimationFrame(loop);
  };

  rustig.addEventListener("change", herstart);
  document.addEventListener("visibilitychange", herstart);
  window.addEventListener("resize", () => frame(performance.now()), { passive: true });
  herstart();
  kop();
}
