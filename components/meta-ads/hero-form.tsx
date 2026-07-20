'use client'

import { CampaignForm } from './campaign-form'

export function HeroForm() {
  return (
    <section className="pt-24 pb-16 sm:pt-32 sm:pb-24 px-4 sm:px-6 bg-white">
      <div className="max-w-2xl mx-auto">
        {/* Eyebrow */}
        <div
          className="inline-block px-3 py-1.5 bg-[#F1E9DD] rounded-full text-[#D6862C] text-xs font-bold tracking-wider mb-6"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          ✓ Diagnóstico gratuito — Cupos limitados
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-5xl font-black uppercase leading-tight text-[#0A0A0A] mb-6"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Buscamos 3 dueños de empresa que quieran{' '}
          <span className="text-[#FF4500]">ordenar y escalar</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg text-[#938B82] mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-barlow)' }}>
          30 minutos de diagnóstico gratis. Revisamos tu situación comercial, operativa y de marketing. Entiendes qué está
          frenando tu crecimiento. Sin compromiso.
        </p>

        {/* Form */}
        <div className="bg-[#F1E9DD] rounded-2xl p-6 sm:p-8 mb-6">
          <CampaignForm />
        </div>

        {/* Badge */}
        <div className="text-center">
          <div
            className="inline-block px-4 py-2 bg-[#FF4500] text-white rounded-full text-sm font-bold"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            3 cupos disponibles este mes
          </div>
        </div>
      </div>
    </section>
  )
}
