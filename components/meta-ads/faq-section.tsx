'use client'

import { useState } from 'react'

export function FAQSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

  const faqs = [
    {
      q: '¿Es realmente gratis?',
      a: 'Sí, sin costo ni tarjeta de crédito.',
    },
    {
      q: '¿Qué pasa si no seguimos trabajando juntos después?',
      a: 'Te llevas el plan de acción priorizado igual.',
    },
    {
      q: '¿Cuánto dura la reunión?',
      a: '30 minutos por videollamada.',
    },
    {
      q: '¿Para qué tipo de empresa es esto?',
      a: 'Empresas B2B de 15 a 80 personas con inversión activa en marketing.',
    },
    {
      q: '¿Qué incluye el funnel de venta si contrato la implementación?',
      a: 'CRM conectado, seguimiento automático de leads, WhatsApp, email y scripts de venta.',
    },
  ]

  return (
    <section className="bg-[#F5F1EA] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2
          className="font-black uppercase text-4xl sm:text-5xl text-[#0A0A0A] mb-12 text-center"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border-b border-[#D6862C]">
              <button
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                className="w-full py-4 flex items-between justify-between hover:bg-[#F1E9DD] transition-colors"
              >
                <p className="text-left font-bold text-[#0A0A0A]" style={{ fontFamily: 'var(--font-barlow)' }}>
                  {faq.q}
                </p>
                <span className="text-[#FF4500] font-black ml-4 flex-shrink-0">
                  {expanded === idx ? '−' : '+'}
                </span>
              </button>
              {expanded === idx && (
                <div className="pb-4">
                  <p className="text-[#D6862C]" style={{ fontFamily: 'var(--font-barlow)' }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
