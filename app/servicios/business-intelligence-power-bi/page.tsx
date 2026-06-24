"use client"

import { useState, useRef, useEffect } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

// ---------------------------------------------------------------------------
// Shared micro-components (same pattern as other service pages)
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

function BIHero() {
  return (
    <section className="min-h-screen flex items-center px-4 py-24 relative bg-[#F5F1EA] overflow-hidden">
      {/* Fire glow blurs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none animate-fire-glow"
        style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 70%)", opacity: 0.15 }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none animate-fire-glow-2"
        style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 70%)", opacity: 0.12 }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-16">
          {/* Left */}
          <div>
            <Badge>
              <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
              SERVICIO · BUSINESS INTELLIGENCE
            </Badge>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-[#0A0A0A] text-balance leading-none mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.9" }}
            >
              Deja de gestionar tu empresa con{" "}
              <span className="text-[#FF4500]">CORAZONADAS.</span>
            </h1>

            <p
              className="text-base sm:text-lg text-[#938B82] leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Implementamos dashboards Power BI conectados a tus datos reales: márgenes por producto, stock, pipeline de ventas y conversión. Todo en una pantalla, en tiempo real.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-[#0A0A0A] hover:bg-[#1B1917] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
              >
                Agendar Diagnóstico &nbsp;→
              </button>
              <button
                className="border border-[#E8E3DA] text-[#938B82] hover:bg-white hover:border-[#FF4500]/40 hover:text-[#0A0A0A] font-medium px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 bg-transparent cursor-pointer"
                style={{ fontFamily: "var(--font-barlow)" }}
                onClick={() => {
                  document.getElementById("que-construimos")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
              >
                Ver qué construimos &nbsp;↓
              </button>
            </div>
          </div>

          {/* Right — dashboard mockup card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#1B1917] rounded-2xl border border-[#2A2725] p-8 w-full max-w-sm shadow-2xl">
              <p
                className="text-[#FF4500] text-xs font-semibold mb-8 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.12em" }}
              >
                EJEMPLO REAL DE DASHBOARD THE BURN
              </p>

              {/* Dashboard metrics */}
              <div className="space-y-6">
                {/* Margen neto */}
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span
                      className="text-[#938B82] text-xs uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      MARGEN NETO
                    </span>
                    <span
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      23.4%
                    </span>
                  </div>
                  <div className="h-2 bg-[#2A2725] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: "23.4%", background: "linear-gradient(to right, #FF4500, #D6862C)" }}
                    />
                  </div>
                </div>

                {/* Stock crítico */}
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span
                      className="text-[#938B82] text-xs uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      STOCK CRÍTICO
                    </span>
                    <span
                      className="text-[#FF4500] text-sm font-bold"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      3 productos
                    </span>
                  </div>
                  <div className="h-2 bg-[#2A2725] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#FF4500]/60"
                      style={{ width: "15%" }}
                    />
                  </div>
                  <p
                    className="text-[#FF4500]/60 text-xs mt-1"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    ▲ ALERTA — bajo mínimo
                  </p>
                </div>

                {/* Pipeline */}
                <div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span
                      className="text-[#938B82] text-xs uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      PIPELINE
                    </span>
                    <span
                      className="text-white text-sm font-bold"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      $4.2M
                    </span>
                  </div>
                  <div className="h-2 bg-[#2A2725] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: "68%", background: "linear-gradient(to right, #FF4500, #D6862C)" }}
                    />
                  </div>
                  <p
                    className="text-[#938B82]/50 text-xs mt-1"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    68% de meta mensual
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-[#2A2725]">
                <p
                  className="text-[#938B82]/50 text-xs"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.1em" }}
                >
                  THEBURN.CL · SANTIAGO, CHILE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// PROBLEM (white) — two-column red/green
// ---------------------------------------------------------------------------

function ProblemSection() {
  const { ref, visible } = useInView()
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 bg-[#FFFFFF]"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <BadgeLight>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
            EL PROBLEMA
          </BadgeLight>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            Tus datos existen. Nadie los está{" "}
            <span className="text-[#FF4500]">LEYENDO.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Without */}
          <div
            className="rounded-2xl border border-red-100 bg-red-50/40 p-8 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "100ms",
            }}
          >
            <p
              className="text-red-400 text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              ✕ &nbsp;Sin Power BI
            </p>
            <ul className="space-y-4">
              {[
                "Decisiones basadas en intuición o en el Excel de alguien",
                "No sabes qué productos tienen mejor margen real",
                "El stock te da sorpresas al final del mes",
                "No puedes ver el pipeline en tiempo real",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="text-red-400 text-xs mt-0.5 flex-shrink-0"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    ■
                  </span>
                  <span
                    className="text-[#938B82] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* With */}
          <div
            className="rounded-2xl border border-green-100 bg-green-50/40 p-8 transition-all duration-700"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transitionDelay: "220ms",
            }}
          >
            <p
              className="text-green-600 text-xs font-semibold uppercase tracking-widest mb-6"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              ✓ &nbsp;Con Power BI
            </p>
            <ul className="space-y-4">
              {[
                "Dashboard actualizado automáticamente",
                "Rentabilidad por producto, canal y cliente",
                "Alertas de stock antes de quedarte sin inventario",
                "Pipeline de ventas visible para todo el equipo",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="text-green-500 text-xs mt-0.5 flex-shrink-0"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    ■
                  </span>
                  <span
                    className="text-[#0A0A0A] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// WHAT WE BUILD (#F5F1EA, 6 cards)
// ---------------------------------------------------------------------------

const buildCards = [
  {
    icon: "◆",
    title: "Dashboard Comercial",
    body: "Pipeline, conversión, ticket promedio y rendimiento por vendedor. Lo que necesita ver gerencia cada lunes.",
    tag: "Ventas",
  },
  {
    icon: "$",
    title: "Dashboard de Rentabilidad",
    body: "Margen real por producto, línea y canal. Separamos el volumen de la rentabilidad.",
    tag: "Finanzas",
  },
  {
    icon: "■",
    title: "Control de Stock",
    body: "Alertas automáticas, rotación y proyección de quiebre. Nunca más quedarte sin stock sin aviso.",
    tag: "Operaciones",
  },
  {
    icon: "▲",
    title: "Dashboard de Marketing",
    body: "Costo por lead, conversión por canal y ROI de cada campaña activa.",
    tag: "Marketing",
  },
  {
    icon: "◉",
    title: "Rendimiento de Equipo",
    body: "KPIs individuales y de equipo. Metas, avance y brecha en tiempo real.",
    tag: "RRHH",
  },
  {
    icon: "↔",
    title: "Integración de Fuentes",
    body: "Conectamos tu ERP, Excel, CRM, Google Ads, Meta Ads y facturación en un solo lugar.",
    tag: "Datos",
  },
]

function WhatWeBuildSection() {
  const { ref, visible } = useInView()
  return (
    <section
      id="que-construimos"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 bg-[#F5F1EA]"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <BadgeLight>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
            QUÉ CONSTRUIMOS
          </BadgeLight>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            No instalamos software. Construimos tu{" "}
            <span className="text-[#FF4500]">SISTEMA</span> de decisión.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {buildCards.map((card, i) => (
            <div
              key={card.title}
              className="bg-white rounded-2xl border border-[#E8E3DA] p-8 hover:border-[#FF4500]/30 transition-all duration-300"
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 600ms ${i * 80}ms, transform 600ms ${i * 80}ms, border-color 200ms`,
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <span
                  className="text-2xl text-[#FF4500] leading-none"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {card.icon}
                </span>
                <span
                  className="text-xs text-[#938B82] bg-[#F5F1EA] px-2 py-1 rounded-full"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.06em" }}
                >
                  {card.tag}
                </span>
              </div>
              <h3
                className="text-lg font-black uppercase text-[#0A0A0A] mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {card.title}
              </h3>
              <p
                className="text-[#938B82] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// PROCESS (dark #0A0A0A) — 4 numbered steps
// ---------------------------------------------------------------------------

const steps = [
  {
    num: "01",
    title: "Auditoría de datos",
    body: "Revisamos qué datos tienes, dónde están y en qué estado. Sin datos perfectos, con los datos reales.",
  },
  {
    num: "02",
    title: "Diseño del dashboard",
    body: "Definimos qué necesita ver cada rol: gerencia, ventas, marketing, operaciones.",
  },
  {
    num: "03",
    title: "Construcción y conexión",
    body: "Conectamos las fuentes, construimos las visualizaciones y automatizamos la actualización.",
  },
  {
    num: "04",
    title: "Capacitación y entrega",
    body: "Tu equipo aprende a leerlo y usarlo. No un dashboard que nadie entiende.",
  },
]

function ProcessSection() {
  const { ref, visible } = useInView()
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 bg-[#0A0A0A]"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <BadgeDark>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
            CÓMO LO IMPLEMENTAMOS
          </BadgeDark>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            De tus datos dispersos a un sistema que{" "}
            <span className="text-[#FF4500]">FUNCIONA.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="bg-[#1B1917] rounded-2xl border border-[#2A2725] p-8 hover:border-[#FF4500]/30 transition-all duration-300"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 600ms ${i * 100}ms, transform 600ms ${i * 100}ms, border-color 200ms`,
              }}
            >
              <span
                className="text-4xl font-black text-[#FF4500] block mb-4 leading-none"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {step.num}
              </span>
              <h3
                className="text-xl font-black uppercase text-white mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[#938B82] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// USE CASES (white) — 3 cards
// ---------------------------------------------------------------------------

const useCases = [
  {
    industry: "Distribuidoras",
    body: "Control de stock, rentabilidad por línea de producto y seguimiento de pedidos. Saben antes del quiebre.",
    tag: "Operaciones",
  },
  {
    industry: "Estudios Jurídicos",
    body: "Pipeline de causas, facturación por socio y horas trabajadas vs facturadas. La rentabilidad que no veían.",
    tag: "Rentabilidad",
  },
  {
    industry: "E-commerce",
    body: "CAC por canal, margen real por SKU y conversión por dispositivo. Más que solo el dashboard de Shopify.",
    tag: "Marketing",
  },
]

function UseCasesSection() {
  const { ref, visible } = useInView()
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 bg-[#FFFFFF]"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <BadgeLight>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
            CASOS DE USO
          </BadgeLight>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            Para qué tipo de empresa{" "}
            <span className="text-[#FF4500]">FUNCIONA.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={uc.industry}
              className="bg-[#F5F1EA] rounded-2xl border border-[#E8E3DA] p-8 hover:border-[#FF4500]/30 transition-all duration-300"
              style={{
                transitionDelay: `${i * 120}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 600ms ${i * 120}ms, transform 600ms ${i * 120}ms, border-color 200ms`,
              }}
            >
              <div className="flex items-start justify-between mb-5">
                <span
                  className="text-xs text-[#FF4500] font-semibold uppercase tracking-widest"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  ■
                </span>
                <span
                  className="text-xs text-[#938B82] bg-white px-2 py-1 rounded-full border border-[#E8E3DA]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.06em" }}
                >
                  {uc.tag}
                </span>
              </div>
              <h3
                className="text-xl font-black uppercase text-[#0A0A0A] mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {uc.industry}
              </h3>
              <p
                className="text-[#938B82] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {uc.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// FINAL CTA (#F5F1EA, fire glow)
// ---------------------------------------------------------------------------

function BICTA() {
  const { ref, visible } = useInView()
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 relative bg-[#F5F1EA] overflow-hidden"
    >
      {/* Fire glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none animate-fire-glow"
        style={{ background: "radial-gradient(ellipse, #FF4500 0%, transparent 65%)", opacity: 0.1 }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <div
          className={`transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <BadgeLight>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
            SIGUIENTE PASO
          </BadgeLight>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            Tu empresa ya tiene los datos. Falta quien los{" "}
            <span className="text-[#FF4500]">LEA.</span>
          </h2>
          <p
            className="text-[#938B82] text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Empieza con el diagnóstico. En 3 semanas sabemos exactamente qué dashboard necesitas y cómo construirlo.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              className="bg-[#0A0A0A] hover:bg-[#1B1917] text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
            >
              Agendar Diagnóstico &nbsp;→&nbsp;{" "}
              <span
                className="text-[#FF4500]"
                style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "0.85em" }}
              >
                $500.000 CLP
              </span>
            </button>
          </div>

          <p
            className="mt-6 text-[#938B82]/60 text-xs"
            style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.08em" }}
          >
            THEBURN.CL · SANTIAGO, CHILE
          </p>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// PAGE EXPORT
// ---------------------------------------------------------------------------

export default function BIPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] overflow-hidden">
      <GlassmorphismNav />
      <main>
        <BIHero />
        <ProblemSection />
        <WhatWeBuildSection />
        <ProcessSection />
        <UseCasesSection />
        <BICTA />
      </main>
      <Footer />
    </div>
  )
}
