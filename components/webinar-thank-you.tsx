'use client'

import { CalendarPlus, Flame, MessageCircle } from 'lucide-react'

const whatsappUrl = 'https://chat.whatsapp.com/KTXoSoTYBd97ZVLirlGM08'
const meetUrl = 'https://meet.google.com/utq-xxrz-sms'
const phoneNumbersUrl = 'https://tel.meet/utq-xxrz-sms?pin=3162577322148'

const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Taller Gratis The Burn: De Sell Out a Prioridades Comerciales')}&dates=20260908T200000%2F20260908T210000&ctz=America%2FSantiago&location=${encodeURIComponent(meetUrl)}&details=${encodeURIComponent(`Taller Gratis The Burn: “De Sell Out a Prioridades Comerciales”.\n\nMartes, 8 de septiembre de 2026 · 20:00–21:00 hrs\nZona horaria: America/Santiago\n\nGoogle Meet: ${meetUrl}\nTeléfono (CL): +56 43 245 2070\nPIN: 316 257 732 2148#\nMás números: ${phoneNumbersUrl}`)}`

export function WebinarThankYou() {
  return (
    <main className="flex min-h-screen flex-col bg-[#F5F1EA] px-5 py-8 text-[#0A0A0A]">
      <div className="mx-auto flex w-full max-w-md flex-1 flex-col">
        <header className="flex items-center gap-2">
          <Flame className="h-6 w-6 fill-[#FF4500] text-[#FF4500]" aria-hidden="true" />
          <span className="text-lg font-black tracking-tight" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>THE BURN</span>
        </header>

        <div className="flex flex-1 flex-col justify-center py-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF4500]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Cupo reservado</p>
          <h1 className="mt-4 text-balance text-[clamp(2.75rem,11vw,4rem)] font-black uppercase leading-[0.85] tracking-[-0.02em]" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            Falta un paso.
          </h1>
          <p className="mt-5 text-pretty text-base leading-relaxed text-[#6f6963]" style={{ fontFamily: 'var(--font-barlow)' }}>
            Entra al grupo de WhatsApp de The Burn. Ahí recibes el acceso al taller, los recordatorios y toda la información del evento.
          </p>

          {/* Primary action: WhatsApp community */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-[#FF4500] px-6 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-[#0A0A0A]"
            style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            <MessageCircle className="h-5 w-5" aria-hidden="true" /> Entrar a la comunidad
          </a>

          {/* Secondary action: calendar */}
          <a
            href={calendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-black/15 px-6 text-xs font-bold uppercase tracking-widest text-[#0A0A0A] transition hover:border-[#FF4500] hover:text-[#FF4500]"
            style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
          >
            <CalendarPlus className="h-4 w-4" aria-hidden="true" /> Agendar en mi calendario
          </a>

          {/* Event detail, minimal */}
          <dl className="mt-10 grid grid-cols-3 gap-3 border-t border-black/10 pt-6 text-center">
            <div><dt className="text-[9px] uppercase tracking-widest text-[#938b82]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Fecha</dt><dd className="mt-1 text-sm font-bold" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>08 SEPT</dd></div>
            <div><dt className="text-[9px] uppercase tracking-widest text-[#938b82]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Hora</dt><dd className="mt-1 text-sm font-bold" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>20:00 HRS</dd></div>
            <div><dt className="text-[9px] uppercase tracking-widest text-[#938b82]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Modo</dt><dd className="mt-1 text-sm font-bold" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>ONLINE</dd></div>
          </dl>
        </div>

        <footer className="text-center text-[10px] uppercase tracking-widest text-[#938b82]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
          Taller gratuito · The Burn
        </footer>
      </div>
    </main>
  )
}
