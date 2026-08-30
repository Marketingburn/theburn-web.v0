'use client'

export function HowItWorks() {
  const phases = [
    {
      phase: 1,
      title: 'Diagnóstico',
      duration: 'Semanas 1-3',
      description: 'Analizamos tu números, equipo y procesos. Identificamos los 3 puntos clave para crecer.',
      deliverable: 'Entregable: análisis completo + roadmap',
      isActive: true,
    },
    {
      phase: 2,
      title: 'Implementación',
      duration: 'Mes 2+',
      description: 'Ejecutamos el roadmap. Ponemos en marcha el sistema: dashboards, automatización, procesos.',
      deliverable: 'Fee mensual',
      isActive: false,
    },
    {
      phase: 3,
      title: 'Acompañamiento',
      duration: 'Retainer',
      description: 'Monitoreamos métricas. Ajustamos conforme creces. Sistema activo y escalando.',
      deliverable: 'Retainer',
      isActive: false,
    },
  ]

  return (
    <section className="bg-[#0A0A0A] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-0">
      <div className="max-w-6xl mx-auto">
        {/* Heading - Fixed z-index and padding to avoid navbar overlap */}
        <div className="relative z-10 pt-6 pb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white text-center"
            style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '-0.02em' }}
          >
            Tres fases. Un sistema que crece contigo.
          </h2>
        </div>

        {/* Progress Bar */}
        <div className="mb-16 px-4 sm:px-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[#938B82] text-xs font-bold uppercase" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
              Inicio
            </span>
            <span className="text-[#938B82] text-xs font-bold uppercase" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
              Sistema activo
            </span>
          </div>
          <div className="w-full h-1 bg-[#2A2A2A] rounded-full overflow-hidden">
            <div className="h-full w-1/3 bg-[#FF4500] rounded-full" />
          </div>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {phases.map((item) => (
            <div
              key={item.phase}
              className={`p-8 rounded-lg transition-all duration-300 ${
                item.isActive
                  ? 'bg-[#C93700] text-white'
                  : 'bg-[#1A1A1A] text-[#A0A0A0]'
              }`}
            >
              {/* Phase Number */}
              <div className="mb-6">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full font-black text-lg ${
                    item.isActive ? 'bg-[#FF4500] text-white' : 'bg-[#2A2A2A] text-[#666666]'
                  }`}
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}
                >
                  {item.phase}
                </div>
              </div>

              {/* Title and Duration */}
              <h3
                className={`font-black uppercase text-xl sm:text-2xl mb-1 ${item.isActive ? 'text-white' : 'text-[#A0A0A0]'}`}
                style={{ fontFamily: 'var(--font-barlow-condensed)' }}
              >
                {item.title}
              </h3>
              <p
                className={`text-xs font-bold uppercase tracking-widest mb-4 ${item.isActive ? 'text-[#FF9B6F]' : 'text-[#666666]'}`}
                style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
              >
                {item.duration}
              </p>

              {/* Description */}
              <p
                className={`text-sm leading-relaxed mb-6 ${item.isActive ? 'text-white' : 'text-[#A0A0A0]'}`}
                style={{ fontFamily: 'var(--font-barlow)', lineHeight: '1.6' }}
              >
                {item.description}
              </p>

              {/* Deliverable/CTA */}
              <p
                className={`text-sm font-bold uppercase tracking-widest ${item.isActive ? 'text-[#FF9B6F]' : 'text-[#666666]'}`}
                style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
              >
                {item.deliverable}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="border-l-4 border-[#FF4500] bg-white p-8 rounded-sm">
          <p
            className="text-[#0A0A0A] text-lg sm:text-xl mb-4"
            style={{ fontFamily: 'var(--font-barlow)', lineHeight: '1.8' }}
          >
            "El diagnóstico nos mostró en 3 semanas lo que no habíamos visto en 3 años. Las recomendaciones fueron tan claras que implementamos el 80% en el mes siguiente. Ahora sabemos qué hacer con la publicidad."
          </p>
          <p
            className="text-[#0A0A0A] font-bold"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            — Carlos M., Gerente General
          </p>
        </div>
      </div>
    </section>
  )
}
