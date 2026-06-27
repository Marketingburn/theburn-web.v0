"use client"

import { useState, useRef, useEffect } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import Image from "next/image"

// ---------------------------------------------------------------------------
// Shared micro-components
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

function DiagnosticoHero() {
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
              PRIMER PASO &nbsp;·&nbsp; $500.000 CLP &nbsp;·&nbsp; 3 SEMANAS
            </Badge>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-[#0A0A0A] text-balance leading-none mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.9" }}
            >
              Entiende tu negocio antes de{" "}
              <span className="text-[#FF4500]">INVERTIR</span> en él.
            </h1>

            <p
              className="text-base sm:text-lg text-[#938B82] leading-relaxed mb-16 max-w-lg"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              La mayoría de las empresas invierte en marketing sin saber qué está frenando sus ventas. El diagnóstico lo descubre en 3 semanas, con datos reales y un roadmap concreto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 relative z-20">
              <button
                onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-[#0A0A0A] hover:bg-[#1B1917] text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
              >
                Agendar mi Diagnóstico &nbsp;→
              </button>
              <button
                className="border border-[#E8E3DA] text-[#938B82] hover:bg-white hover:border-[#FF4500]/40 hover:text-[#0A0A0A] font-medium px-8 py-4 rounded-full text-base transition-all duration-200 hover:scale-105 bg-transparent cursor-pointer"
                style={{ fontFamily: "var(--font-barlow)" }}
                onClick={() => {
                  document.getElementById("que-incluye")?.scrollIntoView({ behavior: "smooth", block: "start" })
                }}
              >
                Ver qué incluye &nbsp;↓
              </button>
            </div>
          </div>

          {/* Right — floating dark card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#1B1917] rounded-2xl border border-[#2A2725] p-8 w-full max-w-sm shadow-2xl">
              <p
                className="text-[#FF4500] text-sm font-semibold mb-6"
                style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.08em" }}
              >
                3 SEMANAS · $500.000 CLP
              </p>
              <ul className="space-y-4">
                {[
                  "Reuniones semanales por área",
                  "Análisis con tus datos reales",
                  "Roadmap priorizado",
                  "Sin compromiso posterior",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#FF4500] mt-0.5 flex-shrink-0" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>■</span>
                    <span
                      className="text-[#938B82] text-sm leading-relaxed"
                      style={{ fontFamily: "var(--font-barlow)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
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
// PROBLEM
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
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 shrink-0 inline-block" />
            POR QUÉ PRIMERO EL DIAGNÓSTICO
          </BadgeLight>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            No se puede optimizar lo que no se{" "}
            <span className="text-[#FF4500]">ENTIENDE.</span>
          </h2>
          <p
            className="text-base sm:text-lg text-[#938B82] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Antes de activar cualquier campaña o sistema, necesitamos saber exactamente cómo funciona tu negocio hoy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              q: "¿Dónde se pierden tus ventas?",
              a: "Identificamos los cuellos de botella en tu proceso comercial actual.",
            },
            {
              q: "¿Qué márgenes tienes realmente?",
              a: "Analizamos rentabilidad por producto, canal y cliente.",
            },
            {
              q: "¿Qué dice tu mercado?",
              a: "Revisamos tu posicionamiento digital y cómo te encuentra tu cliente ideal.",
            },
          ].map((card, i) => (
            <div
              key={card.q}
              className="bg-[#F5F1EA] border rounded-2xl p-8 transition-all duration-700"
              style={{
                borderColor: "rgba(10,10,10,0.06)",
                transitionDelay: `${i * 120}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <h3
                className="text-lg font-black uppercase text-[#0A0A0A] mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {card.q}
              </h3>
              <p
                className="text-[#938B82] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {card.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// WHAT'S INCLUDED
// ---------------------------------------------------------------------------

function IncludesSection() {
  const { ref, visible } = useInView()
  const steps = [
    {
      num: "01",
      week: "SEMANA 1",
      title: "Análisis Comercial",
      body: "Reunión con gerencia y equipo de ventas. Revisamos pipeline, proceso, métricas actuales y cómo se toman las decisiones hoy.",
      deliverable: "Mapa del proceso comercial actual + gaps identificados",
    },
    {
      num: "02",
      week: "SEMANA 2",
      title: "Análisis de Negocio y Marketing",
      body: "Revisamos datos financieros básicos (márgenes, stock, costos), presencia digital y canales de captación actuales.",
      deliverable: "Diagnóstico de rentabilidad + auditoría digital",
    },
    {
      num: "03",
      week: "SEMANA 3",
      title: "Roadmap y Presentación",
      body: "Presentamos el análisis completo con prioridades claras: qué ordenar primero, qué implementar después y cómo medirlo.",
      deliverable: "Roadmap de 90 días con KPIs y quick wins",
    },
  ]

  return (
    <section
      id="que-incluye"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 bg-[#F5F1EA]"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <BadgeLight>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
            QUÉ INCLUYE
          </BadgeLight>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            Tres semanas. Tres reuniones. Un{" "}
            <span className="text-[#FF4500]">ROADMAP.</span>
          </h2>
        </div>

        <div className="space-y-6">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="bg-white border border-[#E8E3DA] rounded-2xl p-8 flex flex-col sm:flex-row gap-6 sm:gap-10 transition-all duration-700"
              style={{
                transitionDelay: `${i * 150}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(24px)",
              }}
            >
              {/* Number */}
              <div className="flex-shrink-0">
                <span
                  className="text-5xl font-black text-[#FF4500]"
                  style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                >
                  {step.num}
                </span>
              </div>
              {/* Content */}
              <div className="flex-1">
                <p
                  className="text-xs text-[#938B82] uppercase tracking-widest mb-1"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.15em" }}
                >
                  {step.week}
                </p>
                <h3
                  className="text-xl sm:text-2xl font-black uppercase text-[#0A0A0A] mb-3"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[#938B82] leading-relaxed mb-4"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {step.body}
                </p>
                <div className="flex items-start gap-2">
                  <span className="text-[#FF4500] flex-shrink-0 text-sm" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>→</span>
                  <p
                    className="text-[#0A0A0A] text-sm font-semibold"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    Entregable: {step.deliverable}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// INVESTMENT
// ---------------------------------------------------------------------------

function InvestmentSection() {
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
            INVERSIÓN
          </BadgeDark>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            Lo que vale saber antes de{" "}
            <span className="text-[#FF4500]">gastar.</span>
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          {/* Left — price block */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span
                className="text-7xl sm:text-8xl font-black text-[#FF4500] leading-none"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                $500.000
              </span>
              <p
                className="text-[#938B82] text-sm mt-2"
                style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}
              >
                CLP + IVA · PAGO ÚNICO
              </p>
            </div>
            <ul className="space-y-3">
              {[
                "3 semanas de análisis",
                "Reuniones presenciales o remotas",
                "Entregables en documento + presentación",
                "Válido para todo Chile",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="text-[#FF4500] flex-shrink-0" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>■</span>
                  <span
                    className="text-[#938B82] text-sm"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — dark card */}
          <div className="bg-[#1B1917] rounded-2xl border border-[#2A2725] p-8">
            <h3
              className="text-xl font-black uppercase text-white mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              ¿Qué pasa después del diagnóstico?
            </h3>
            <p
              className="text-[#938B82] leading-relaxed mb-6"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Si decides continuar trabajando con The Burn, el valor del diagnóstico se descuenta del primer mes de implementación. Si no, te quedas con el análisis completo y el roadmap. Sin letra chica.
            </p>
            <div
              className="inline-flex items-center px-4 py-2 rounded-full bg-[#0A0A0A] border border-[#2A2725] text-[#FF4500] text-xs"
              style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.08em" }}
            >
              <span className="w-1.5 h-1.5 bg-[#FF4500] rounded-sm mr-2" />
              SIN COMPROMISO POSTERIOR
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

const faqs = [
  {
    q: "¿Para qué tipo de empresa es el diagnóstico?",
    a: "Para cualquier empresa que quiera crecer pero no sabe exactamente qué está frenando sus ventas o cómo optimizar su operación comercial. B2B, e-commerce, servicios, distribuidoras.",
  },
  {
    q: "¿Necesito tener datos organizados antes de empezar?",
    a: "No. Trabajamos con lo que tienes: un Excel, tu sistema de facturación, o incluso solo conversaciones con tu equipo. Parte del diagnóstico es entender el estado real, no el ideal.",
  },
  {
    q: "¿Las reuniones son presenciales?",
    a: "Pueden ser presenciales en Santiago o remotas. Lo adaptamos a tu equipo.",
  },
  {
    q: "¿Cuánto tiempo me toma a mí?",
    a: "3 reuniones de 90 minutos, una por semana. El resto lo hacemos nosotros.",
  },
  {
    q: "¿Qué pasa si ya tenemos claro el problema?",
    a: "El diagnóstico lo confirma con datos o descubre que el problema real es otro. En +10 años, rara vez el problema declarado es el problema real.",
  },
]

function FAQSection() {
  const { ref, visible } = useInView()
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 bg-[#FFFFFF]"
    >
      <div className="max-w-3xl mx-auto">
        <div
          className={`text-center mb-14 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <BadgeLight>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0 inline-block" />
            PREGUNTAS FRECUENTES
          </BadgeLight>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            Lo que nos preguntan{" "}
            <span className="text-[#FF4500]">SIEMPRE.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={faq.q}
              className="border border-[#E8E3DA] rounded-2xl overflow-hidden transition-all duration-700"
              style={{
                transitionDelay: `${i * 80}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(16px)",
              }}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-[#F5F1EA] transition-colors duration-200"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span
                  className="text-base font-semibold text-[#0A0A0A] pr-4"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full border border-[#E8E3DA] flex items-center justify-center text-[#938B82] transition-transform duration-300"
                  style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300 ease-in-out"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p
                  className="px-6 pb-5 text-[#938B82] leading-relaxed text-sm"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// FINAL CTA
// ---------------------------------------------------------------------------

function FinalCTA() {
  const { ref, visible } = useInView()
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className="py-20 sm:py-28 px-4 bg-[#F5F1EA] relative overflow-hidden"
    >
      {/* Fire glow */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
      >
        <div
          className="w-[700px] h-[700px] rounded-full animate-fire-glow"
          style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 65%)", opacity: 0.13 }}
        />
      </div>

      <div
        className={`max-w-3xl mx-auto text-center relative z-10 transition-all duration-1000 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h2
          className="text-4xl sm:text-6xl md:text-7xl font-black uppercase text-[#0A0A0A] text-balance mb-6 leading-none"
          style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.92" }}
        >
          Quema los barcos.{" "}
          <span className="text-[#FF4500]">EMPIEZA</span> a avanzar.
        </h2>

        <p
          className="text-base sm:text-lg text-[#938B82] mb-10 leading-relaxed max-w-xl mx-auto"
          style={{ fontFamily: "var(--font-barlow)" }}
        >
          3 semanas para entender tu negocio en profundidad. Un roadmap concreto para los próximos 90 días.
        </p>

        <button
          onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#0A0A0A] hover:bg-[#1B1917] text-white font-black uppercase px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
        >
          Agendar Diagnóstico → $500.000 CLP
        </button>

        <p
          className="mt-8 text-xs text-[#938B82]"
          style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.12em" }}
        >
          THEBURN.CL &nbsp;·&nbsp; SANTIAGO, CHILE &nbsp;·&nbsp; jordan@theburn.cl
        </p>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// PAGE
// ---------------------------------------------------------------------------

export default function DiagnosticoPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] overflow-hidden">
      <GlassmorphismNav />
      <main>
        <DiagnosticoHero />
        <ProblemSection />
        <IncludesSection />
        <InvestmentSection />
        <FAQSection />
        <FinalCTA />
        <section id="contacto" className="bg-[#0A0A0A] py-16 px-4">
          <div className="max-w-2xl mx-auto">
            <p className="text-[#FF4500] text-xs uppercase tracking-widest mb-4"
               style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
              ■ HABLEMOS
            </p>
            <h2 className="text-4xl font-black uppercase text-white mb-4"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
              Sin Humo.<br />Sin Jerga.
            </h2>
            <p className="text-[#938B82] mb-8 text-sm"
               style={{ fontFamily: 'var(--font-barlow)' }}>
              Cuéntanos tu caso. Te respondemos en menos de 24 horas hábiles.
            </p>
            <div className="[&_label]:text-white/40 [&_input]:bg-transparent [&_input]:border-b [&_input]:border-white/20 [&_input]:rounded-none [&_input]:px-0 [&_input]:text-white [&_input::placeholder]:text-white/25 [&_select]:bg-transparent [&_select]:border-b [&_select]:border-white/20 [&_select]:rounded-none [&_select]:px-0 [&_select]:text-white [&_textarea]:bg-transparent [&_textarea]:border-b [&_textarea]:border-white/20 [&_textarea]:rounded-none [&_textarea]:px-0 [&_textarea]:text-white [&_textarea::placeholder]:text-white/25 [&_option]:bg-[#1B1917] [&_option]:text-white">
              <ContactForm defaultNecesidad="Diagnóstico Comercial" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
