"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react"
import { Ctas, Kicker } from "./shared"

function fmt(deg: number, min: number, hemi: string) {
  return `${deg}°${min.toFixed(2).padStart(5, "0")}′${hemi}`
}

/**
 * Carta · eje: editorial e interactivo.
 * Carta náutica con tipografía gigante y el galeón visto por un catalejo que sigue
 * al puntero. Al bajar, el catalejo se abre hasta ocupar la pantalla.
 */
export function HeroCarta() {
  const ref = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] })
  // Mapeo por función: evita la aceleración nativa (ScrollTimeline), que calcula mal el
  // progreso con el overflow del sitio heredado. Motion lo calcula en JS por frame.
  const p = useTransform(scrollYProgress, (v) => v)

  // Apertura del catalejo (clip-path: permitido para revelados)
  const radius = useTransform(p, [0.04, 0.72], [12, reduce ? 12 : 120])
  const clip = useMotionTemplate`circle(${radius}vmax at var(--cx) var(--cy))`
  const zoom = useTransform(p, [0.04, 0.72], [1.18, 1])
  const reticle = useTransform(p, [0.04, 0.3], [1, 0])
  const textOut = useTransform(p, [0.1, 0.38], [1, 0])
  const finalIn = useTransform(p, [0.6, 0.78], [0, 1])
  const finalY = useTransform(p, [0.6, 0.78], [reduce ? 0 : 32, 0])
  const finalT = useMotionTemplate`translateY(${finalY}px)`

  // Puntero: el catalejo se desplaza levemente (solo con puntero fino)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 20 })
  const sy = useSpring(my, { stiffness: 120, damping: 20 })
  const imgT = useMotionTemplate`translate(${sx}%, ${sy}%) scale(${zoom})`
  const [coords, setCoords] = useState({ lat: fmt(33, 27, "S"), lon: fmt(70, 40, "W") })

  useEffect(() => {
    if (reduce || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return
    const el = stageRef.current
    if (!el) return
    const onMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect()
      const nx = ((e.clientX - r.left) / r.width) * 2 - 1
      const ny = ((e.clientY - r.top) / r.height) * 2 - 1
      mx.set(-nx * 4)
      my.set(-ny * 4)
    }
    el.addEventListener("pointermove", onMove)
    return () => el.removeEventListener("pointermove", onMove)
  }, [reduce, mx, my])

  useMotionValueEvent(sx, "change", (x) => {
    const y = sy.get()
    setCoords({ lat: fmt(33, 27 + y * 0.9, "S"), lon: fmt(70, 40 - x * 0.9, "W") })
  })

  return (
    <section ref={ref} aria-labelledby="hero-title" className="relative h-[240svh]">
      <div
        ref={stageRef}
        className="chart-grid sticky top-0 h-svh overflow-hidden bg-cream [--cx:75%] [--cy:52%] max-md:[--cx:66%] max-md:[--cy:56%]"
      >
        {/* Reglas de la carta */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 top-16 flex justify-between px-5 font-mono text-[10px] tracking-widest text-ink/45 md:px-8">
          {["71°W", "70°50′", "70°40′", "70°30′", "70°20′"].map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>

        {/* Ruta trazada hacia el catalejo */}
        <svg aria-hidden viewBox="0 0 1000 600" preserveAspectRatio="none" className="pointer-events-none absolute inset-0 h-full w-full max-md:hidden">
          <path
            d="M40 560 C 220 520, 300 380, 470 400 S 640 330, 700 312"
            fill="none"
            stroke="var(--color-burn)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
            vectorEffect="non-scaling-stroke"
            className="tb-route"
          />
        </svg>

        {/* Texto */}
        <motion.div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-5 pt-24 pb-8 md:px-8 md:pt-28 md:pb-14" style={{ opacity: textOut }}>
          <h1 id="hero-title" className="flex flex-col gap-4">
            <Kicker className="hero-fade [animation-delay:100ms]" />
            <span className="block font-heading text-[clamp(4rem,2rem+9vw,11rem)] leading-[0.84] font-extrabold uppercase">
              <span className="hero-line block" style={{ ["--i" as string]: 0 }}>
                Quema
              </span>
              <span className="hero-line block" style={{ ["--i" as string]: 1 }}>
                los <span className="text-burn">barcos.</span>
              </span>
            </span>
          </h1>
          <div className="mt-auto flex flex-col gap-5 md:max-w-[26rem]">
            <p className="hero-fade text-ink/80 max-md:hidden">
              Conectamos marketing, ventas y datos. Cada oportunidad con rumbo, cada decisión con carta.
            </p>
            <Ctas className="hero-fade [animation-delay:500ms]" />
          </div>
        </motion.div>

        {/* Catalejo: se abre hasta ocupar la pantalla */}
        <motion.div className="tb-lens absolute inset-0 z-20" style={{ clipPath: clip }}>
          <motion.div className="absolute inset-0 origin-[var(--cx)_var(--cy)]" style={{ transform: imgT }}>
            <Image
              src="/images/galeon-panorama.jpg"
              alt="Galeón español del siglo XVII visto a través de un catalejo"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[74%_55%] max-md:object-[76%_55%]"
            />
          </motion.div>

          <motion.div
            className="pointer-events-none absolute inset-x-0 bottom-[14%] mx-auto max-w-7xl px-5 md:px-8"
            style={{ opacity: finalIn, transform: finalT }}
          >
            <p className="font-mono text-xs tracking-widest text-ink/80 uppercase">Destino a la vista</p>
            <p className="mt-3 max-w-3xl font-heading text-title font-extrabold uppercase">
              La ruta empieza con <span className="text-burn">un diagnóstico.</span>
            </p>
          </motion.div>
        </motion.div>

        {/* Retícula del catalejo */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute top-[var(--cy)] left-[var(--cx)] z-30 size-[24vmax] -translate-x-1/2 -translate-y-1/2"
          style={{ opacity: reticle }}
        >
          <svg viewBox="0 0 200 200" className="h-full w-full">
            <circle cx="100" cy="100" r="99" fill="none" stroke="var(--color-ink)" strokeWidth="1.2" />
            <circle cx="100" cy="100" r="93" fill="none" stroke="var(--color-ink)" strokeOpacity="0.25" strokeDasharray="1 5" />
            <path d="M100 12 V40 M100 160 V188 M12 100 H40 M160 100 H188" stroke="var(--color-ink)" strokeOpacity="0.6" strokeWidth="0.8" />
            <circle cx="100" cy="100" r="2" fill="var(--color-burn)" />
          </svg>
          <p className="absolute top-full left-1/2 mt-3 -translate-x-1/2 font-mono text-[10px] tracking-widest whitespace-nowrap text-ink/70 tabular-nums">
            {coords.lat} · {coords.lon}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
