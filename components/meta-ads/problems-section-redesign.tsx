'use client'

import { BurnLine } from './burn-line'

export function ProblemsSectionRedesign() {
  return (
    <section className="bg-[#F5F1EA] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Headline */}
        <h2
          className="font-black uppercase text-4xl sm:text-5xl text-[#0A0A0A] mb-12 text-center"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          El costo de la improvisación
        </h2>

        {/* Problem List */}
        <div className="space-y-8">
          {[
            'No sabes qué campaña realmente trae clientes de alto valor.',
            'Pensaste que contratando personal full-time se ordenaría solo.',
            'Sigues decidiendo a ojo, sin datos duros.',
            'Cada plataforma (Meta, CRM, Ventas) cuenta una historia distinta.',
          ].map((problem, idx) => (
            <div key={idx}>
              <p className="text-lg sm:text-xl text-[#D6862C] font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>
                {problem}
              </p>
              {idx < 3 && <BurnLine />}
            </div>
          ))}
        </div>

        {/* Statement */}
        <div className="mt-12 p-8 bg-[#0A0A0A]">
          <p
            className="text-[#FF4500] font-black text-2xl sm:text-3xl text-center"
            style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '-0.02em' }}
          >
            Sin un sistema, más gente no resuelve el problema.
          </p>
        </div>
      </div>
    </section>
  )
}
