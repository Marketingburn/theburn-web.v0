"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useMotionTemplate, useReducedMotion, useScroll, useTransform } from "motion/react"
import { Ctas, Kicker, LEAD } from "./shared"

/**
 * Niebla · eje: escena cinematográfica a pantalla completa.
 * La imagen ocupa todo; al bajar, la niebla se abre hacia los lados y la cámara
 * se acerca al galeón. El texto sube y deja paso a una segunda frase.
 */
export function HeroNiebla() {
  const ref = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  // Mapeo por función: evita la aceleración nativa (ScrollTimeline), que calcula mal el
  // progreso con el overflow del sitio heredado. Motion lo calcula en JS por frame.
  const p = useTransform(scrollYProgress, (v) => v)

  // Cámara: acercamiento hacia el barco
  const scale = useTransform(p, [0, 1], [1, reduce ? 1 : 1.22])
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

  // Lavado claro a la izquierda para que el texto se lea; se va con el scroll
  const washOpacity = useTransform(p, [0, 0.5], [1, 0.35])

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative h-[230svh]">
      <div className="sticky top-0 h-svh overflow-hidden bg-cream">
        <motion.div className="absolute inset-0 origin-[74%_60%]" style={{ transform: imgTransform }}>
          <Image
            src="/images/galeon-panorama.jpg"
            alt="Galeón español del siglo XVII navegando entre la bruma al amanecer"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[74%_50%]"
          />
        </motion.div>

        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgb(245_241_234/0.92)_0%,rgb(245_241_234/0.7)_32%,transparent_62%)] max-md:bg-[linear-gradient(180deg,rgb(245_241_234/0.95)_0%,rgb(245_241_234/0.75)_45%,transparent_70%)]"
          style={{ opacity: washOpacity }}
        />

        {/* Niebla delantera */}
        <motion.div aria-hidden className="pointer-events-none absolute inset-y-0 left-0 w-[70%]" style={{ transform: fogLT, opacity: fogOpacity }}>
          <div className="fog absolute inset-0 bg-[radial-gradient(60%_45%_at_60%_70%,rgb(255_255_255/0.9),transparent)]" />
        </motion.div>
        <motion.div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 w-[70%]" style={{ transform: fogRT, opacity: fogOpacity }}>
          <div className="fog absolute inset-0 bg-[radial-gradient(55%_45%_at_40%_72%,rgb(250_246_240/0.95),transparent)] [animation-delay:-11s]" />
        </motion.div>

        {/* Velo de entrada: la escena aparece desde la bruma */}
        <div aria-hidden className="tb-veil pointer-events-none absolute inset-0 bg-cream" />

        {/* Texto */}
        <motion.div
          className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-start px-5 pt-28 md:justify-center md:px-8 md:pt-16"
          style={{ transform: textT, opacity: textOpacity }}
        >
          <h1 id="hero-title" className="flex flex-col gap-5">
            <Kicker className="hero-fade [animation-delay:500ms]" />
            <span className="block font-heading text-display font-extrabold uppercase">
              <span className="hero-line block" style={{ ["--i" as string]: 4 }}>
                Quema
              </span>
              <span className="hero-line block" style={{ ["--i" as string]: 5 }}>
                los <span className="text-burn">barcos.</span>
              </span>
            </span>
          </h1>
          <p className="hero-fade mt-6 max-w-[30rem] text-lead text-ink/85 [animation-delay:900ms] max-md:hidden">{LEAD}</p>
          <Ctas className="hero-fade mt-8 [animation-delay:1000ms]" />
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
