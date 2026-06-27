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
    <section id="contact" ref={sectionRef} className="relative py-8 px-4 sm:px-6 lg:px-8 mb-0 bg-[#0A0A0A]">
      <div className="relative max-w-4xl mx-auto">
        <div className="fade-in-element p-8 md:p-12 rounded-3xl border border-[#FF4500]/30 bg-[#1B1917] relative overflow-hidden">
          {/* Orange glow top */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(ellipse, #FF4500 0%, transparent 70%)" }}
          />

          <div className="relative z-10">
            <div className="fade-in-element inline-flex items-center px-3 py-1.5 rounded-full bg-[#0A0A0A] border border-[#2A2725] text-[#938B82] text-xs mb-6" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.1em" }}>
              DIAGNÓSTICO COMERCIAL
            </div>

            <h3
              className="fade-in-element text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white mb-4 text-balance"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.9" }}
            >
              Quema los barcos. Empieza a{" "}
              <span className="text-[#FF4500]">AVANZAR.</span>
            </h3>
            <p className="fade-in-element text-base md:text-lg text-[#938B82] mb-8 max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
              El diagnóstico te muestra exactamente qué está frenando tu crecimiento y el roadmap para desbloquearlo. 3 semanas. $500.000 CLP.
            </p>

            <div className="fade-in-element flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contacto')
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="group inline-flex items-center gap-3 px-8 py-4 md:px-12 md:py-5 bg-[#FF4500] hover:bg-[#e03e00] text-[#0A0A0A] rounded-full font-black text-base md:text-lg transition-all duration-300 hover:scale-105"
                style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.03em" }}
              >
                Agendar Diagnóstico
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <p className="mt-6 text-[#938B82]/60 text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}>
              3 SEMANAS · $500.000 CLP · SANTIAGO, CHILE
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
