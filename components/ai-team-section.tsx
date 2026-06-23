"use client"

import { useState, useEffect, useRef } from "react"

const flowSteps = [
  {
    id: 1,
    label: "Lead entra al CRM",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "#FF6B00",
    detail: "Formulario web o LinkedIn",
  },
  {
    id: 2,
    label: "Auto-calificado por IA",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "#FF8C00",
    detail: "Score basado en industria y cargo",
  },
  {
    id: 3,
    label: "Secuencia de nurturing",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    color: "#25D366",
    detail: "Email + WhatsApp automático",
  },
  {
    id: 4,
    label: "Alerta al equipo comercial",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
      </svg>
    ),
    color: "#3B82F6",
    detail: "Notificación instantánea en Slack/email",
  },
  {
    id: 5,
    label: "Reunión agendada",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    color: "#FF6B00",
    detail: "Calendly integrado al flujo",
  },
]

function AutomationFlow({ isVisible }: { isVisible: boolean }) {
  const [activeStep, setActiveStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState<number[]>([])

  useEffect(() => {
    if (!isVisible) return

    const interval = setInterval(() => {
      setActiveStep((prev) => {
        const next = (prev + 1) % flowSteps.length
        if (next === 0) {
          setCompletedSteps([])
        } else {
          setCompletedSteps((c) => [...c, prev])
        }
        return next
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [isVisible])

  return (
    <div className="relative">
      {/* Flow visualization */}
      <div className="bg-[#0A0A0A] rounded-2xl border border-[#222222] p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <div className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse" />
          <span className="text-[#888888] text-xs font-medium uppercase tracking-wider">Flujo activo en tiempo real</span>
        </div>

        <div className="space-y-3">
          {flowSteps.map((step, index) => {
            const isActive = activeStep === index
            const isDone = completedSteps.includes(index)

            return (
              <div key={step.id} className="relative">
                <div
                  className={`flex items-center gap-4 p-3 sm:p-4 rounded-xl border transition-all duration-500 ${
                    isActive
                      ? "border-[#FF6B00]/50 bg-[#FF6B00]/10"
                      : isDone
                        ? "border-green-900/40 bg-green-950/20"
                        : "border-[#1A1A1A] bg-[#111111]"
                  }`}
                >
                  {/* Step number/icon */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      isActive
                        ? "bg-[#FF6B00] text-white"
                        : isDone
                          ? "bg-green-600/30 text-green-400"
                          : "bg-[#1A1A1A] text-[#444444]"
                    }`}
                  >
                    {isDone ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      step.icon
                    )}
                  </div>

                  <div className="flex-1 min-w-0">
                    <div
                      className={`font-semibold text-sm transition-colors duration-500 ${
                        isActive ? "text-white" : isDone ? "text-green-400" : "text-[#444444]"
                      }`}
                    >
                      {step.label}
                    </div>
                    <div className="text-[#555555] text-xs mt-0.5">{step.detail}</div>
                  </div>

                  {isActive && (
                    <div className="w-2 h-2 bg-[#FF6B00] rounded-full animate-pulse flex-shrink-0" />
                  )}
                </div>

                {/* Connector line */}
                {index < flowSteps.length - 1 && (
                  <div className="flex justify-start ml-7 my-1">
                    <div
                      className={`w-px h-3 transition-colors duration-500 ${
                        completedSteps.includes(index) ? "bg-green-600/40" : "bg-[#222222]"
                      }`}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Progress bar */}
        <div className="mt-6 bg-[#1A1A1A] rounded-full h-1.5">
          <div
            className="bg-[#FF6B00] h-1.5 rounded-full transition-all duration-500"
            style={{ width: `${((activeStep + 1) / flowSteps.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[#444444] text-xs">Lead ingresa</span>
          <span className="text-[#444444] text-xs">Reunión agendada</span>
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
    <section id="ai-team" ref={sectionRef} className="relative z-10 bg-white">
      <div className="rounded-b-[3rem] pt-0 pb-16 sm:pb-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2
              className="text-3xl sm:text-4xl md:text-6xl font-black uppercase tracking-tight text-gray-900 text-balance mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Así trabaja{" "}
              <span className="text-[#FF6B00]">The Burn</span>{" "}
              por ti
            </h2>
            <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
              Cada lead que entra activa un flujo automático. Sin humanos, sin demoras, sin leads perdidos.
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
                className="text-2xl lg:text-3xl font-black uppercase text-gray-900 mb-6"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                Lo que antes tomaba días, ahora pasa en minutos
              </h3>

              <div className="space-y-4 text-gray-500 text-sm leading-relaxed mb-8">
                <p>
                  Cuando un lead llena tu formulario o te escribe por LinkedIn, The Burn lo captura, lo califica con IA
                  y dispara la secuencia de nurturing adecuada — todo sin que tu equipo haga nada.
                </p>
                <p>
                  Si el lead está listo para comprar, tu equipo recibe una alerta instantánea con todo el contexto para
                  cerrar la reunión.
                </p>
                <p className="font-semibold text-gray-900">
                  Resultado: más reuniones, menos esfuerzo, cero leads perdidos.
                </p>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl border-l-4 border-[#FF6B00]">
                <p className="text-gray-700 font-medium text-sm leading-relaxed">
                  &ldquo;Pasamos de responder leads en 3 días a hacerlo en minutos. El equipo ahora cierra, no persigue.&rdquo;
                </p>
                <p className="text-gray-400 text-xs mt-2">— Carlos M., Gerente General</p>
              </div>
            </div>

            {/* Right — flow */}
            <div
              className={`w-full lg:w-1/2 order-1 lg:order-2 transition-all duration-1000 delay-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <AutomationFlow isVisible={isVisible} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
