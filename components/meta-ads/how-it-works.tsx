'use client'

import { Calendar, Microscope, FileText } from 'lucide-react'

const steps = [
  {
    icon: Calendar,
    title: 'Agendas tu diagnóstico',
    description: 'Dejas tus datos. Te contactamos en 24 horas para coordinar.',
  },
  {
    icon: Microscope,
    title: 'Revisamos tu situación',
    description: '30 minutos de sesión. Analizamos números, equipo y procesos.',
  },
  {
    icon: FileText,
    title: 'Te llevas un plan priorizado',
    description: 'Sabes exactamente qué resolver primero para crecer.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#0A0A0A]">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-black uppercase text-white mb-12 text-center" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          Cómo funciona
        </h2>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative">
          {/* Connectors for desktop */}
          <div className="hidden sm:flex absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FF4500] to-transparent pointer-events-none" />

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative">
                {/* Step number circle */}
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 rounded-full bg-[#FF4500] flex items-center justify-center relative z-10">
                    <Icon size={40} className="text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                    {step.title}
                  </h3>
                  <p className="text-[#938B82] text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
                    {step.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
