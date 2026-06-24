"use client"

import { useEffect, useRef, useState } from "react"

export function ProblemSolutionSection() {
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
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 relative z-10 bg-[#0A0A0A]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div
          className={`mb-12 sm:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1B1917] border border-[#2A2725] text-[#938B82] text-sm font-medium mb-6" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}>
            <span className="w-2 h-2 bg-red-500 rounded-sm mr-2 animate-pulse" />
            EL PROBLEMA
          </div>
          <h2
            className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-white text-balance mb-4 sm:mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
          >
            Tu empresa vende. Pero no sabe{" "}
            <span className="text-[#FF4500]">EXACTAMENTE</span> por qué.
          </h2>
          <p className="text-base sm:text-lg text-[#938B82] max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
            Sin datos claros, sin procesos definidos y sin un funnel que funcione solo, cada venta depende del esfuerzo de una persona. Eso no escala.
          </p>
        </div>

        {/* Main Cards */}
        <div
          className={`grid lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Problem Card */}
          <div className="bg-[#1B1917] border border-red-900/40 rounded-2xl p-6 sm:p-8 hover:border-red-500/40 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-red-900/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.186-.833-2.956 0L3.858 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3
                className="text-xl sm:text-2xl font-black uppercase text-red-400"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                La realidad
              </h3>
            </div>

            <div className="bg-red-950/30 border border-red-900/30 rounded-xl p-4 sm:p-6 mb-6">
              <div
                className="text-4xl sm:text-5xl font-black text-red-400 mb-2"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Intuición
              </div>
              <p className="text-[#938B82] text-sm" style={{ fontFamily: "var(--font-barlow)" }}>así toma decisiones la mayoría de las empresas sin sistema</p>
            </div>

            <div className="space-y-3">
              {[
                "Sin métricas de pipeline ni conversión",
                "El equipo de ventas trabaja sin proceso definido",
                "El presupuesto de marketing no tiene trazabilidad",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                  <p className="text-[#938B82] text-sm leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>{point}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Solution Card */}
          <div className="bg-[#1B1917] border border-green-900/40 rounded-2xl p-6 sm:p-8 hover:border-green-500/40 transition-all duration-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-green-900/30 flex items-center justify-center">
                <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3
                className="text-xl sm:text-2xl font-black uppercase text-green-400"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Con The Burn
              </h3>
            </div>

            <div className="bg-green-950/30 border border-green-900/30 rounded-xl p-4 sm:p-6 mb-6">
              <div
                className="text-4xl sm:text-5xl font-black text-green-400 mb-2"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Datos
              </div>
              <p className="text-[#938B82] text-sm" style={{ fontFamily: "var(--font-barlow)" }}>cada decisión respaldada por números reales de tu negocio</p>
            </div>

            <div className="space-y-3">
              {[
                "Dashboard Power BI con tus márgenes, stock y pipeline",
                "Funnel digital que genera y califica leads",
                "Proceso comercial que funciona sin depender de una persona",
              ].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-[#938B82] text-sm leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {[
            { value: "$500k CLP", label: "diagnóstico inicial de 3 semanas" },
            { value: "3 semanas", label: "para entender tu negocio en profundidad" },
            { value: "1 equipo", label: "estrategia, marketing y datos juntos" },
          ].map((stat) => (
            <div
              key={stat.value}
              className="bg-[#1B1917] border border-[#2A2725] rounded-xl p-4 sm:p-6 hover:border-[#FF4500]/30 transition-all duration-300"
            >
              <div
                className="text-2xl sm:text-3xl font-black text-white mb-2"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {stat.value}
              </div>
              <p className="text-[#938B82] text-xs sm:text-sm" style={{ fontFamily: "var(--font-barlow)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
