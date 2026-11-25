"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from "motion/react";

const ROUTE = "M40 120 C 180 40, 260 40, 360 110 S 560 190, 680 110 S 900 40, 1000 90";

const phases = [
  {
    n: "01",
    name: "Diagnóstico",
    when: "Semanas 1–3",
    body: "Reuniones semanales por área y análisis de tus datos actuales. Antes de tocar nada, entendemos cómo vendes y dónde se pierden oportunidades.",
    out: "Entregable: mapa del proceso comercial + roadmap de 90 días",
  },
  {
    n: "02",
    name: "Implementación",
    when: "Fee mensual",
    body: "Activamos lo que el diagnóstico priorizó: CRM, funnel digital, automatizaciones y dashboard de Power BI, conectados a tus datos reales.",
    out: "Alcance y honorarios según proyecto",
  },
  {
    n: "03",
    name: "Acompañamiento",
    when: "Retainer",
    body: "Revisamos métricas contigo y ajustamos el rumbo. La meta es que tu equipo opere el sistema sin depender de nosotros para siempre.",
    out: "Métricas a la vista, todos los meses",
  },
];

// Puntos de paso: centrados sobre cada una de las 3 columnas de texto (ancho útil 1040)
const WAYPOINT_X = [173, 520, 867];

function pointAtX(el: SVGPathElement, x: number) {
  const len = el.getTotalLength();
  let lo = 0;
  let hi = len;
  for (let i = 0; i < 30; i++) {
    const mid = (lo + hi) / 2;
    if (el.getPointAtLength(mid).x < x) lo = mid;
    else hi = mid;
  }
  const p = el.getPointAtLength(lo);
  return { x: p.x, y: p.y };
}

export function RouteMethod() {
  const section = useRef<HTMLDivElement>(null);
  const path = useRef<SVGPathElement>(null);
  const ship = useRef<SVGGElement>(null);
  const reduce = useReducedMotion();
  const [waypoints, setWaypoints] = useState(WAYPOINT_X.map((x) => ({ x, y: 100 })));

  useLayoutEffect(() => {
    if (path.current) setWaypoints(WAYPOINT_X.map((x) => pointAtX(path.current!, x)));
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start 75%", "end 55%"] });
  const progress = useTransform(scrollYProgress, (v) => (reduce ? 1 : Math.min(1, Math.max(0, v))));

  useMotionValueEvent(progress, "change", (p) => {
    if (reduce) return;
    const el = path.current;
    const g = ship.current;
    if (!el || !g) return;
    const len = el.getTotalLength();
    const pt = el.getPointAtLength(len * p);
    const ahead = el.getPointAtLength(Math.min(len, len * p + 2));
    const angle = (Math.atan2(ahead.y - pt.y, ahead.x - pt.x) * 180) / Math.PI;
    g.setAttribute("transform", `translate(${pt.x} ${pt.y}) rotate(${angle * 0.35})`);
  });

  return (
    <div ref={section}>
      {/* Ruta náutica: escritorio */}
      <div className="relative hidden md:block" aria-hidden>
        <svg viewBox="0 0 1040 200" className="w-full overflow-visible text-ink">
          <path d={ROUTE} fill="none" stroke="var(--chart-line)" strokeWidth={1.5} strokeDasharray="2 8" strokeLinecap="round" />
          <motion.path
            ref={path}
            d={ROUTE}
            fill="none"
            stroke="var(--burn)"
            strokeWidth={2}
            strokeLinecap="round"
            style={{ pathLength: progress }}
            initial={false}
          />
          {waypoints.map((w, i) => (
            <g key={i} transform={`translate(${w.x} ${w.y})`}>
              <circle r={14} fill="var(--cream)" stroke="currentColor" strokeOpacity={0.25} />
              <circle r={4} fill="currentColor" />
              <text y={-24} textAnchor="middle" className="fill-current font-mono text-[11px] tracking-widest">
                {phases[i].n}
              </text>
            </g>
          ))}
          {/* Galeón pequeño que navega con el scroll */}
          <g ref={ship} transform="translate(40 120)">
            <g transform="translate(-18 -30)" stroke="currentColor" strokeWidth={1.4} fill="var(--cream)" strokeLinejoin="round">
              <path d="M2 22 L34 22 L30 30 L6 30 Z" />
              <path d="M12 22 V2 M24 22 V6" fill="none" />
              <path d="M7 6 Q12 9 17 6 L18 18 Q12 21 6 18 Z" />
              <path d="M20 9 Q24 11 28 9 L29 19 Q24 21 19 19 Z" />
              <path d="M12 2 L18 4 L12 5" fill="var(--burn)" stroke="none" />
            </g>
          </g>
        </svg>
      </div>

      <ol className="mt-4 grid gap-10 md:mt-10 md:grid-cols-3 md:gap-8">
        {phases.map((p) => (
          <li key={p.n} className="relative border-l border-chart-line pl-6 md:border-t md:border-l-0 md:pt-6 md:pl-0">
            <span aria-hidden className="absolute top-1 -left-[5px] size-2.5 rounded-full bg-burn md:hidden" />
            <p className="font-mono text-xs tracking-widest text-smoke uppercase">
              {p.n} · {p.when}
            </p>
            <h3 className="mt-3 font-heading text-4xl font-extrabold uppercase md:text-5xl">{p.name}</h3>
            <p className="mt-4 max-w-sm text-ink/80">{p.body}</p>
            <p className="mt-5 font-mono text-xs leading-relaxed tracking-wide text-ink">{p.out}</p>
          </li>
        ))}
      </ol>
    </div>
  );
}
