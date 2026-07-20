'use client'

export function ProofSection() {
  return (
    <section className="bg-[#0A0A0A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-[#FF4500] text-3xl sm:text-4xl font-black mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
              +300
            </p>
            <p className="text-[#F5F1EA] text-sm sm:text-base" style={{ fontFamily: 'var(--font-barlow)' }}>
              Leads calificados generados en 4 meses (Estudio jurídico B2B Santiago)
            </p>
          </div>
          <div>
            <p className="text-[#FF4500] text-3xl sm:text-4xl font-black mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
              20%
            </p>
            <p className="text-[#F5F1EA] text-sm sm:text-base" style={{ fontFamily: 'var(--font-barlow)' }}>
              Optimización en inversión publicitaria (Retail especializado)
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-6">
          {[
            {
              quote: 'Pasamos de recibir consultas descalificadas a tener una agenda llena de clientes reales. El sistema de automatización nos devolvió tiempo.',
              author: 'Matías Fernández',
              title: 'Socio en GDM Abogados',
            },
            {
              quote: 'Por fin sabemos qué producto deja margen real. El dashboard integrado de The Burn fue un cambio radical en nuestra toma de decisiones.',
              author: 'Carla Ibáñez',
              title: 'Gerente Comercial en Droguería Central',
            },
            {
              quote: 'La integración de nuestro CRM con WhatsApp ha duplicado nuestra tasa de conversión en las primeras 48 horas de contacto.',
              author: 'Ricardo Soto',
              title: 'Director de Ventas en Valida Inmobiliaria',
            },
          ].map((testimonial, idx) => (
            <div key={idx} className="border-l-4 border-l-[#FF4500] pl-6 py-4">
              <p className="text-[#F5F1EA] mb-3 italic" style={{ fontFamily: 'var(--font-barlow)' }}>
                "{testimonial.quote}"
              </p>
              <p className="text-[#B98B2E] font-bold text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
                {testimonial.author}
              </p>
              <p className="text-[#B98B2E] text-xs" style={{ fontFamily: 'var(--font-barlow)' }}>
                {testimonial.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
