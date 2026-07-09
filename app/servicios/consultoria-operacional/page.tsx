"use client"

import { useState, useRef, useEffect } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

// ---------------------------------------------------------------------------
// Shared micro-components (identical pattern to other service pages)
// ---------------------------------------------------------------------------

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#E8E3DA] text-[#938B82] text-sm mb-6"
      style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}
    >
      {children}
    </div>
  )
}

function BadgeDark({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center px-4 py-2 rounded-full bg-[#1B1917] border border-[#2A2725] text-[#938B82] text-sm mb-6"
      style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}
    >
      {children}
    </div>
  )
}

function BadgeLight({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="inline-flex items-center px-4 py-2 rounded-full bg-[#F5F1EA] border border-[#E8E3DA] text-[#938B82] text-sm mb-6"
      style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}
    >
      {children}
    </div>
  )
}

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return { ref, visible }
}

// ---------------------------------------------------------------------------
// HERO
// ---------------------------------------------------------------------------

function OperacionalHero() {
  return (
    <section className="min-h-screen flex items-center px-4 py-24 relative bg-[#F5F1EA] overflow-hidden">
      <h1 className="sr-only">Consultoría Operacional Lean Six Sigma para Empresas B2B en Chile</h1>
      {/* Fire glow blurs */}
      <div
        className="absolute top-1/4 left-1/4 w-[300px] h-[300px] rounded-full pointer-events-none animate-fire-glow"
        style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 70%)", opacity: 0.08 }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[200px] h-[200px] rounded-full pointer-events-none animate-fire-glow-2"
        style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 70%)", opacity: 0.06 }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-16">

          {/* Left */}
          <div>
            <Badge>
              <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
              SERVICIO · CONSULTORÍA OPERACIONAL
            </Badge>

            <p
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-[#0A0A0A] text-balance leading-none mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.9" }}
            >
              Diagnóstico Operacional{" "}
              <span className="text-[#FF4500]">LEAN SIX SIGMA</span>{" "}
              para empresas B2B en Chile
            </p>

            <p
              className="text-base sm:text-lg text-[#938B82] leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Tu equipo vende a capacidad, pero nadie sabe si estás ganando o regalando margen. Medimos tus procesos y te damos los números para decidir.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-[#0A0A0A] hover:bg-[#1B1917] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
              >
                Agendar Diagnóstico &nbsp;→
              </button>
              <button
                className="border border-[#E8E3DA] text-[#938B82] hover:bg-white hover:border-[#FF4500]/40 hover:text-[#0A0A0A] font-medium px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 bg-transparent cursor-pointer"
                style={{ fontFamily: "var(--font-barlow)" }}
                onClick={() => {
                  document.getElementById("que-hacemos")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
              >
                Ver cómo lo hacemos &nbsp;↓
              </button>
            </div>
          </div>

          {/* Right — Power BI dashboard mockup with operacional metrics */}
          <div className="flex flex-col items-center lg:items-end gap-3">
            <p
              className="text-[#938B82] text-xs uppercase tracking-widest self-start lg:self-auto"
              style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.1em" }}
            >
              <span className="text-[#FF4500] mr-2">■</span>
              DASHBOARD OPERACIONAL · THE BURN
            </p>

            <div
              className="bg-[#1B1917] rounded-xl w-full overflow-hidden transition-transform duration-500 hover:scale-[1.01]"
              style={{
                boxShadow: "0 24px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,69,0,0.3)",
              }}
            >
              {/* Dashboard header bar */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.08]">
                <span
                  className="text-white text-xs font-bold uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.08em" }}
                >
                  Análisis Operacional — B2B Chile
                </span>
                <span
                  className="text-[#938B82] text-[10px]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  Q2 2025
                </span>
              </div>

              <div className="p-4 space-y-4">
                {/* TOP ROW — KPI pills */}
                <div className="grid grid-cols-4 gap-2">
                  {[
                    { value: "34,2%",  label: "MARGEN NETO",     highlight: true  },
                    { value: "18 días", label: "CICLO PROCESO",  highlight: false },
                    { value: "87%",    label: "CAPACIDAD USADA", highlight: false },
                    { value: "2,4x",   label: "ROI MEJORA",      highlight: true  },
                  ].map(({ value, label, highlight }) => (
                    <div
                      key={label}
                      className="bg-[#0A0A0A]/60 rounded-md px-2 py-3 text-center"
                      style={{ border: "1px solid rgba(255,255,255,0.06)" }}
                    >
                      <div
                        className="text-sm font-bold leading-none mb-1"
                        style={{
                          fontFamily: "var(--font-jetbrains-mono)",
                          color: highlight ? "#FF4500" : "#FFFFFF",
                        }}
                      >
                        {value}
                      </div>
                      <div
                        className="text-[8px] uppercase tracking-wide leading-none"
                        style={{ fontFamily: "var(--font-jetbrains-mono)", color: "#938B82" }}
                      >
                        {label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* MIDDLE ROW — margen por cliente + tiempo de ciclo */}
                <div className="grid grid-cols-2 gap-3" style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "12px" }}>
                  {/* Margen por cliente */}
                  <div>
                    <p
                      className="text-[#938B82] text-[9px] uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.1em" }}
                    >
                      Margen por Cliente
                    </p>
                    <div className="space-y-1.5">
                      {[
                        { cliente: "Cliente A",  margen: 42, pct: 100 },
                        { cliente: "Cliente B",  margen: 38, pct: 90  },
                        { cliente: "Cliente C",  margen: 29, pct: 69  },
                        { cliente: "Cliente D",  margen: 17, pct: 40  },
                        { cliente: "Cliente E",  margen: 8,  pct: 19  },
                      ].map(({ cliente, margen, pct }) => (
                        <div key={cliente}>
                          <div className="flex items-center justify-between mb-0.5">
                            <span
                              className="text-[#938B82] text-[8px]"
                              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                            >
                              {cliente}
                            </span>
                            <span
                              className="text-white text-[8px] font-bold"
                              style={{
                                fontFamily: "var(--font-jetbrains-mono)",
                                color: margen < 15 ? "#FF4500" : "#FFFFFF",
                              }}
                            >
                              {margen}%
                            </span>
                          </div>
                          <div className="h-1.5 bg-[#2A2725] rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full"
                              style={{
                                width: `${pct}%`,
                                background: margen < 15
                                  ? "linear-gradient(to right, #FF4500, #FF6B20)"
                                  : "linear-gradient(to right, #FF4500, #D6862C)",
                              }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tiempo de ciclo por proceso */}
                  <div>
                    <p
                      className="text-[#938B82] text-[9px] uppercase tracking-widest mb-2"
                      style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.1em" }}
                    >
                      Tiempo de Ciclo
                    </p>
                    <div className="space-y-1.5">
                      {[
                        { proceso: "Cotización",   dias: 2,  ok: true  },
                        { proceso: "Aprobación",   dias: 5,  ok: true  },
                        { proceso: "Despacho",     dias: 8,  ok: false },
                        { proceso: "Cobranza",     dias: 22, ok: false },
                        { proceso: "Postventa",    dias: 4,  ok: true  },
                      ].map(({ proceso, dias, ok }) => (
                        <div key={proceso} className="flex items-center justify-between py-0.5" style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                          <span
                            className="text-[#938B82] text-[8px]"
                            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                          >
                            {proceso}
                          </span>
                          <span
                            className="text-[8px] font-bold px-1.5 py-0.5 rounded"
                            style={{
                              fontFamily: "var(--font-jetbrains-mono)",
                              color: ok ? "#4ADE80" : "#FF4500",
                              background: ok ? "rgba(74,222,128,0.1)" : "rgba(255,69,0,0.1)",
                            }}
                          >
                            {dias}d
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between items-center pt-1 border-t border-white/[0.06]">
                  <p
                    className="text-[#938B82]/50 text-[8px]"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    THEBURN.CL · SANTIAGO, CHILE
                  </p>
                  <span
                    className="text-[#FF4500] text-[8px]"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    ■ DIAGNÓSTICO ACTIVO
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// PROBLEM
// ---------------------------------------------------------------------------

function ProblemSection() {
  const { ref, visible } = useInView()
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 bg-[#FFFFFF]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <Badge>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
            EL PROBLEMA
          </Badge>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance leading-none mb-5"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.92" }}
          >
            Estás a full, pero nadie sabe si eso es{" "}
            <span className="text-[#FF4500]">BUENO.</span>
          </h2>
          <p
            className="text-base sm:text-lg text-[#938B82] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Cuando no hay datos de proceso, crecer significa arriesgarse a perder plata sin saberlo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Sin visibilidad de margen",
              body: "No sabes qué cliente o servicio realmente te deja plata. Trabajas para todos y ganas con pocos.",
              delay: "delay-0",
            },
            {
              title: "Procesos no mapeados",
              body: "Cada persona hace las cosas a su manera. No hay forma de estandarizar ni escalar.",
              delay: "delay-150",
            },
            {
              title: "Capacidad mal medida",
              body: "No sabes cuánto puedes crecer sin contratar más gente. Escalas a ciegas.",
              delay: "delay-300",
            },
          ].map(({ title, body, delay }) => (
            <div
              key={title}
              className={`bg-[#1B1917] rounded-2xl p-8 border border-[#2A2725] transition-all duration-700 ${delay} ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
            >
              <div className="w-10 h-10 bg-[#FF4500]/10 rounded-lg flex items-center justify-center mb-5">
                <div className="w-4 h-4 bg-[#FF4500]/40 rounded-sm" />
              </div>
              <h3
                className="text-xl font-black uppercase text-white mb-3 leading-tight"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {title}
              </h3>
              <p
                className="text-[#938B82] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Intermediate orange CTA band */}
        <div
          className={`mt-14 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ background: "#FF4500" }}
        >
          <p
            className="text-[#0A0A0A] font-black uppercase text-xl sm:text-2xl text-balance leading-tight"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            ¿Tu empresa está saturada y no sabe si escalar o pausar?
          </p>
          <button
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 bg-[#0A0A0A] text-white hover:bg-[#1B1917] font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
            style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
          >
            Agendar Diagnóstico &nbsp;→
          </button>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// WHAT WE DO — DMAIC + Lean numbered steps
// ---------------------------------------------------------------------------

function WhatWeDoSection() {
  const { ref, visible } = useInView()

  const steps = [
    {
      num: "01",
      title: "Define",
      body: "Mapeamos tu proceso actual de punta a punta. Entradas, salidas, responsables y restricciones.",
    },
    {
      num: "02",
      title: "Measure",
      body: "Levantamos datos reales en Power BI: tiempos de ciclo, tasas de error, costos ocultos y margen por cliente.",
    },
    {
      num: "03",
      title: "Analyze",
      body: "Identificamos dónde se pierde plata y tiempo. Causa raíz, no síntomas.",
    },
    {
      num: "04",
      title: "Improve",
      body: "Rediseñamos y automatizamos lo que genera desperdicio. Priorizamos por impacto, no por urgencia.",
    },
    {
      num: "05",
      title: "Control",
      body: "Dashboard en vivo para sostener la mejora. Si no se mide, no se mantiene.",
    },
    {
      num: "06",
      title: "Lean",
      body: "Priorizamos lo que agrega valor real al cliente. Todo lo demás es candidato a eliminar.",
    },
  ]

  return (
    <section
      id="que-hacemos"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 bg-[#F5F1EA]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <BadgeLight>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
            QUÉ HACEMOS
          </BadgeLight>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.92" }}
          >
            Un método que mide antes de{" "}
            <span className="text-[#FF4500]">OPINAR.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map(({ num, title, body }, i) => (
            <div
              key={num}
              className={`bg-white rounded-2xl p-8 border border-[#E8E3DA] transition-all duration-700 hover:border-[#FF4500]/30 hover:shadow-lg group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <span
                  className="text-4xl font-black leading-none text-[#E8E3DA] group-hover:text-[#FF4500]/20 transition-colors duration-300 flex-shrink-0"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {num}
                </span>
                <h3
                  className="text-lg font-black uppercase text-[#0A0A0A] leading-tight pt-1"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {title}
                </h3>
              </div>
              <p
                className="text-[#938B82] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// DIFFERENTIATOR — dark section
// ---------------------------------------------------------------------------

function DifferentiatorSection() {
  const { ref, visible } = useInView()

  const pillars = [
    {
      title: "Medimos antes de recomendar",
      body: "No llegamos con una solución lista. Primero levantamos datos reales de tu operación y luego opinamos.",
    },
    {
      title: "Mismo equipo, más capacidad",
      body: "No te decimos que necesitas más gente. Te mostramos cómo sacar más con el equipo que ya tienes.",
    },
    {
      title: "Dashboard que queda contigo",
      body: "Al terminar el proyecto, el dashboard Power BI es tuyo. Lo operas solo, o lo mantenemos nosotros.",
    },
  ]

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 bg-[#0A0A0A]"
    >
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <BadgeDark>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
            POR QUÉ THE BURN
          </BadgeDark>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white text-balance leading-none"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.92" }}
          >
            No te vendemos más clientes. Te ayudamos a ganar más con los que{" "}
            <span className="text-[#FF4500]">TIENES.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map(({ title, body }, i) => (
            <div
              key={title}
              className={`rounded-2xl p-8 border border-[#2A2725] bg-[#1B1917] transition-all duration-700 hover:border-[#FF4500]/30 group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-10 h-10 rounded-lg bg-[#FF4500]/10 border border-[#FF4500]/20 flex items-center justify-center mb-5 group-hover:bg-[#FF4500]/20 transition-colors duration-300">
                <div className="w-4 h-4 bg-[#FF4500]/50 rounded-sm" />
              </div>
              <h3
                className="text-xl font-black uppercase text-white mb-3 leading-tight"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {title}
              </h3>
              <p
                className="text-[#938B82] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>

        {/* Intermediate dark CTA band */}
        <div
          className={`mt-14 rounded-2xl px-8 py-7 flex flex-col sm:flex-row items-center justify-between gap-6 border border-[#2A2725] transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          style={{ background: "#1B1917" }}
        >
          <p
            className="font-black uppercase text-xl sm:text-2xl text-balance leading-tight"
            style={{ fontFamily: "var(--font-barlow-condensed)", color: "#FF4500" }}
          >
            ¿Listo para ver tus números reales?
          </p>
          <button
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-shrink-0 bg-[#FF4500] hover:bg-[#FF6B20] text-[#0A0A0A] font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 cursor-pointer whitespace-nowrap"
            style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
          >
            Agendar Diagnóstico &nbsp;→
          </button>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// CTA BANNER
// ---------------------------------------------------------------------------

function CTASection() {
  const { ref, visible } = useInView()
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 bg-[#F5F1EA] relative overflow-hidden"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(255,69,0,0.06) 0%, transparent 70%)",
        }}
      />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div
          className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <BadgeLight>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
            SIGUIENTE PASO
          </BadgeLight>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance leading-none mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.92" }}
          >
            ¿Sabes cuánto margen deja cada cliente? ¿O lo estás{" "}
            <span className="text-[#FF4500]">ADIVINANDO?</span>
          </h2>
          <p
            className="text-base sm:text-lg text-[#938B82] mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            En 3 semanas medimos tu operación, identificamos dónde se pierde margen y te entregamos un dashboard con los números reales.
          </p>
          <button
            onClick={() => document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="bg-[#0A0A0A] hover:bg-[#1B1917] text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
            style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
          >
            Agendar Diagnóstico &nbsp;→
          </button>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------

export default function ConsultoriaOperacionalPage() {
  return (
    <>
      <GlassmorphismNav />
      <main>
        <OperacionalHero />
        <ProblemSection />
        <WhatWeDoSection />
        <DifferentiatorSection />
        <CTASection />
        <section id="contacto" className="bg-[#0A0A0A] py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <p
              className="text-[#FF4500] text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              ■ HABLEMOS
            </p>
            <h2
              className="text-4xl font-black uppercase text-white mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Sin Humo.<br />Sin Jerga.
            </h2>
            <p
              className="text-[#938B82] mb-8 text-sm"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Cuéntanos tu caso. Te respondemos en menos de 24 horas hábiles.
            </p>
              <ContactForm defaultNecesidad="Consultoría Operacional" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
