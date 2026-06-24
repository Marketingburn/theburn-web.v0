"use client"

import { useEffect, useRef, useState } from "react"

const services = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    title: "24/7 Automatización CRM",
    description:
      "Integramos tu CRM con flujos automáticos de calificación y alertas para tu equipo comercial.",
    tag: "CRM",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "Recepcionista de Leads IA",
    description:
      "Un agente inteligente responde, califica y agenda reuniones por WhatsApp y email sin intervención humana.",
    tag: "IA",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Agendamiento Automático",
    description:
      "El prospecto agenda directo en el calendario de tu equipo. Cero fricción, cero manual.",
    tag: "Calendly",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Automatización de Email",
    description:
      "Secuencias que nutren, educan y convierten leads según comportamiento real.",
    tag: "Email",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Calificación y Handoff",
    description:
      "El sistema identifica el momento de compra y transfiere el lead caliente a tu vendedor.",
    tag: "Handoff",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#FF6B00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Reportería Power BI",
    description:
      "Dashboard conectado a todos tus canales. Costo por lead, conversión, pipeline. En tiempo real.",
    tag: "Power BI",
  },
]

export function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

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
    <section id="features" ref={sectionRef} className="relative z-10 bg-white">
      <div className="rounded-t-[3rem] pt-16 sm:pt-24 pb-16 sm:pb-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 sm:mb-20 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-[#FF6B00] rounded-full mr-2 animate-pulse"></span>
              IA Trabajando 24/7 — Nunca Pierdas un Lead
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-gray-900 text-balance mb-4 sm:mb-6"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Tu Departamento de Marketing,
              <br />
              <span className="text-[#FF6B00]">Automatizado</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Seis sistemas que trabajan en paralelo para que ningún lead se pierda, sin que tu equipo levante un dedo.
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
                className="group bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 hover:border-[#FF6B00]/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 shadow-sm"
                style={{ transitionDelay: isVisible ? `${300 + index * 100}ms` : "0ms" }}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors duration-300">
                  {service.icon}
                </div>
                <div className="inline-flex items-center px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-gray-400 text-xs font-medium mb-4">
                  {service.tag}
                </div>
                <h3
                  className="text-xl sm:text-2xl font-black uppercase text-gray-900 mb-3"
                  style={{ fontFamily: "var(--font-barlow-condensed)" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
