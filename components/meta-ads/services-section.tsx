'use client'

import { BurnLine } from './burn-line'

export function ServicesSection() {
  const services = [
    {
      title: 'Marketing de Performance',
      description: 'Google Search y Performance Max, Meta Ads, LinkedIn Ads, landing pages B2B con foco en conversión, outreach directo.',
    },
    {
      title: 'Procesos Comerciales',
      description: 'Automatización de seguimiento de leads, CRM, WhatsApp y email automáticos, scripts de venta y manejo de objeciones.',
    },
    {
      title: 'Business Intelligence',
      description: 'Dashboards de ventas y pipeline, reporte unificado de campañas (Meta + Google + LinkedIn), conexión a ERP/Sheets/CRM, capacitación al equipo.',
    },
    {
      title: 'Contenido y Autoridad',
      description: 'LinkedIn corporativo con datos reales, sistema de contenido con IA, sin producción costosa.',
    },
  ]

  return (
    <section className="bg-[#F5F1EA] py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <p
            className="text-[#D6862C] text-sm sm:text-base font-black uppercase tracking-widest mb-3"
            style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            ■ ESTO ES LO QUE HACEMOS
          </p>
          <h2
            className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-[#0A0A0A] leading-tight"
            style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '-0.02em' }}
          >
            Esto es lo que hacemos cuando trabajas contigo
          </h2>
        </div>

        {/* Services Grid */}
        <div className="space-y-8 sm:space-y-12">
          {services.map((service, idx) => (
            <div key={idx}>
              {/* Burn Line */}
              <BurnLine />

              {/* Service Block */}
              <div className="py-8 sm:py-10 px-6 sm:px-8 lg:px-10 bg-white">
                <h3
                  className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] mb-3"
                  style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '-0.01em' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-base sm:text-lg text-[#0A0A0A] leading-relaxed"
                  style={{ fontFamily: 'var(--font-barlow)', lineHeight: '1.6' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Burn Line */}
        <div className="mt-8 sm:mt-12">
          <BurnLine />
        </div>
      </div>
    </section>
  )
}
