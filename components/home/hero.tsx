"use client"

import { useRef } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "motion/react"
import { Scramble } from "@/components/site/scramble"

/**
 * Hero "Niebla": escena cinematográfica a pantalla completa.
 * La foto ocupa todo; al bajar, la niebla se abre hacia los lados y la cámara se
 * acerca al galeón. El texto sube y deja paso a una segunda frase.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  // Mapeo por función: evita la aceleración nativa (ScrollTimeline), que calcula mal el
  // progreso con el overflow del sitio heredado. Motion lo calcula en JS por frame.
  const p = useTransform(scrollYProgress, (v) => v)

  // Cámara: acercamiento leve hacia el barco
  const scale = useTransform(p, [0, 1], [1, reduce ? 1 : 1.1])
  const imgTransform = useMotionTemplate`scale(${scale})`

  // Niebla delantera: se abre hacia los lados
  const fogL = useTransform(p, [0, 0.55], [0, reduce ? 0 : -65])
  const fogR = useTransform(p, [0, 0.55], [0, reduce ? 0 : 65])
  const fogOpacity = useTransform(p, [0, 0.55], [1, reduce ? 0.6 : 0])
  const fogLT = useMotionTemplate`translateX(${fogL}%)`
  const fogRT = useMotionTemplate`translateX(${fogR}%)`

  // Texto principal: sube y se desvanece
  const textY = useTransform(p, [0.08, 0.5], [0, reduce ? 0 : -90])
  const textT = useMotionTemplate`translateY(${textY}px)`
  const textOpacity = useTransform(p, [0.12, 0.45], [1, 0])

  // Segunda frase
  const line2Opacity = useTransform(p, [0.5, 0.65, 0.9, 1], [0, 1, 1, 0.4])
  const line2Y = useTransform(p, [0.5, 0.7], [reduce ? 0 : 40, 0])
  const line2T = useMotionTemplate`translateY(${line2Y}px)`

  // Lavado claro detrás del texto; se va con el scroll
  const washOpacity = useTransform(p, [0, 0.5], [1, 0.35])

  return (
    <section id="top" ref={ref} aria-labelledby="hero-title" className="relative h-[230svh]">
      <div className="sticky top-0 h-svh overflow-hidden bg-cream">
        <motion.div className="absolute inset-0 origin-[74%_60%]" style={{ transform: imgTransform }}>
          <Image
            src="/images/galeon-amanecer-hd.jpg"
            alt="Galeón español del siglo XVII navegando entre la bruma al amanecer, con la cruz de Borgoña en la vela mayor"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover object-[74%_50%]"
          />
        </motion.div>

        {/* Escritorio: lavado a la izquierda. Móvil: lavado abajo, para dejar el galeón despejado arriba */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(245_241_234/0.92)_0%,rgb(245_241_234/0.7)_32%,transparent_62%)] max-md:bg-[linear-gradient(0deg,rgb(245_241_234/0.97)_0%,rgb(245_241_234/0.85)_32%,transparent_58%)]"
          style={{ opacity: washOpacity }}
        />

        {/* Niebla delantera. closest-side: el degradado llega a transparente antes del borde de su caja */}
        <motion.div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-[70%]" style={{ transform: fogLT, opacity: fogOpacity }}>
          <div className="fog absolute top-[38%] left-[8%] h-[62%] w-[92%] bg-[radial-gradient(closest-side,rgb(255_255_255/0.85),rgb(255_255_255/0.4)_55%,transparent)]" />
        </motion.div>
        <motion.div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-[70%]" style={{ transform: fogRT, opacity: fogOpacity }}>
          <div className="fog absolute top-[44%] left-0 h-[56%] w-[92%] bg-[radial-gradient(closest-side,rgb(250_246_240/0.9),rgb(250_246_240/0.4)_55%,transparent)] [animation-delay:-11s]" />
        </motion.div>

        {/* Grano de película: disimula el escalado de la foto y el banding del cielo */}
        <div aria-hidden className="tb-grain pointer-events-none absolute inset-0" />

        {/* Velo de entrada: la escena aparece desde la bruma */}
        <div aria-hidden className="tb-veil pointer-events-none absolute inset-0 bg-cream" />

        {/* Coordenadas */}
        <div
          aria-hidden
          className="pointer-events-none absolute top-24 right-5 z-10 hidden flex-col items-end gap-1 font-mono text-[11px] tracking-widest text-ink/70 uppercase md:flex md:right-8"
        >
          <Scramble text="LAT 33°27′S" delay={900} />
          <Scramble text="LON 70°40′W" delay={1050} />
          <Scramble text="RUMBO → CLIENTES" delay={1200} />
        </div>

        {/* Texto */}
        <motion.div
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-24 md:justify-center md:px-8 md:pt-16 md:pb-0"
          style={{ transform: textT, opacity: textOpacity }}
        >
          <h1 id="hero-title" className="flex flex-col gap-4 md:gap-5">
            <span className="hero-fade flex items-center gap-3 font-mono text-xs tracking-widest text-ink/80 uppercase [animation-delay:500ms]">
              <span aria-hidden className="inline-block size-2 shrink-0 rounded-full bg-burn" />
              Consultoría comercial y marketing B2B en Chile
            </span>
            <span className="block font-heading text-display font-extrabold uppercase">
              <span className="hero-line block" style={{ ["--i" as string]: 4 }}>
                Quema
              </span>
              <span className="hero-line block" style={{ ["--i" as string]: 5 }}>
                los <span className="text-burn">barcos.</span>
              </span>
            </span>
          </h1>
          <p className="hero-fade mt-6 max-w-[30rem] text-lead text-ink/85 [animation-delay:900ms] max-md:hidden">
            Conectamos marketing, ventas y datos para que tu equipo sepa qué oportunidades llegan, cuáles avanzan y
            cuáles se convierten en clientes. Para dejar de vender por intuición, sin vuelta atrás.
          </p>
          <div className="hero-fade mt-6 flex flex-wrap items-center gap-3 [animation-delay:1000ms] md:mt-8">
            <a
              href="#contacto"
              className="btn-press group inline-flex h-13 items-center gap-2 rounded-full bg-burn px-7 font-heading text-lg font-bold tracking-wide text-ink uppercase hover:bg-ink hover:text-cream"
            >
              Agendar Diagnóstico
              <ArrowRight aria-hidden className="tb-nudge-x size-5 transition-transform duration-200" />
            </a>
            <a
              href="#metodo"
              className="btn-press inline-flex h-13 items-center rounded-full border border-ink/20 bg-cream/40 px-7 font-heading text-lg font-bold tracking-wide uppercase hover:border-ink"
            >
              Ver el método
            </a>
          </div>
          <p className="hero-fade mt-5 font-mono text-xs tracking-wider text-ink/70 uppercase [animation-delay:1100ms]">
            Diagnóstico de 3 semanas · $500.000 + IVA
          </p>
        </motion.div>

        {/* Segunda frase */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-[12%] z-10 mx-auto max-w-7xl px-5 md:px-8"
          style={{ opacity: line2Opacity, transform: line2T }}
        >
          <p className="font-mono text-xs tracking-widest text-ink/80 uppercase">33°27′S · 70°40′W · Rumbo fijo</p>
          <p className="mt-3 max-w-3xl font-heading text-title font-extrabold text-ink uppercase">
            Sin vuelta atrás. <span className="text-burn">Solo hacia los clientes.</span>
          </p>
        </motion.div>

        <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream/70 to-transparent" />
      </div>
    </section>
  )
}
