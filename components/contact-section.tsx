'use client';

import { ContactForm } from './contact-form';

interface ContactSectionProps {
  defaultNecesidad?: string;
}

export function ContactSection({ defaultNecesidad }: ContactSectionProps) {
  return (
    <section id="contacto" className="bg-[#0A0A0A] py-24 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Eyebrow */}
        <p className="text-[#FF4500] text-xs uppercase tracking-widest mb-4"
           style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
          ■ HABLEMOS
        </p>
        {/* Título */}
        <h2 className="text-5xl font-black uppercase text-white mb-4"
            style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          Sin Humo.<br />Sin Jerga.
        </h2>
        {/* Subtítulo */}
        <p className="text-[#938B82] mb-12 text-lg"
           style={{ fontFamily: 'var(--font-barlow)' }}>
          Cuéntanos tu caso. Te respondemos en menos de 24 horas hábiles.
        </p>
        {/* Formulario — versión oscura */}
        <div className="[&_label]:text-white [&_input]:bg-white/5 [&_input]:border-white/10 [&_input]:text-white [&_input::placeholder]:text-white/30 [&_select]:bg-white/5 [&_select]:border-white/10 [&_select]:text-white [&_textarea]:bg-white/5 [&_textarea]:border-white/10 [&_textarea]:text-white [&_textarea::placeholder]:text-white/30 [&_option]:bg-[#1a1a1a] [&_option]:text-white">
          <ContactForm defaultNecesidad={defaultNecesidad} />
        </div>
      </div>
    </section>
  );
}
