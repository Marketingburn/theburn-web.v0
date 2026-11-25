"use client";

import { useRef } from "react";
import { useInView } from "motion/react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

// Posiciones fijas (no aleatorias) para que el render de servidor y cliente coincidan.
const embers = Array.from({ length: 22 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  t: `${5 + ((i * 7) % 5)}s`,
  delay: `${-((i * 0.83) % 6).toFixed(2)}s`,
  x: `${((i * 23) % 60) - 30}px`,
}));

const deliverables = [
  "Mapa de tu proceso comercial, de la captación al cierre",
  "Análisis del negocio y de los datos que ya tienes",
  "Roadmap de 90 días con prioridades y métricas",
];

export function BurnSection() {
  const ref = useRef<HTMLDivElement>(null);
  const lit = useInView(ref, { once: true, margin: "0px 0px -35% 0px" });

  return (
    <section
      id="diagnostico"
      aria-labelledby="diagnostico-title"
      className="chart-grid-dark relative isolate overflow-hidden bg-ink py-24 text-cream md:py-32"
    >
      {/* Brasas */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-full">
        <div
          className="absolute right-[-10%] bottom-[-20%] h-[80%] w-[80%] rounded-full bg-[radial-gradient(closest-side,rgb(255_69_0/0.28),transparent)] transition-opacity duration-[1200ms]"
          style={{ opacity: lit ? 1 : 0 }}
        />
        {lit &&
          embers.map((e, i) => (
            <span
              key={i}
              className="ember"
              style={
                {
                  left: e.left,
                  ["--t"]: e.t,
                  ["--delay"]: e.delay,
                  ["--x"]: e.x,
                } as React.CSSProperties
              }
            />
          ))}
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.05fr]">
        <div>
          <p className="font-mono text-xs tracking-widest text-cream/60 uppercase">Bitácora 05 · El diagnóstico</p>
          <h2 id="diagnostico-title" className="mt-5 font-heading text-title font-extrabold uppercase">
            Quema los barcos.
            <span className="block text-burn">Empieza a avanzar.</span>
          </h2>
          <p className="mt-6 max-w-lg text-lead text-cream/80">
            En tres semanas te mostramos qué está frenando tu crecimiento y en qué orden hay que resolverlo.
            Después decides si lo implementas con nosotros, con tu equipo o con otro. El roadmap es tuyo.
          </p>

          <ul className="mt-8 divide-y divide-cream/10 border-y border-cream/10">
            {deliverables.map((d, i) => (
              <li key={d} className="flex gap-5 py-4">
                <span className="font-mono text-xs text-burn">0{i + 1}</span>
                <span>{d}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-4">
            <p>
              <span className="block font-heading text-5xl font-extrabold">$500.000</span>
              <span className="font-mono text-xs tracking-widest text-cream/60 uppercase">+ IVA · 3 semanas · Santiago</span>
            </p>
            <a
              href="#contacto"
              className="btn-press group inline-flex h-13 items-center gap-2 rounded-full bg-burn px-7 font-heading text-lg font-bold tracking-wide text-ink uppercase hover:bg-cream"
            >
              Agendar Diagnóstico
              <ArrowRight aria-hidden className="tb-nudge-x size-5 transition-transform duration-200" />
            </a>
          </div>
          <a
            href="/diagnostico"
            className="mt-5 inline-block font-mono text-xs tracking-wider text-cream/70 uppercase underline decoration-cream/30 underline-offset-4 transition-colors duration-150 hover:text-cream"
          >
            Ver el detalle del diagnóstico
          </a>
        </div>

        <div ref={ref} className="relative mx-auto w-full max-w-2xl lg:-mr-16 lg:max-w-none">
          <div className="ship-bob ship-mask-dark relative mix-blend-lighten" data-lit={lit}>
            <Image
              src="/images/galeon-llamas.jpg"
              alt="El mismo galeón español ardiendo de noche, con llamas en las velas y reflejos naranjas en el agua"
              width={1536}
              height={1024}
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="ship-ignite h-auto w-full"
            />
            {/* Pulso de la luz del fuego: solo opacidad */}
            <div aria-hidden className="fire-glow pointer-events-none absolute inset-0 bg-[radial-gradient(50%_45%_at_50%_55%,rgb(255_69_0/0.35),transparent)] mix-blend-screen" />
          </div>
        </div>
      </div>
    </section>
  );
}
