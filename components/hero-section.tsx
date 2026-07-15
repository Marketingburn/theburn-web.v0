'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Play = () => (
  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

function RotatingWords() {
  const words = ["Negocio", "Pipeline", "Equipo", "Estrategia", "Rentabilidad"]
  const [index, setIndex] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <span
      className="inline-flex items-center bg-[#FF4500] text-white font-barlow-condensed font-extrabold uppercase rounded-xl px-4 py-2 overflow-hidden"
      style={{
        fontFamily: "var(--font-barlow-condensed)",
        fontSize: "clamp(36px, 10vw, 110px)",
        lineHeight: "0.92",
        animation: mounted ? "slideUp 0.4s ease-out" : "none",
        minWidth: "200px",
      }}
    >
      {mounted ? words[index] : words[0]}
    </span>
  )
}

const positioningPhrases = [
  "ESTRATEGIA, MARKETING Y DATOS EN UN EQUIPO",
  "SIN HUMO. SIN JERGA.",
  "LO QUE NO SE MIDE, NO MEJORA.",
  "EJECUTAMOS JUNTO A TU EQUIPO",
  "MENOS BLA, MÁS MARKETING.",
  "QUEMA LOS BARCOS.",
  "DECIDE CON DATOS.",
  "UNA CONSULTORA QUE TAMBIÉN EJECUTA",
  "ESTRATEGIA SIN EJECUCIÓN ES SOLO UN PDF.",
  "VENDE MÁS. DECIDE CON DATOS.",
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-start lg:items-center justify-between pt-24 pb-12 px-4 lg:px-0 w-full overflow-hidden relative bg-[#F5F1EA]">
      <h1 className="sr-only">Consultoría de Marketing Digital B2B en Santiago Chile</h1>
      {/* Fire glow ambient blurs */}
      <div
        className="absolute rounded-full bg-[#FF4500] opacity-10 blur-[80px] w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] -top-20 left-1/2 -translate-x-1/2 lg:top-auto lg:left-auto lg:translate-x-0 pointer-events-none animate-fire-glow"
        style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none animate-fire-glow-2"
        style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 70%)", opacity: 0.12 }}
      />

      {/* Left Content Column */}
      <div className="w-full lg:w-full flex flex-col gap-6 px-4 lg:px-0 items-start lg:items-center lg:justify-center z-10 animate-fade-in-hero lg:min-h-screen">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#E8E3DA] text-[#938B82] text-sm animate-fade-in-badge lg:mx-auto" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}>
          <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0" />
          Consultoría Comercial &amp; Marketing — Chile
        </div>

        {/* Main Heading */}
        <p
          className="font-barlow-condensed font-extrabold uppercase text-[clamp(40px,11vw,120px)] leading-[1.0] text-[#0A0A0A] w-full block animate-fade-in-heading lg:text-center"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          <span className="block">Haz crecer tu</span>
          <span className="flex items-center flex-wrap gap-2 lg:gap-3 mt-2 lg:mt-3 lg:justify-center">
            <RotatingWords />
          </span>
        </p>

        {/* Subheading */}
        <p 
          className="text-[#938B82] text-base lg:text-lg leading-relaxed max-w-xl animate-fade-in-subheading font-normal lg:text-center" 
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          The Burn diseña e implementa el sistema comercial y de marketing que tu empresa necesita para vender más y decidir con datos. Sin humo. Sin jerga.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto animate-fade-in-buttons lg:justify-center">
          {/* Primary CTA - Full width on mobile, auto on desktop */}
          <Button
            size="lg"
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto bg-[#FF4500] text-white rounded-full px-6 sm:px-8 py-4 sm:py-3.5 text-base sm:text-lg font-bold transition-all duration-300 hover:bg-[#0A0A0A] hover:scale-105 hover:shadow-lg group cursor-pointer min-h-[52px] sm:min-h-auto"
            style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
          >
            Agendar Diagnóstico
            <ArrowRight />
          </Button>

          {/* Secondary CTA - Hidden on mobile, visible on sm+ */}
          <Button
            variant="outline"
            size="lg"
            className="hidden sm:flex w-auto rounded-full px-8 py-3.5 text-lg font-medium border-2 border-[#0A0A0A] text-[#0A0A0A] hover:bg-[#0A0A0A] hover:text-white transition-all duration-200 hover:scale-105 group bg-white cursor-pointer"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            <Play />
            Ver cómo trabajamos
          </Button>
        </div>

        {/* Brand Positioning Marquee — Desktop */}
        <div className="w-full hidden sm:block overflow-hidden animate-fade-in-trust mt-12 sm:mt-16 lg:mt-0">
          <div className="relative overflow-hidden w-full" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)", height: "auto" }}>
            {/* Left fade mask */}
            <div
              className="absolute left-0 top-0 w-16 h-full z-20 pointer-events-none"
              style={{ maskImage: "linear-gradient(to right, black, transparent)" }}
            />
            {/* Right fade mask */}
            <div
              className="absolute right-0 top-0 w-16 h-full z-20 pointer-events-none"
              style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
            />
            {/* Marquee container - 2 duplicates for seamless loop */}
            <div className="flex items-center h-full hover:pause-animation whitespace-nowrap" style={{ animation: "marquee 35s linear infinite", willChange: "transform" }}>
              {positioningPhrases.map((phrase, idx) => (
                <div key={`phrase-1-${idx}`} className="flex items-center gap-4 flex-shrink-0">
                  <span
                    className="text-[11px] lg:text-[13px] font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: (idx + 1) % 3 === 0 ? "#FF4500" : "#0A0A0A",
                    }}
                  >
                    {phrase}
                  </span>
                  <span className="text-[#FF4500] text-xs flex-shrink-0" style={{ marginLeft: "12px", marginRight: "12px" }}>■</span>
                </div>
              ))}
              {/* Single duplicate for seamless loop */}
              {positioningPhrases.map((phrase, idx) => (
                <div key={`phrase-2-${idx}`} className="flex items-center gap-4 flex-shrink-0">
                  <span
                    className="text-[11px] lg:text-[13px] font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: (idx + 1) % 3 === 0 ? "#FF4500" : "#0A0A0A",
                    }}
                  >
                    {phrase}
                  </span>
                  <span className="text-[#FF4500] text-xs flex-shrink-0" style={{ marginLeft: "12px", marginRight: "12px" }}>■</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brand Positioning Marquee — Mobile */}
        <div className="w-full sm:hidden overflow-hidden animate-fade-in-trust mt-8">
          <div className="relative overflow-hidden w-full" style={{ borderTop: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)", height: "auto" }}>
            {/* Left fade mask */}
            <div
              className="absolute left-0 top-0 w-8 h-full z-20 pointer-events-none"
              style={{ maskImage: "linear-gradient(to right, black, transparent)" }}
            />
            {/* Right fade mask */}
            <div
              className="absolute right-0 top-0 w-8 h-full z-20 pointer-events-none"
              style={{ maskImage: "linear-gradient(to left, black, transparent)" }}
            />
            {/* Marquee container - 2 duplicates for seamless loop */}
            <div className="flex items-center h-full hover:pause-animation whitespace-nowrap" style={{ animation: "marquee 35s linear infinite", willChange: "transform" }}>
              {positioningPhrases.map((phrase, idx) => (
                <div key={`phrase-mobile-1-${idx}`} className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: (idx + 1) % 3 === 0 ? "#FF4500" : "#0A0A0A",
                    }}
                  >
                    {phrase}
                  </span>
                  <span className="text-[#FF4500] text-[8px] flex-shrink-0" style={{ marginLeft: "10px", marginRight: "10px" }}>■</span>
                </div>
              ))}
              {/* Single duplicate for seamless loop */}
              {positioningPhrases.map((phrase, idx) => (
                <div key={`phrase-mobile-2-${idx}`} className="flex items-center gap-3 flex-shrink-0">
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider"
                    style={{
                      fontFamily: "var(--font-barlow-condensed)",
                      color: (idx + 1) % 3 === 0 ? "#FF4500" : "#0A0A0A",
                    }}
                  >
                    {phrase}
                  </span>
                  <span className="text-[#FF4500] text-[8px] flex-shrink-0" style={{ marginLeft: "10px", marginRight: "10px" }}>■</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
