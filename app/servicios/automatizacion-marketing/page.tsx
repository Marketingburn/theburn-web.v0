"use client"

import { useState, useRef, useEffect } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"

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

function AutomatizacionHero() {
  return (
    <section className="min-h-screen flex items-center px-4 py-24 relative bg-[#F5F1EA] overflow-hidden">
      <h1 className="sr-only">Automatización de Marketing para Empresas B2B en Chile</h1>
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
              SERVICIO · AUTOMATIZACIÓN DE MARKETING
            </Badge>

            <p
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-[#0A0A0A] text-balance leading-none mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.9" }}
            >
              Tu equipo cierra. El sistema{" "}
              <span className="text-[#FF4500]">PROSPECTA.</span>
            </p>

            <p
              className="text-base sm:text-lg text-[#938B82] leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Implementamos flujos automáticos de nurturing, seguimiento y calificación de leads por email y WhatsApp. Ningún prospecto se enfría esperando que alguien le escriba.
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
                Ver qué automatizamos &nbsp;↓
              </button>
            </div>
          </div>

          {/* Right — automation flow visualization card */}
          <div className="flex justify-center lg:justify-end">
            <div
              className="bg-[#1B1917] rounded-xl w-full max-w-sm overflow-hidden transition-transform duration-500 hover:scale-[1.01]"
              style={{ boxShadow: "0 24px 48px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,69,0,0.3)" }}
            >
              {/* Card header */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.08]">
                <span
                  className="text-[#FF4500] text-xs font-bold uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.1em" }}
                >
                  FLUJO DE NURTURING ACTIVO
                </span>
              </div>

              <div className="p-5 space-y-3">
                {[
                  { step: "LEAD ENTRA", detail: "Formulario web / WhatsApp", status: "done" },
                  { step: "EMAIL 1 · BIENVENIDA", detail: "Enviado a los 5 minutos", status: "done" },
                  { step: "SCORE AUTOMÁTICO", detail: "Segmentado por interés e industria", status: "done" },
                  { step: "WHATSAPP · SEGUIMIENTO", detail: "Recordatorio a las 48 horas", status: "active" },
                  { step: "ENTREGA A VENDEDOR", detail: "Solo leads calificados (score > 7)", status: "pending" },
                ].map(({ step, detail, status }) => (
                  <div
                    key={step}
                    className="rounded-lg p-3.5"
                    style={{
                      background: status === "active" ? "linear-gradient(135deg, rgba(255,69,0,0.1) 0%, rgba(214,134,44,0.06) 100%)" : "rgba(10,10,10,0.4)",
                      border: status === "active" ? "1px solid rgba(255,69,0,0.3)" : "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{
                          background: status === "done" ? "#4ADE80" : status === "active" ? "#FF4500" : "#2A2725",
                        }}
                      />
                      <span
                        className="text-[10px] font-bold uppercase tracking-wider"
                        style={{
                          fontFamily: "var(--font-jetbrains-mono)",
                          color: status === "pending" ? "#938B82" : "#FFFFFF",
                        }}
                      >
                        {step}
                      </span>
                    </div>
                    <p
                      className="text-[#938B82] text-xs pl-3.5"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex justify-between items-center px-5 py-3 border-t border-white/[0.06]">
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
                  ■ AUTOMATIZACIÓN ACTIVA
                </span>
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
            Cada lead que no respondes a tiempo se{" "}
            <span className="text-[#FF4500]">ENFRÍA.</span>
          </h2>
          <p
            className="text-base sm:text-lg text-[#938B82] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Si el seguimiento depende de que una persona se acuerde de escribir, estás perdiendo ventas por pura logística.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Leads sin seguimiento",
              body: "Un prospecto interesado espera horas o días por una respuesta. Para entonces, ya eligió a otro.",
              delay: "delay-0",
            },
            {
              title: "Todos los leads iguales",
              body: "Sin segmentación, tu equipo pierde tiempo con prospectos fríos en vez de cerrar a los calientes.",
              delay: "delay-150",
            },
            {
              title: "Seguimiento manual no escala",
              body: "A más volumen de leads, más se cae el seguimiento uno a uno. El sistema debe hacerlo por ti.",
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
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// WHAT WE DO — numbered steps
// ---------------------------------------------------------------------------

function WhatWeDoSection() {
  const { ref, visible } = useInView()

  const steps = [
    {
      num: "01",
      title: "Mapeo de flujos actuales",
      body: "Revisamos cómo entran tus leads hoy y dónde se pierde el seguimiento.",
    },
    {
      num: "02",
      title: "Diseño de secuencias",
      body: "Email y WhatsApp automáticos por etapa: bienvenida, nurturing, reactivación.",
    },
    {
      num: "03",
      title: "Scoring automático",
      body: "Cada lead recibe un puntaje según interés y comportamiento, sin que nadie lo revise a mano.",
    },
    {
      num: "04",
      title: "Integración con tu CRM",
      body: "Los leads calificados llegan directo a tu equipo de ventas, listos para cerrar.",
    },
    {
      num: "05",
      title: "Pruebas y ajuste de mensajes",
      body: "Medimos apertura, clics y respuesta. Ajustamos el copy hasta que convierta.",
    },
    {
      num: "06",
      title: "Reporte mensual",
      body: "Cuántos leads entraron, cuántos se calificaron y cuántos cerraron. Con números, no con impresiones.",
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
            Un sistema que prospecta{" "}
            <span className="text-[#FF4500]">SOLO.</span>
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
      title: "Sin perder el tono humano",
      body: "Los mensajes automáticos suenan a tu marca, no a un bot genérico. Personalizamos cada secuencia.",
    },
    {
      title: "Conectado a lo que ya usas",
      body: "Trabajamos con tu CRM, WhatsApp Business y email actuales. No te obligamos a migrar de plataforma.",
    },
    {
      title: "El sistema queda contigo",
      body: "Al terminar, tú operas los flujos o nosotros los mantenemos. Tu decides el nivel de acompañamiento.",
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
            Automatización que no se siente{" "}
            <span className="text-[#FF4500]">AUTOMATIZADA.</span>
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
            ¿Cuántos leads se te enfrían cada semana?
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
            Deja que el sistema prospecte mientras tu equipo{" "}
            <span className="text-[#FF4500]">CIERRA.</span>
          </h2>
          <p
            className="text-base sm:text-lg text-[#938B82] mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            En el diagnóstico revisamos tus flujos actuales de seguimiento y te mostramos exactamente dónde se están enfriando tus leads.
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

export default function AutomatizacionMarketingPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Inicio", path: "" },
          { name: "Servicios", path: "/#servicios" },
          { name: "Automatización de Marketing", path: "/servicios/automatizacion-marketing" },
        ]}
      />
      <GlassmorphismNav />
      <main>
        <AutomatizacionHero />
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
            <ContactForm defaultNecesidad="Automatización de Marketing" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
