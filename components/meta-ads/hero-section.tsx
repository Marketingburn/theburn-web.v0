'use client'

import { useState } from 'react'
import { CampaignForm } from './campaign-form'

export function HeroSection() {
  return (
    <section className="bg-[#F5F1EA] pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Headline - Burn reveal animation */}
        <h1
          className="font-black uppercase text-4xl sm:text-5xl lg:text-6xl text-[#0A0A0A] mb-6 leading-tight text-center burn-reveal"
          style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '-0.02em' }}
        >
          Buscamos 3 dueños de empresas que quieran ordenar y escalar
        </h1>

        {/* Subtitle */}
        <p
          className="text-center text-lg sm:text-xl text-[#D6862C] font-bold mb-10"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          30 minutos. Sin costo. Sales con un plan priorizado para tu negocio.
        </p>

        {/* Form */}
        <div className="bg-white border-t-[12px] border-t-[#FF4500] p-8 sm:p-10 max-w-2xl mx-auto">
          <CampaignForm variant="hero" />
        </div>
      </div>
    </section>
  )
}
