'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Loader2 } from 'lucide-react'

const inputClass = 'w-full min-h-12 rounded-2xl border border-black/10 bg-[#F5F1EA] px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#938B82] outline-none transition focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/10'
const darkInputClass = 'w-full min-h-12 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/20'

export function WebinarRegistrationForm({ dark = false }: { dark?: boolean }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', whatsapp: '', productos: '', informacion: '' })
  const update = (name: string, value: string) => { setForm((current) => ({ ...current, [name]: value })); setError('') }

  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.nombre.trim() || !form.email.trim() || !form.empresa.trim() || !form.whatsapp.trim()) {
      setError('Completa los campos obligatorios para continuar.')
      return
    }
    setLoading(true); setError('')
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.nombre,
          email: form.email,
          empresa: form.empresa,
          whatsapp: form.whatsapp,
          comentarios: `Webinar · Cantidad de productos: ${form.productos || 'No indica'} · Qué quiere saber: ${form.informacion || 'No indica'}`,
          necesidad: 'Taller Ejecutivo - De Sell Out a Prioridades Comerciales',
        }),
      })
      if (!response.ok) throw new Error('request failed')
      setSent(true)
      router.push('/webinar/gracias')
    } catch { setError('No pudimos enviar tu solicitud. Intenta nuevamente.') } finally { setLoading(false) }
  }

  const input = dark ? darkInputClass : inputClass

  if (sent) return (
    <div className={`rounded-[2rem] border p-8 text-center sm:p-12 ${dark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white'}`}>
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FF4500] text-white"><Check /></div>
      <h3 className={`mt-6 text-4xl font-black uppercase ${dark ? 'text-white' : 'text-[#0A0A0A]'}`} style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Cupo solicitado.</h3>
      <p className={`mt-3 ${dark ? 'text-white/65' : 'text-[#6f6963]'}`} style={{ fontFamily: 'var(--font-barlow)' }}>Te llevamos a los siguientes pasos.</p>
    </div>
  )

  return (
    <form onSubmit={submit} className={`rounded-[2rem] border p-6 shadow-[0_20px_60px_rgba(10,10,10,0.08)] sm:p-8 ${dark ? 'border-white/10 bg-[#151515]' : 'border-black/10 bg-white'}`} style={{ fontFamily: 'var(--font-barlow)' }}>
      <div className="mb-7">
        <p className="text-[10px] font-bold uppercase tracking-widest text-[#FF4500]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Registro del taller</p>
        <h3 className={`mt-2 text-4xl font-black uppercase leading-[0.85] ${dark ? 'text-white' : 'text-[#0A0A0A]'}`} style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Reserva tu cupo</h3>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        <input className={input} required placeholder="Nombre y apellido *" value={form.nombre} onChange={(e) => update('nombre', e.target.value)} />
        <input className={input} required type="email" placeholder="Email corporativo *" value={form.email} onChange={(e) => update('email', e.target.value)} />
        <input className={input} required placeholder="Empresa *" value={form.empresa} onChange={(e) => update('empresa', e.target.value)} />
        <input className={input} required type="tel" placeholder="WhatsApp *" value={form.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} />
        <select className={`${input} sm:col-span-2`} value={form.productos} onChange={(e) => update('productos', e.target.value)}>
          <option value="">Cantidad de productos (SKU)</option>
          {['Menos de 50', '50–200', '201–800', '801–2.000', '+2.000'].map((x) => <option key={x}>{x}</option>)}
        </select>
        <textarea className={`${input} sm:col-span-2 min-h-24 resize-none`} placeholder="¿Qué te gustaría resolver o saber en el taller?" value={form.informacion} onChange={(e) => update('informacion', e.target.value)} />
      </div>
      <button type="submit" disabled={loading} className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#FF4500] px-5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#0A0A0A] disabled:opacity-60" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
        {loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Enviando…</> : <>Reservar mi cupo <span>→</span></>}
      </button>
      <p className={`mt-4 text-center text-[10px] uppercase tracking-widest ${dark ? 'text-white/45' : 'text-[#938B82]'}`} style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Martes 8 de septiembre · 20:00 hrs · Online</p>
      {error && <p className="mt-4 text-sm font-bold text-[#FF4500]" role="alert">{error}</p>}
    </form>
  )
}
