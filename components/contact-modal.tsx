'use client';

import { useContactModal } from '@/app/contact-context';
import { ContactForm } from './contact-form';
import { X } from 'lucide-react';

export function ContactModal() {
  const { isOpen, closeContactModal } = useContactModal();

  console.log("[v0] ContactModal isOpen:", isOpen)

  if (!isOpen) return null;

  console.log("[v0] ContactModal rendering")

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div
        className="bg-[#F5F1EA] rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close button */}
        <button
          onClick={closeContactModal}
          className="absolute top-4 right-4 p-2 hover:bg-white/50 rounded-lg transition-colors z-10"
        >
          <X className="w-5 h-5 text-[#0A0A0A]" />
        </button>

        <div className="p-8">
          {/* Header */}
          <div className="mb-8">
            <p
              className="text-[#938B82] text-xs uppercase tracking-widest mb-2"
              style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
            >
              ■ Agendar diagnóstico
            </p>
            <h2
              className="text-3xl font-black uppercase text-[#0A0A0A]"
              style={{ fontFamily: 'var(--font-barlow-condensed)' }}
            >
              Cuéntanos Tu Caso
            </h2>
          </div>

          {/* Form */}
          <ContactForm isModal={true} onSuccess={closeContactModal} />
        </div>
      </div>
    </div>
  );
}
