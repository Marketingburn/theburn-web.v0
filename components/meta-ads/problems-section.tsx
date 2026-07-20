'use client'

import { TrendingDown, Users, Zap, AlertCircle } from 'lucide-react'

const problems = [
  {
    icon: TrendingDown,
    title: 'Sin crecimiento claro',
    description: 'Los números bajan o se estancan sin saber bien por qué.',
  },
  {
    icon: Users,
    title: 'Pierdes clientes',
    description: 'Se van sin entender qué fue mal. No tienes un funnel.',
  },
  {
    icon: Zap,
    title: 'Equipo desordenado',
    description: 'Cada uno hace su trabajo, pero no hay un sistema común.',
  },
  {
    icon: AlertCircle,
    title: 'Gastas dinero sin ver ROI',
    description: 'Marketing, publicidad, gente... no sabes qué retorna.',
  },
]

export function ProblemsSection() {
  const handleScroll = () => {
    document.querySelector('[data-cta-final]')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-[#F1E9DD]">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-black uppercase mb-12 text-[#0A0A0A]" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          El problema es que sin un sistema, más gente no resuelve nada.
        </h2>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, idx) => {
            const Icon = problem.icon
            return (
              <div key={idx} className="bg-white rounded-xl p-6 border-l-4 border-[#FF4500]">
                <Icon size={24} className="text-[#FF4500] mb-3" />
                <h3 className="font-bold text-[#0A0A0A] mb-2 text-lg" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                  {problem.title}
                </h3>
                <p className="text-sm text-[#938B82]" style={{ fontFamily: 'var(--font-barlow)' }}>
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* CTA Callout */}
        <div className="bg-[#0A0A0A] rounded-2xl p-8 text-center mb-8">
          <p className="text-white text-lg mb-6" style={{ fontFamily: 'var(--font-barlow)' }}>
            Te ayudamos a <span className="font-bold">diseñar e implementar</span> el sistema que necesitas para vender más.
          </p>
          <button
            onClick={handleScroll}
            className="bg-[#FF4500] hover:bg-[#E63E00] text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Agendar mi diagnóstico
          </button>
        </div>
      </div>
    </section>
  )
}
