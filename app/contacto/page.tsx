import { ContactForm } from '@/components/contact-form';

export const metadata = {
  title: 'Contacto | The Burn',
  description: 'Contáctanos para agendar tu diagnóstico comercial gratuito. Consultoría de marketing digital y automatización en Santiago, Chile.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] overflow-hidden pt-24 pb-16">
      {/* Hero section */}
      <section className="max-w-4xl mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#E8E3DA] text-[#938B82] text-sm mb-8" style={{ fontFamily: 'var(--font-jetbrains-mono)', letterSpacing: '0.05em' }}>
            <span className="w-2 h-2 bg-[#FF4500] rounded-full mr-2 animate-pulse"></span>
            Contacto
          </div>

          <h1
            className="text-4xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance mb-6"
            style={{ fontFamily: 'var(--font-barlow-condensed)', lineHeight: '0.9' }}
          >
            Conversemos sobre tu <span className="text-[#FF4500]">negocio</span>
          </h1>

          <p className="text-lg text-[#938B82] max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-barlow)' }}>
            Completa el formulario y te contactaremos en menos de 24 horas hábiles para agendar tu diagnóstico comercial gratuito.
          </p>
        </div>

        {/* Form card */}
        <div className="bg-white rounded-2xl border border-[#E8E3DA] p-10 shadow-lg">
          <ContactForm />
        </div>
      </section>

      {/* Contact info section */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="bg-[#0A0A0A] rounded-2xl p-8 md:p-12 text-center">
          <p className="text-[#938B82] text-sm uppercase tracking-widest mb-4" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
            ¿Urgencia? Contacta directamente
          </p>
          <div className="space-y-3">
            <a
              href="https://wa.me/56936504772?text=Hola%20The%20Burn%2C%20quiero%20agendar%20mi%20diagnóstico%20comercial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-[#FF4500] font-bold text-lg hover:text-[#FFFFFF] hover:bg-[#FF4500] px-6 py-2 rounded-full transition-all"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              WhatsApp: +56 9 3650 4772 →
            </a>
            <p className="text-[#938B82] text-sm" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
              marketing@theburn.cl · Santiago, Chile
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
