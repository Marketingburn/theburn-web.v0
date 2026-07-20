'use client'

import { CampaignForm } from './campaign-form'

export function CTAFinalSection() {
  return (
    <section
      data-cta-final
      className="py-16 sm:py-24 px-4 sm:px-6 bg-white"
    >
      <div className="max-w-2xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#0A0A0A] mb-12 text-center" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          ¿Listo para crecer?
        </h2>

        {/* Form Container */}
        <div className="bg-[#F1E9DD] rounded-2xl p-6 sm:p-8 mb-8">
          <CampaignForm />
        </div>

        {/* Badge */}
        <div className="text-center mb-8">
          <div
            className="inline-block px-4 py-2 bg-[#FF4500] text-white rounded-full text-sm font-bold"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            3 cupos disponibles
          </div>
        </div>

        {/* Tagline Section */}
        <div className="bg-[#FF4500] rounded-xl p-8 text-center mt-12">
          <p
            className="text-white text-2xl font-black uppercase leading-tight"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}
          >
            Quemamos los barcos.
            <br />
            Avanzamos sin vuelta atrás.
          </p>
        </div>

        {/* Footer note */}
        <p className="text-center text-[#938B82] text-xs mt-8" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
          THE BURN · CONSULTORA COMERCIAL B2B · SANTIAGO, CHILE
        </p>
      </div>
    </section>
  )
}
