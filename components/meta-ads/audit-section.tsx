'use client'

export function AuditSection() {
  return (
    <section className="bg-[#0A0A0A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-black uppercase text-4xl sm:text-5xl text-[#F5F1EA] mb-12 text-center"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Lo que auditamos
        </h2>

        {/* Bitácora List */}
        <div className="space-y-6 mb-12">
          {[
            'BITÁCORA 01 // Consultoría marketing y comercial',
            'BITÁCORA 02 // Power BI y datos (dashboards de ventas, costos y márgenes conectados a fuentes reales)',
            'BITÁCORA 03 // Publicidad digital (Meta, Google, LinkedIn)',
            'BITÁCORA 04 // Funnel de venta y automatización (CRM, WhatsApp/Email automático, scripts de objeciones)',
            'BITÁCORA 05 // Mejora de procesos internos',
          ].map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <span
                className="text-[#B98B2E] font-mono text-sm font-bold flex-shrink-0"
                style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
              >
                {String(idx + 1).padStart(2, '0')}
              </span>
              <p className="text-[#F5F1EA]" style={{ fontFamily: 'var(--font-barlow)' }}>
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* Highlight Case */}
        <div className="bg-[#FF4500] p-8 sm:p-10 mt-12">
          <p className="text-[#0A0A0A] font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>
            <span className="font-black" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
              Un retail especializado
            </span>
            {' '}que no sabía qué producto realmente dejaba margen hoy tiene un dashboard con ventas, stock y campañas conectados en un solo lugar.
          </p>
        </div>
      </div>
    </section>
  )
}
