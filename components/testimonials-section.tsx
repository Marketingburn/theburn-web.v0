"use client"

import { useEffect, useRef } from "react"
import { TestimonialsColumn } from "@/components/ui/testimonials-column"

export function TestimonialsSection() {
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
              }, index * 300)
            })
          }
        })
      },
      { threshold: 0.1 },
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      text: "El diagnóstico nos mostró en 3 semanas lo que no habíamos visto en 3 años. Ahora sabemos exactamente de dónde viene cada peso que entra.",
      name: "Carlos M.",
      role: "Gerente General",
    },
    {
      text: "Implementaron el Power BI conectado a nuestro sistema en menos de un mes. Por primera vez veo los márgenes reales por producto.",
      name: "Valentina R.",
      role: "Gerente de Marketing",
    },
    {
      text: "Antes el equipo de ventas corría sin dirección. Ahora tiene un proceso, métricas y sabe qué funciona.",
      name: "Jorge P.",
      role: "Director Comercial",
    },
    {
      text: "The Burn conectó nuestro CRM con el funnel digital y los leads ahora se califican solos. El proceso comercial finalmente funciona.",
      name: "Daniela V.",
      role: "Jefa de Ventas",
    },
    {
      text: "Nuestro costo por lead bajó significativamente en el primer trimestre. Los reportes de Power BI son una maravilla.",
      name: "Andrés F.",
      role: "CEO, Distribuidora Sur",
    },
    {
      text: "Implementación sin burocracia. Exactamente lo que necesitábamos: un sistema, no un PDF.",
      name: "Camila S.",
      role: "Directora de Operaciones",
    },
    {
      text: "Ya no dependemos de una sola persona para vender. El sistema trabaja mientras el equipo se enfoca en cerrar.",
      name: "Ricardo L.",
      role: "Gerente Comercial",
    },
    {
      text: "El onboarding fue claro y el equipo de The Burn estuvo siempre disponible. Recomendado sin dudar.",
      name: "Paula N.",
      role: "Marketing Manager",
    },
  ]

  const stats = [
    { value: "+10 años", label: "combinando estrategia, ejecución y tecnología" },
    { value: "1 equipo", label: "comercial, marketing y datos juntos" },
    { value: "0 humo", label: "jerga y promesas sin métricas" },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,69,0,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,69,0,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 md:mb-24">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center px-4 py-2 rounded-full bg-[#1B1917] border border-[#2A2725] text-[#938B82] text-sm font-medium mb-6" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}>
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2" />
            SUCCESS STORIES
          </div>
          <h2
            className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6 text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.9" }}
          >
            Las empresas que decidieron{" "}
            <span className="text-[#FF4500]">AVANZAR.</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-lg text-[#938B82] max-w-xl leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
            Sin vuelta atrás.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out relative flex justify-center items-center min-h-[600px] md:min-h-[800px] overflow-hidden"
        >
          <div
            className="flex gap-8 max-w-6xl"
            style={{
              maskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          >
            <TestimonialsColumn testimonials={testimonials.slice(0, 3)} duration={15} className="flex-1" />
            <TestimonialsColumn
              testimonials={testimonials.slice(2, 5)}
              duration={12}
              className="flex-1 hidden md:block"
            />
            <TestimonialsColumn
              testimonials={testimonials.slice(1, 4)}
              duration={18}
              className="flex-1 hidden lg:block"
            />
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 md:mt-16 max-w-3xl">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out bg-[#1B1917] border border-[#2A2725] rounded-xl p-6 hover:border-[#FF4500]/30 transition-colors duration-300"
            >
              <div
                className="text-2xl font-black text-[#FF4500] mb-1"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                {stat.value}
              </div>
              <p className="text-[#938B82] text-xs leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
