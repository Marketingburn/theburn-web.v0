"use client"

import { useState, useRef, useEffect } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

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

function ConsultoriaHero() {
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
              SERVICIO · CONSULTORÍA COMERCIAL
            </Badge>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-[#0A0A0A] text-balance leading-none mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.9" }}
            >
              Vender más no es trabajar más. Es trabajar con un{" "}
              <span className="text-[#FF4500]">PROCESO.</span>
            </h1>

            <p
              className="text-base sm:text-lg text-[#938B82] leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Ordenamos tu proceso comercial desde la prospección hasta el cierre. Definimos métricas, roles y el sistema que hace que tu equipo venda aunque tú no estés mirando.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
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
                Ver qué hacemos &nbsp;↓
              </button>
            </div>
          </div>

          {/* Right — before / after comparison card */}
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
                  SIN PROCESO &nbsp;·&nbsp; CON PROCESO
                </span>
              </div>

              <div className="p-5 space-y-5">
                {/* Before row */}
                <div className="bg-[#0A0A0A]/60 rounded-lg p-4 border border-white/[0.06]">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-[9px] uppercase tracking-widest text-[#938B82]"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      ANTES
                    </span>
                    <div className="h-px flex-1 bg-[#2A2725]" />
                    <span
                      className="text-[9px] text-[#938B82]/60"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      SIN SISTEMA
                    </span>
                  </div>
                  <p
                    className="text-white text-sm leading-snug"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    Cada venta depende de una persona
                  </p>
                  {/* Risk indicators */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["Vendedor estrella", "Sin pipeline", "Cierres inconsistentes"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[#FF4500]/70 text-[9px] px-2 py-0.5 rounded border border-[#FF4500]/20 bg-[#FF4500]/5"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow divider */}
                <div className="flex items-center justify-center">
                  <div className="h-px flex-1 bg-[#2A2725]" />
                  <span
                    className="mx-3 text-[#FF4500] text-lg leading-none"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    ↓
                  </span>
                  <div className="h-px flex-1 bg-[#2A2725]" />
                </div>

                {/* After row */}
                <div
                  className="rounded-lg p-4"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,69,0,0.08) 0%, rgba(214,134,44,0.05) 100%)",
                    border: "1px solid rgba(255,69,0,0.25)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-[9px] uppercase tracking-widest text-[#FF4500]"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      DESPUÉS
                    </span>
                    <div className="h-px flex-1 bg-[#FF4500]/20" />
                    <span
                      className="text-[9px] text-[#FF4500]/60"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      CON SISTEMA
                    </span>
                  </div>
                  <p
                    className="text-white text-sm leading-snug"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    El sistema prospecta, el equipo cierra
                  </p>
                  {/* Success indicators */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {["Proceso documentado", "Pipeline visible", "Cierre predecible"].map((tag) => (
                      <span
                        key={tag}
                        className="text-[#FF4500] text-[9px] px-2 py-0.5 rounded border border-[#FF4500]/30 bg-[#FF4500]/10"
                        style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pipeline stages visual */}
                <div>
                  <p
                    className="text-[#938B82] text-[9px] uppercase tracking-widest mb-2"
                    style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.1em" }}
                  >
                    Pipeline por Etapa
                  </p>
                  <div className="space-y-1.5">
                    {[
                      { stage: "PROSPECTO",    pct: 100, count: "48 leads"  },
                      { stage: "CALIFICADO",   pct: 62,  count: "30 leads"  },
                      { stage: "PROPUESTA",    pct: 38,  count: "18 leads"  },
                      { stage: "NEGOCIACIÓN",  pct: 21,  count: "10 leads"  },
                      { stage: "CIERRE",       pct: 13,  count: "6 leads"   },
                    ].map(({ stage, pct, count }) => (
                      <div key={stage} className="flex items-center gap-2">
                        <span
                          className="text-[#938B82] text-[8px] w-20 flex-shrink-0"
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >
                          {stage}
                        </span>
                        <div className="flex-1 h-1.5 bg-[#2A2725] rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width: `${pct}%`,
                              background: "linear-gradient(to right, #FF4500, #D6862C)",
                            }}
                          />
                        </div>
                        <span
                          className="text-[#938B82] text-[8px] w-14 text-right flex-shrink-0"
                          style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                        >
                          {count}
                        </span>
                      </div>
                    ))}
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
                    ■ PROCESO ACTIVO
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
            Tu mejor vendedor se va y la empresa{" "}
            <span className="text-[#FF4500]">TIEMBLA.</span>
          </h2>
          <p
            className="text-base sm:text-lg text-[#938B82] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Cuando las ventas dependen de personas y no de procesos, no tienes un equipo comercial. Tienes dependencia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Sin proceso definido",
              body: "Cada vendedor hace las cosas a su manera. No hay forma de saber qué funciona.",
              delay: "delay-0",
            },
            {
              title: "Sin métricas de pipeline",
              body: "No sabes en qué etapa se pierden los clientes ni por qué.",
              delay: "delay-150",
            },
            {
              title: "Sin mensajes por segmento",
              body: "El mismo pitch para todos los prospectos. Conversión baja, costo alto.",
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
      title: "Mapeo del proceso actual",
      body: "Cómo prospecta, califica, propone y cierra tu equipo hoy. Dónde se pierde cada venta.",
    },
    {
      num: "02",
      title: "Diseño del proceso ideal",
      body: "Etapas claras, responsables definidos y criterios de avance. Adaptado a tu ciclo de venta.",
    },
    {
      num: "03",
      title: "Mensajes por segmento",
      body: "Propuesta de valor específica para cada tipo de cliente. Lo que le importa a cada uno.",
    },
    {
      num: "04",
      title: "Métricas y CRM",
      body: "Definimos qué medir en cada etapa y lo configuramos en tu herramienta, o te recomendamos una.",
    },
    {
      num: "05",
      title: "Capacitación del equipo",
      body: "El proceso sirve solo si el equipo lo usa. Acompañamos la adopción.",
    },
    {
      num: "06",
      title: "Seguimiento mensual",
      body: "Revisamos métricas, ajustamos mensajes y escalamos lo que funciona.",
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
            Un proceso comercial que{" "}
            <span className="text-[#FF4500]">ESCALA.</span>
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
      title: "Ejecutamos junto a tu equipo",
      body: "No entregamos un PDF y nos vamos. Estamos en las reuniones, en las llamadas y en los números.",
    },
    {
      title: "Adaptado a tu modelo",
      body: "No hay un proceso estándar. Lo construimos según tu ciclo de venta, tu mercado y tu equipo.",
    },
    {
      title: "Métricas desde el día uno",
      body: "Cada acción tiene un indicador. Si no se puede medir, no lo hacemos.",
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
            No somos una agencia. Somos el socio que se{" "}
            <span className="text-[#FF4500]">METE A LA CANCHA.</span>
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
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// CTA
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
            ¿Tu equipo vende? ¿O espera que los clientes{" "}
            <span className="text-[#FF4500]">LLEGUEN?</span>
          </h2>
          <p
            className="text-base sm:text-lg text-[#938B82] mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            En 30 minutos te mostramos exactamente qué está frenando tu proceso comercial y qué haríamos para solucionarlo.
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
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

export default function ConsultoriaComercialPage() {
  return (
    <>
      <GlassmorphismNav />
      <main>
        <ConsultoriaHero />
        <ProblemSection />
        <WhatWeDoSection />
        <DifferentiatorSection />
        <CTASection />
      <section id="contacto" className="bg-[#0A0A0A] py-24 px-4">
        <div className="max-w-2xl mx-auto">
          <p className="text-[#FF4500] text-xs uppercase tracking-widest mb-4"
             style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
            ■ HABLEMOS
          </p>
          <h2 className="text-5xl font-black uppercase text-white mb-4"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            Sin Humo.<br />Sin Jerga.
          </h2>
          <p className="text-[#938B82] mb-12 text-lg"
             style={{ fontFamily: 'var(--font-barlow)' }}>
            Cuéntanos tu caso. Te respondemos en menos de 24 horas hábiles.
          </p>
          <div className="[&_label]:text-white [&_input]:bg-white/5 [&_input]:border-white/10 [&_input]:text-white [&_input::placeholder]:text-white/30 [&_select]:bg-[#1B1917] [&_select]:border-white/10 [&_select]:text-white [&_textarea]:bg-white/5 [&_textarea]:border-white/10 [&_textarea]:text-white [&_textarea::placeholder]:text-white/30">
            <ContactForm defaultNecesidad="Consultoría Comercial" />
          </div>
        </div>
      </section>
    </main>
    <Footer />
    </>
  )
}
