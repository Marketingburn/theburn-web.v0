'use client'

import { CalendarPlus, ExternalLink, Flame, MessageCircle, Video } from 'lucide-react'

const whatsappUrl = 'https://chat.whatsapp.com/KTXoSoTYBd97ZVLirlGM08'
const meetUrl = 'https://meet.google.com/utq-xxrz-sms'
const phoneNumbersUrl = 'https://tel.meet/utq-xxrz-sms?pin=3162577322148'

const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent('Taller Gratis The Burn: De Sell Out a Prioridades Comerciales')}&dates=20260908T200000%2F20260908T210000&ctz=America%2FSantiago&location=${encodeURIComponent(meetUrl)}&details=${encodeURIComponent(`Taller Gratis The Burn: “De Sell Out a Prioridades Comerciales”.\n\nMartes, 8 de septiembre de 2026 · 20:00–21:00 hrs\nZona horaria: America/Santiago\n\nGoogle Meet: ${meetUrl}\nTeléfono (CL): +56 43 245 2070\nPIN: 316 257 732 2148#\nMás números: ${phoneNumbersUrl}`)}`

export function WebinarThankYou() {
  return (
    <main className="min-h-screen bg-[#F5F1EA] px-4 py-8 text-[#0A0A0A] sm:px-8 sm:py-12">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center gap-2 border-b border-black/10 pb-6">
          <Flame className="h-7 w-7 fill-[#FF4500] text-[#FF4500]" aria-hidden="true" />
          <span className="text-xl font-black tracking-tight" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>THE BURN</span>
        </header>

        <section className="py-14 sm:py-20">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FF4500]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Registro confirmado</p>
          <h1 className="mt-5 max-w-4xl text-balance text-[clamp(4rem,10vw,8rem)] font-black uppercase leading-[0.8] tracking-[-0.025em]" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
            Tu cupo está reservado.
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-[#6f6963] sm:text-xl" style={{ fontFamily: 'var(--font-barlow)' }}>
            Completa estos dos pasos para recibir novedades y tener el taller listo en tu calendario.
          </p>
        </section>

        <section aria-label="Próximos pasos" className="grid border border-black/10 bg-black/10 lg:grid-cols-2">
          <article className="bg-[#0A0A0A] p-7 text-white sm:p-10">
            <span className="text-5xl font-black text-[#FF4500]" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>01</span>
            <MessageCircle className="mt-8 h-7 w-7 text-[#FF4500]" aria-hidden="true" />
            <h2 className="mt-5 text-4xl font-black uppercase leading-none" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Únete a la comunidad</h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/65" style={{ fontFamily: 'var(--font-barlow)' }}>Entra al grupo de WhatsApp de The Burn para recibir recordatorios, recursos e información del taller.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FF4500] px-6 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#0A0A0A]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
              Entrar al grupo <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>

          <article className="bg-white p-7 sm:p-10">
            <span className="text-5xl font-black text-[#FF4500]" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>02</span>
            <CalendarPlus className="mt-8 h-7 w-7 text-[#FF4500]" aria-hidden="true" />
            <h2 className="mt-5 text-4xl font-black uppercase leading-none" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Reserva la fecha</h2>
            <p className="mt-4 max-w-md leading-relaxed text-[#6f6963]" style={{ fontFamily: 'var(--font-barlow)' }}>Añade el evento preconfigurado a Google Calendar para no perderte la sesión.</p>
            <a href={calendarUrl} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FF4500] px-6 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#0A0A0A]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
              Añadir al calendario <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </article>
        </section>

        <section className="mt-8 border-y border-black/10 py-8 sm:py-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FF4500]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Taller gratuito</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-black uppercase leading-tight sm:text-5xl" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>De Sell Out a Prioridades Comerciales</h2>
            </div>
            <dl className="grid shrink-0 gap-5 text-sm sm:min-w-72">
              <div><dt className="text-xs uppercase tracking-widest text-[#938b82]">Fecha</dt><dd className="mt-1 font-bold">Martes, 8 de septiembre de 2026</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-[#938b82]">Horario</dt><dd className="mt-1 font-bold">20:00–21:00 hrs · America/Santiago</dd></div>
              <div><dt className="text-xs uppercase tracking-widest text-[#938b82]">Modalidad</dt><dd className="mt-1 font-bold">Online por Google Meet</dd></div>
            </dl>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={meetUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/15 px-5 text-xs font-bold uppercase tracking-widest transition hover:border-[#FF4500] hover:text-[#FF4500]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}><Video className="h-4 w-4" aria-hidden="true" /> Abrir Google Meet</a>
            <a href={phoneNumbersUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-2 rounded-full border border-black/15 px-5 text-xs font-bold uppercase tracking-widest transition hover:border-[#FF4500] hover:text-[#FF4500]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Ver teléfonos</a>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-[#6f6963]" style={{ fontFamily: 'var(--font-barlow)' }}>También puedes marcar <a href="tel:+56432452070" className="font-bold text-[#0A0A0A] underline decoration-[#FF4500] underline-offset-4">+56 43 245 2070</a> e ingresar el PIN 316 257 732 2148#.</p>
        </section>
      </div>
    </main>
  )
}
