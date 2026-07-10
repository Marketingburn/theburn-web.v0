"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/navigation"

const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
    tag: "Diagnóstico",
    title: "Diagnóstico Comercial y Marketing",
    description:
      "Analizamos tu negocio, tus números y tu equipo en 3 semanas. Entendemos dónde se pierden ventas y qué hay que ordenar primero.",
    href: "/diagnostico",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    tag: "Power BI",
    title: "Business Intelligence & Power BI",
    description:
      "Dashboard conectado a tus datos reales: márgenes, stock, pipeline y conversión. Decisiones con números, no con corazonadas.",
    href: "/servicios/business-intelligence-power-bi",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    tag: "Performance",
    title: "Funnel Digital de Performance",
    description:
      "Diseño e implementación de tu canal de captación: paid media, landing pages y conversión optimizada para tu modelo de negocio.",
    href: "/servicios/funnel-digital-performance",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    tag: "Automatización",
    title: "Automatización de Marketing",
    description:
      "Flujos de nurturing, seguimiento automático y calificación de leads. Tu equipo cierra; el sistema prospecta.",
    href: "/servicios/automatizacion-marketing",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tag: "Estrategia",
    title: "Estrategia Comercial",
    description:
      "Definimos el proceso de ventas, los mensajes por segmento y el roadmap de crecimiento. Con métricas de seguimiento incluidas.",
    href: "/servicios/estrategia-comercial",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tag: "Operaciones",
    title: "Diagnóstico Operacional LEAN SIX SIGMA para empresas B2B en Chile",
    description:
      "Medimos tus procesos, márgenes y capacidad instalada. Identificamos dónde se pierde plata y tiempo, y te entregamos un dashboard para decidir con datos.",
    href: "/servicios/consultoria-operacional",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section id="features" ref={sectionRef} className="relative z-10 bg-[#F5F1EA]">
      <div className="rounded-t-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 bg-[#F5F1EA]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`mb-12 sm:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0A0A0A] border border-[#2A2725] text-[#938B82] text-sm font-medium mb-6" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}>
              <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2" />
              SERVICIOS
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
            >
              Un sistema que trabaja. No un{" "}
              <span className="text-[#FF4500]">PDF</span> que se archiva.
            </h2>
            <p className="text-base sm:text-lg text-[#938B82] max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
              Combinamos inteligencia de negocio, marketing de performance y automatización en un solo sistema adaptado a tu empresa.
            </p>
          </div>

          {/* Service Cards */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-[#E8E3DA] hover:border-[#FF4500]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 shadow-sm"
                style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF4500] flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-[#F5F1EA] border border-[#E8E3DA] text-[#938B82] text-xs font-medium mb-4" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}>
                  {service.tag}
                </div>
                <h3
                  className="text-xl sm:text-2xl font-black uppercase text-[#0A0A0A] mb-3"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#938B82] text-sm leading-relaxed mb-6" style={{ fontFamily: "var(--font-barlow)" }}>{service.description}</p>
                <button
                  onClick={() => router.push(service.href)}
                  className="inline-flex items-center gap-2 text-[#FF4500] text-sm font-bold uppercase tracking-wide hover:text-[#FF4500]/80 transition-colors duration-200 group/btn"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  Ver servicio
                  <span className="group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
