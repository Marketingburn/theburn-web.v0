"use client"

import { useEffect, useRef } from "react"

export function CTASection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll(".fade-in-element")
            elements.forEach((element, index) => {
              setTimeout(() => {
                element.classList.add("animate-fade-in-up")
              }, index * 200)
            })
          }
        })
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="relative py-8 px-4 sm:px-6 lg:px-8 mb-24 bg-[#0A0A0A]">
      <div className="relative max-w-4xl mx-auto">
        <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center p-8 md:p-12 rounded-3xl border border-[#FF6B00]/30 bg-[#111111] relative overflow-hidden">
          {/* Orange glow top */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #FF6B00 0%, transparent 70%)" }}
          />

          <div className="relative z-10">
            <h3
              className="text-3xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4 text-balance"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Obtén tu Diagnóstico Gratuito
            </h3>
            <p className="text-base md:text-lg text-[#888888] mb-8 max-w-2xl mx-auto leading-relaxed">
              Analizamos tu funnel actual y te mostramos exactamente dónde se pierden tus leads.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="group inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-[#FF6B00] hover:bg-[#FF8C00] text-white rounded-full font-bold text-base md:text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-orange-900/30">
                Agendar Diagnóstico
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <p className="mt-6 text-[#555555] text-sm">Sin compromiso. 100% gratuito. Respuesta en 24h.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
