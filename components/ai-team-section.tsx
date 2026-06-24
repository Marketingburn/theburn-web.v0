"use client"

import { useState, useEffect, useRef } from "react"

const phases = [
  {
    id: 1,
    label: "Diagnóstico",
    tag: "Semanas 1–3",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    description: "Reuniones semanales por área. Análisis de datos actuales. Roadmap de mejora con prioridades claras.",
    deliverable: "Entregable: análisis completo + roadmap",
  },
  {
    id: 2,
    label: "Implementación",
    tag: "Fee mensual",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    description: "Activamos los sistemas acordados: Power BI, funnel digital, automatizaciones. Adaptado a tu empresa, no un template.",
    deliverable: "Fee mensual + % sobre resultados",
  },
  {
    id: 3,
    label: "Acompañamiento",
    tag: "Retainer",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    description: "Iteramos cada mes con datos reales. Lo que no funciona, lo cambiamos. Lo que funciona, lo escalamos.",
    deliverable: "Retainer con métricas a la vista",
  },
]

function PhaseFlow({ isVisible }: { isVisible: boolean }) {
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % phases.length
        if (next === 0) {
          setCompletedSteps([])
        } else {
          setCompletedSteps((c) => [...c, prev])
        }
        return next
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <div className="relative">
      <div className="bg-[#0A0A0A] rounded-2xl border border-[#2A2725] p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-[#FF4500] rounded-sm animate-pulse" />
          <span className="text-[#938B82] text-xs font-medium uppercase tracking-wider" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.1em" }}>
            Tres fases · Un sistema
          </span>
        </div>

        <div className="space-y-4">
          {phases.map((phase, index) => {
            const isActive = activeStep === index
            const isDone = completedSteps.includes(index)

            return (
              <div key={phase.id} className="relative">
                <div
                  className={`p-4 sm:p-5 rounded-xl border transition-all duration-500 ${
                    isActive
                      ? "border-[#FF4500]/50 bg-[#FF4500]/10"
                      : isDone
                        ? "border-green-900/40 bg-green-950/20"
                        : "border-[#2A2725] bg-[#1B1917]"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                        isActive
                          ? "bg-[#FF4500] text-white"
                          : isDone
                            ? "bg-green-600/30 text-green-400"
                            : "bg-[#2A2725] text-[#938B82]"
                      }`}
                    >
                      {isDone ? (
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        phase.icon
                      )}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <span
                          className={`font-black text-base uppercase transition-colors duration-500 ${
                            isActive ? "text-white" : isDone ? "text-green-400" : "text-[#938B82]"
                          }`}
                          style={{ fontFamily: "var(--font-barlow-condensed)" }}
                        >
                          {phase.label}
                        </span>
                        <span className="text-[#938B82] text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                          {phase.tag}
                        </span>
                      </div>
                      {isActive && (
                        <p className="text-[#938B82] text-sm leading-relaxed mb-2" style={{ fontFamily: "var(--font-barlow)" }}>
                          {phase.description}
                        </p>
                      )}
                      <div className={`text-xs transition-colors duration-500 ${isActive ? "text-[#FF4500]" : "text-[#2A2725]"}`} style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                        {phase.deliverable}
                      </div>
                    </div>

                    {isActive && (
                      <div className="w-2 h-2 bg-[#FF4500] rounded-sm animate-pulse flex-shrink-0 mt-1" />
                    )}
                  </div>
                </div>

                {index < phases.length - 1 && (
                  <div className="flex justify-start ml-[1.1rem] my-1">
                    <div
                      className={`w-px h-3 transition-colors duration-500 ${
                        completedSteps.includes(index) ? "bg-green-600/40" : "bg-[#2A2725]"
                      }`}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-6 bg-[#1B1917] rounded-full h-1">
          <div
            className="bg-[#FF4500] h-1 rounded-full transition-all duration-700"
            style={{ width: `${((activeStep + 1) / phases.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[#938B82] text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Inicio</span>
          <span className="text-[#938B82] text-xs" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>Sistema activo</span>
        </div>
      </div>
    </div>
  )
}

export function AITeamSection() {
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
    <section id="ai-team" ref={sectionRef} className="relative z-10 bg-[#F5F1EA]">
      <div className="rounded-b-[3rem] pt-0 pb-16 sm:pb-24 px-4 bg-[#F5F1EA]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#0A0A0A] border border-[#2A2725] text-[#938B82] text-sm font-medium mb-6" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}>
              <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 animate-pulse" />
              CÓMO TRABAJAMOS
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
            >
              Tres fases. Un sistema que{" "}
              <span className="text-[#FF4500]">CRECE</span> contigo.
            </h2>
            <p className="text-base sm:text-lg text-[#938B82] max-w-2xl leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
              Empezamos entendiendo tu negocio en profundidad. Después implementamos. Después acompañamos.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
            {/* Left — copy */}
            <div
              className={`w-full lg:w-1/2 order-2 lg:order-1 transition-all duration-1000 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              <h3
                className="text-2xl lg:text-3xl font-black uppercase text-[#0A0A0A] mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                De diagnóstico a sistema en funcionamiento — sin que dependas de nosotros para siempre
              </h3>

              <div className="space-y-4 text-[#938B82] text-sm leading-relaxed mb-8" style={{ fontFamily: "var(--font-barlow)" }}>
                <p>
                  Primero entendemos tu negocio en profundidad: cómo vendes, qué datos tienes, dónde pierdes oportunidades. Tres semanas de diagnóstico antes de tocar nada.
                </p>
                <p>
                  Después activamos los sistemas: el dashboard de Power BI, el funnel digital, las automatizaciones de marketing. Todo conectado a tus datos reales.
                </p>
                <p className="font-semibold text-[#0A0A0A]">
                  Resultado: un sistema que trabaja, métricas que hablan y un equipo que sabe exactamente qué hacer.
                </p>
              </div>

              <div className="p-5 bg-white rounded-xl border-l-4 border-[#FF4500]">
                <p className="text-[#0A0A0A] font-medium text-sm leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
                  &ldquo;El diagnóstico nos mostró en 3 semanas lo que no habíamos visto en 3 años. Ahora sabemos exactamente de dónde viene cada peso que entra.&rdquo;
                </p>
                <p className="text-[#938B82] text-xs mt-2" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>— Carlos M., Gerente General</p>
              </div>
            </div>

            {/* Right — phase flow */}
            <div
              className={`w-full lg:w-1/2 order-1 lg:order-2 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <PhaseFlow isVisible={isVisible} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
