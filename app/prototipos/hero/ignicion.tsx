"use client"

import { useRef, useState } from "react"
import Image from "next/image"
import {
  motion,
  useMotionTemplate,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react"
import { Ctas, Kicker, LEAD } from "./shared"

const embers = Array.from({ length: 26 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  t: `${5 + ((i * 7) % 5)}s`,
  delay: `${-((i * 0.83) % 6).toFixed(2)}s`,
  x: `${((i * 23) % 60) - 30}px`,
}))

/**
 * Ignición · eje: transformación narrativa.
 * El scroll lleva del amanecer a la noche: el fondo se oscurece, el galeón se enciende
 * y el titular se prende palabra por palabra. La promesa de la marca, contada en un gesto.
 */
export function HeroIgnicion() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  // Mapeo por función: evita la aceleración nativa (ScrollTimeline), que calcula mal el
  // progreso con el overflow del sitio heredado. Motion lo calcula en JS por frame.
  const p = useTransform(scrollYProgress, (v) => v)
  const [lit, setLit] = useState(false)
  const [night, setNight] = useState(false)

  useMotionValueEvent(p, "change", (v) => {
    setLit(v > 0.36)
    setNight(v > 0.36)
  })

  const dark = useTransform(p, [0.24, 0.42], [0, 1])
  const calma = useTransform(p, [0.24, 0.36], [1, 0])
  const fuego = useTransform(p, [0.3, 0.46], [0, 1])
  const glow = useTransform(p, [0.45, 0.7], [0, 1])

  // Cámara: el barco se acerca levemente mientras arde
  const shipScale = useTransform(p, [0, 1], [1, reduce ? 1 : 1.08])
  const shipT = useMotionTemplate`scale(${shipScale})`

  // Bloques de texto
  const dayText = useTransform(p, [0.22, 0.34], [1, 0])
  const dayY = useTransform(p, [0.22, 0.34], [0, reduce ? 0 : -24])
  const dayT = useMotionTemplate`translateY(${dayY}px)`
  const nightText = useTransform(p, [0.36, 0.48], [0, 1])
  const nightY = useTransform(p, [0.36, 0.48], [reduce ? 0 : 24, 0])
  const nightT = useMotionTemplate`translateY(${nightY}px)`

  // Palabras que se encienden en secuencia
  const w1 = useTransform(p, [0.44, 0.54], [0.18, 1])
  const w2 = useTransform(p, [0.5, 0.6], [0.18, 1])
  const w3 = useTransform(p, [0.56, 0.68], [0.18, 1])

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative h-[320svh]">
      <div className="sticky top-0 h-svh overflow-hidden bg-cream">
        {/* Noche */}
        <motion.div aria-hidden className="chart-grid-dark absolute inset-0 bg-ink" style={{ opacity: dark }} />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute right-[-10%] bottom-[-25%] h-[90%] w-[80%] rounded-full bg-[radial-gradient(closest-side,rgb(255_69_0/0.32),transparent)]"
          style={{ opacity: glow }}
        />
        {lit && (
          <div aria-hidden className="pointer-events-none absolute inset-0">
            {embers.map((e, i) => (
              <span
                key={i}
                className="ember"
                style={{ left: e.left, ["--t"]: e.t, ["--delay"]: e.delay, ["--x"]: e.x } as React.CSSProperties}
              />
            ))}
          </div>
        )}

        <div className="relative mx-auto grid h-full max-w-7xl grid-rows-[auto_1fr] items-center gap-4 px-5 pt-24 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:grid-rows-1 lg:pt-16">
          {/* Texto */}
          <div className="relative z-10 grid">
            {/* Amanecer */}
            <motion.div
              className="col-start-1 row-start-1"
              style={{ opacity: dayText, transform: dayT, pointerEvents: night ? "none" : "auto" }}
              aria-hidden={night}
            >
              <h1 id="hero-title" className="flex flex-col gap-5">
                <Kicker className="hero-fade [animation-delay:100ms]" />
                <span className="block font-heading text-display font-extrabold uppercase">
                  <span className="hero-line block" style={{ ["--i" as string]: 0 }}>
                    Quema
                  </span>
                  <span className="hero-line block" style={{ ["--i" as string]: 1 }}>
                    los <span className="text-burn">barcos.</span>
                  </span>
                </span>
              </h1>
              <p className="hero-fade mt-6 max-w-[34rem] text-lead text-ink/80 max-md:hidden">{LEAD}</p>
              <Ctas className="hero-fade mt-8 [animation-delay:500ms]" />
            </motion.div>

            {/* Noche */}
            <motion.div
              className="col-start-1 row-start-1 self-center"
              style={{ opacity: nightText, transform: nightT, pointerEvents: night ? "auto" : "none" }}
              aria-hidden={!night}
            >
              <Kicker dark />
              <p className="mt-5 font-heading text-display font-extrabold text-cream uppercase" aria-hidden>
                <motion.span className="block" style={{ opacity: w1 }}>
                  Quema
                </motion.span>
                <span className="block">
                  <motion.span style={{ opacity: w2 }}>los </motion.span>
                  <motion.span className="text-burn" style={{ opacity: w3 }}>
                    barcos.
                  </motion.span>
                </span>
              </p>
              <p className="mt-6 max-w-[30rem] text-lead text-cream/80">
                Un diagnóstico de 3 semanas que te muestra qué frena tu crecimiento y en qué orden resolverlo. Después,
                no hay vuelta atrás.
              </p>
              <Ctas dark className="mt-8" />
            </motion.div>
          </div>

          {/* Galeón: de la calma al fuego */}
          <div className="relative mx-auto w-full max-w-xl self-end pb-10 lg:-mr-16 lg:max-w-none lg:self-center lg:pb-0">
            <motion.div className="mix-blend-multiply" style={{ opacity: calma, transform: shipT }}>
              <div className="ship-bob ship-mask">
                <Image
                  src="/images/galeon-calma.jpg"
                  alt="Galeón español navegando entre la bruma al amanecer"
                  width={1536}
                  height={1024}
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </motion.div>
            <motion.div className="absolute inset-0 mix-blend-lighten" style={{ opacity: fuego, transform: shipT }}>
              <div className="ship-bob ship-mask-dark">
                <Image
                  src="/images/galeon-llamas.jpg"
                  alt="El mismo galeón ardiendo de noche"
                  width={1536}
                  height={1024}
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="h-auto w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bitácora: hora del día */}
        <div aria-hidden className="absolute right-5 bottom-6 font-mono text-[11px] tracking-widest uppercase md:right-8">
          <span className={night ? "text-cream/70" : "text-ink/70"}>{night ? "21:10 · Ignición" : "05:42 · Amanecer"}</span>
        </div>
      </div>
    </section>
  )
}
