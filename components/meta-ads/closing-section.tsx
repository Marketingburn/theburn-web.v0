'use client'

import { CampaignForm } from './campaign-form'

export function ClosingSection() {
  return (
    <section className="bg-[#0A0A0A] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Manifesto */}
        <h2
          className="font-black uppercase text-4xl sm:text-5xl lg:text-6xl text-white text-center mb-16 leading-tight"
          style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '-0.02em' }}
        >
          Quemamos los barcos. Avanzamos sin vuelta atrás.
        </h2>

        {/* Final Form */}
        <div className="bg-white border-t-[12px] border-t-[#FF4500] p-8 sm:p-10 max-w-2xl mx-auto mb-8">
          <CampaignForm variant="closing" />
        </div>

        {/* Badge */}
        <div className="text-center">
          <p
            className="text-[#FF4500] font-bold text-sm uppercase tracking-widest"
            style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            Solo 3 cupos este mes
          </p>
        </div>
      </div>
    </section>
  )
}
