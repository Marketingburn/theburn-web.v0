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
      text: "Pasamos de responder leads en 3 días a hacerlo en minutos. El equipo ahora cierra, no persigue.",
      name: "Carlos M.",
      role: "Gerente General",
    },
    {
      text: "El diagnóstico nos mostró exactamente dónde perdíamos leads. En 30 días el sistema ya estaba funcionando.",
      name: "Valentina R.",
      role: "Gerente de Marketing",
    },
    {
      text: "Con The Burn automatizamos todo el seguimiento post-reunión. Nuestra tasa de cierre subió 40%.",
      name: "Jorge P.",
      role: "Director Comercial",
    },
    {
      text: "The Burn conectó nuestro CRM con WhatsApp y los leads ahora se califican solos. Increíble.",
      name: "Daniela V.",
      role: "Jefa de Ventas",
    },
    {
      text: "Nuestro costo por lead bajó un 40% en el primer trimestre. Los reportes de Power BI son una maravilla.",
      name: "Andrés F.",
      role: "CEO, Distribuidora Sur",
    },
    {
      text: "Implementación rápida, sin burocracia. Exactamente lo que necesitábamos.",
      name: "Camila S.",
      role: "Directora de Operaciones",
    },
    {
      text: "Ya no perdemos leads por falta de seguimiento. El sistema trabaja mientras nosotros dormimos.",
      name: "Ricardo L.",
      role: "Gerente Comercial",
    },
    {
      text: "El onboarding fue sencillo y el equipo de The Burn estuvo siempre disponible. Recomendado.",
      name: "Paula N.",
      role: "Marketing Manager",
    },
  ]

  const stats = [
    { value: "70%", label: "menos tiempo en seguimiento manual" },
    { value: "85%", label: "tasa de respuesta a leads" },
    { value: "40%", label: "aumento en conversión" },
  ]

  return (
    <section id="testimonials" ref={sectionRef} className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A]">
      {/* Subtle grid bg */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,107,0,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,107,0,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <div className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out inline-flex items-center gap-2 text-[#888888] text-sm font-medium tracking-wider uppercase mb-6">
            <div className="w-8 h-px bg-[#333333]" />
            Success Stories
            <div className="w-8 h-px bg-[#333333]" />
          </div>
          <h2
            className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white mb-6 text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)" }}
          >
            Las empresas que ya{" "}
            <span className="text-[#FF6B00]">automatizaron</span>
          </h2>
          <p className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-lg text-[#888888] max-w-2xl mx-auto leading-relaxed">
            Descubre cómo empresas B2B están transformando su pipeline con The Burn
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 md:mt-16 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="fade-in-element opacity-0 translate-y-8 transition-all duration-1000 ease-out text-center bg-[#111111] border border-[#222222] rounded-xl p-6 hover:border-[#FF6B00]/30 transition-all duration-300"
            >
              <div
                className="text-3xl font-black text-[#FF6B00] mb-1"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
              >
                {stat.value}
              </div>
              <p className="text-[#888888] text-xs leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
