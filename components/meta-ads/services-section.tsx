'use client'

import { BarChart3, TrendingUp, Megaphone, Settings } from 'lucide-react'

const services = [
  {
    icon: BarChart3,
    title: 'Diagnóstico Comercial',
    description: 'Analizamos tu modelo de negocio, funnel de ventas y dónde se pierden oportunidades.',
  },
  {
    icon: TrendingUp,
    title: 'Business Intelligence',
    description: 'Dashboards con datos reales. Sabes qué decisión tomar todos los días.',
  },
  {
    icon: Megaphone,
    title: 'Publicidad Inteligente',
    description: 'Campañas con retorno medible. Meta Ads, Google Ads, LinkedIn. Lo que funciona.',
  },
  {
    icon: Settings,
    title: 'Procesos LEAN SIX SIGMA',
    description: 'Optimizamos tu operación. Menos mermas, menos costos, más margen.',
  },
]

export function ServicesSection() {
  const handleScroll = () => {
    document.querySelector('[data-cta-final]')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-black uppercase mb-12 text-[#0A0A0A]" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          Te ayudamos con
        </h2>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div key={idx} className="bg-[#F1E9DD] rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <Icon size={28} className="text-[#FF4500] mb-4" />
                <h3 className="font-bold text-[#0A0A0A] mb-2 text-base" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                  {service.title}
                </h3>
                <p className="text-sm text-[#938B82] leading-relaxed" style={{ fontFamily: 'var(--font-barlow)' }}>
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={handleScroll}
            className="bg-[#FF4500] hover:bg-[#E63E00] text-white font-bold py-3 px-8 rounded-lg transition-all duration-200 hover:scale-105"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Quiero mi diagnóstico gratis
          </button>
        </div>
      </div>
    </section>
  )
}
