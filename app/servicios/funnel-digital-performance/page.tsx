"use client"

import { useState, useRef, useEffect } from "react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

// ---------------------------------------------------------------------------
// Shared micro-components (same pattern as /diagnostico)
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

function FunnelHero() {
  return (
    <section className="min-h-screen flex items-center px-4 py-24 relative bg-[#F5F1EA] overflow-hidden">
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
              SERVICIO · FUNNEL DIGITAL
            </Badge>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-[#0A0A0A] text-balance leading-none mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.9" }}
            >
              Funnel Digital de Ventas B2B Chile — Leads Calificados
            </h1>

            <p
              className="text-base sm:text-lg text-[#938B82] leading-relaxed mb-10 max-w-lg"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Diseñamos e implementamos el funnel digital completo: desde el anuncio hasta el lead calificado en manos de tu equipo comercial. Performance con datos, no con esperanza.
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
                Ver qué construimos &nbsp;↓
              </button>
            </div>
          </div>

          {/* Right — funnel visualization card */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-[#1B1917] rounded-2xl border border-[#2A2725] p-8 w-full max-w-sm shadow-2xl">
              <p
                className="text-[#FF4500] text-xs font-semibold mb-8 uppercase tracking-widest"
                style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.12em" }}
              >
                FUNNEL DE CONVERSIÓN
              </p>

              {/* Funnel stages */}
              {[
                { stage: "VISITA", pct: "100%", sub: "Tráfico pagado o SEO", width: "w-full" },
                { stage: "LEAD", pct: "18%", sub: "Formulario en landing page", width: "w-4/5" },
                { stage: "CALIFICADO", pct: "8%", sub: "Score automático por IA", width: "w-3/5" },
                { stage: "CLIENTE", pct: "3%", sub: "Cierre por tu equipo", width: "w-2/5" },
              ].map((item, i) => (
                <div key={item.stage} className="mb-5">
                  <div className="flex items-baseline justify-between mb-1.5">
                    <span
                      className="text-white text-xs font-bold uppercase tracking-widest"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      {item.stage}
                    </span>
                    <span
                      className="text-[#FF4500] text-xs font-semibold"
                      style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                    >
                      {item.pct}
                    </span>
                  </div>
                  <div className="h-1.5 bg-[#2A2725] rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.width} transition-all duration-700`}
                      style={{
                        background: `linear-gradient(to right, #FF4500, #D6862C)`,
                        transitionDelay: `${i * 150}ms`,
                      }}
                    />
                  </div>
                  <p
                    className="text-[#938B82]/60 text-xs mt-1"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {item.sub}
                  </p>
                </div>
              ))}

              <div className="mt-6 pt-6 border-t border-[#2A2725]">
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
// WHAT IS A FUNNEL (white)
// ---------------------------------------------------------------------------

function WhatIsFunnelSection() {
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
            QUÉ ES UN FUNNEL DIGITAL
          </BadgeLight>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance mb-4"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            No es tener redes sociales. Es tener un{" "}
            <span className="text-[#FF4500]">SISTEMA</span> de captación.
          </h2>
          <p
            className="text-base sm:text-lg text-[#938B82] max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            Un funnel digital bien construido atrae al prospecto correcto, lo educa, lo califica y lo entrega a tu equipo listo para cerrar. Sin eso, estás pagando por clics que no se convierten.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              num: "01",
              title: "Captación",
              body: "Paid media (Google Ads, Meta Ads) o SEO orgánico. Atraemos al prospecto correcto, no a cualquiera.",
            },
            {
              num: "02",
              title: "Conversión",
              body: "Landing pages optimizadas para convertir visitas en leads. Sin distracciones, con un solo objetivo.",
            },
            {
              num: "03",
              title: "Calificación",
              body: "Flujos automáticos que segmentan y califican. Tu equipo recibe solo los leads que valen la pena.",
            },
          ].map((card, i) => (
            <div
              key={card.num}
              className="bg-[#F5F1EA] rounded-2xl p-8 transition-all duration-700"
              style={{
                borderColor: "rgba(10,10,10,0.06)",
                border: "1px solid rgba(10,10,10,0.06)",
                transitionDelay: `${i * 120}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
              }}
            >
              <span
                className="text-4xl font-black text-[#FF4500] block mb-4 leading-none"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {card.num}
              </span>
              <h3
                className="text-xl font-black uppercase text-[#0A0A0A] mb-3"
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
// WHAT WE BUILD (#F5F1EA, 6 cards)
// ---------------------------------------------------------------------------

const buildCards = [
  {
    icon: "→",
    title: "Estrategia de captación",
    body: "Definimos canales, audiencias y mensajes. Dónde está tu cliente y cómo llegar a él.",
    tag: "Estrategia",
  },
  {
    icon: "◆",
    title: "Campañas de Paid Media",
    body: "Google Ads y Meta Ads optimizados para conversión, no para impresiones.",
    tag: "Paid Media",
  },
  {
    icon: "■",
    title: "Landing Pages",
    body: "Páginas de aterrizaje con un solo objetivo: convertir. Diseño, copy y CTA probados.",
    tag: "CRO",
  },
  {
    icon: "▲",
    title: "Automatización de leads",
    body: "Flujos automáticos de bienvenida, calificación y nurturing por email y WhatsApp.",
    tag: "Automatización",
  },
  {
    icon: "◉",
    title: "Tracking y analítica",
    body: "Configuramos todo el tracking: GA4, píxeles, conversiones y atribución real.",
    tag: "Analytics",
  },
  {
    icon: "↺",
    title: "Optimización continua",
    body: "Cada mes revisamos métricas y ajustamos. El funnel mejora con el tiempo.",
    tag: "CRO",
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
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            De cero a funnel{" "}
            <span className="text-[#FF4500]">FUNCIONANDO.</span>
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
// METRICS (dark #0A0A0A)
// ---------------------------------------------------------------------------

const metrics = [
  {
    abbr: "CPL",
    label: "Costo por Lead",
    body: "Cuánto te cuesta cada lead captado. La métrica base para saber si tu inversión en medios es rentable.",
  },
  {
    abbr: "CAC",
    label: "Costo de Adquisici��n de Cliente",
    body: "El costo real de conseguir un cliente pagador, incluyendo medios y operaciones.",
  },
  {
    abbr: "ROAS",
    label: "Retorno sobre inversión publicitaria",
    body: "Cuántos pesos generas por cada peso invertido en pauta. El KPI central de cualquier campaña.",
  },
  {
    abbr: "LTV",
    label: "Valor de vida del cliente",
    body: "Cuánto vale un cliente en el tiempo. Define cuánto puedes invertir para adquirirlo.",
  },
]

function MetricsSection() {
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
            LO QUE MEDIMOS
          </BadgeDark>
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-black uppercase text-white text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            Si no se mide, no{" "}
            <span className="text-[#FF4500]">MEJORA.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((m, i) => (
            <div
              key={m.abbr}
              className="bg-[#1B1917] rounded-2xl border border-[#2A2725] p-8 hover:border-[#FF4500]/30 transition-all duration-300"
              style={{
                transitionDelay: `${i * 100}ms`,
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 600ms ${i * 100}ms, transform 600ms ${i * 100}ms, border-color 200ms`,
              }}
            >
              <span
                className="text-4xl font-black text-[#FF4500] block mb-3 leading-none"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {m.abbr}
              </span>
              <p
                className="text-white text-sm font-semibold uppercase mb-3"
                style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.04em" }}
              >
                {m.label}
              </p>
              <p
                className="text-[#938B82] text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                {m.body}
              </p>
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

function FunnelCTA() {
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
            ¿Cuánto te cuesta cada cliente hoy? Si no sabes la respuesta,{" "}
            <span className="text-[#FF4500]">EMPIEZA</span> aquí.
          </h2>
          <p
            className="text-[#938B82] text-base sm:text-lg leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            El diagnóstico revela tu CPL actual, dónde se pierden tus leads y qué cambiar primero. Con datos reales, no suposiciones.
          </p>
          <button
            onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-[#0A0A0A] hover:bg-[#1B1917] text-white font-bold px-10 py-5 rounded-full text-lg transition-all duration-300 hover:scale-105 cursor-pointer shadow-lg"
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

export default function FunnelDigitalPage() {
  return (
    <>
      <GlassmorphismNav />
      <main>
        <FunnelHero />
        <WhatIsFunnelSection />
        <WhatWeBuildSection />
        <MetricsSection />
        <FunnelCTA />
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
              <ContactForm defaultNecesidad="Funnel Digital" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
