'use client'

export function ProblemsSectionRedesign() {
  const problems = [
    {
      realidad: 'Sin forma de saber qué campaña trae clientes de verdad',
      conTheBurn: 'Dashboard integrado que muestra exactamente qué trae ROI',
    },
    {
      realidad: 'Contratas gente pensando que "más brazos" arregla todo',
      conTheBurn: 'Un sistema que escala sin necesidad de contratar igual de rápido',
    },
    {
      realidad: 'Decides a ojo, sin datos. Los números que ves son distintos en cada lugar',
      conTheBurn: 'Un único sistema de verdad: datos de Meta, Google, CRM y operaciones conectados',
    },
    {
      realidad: 'Gastas dinero en publicidad pero no sabes si vuelve',
      conTheBurn: 'Sabes exactamente cuánto gastaste, cuántos leads vinieron y cuál fue el costo real',
    },
  ]

  return (
    <section className="bg-[#F5F1EA] py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Headline */}
        <h2
          className="font-black uppercase text-4xl sm:text-5xl text-[#0A0A0A] mb-16 text-center"
          style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '-0.02em' }}
        >
          El problema
        </h2>

        {/* Two Column Comparison */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[#E8E3DA]">
            {/* Header Row */}
            <div className="bg-[#F5F1EA] border-b border-r border-[#E8E3DA] p-6">
              <h3
                className="font-black uppercase text-[#0A0A0A] text-lg"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                La realidad
              </h3>
            </div>
            <div className="bg-[#F5F1EA] border-b border-[#E8E3DA] p-6">
              <h3
                className="font-black uppercase text-[#0A0A0A] text-lg"
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                Con The Burn
              </h3>
            </div>

            {/* Content Rows */}
            {problems.map((item, idx) => (
              <div key={idx} className="contents">
                <div
                  className={`p-6 text-[#0A0A0A] ${idx < problems.length - 1 ? 'border-b border-r border-[#E8E3DA]' : 'border-r border-[#E8E3DA]'}`}
                  style={{ fontFamily: 'var(--font-barlow)', lineHeight: '1.6' }}
                >
                  {item.realidad}
                </div>
                <div
                  className={`p-6 text-[#0A0A0A] ${idx < problems.length - 1 ? 'border-b border-[#E8E3DA]' : ''}`}
                  style={{ fontFamily: 'var(--font-barlow)', lineHeight: '1.6' }}
                >
                  {item.conTheBurn}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Statement Block - Full Width */}
        <div className="bg-[#0A0A0A] w-full py-12 px-6">
          <p
            className="text-white font-black text-2xl sm:text-3xl text-center"
            style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '-0.02em' }}
          >
            Sin un sistema, más gente no resuelve el problema.
          </p>
        </div>
      </div>
    </section>
  )
}
