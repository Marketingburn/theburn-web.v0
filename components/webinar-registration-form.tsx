'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Check, Loader2 } from 'lucide-react'

const inputClass = 'w-full min-h-12 rounded-2xl border border-black/10 bg-[#F5F1EA] px-4 py-3 text-sm text-[#0A0A0A] placeholder:text-[#938B82] outline-none transition focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/10'
const darkInputClass = 'w-full min-h-12 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/20'

export function WebinarRegistrationForm({ dark = false }: { dark?: boolean }) {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ nombre: '', email: '', empresa: '', cargo: '', whatsapp: '', equipo: '', clientes: '', sku: '', informacion: '', desafio: '' })
  const update = (name: string, value: string) => { setForm((current) => ({ ...current, [name]: value })); setError('') }
  const next = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!form.nombre.trim() || !form.email.trim() || !form.empresa.trim() || !form.cargo.trim() || !form.whatsapp.trim()) {
      setError('Completa todos los campos para continuar.')
      return
    }
    setError('')
    setStep(2)
  }
  const submit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); setLoading(true); setError('')
    try {
      const response = await fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ...form, comentarios: `Webinar: equipo ${form.equipo}; clientes ${form.clientes}; SKU ${form.sku}; información: ${form.informacion}; desafío: ${form.desafio}`, necesidad: 'Taller Ejecutivo - De Sell Out a Prioridades Comerciales' }) })
      if (!response.ok) throw new Error('request failed')
      setSent(true)
      setTimeout(() => router.push('/gracias'), 1300)
    } catch { setError('No pudimos enviar tu solicitud. Intenta nuevamente.') } finally { setLoading(false) }
  }
  if (sent) return <div className={`rounded-[2rem] border p-8 text-center sm:p-12 ${dark ? 'border-white/10 bg-white/5' : 'border-black/10 bg-white'}`}><div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FF4500] text-white"><Check /></div><h3 className={`mt-6 text-4xl font-black uppercase ${dark ? 'text-white' : 'text-[#0A0A0A]'}`} style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Cupo solicitado.</h3><p className={`mt-3 ${dark ? 'text-white/65' : 'text-[#6f6963]'}`} style={{ fontFamily: 'var(--font-barlow)' }}>Te contactaremos para confirmar tu participación.</p></div>
  const input = dark ? darkInputClass : inputClass
  return <form onSubmit={step === 1 ? next : submit} className={`rounded-[2rem] border p-6 shadow-[0_20px_60px_rgba(10,10,10,0.08)] sm:p-8 ${dark ? 'border-white/10 bg-[#151515]' : 'border-black/10 bg-white'}`} style={{ fontFamily: 'var(--font-barlow)' }}>
    <div className="mb-7 flex items-start justify-between gap-4"><div><p className={`text-[10px] font-bold uppercase tracking-widest ${dark ? 'text-[#FF4500]' : 'text-[#FF4500]'}`} style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Registro del taller</p><h3 className={`mt-2 text-4xl font-black uppercase leading-[0.85] ${dark ? 'text-white' : 'text-[#0A0A0A]'}`} style={{ fontFamily: 'var(--font-barlow-condensed)' }}>Reserva tu cupo</h3></div><span className={`rounded-full px-3 py-2 text-[10px] font-bold uppercase tracking-widest ${dark ? 'bg-white/10 text-white/60' : 'bg-[#F5F1EA] text-[#6f6963]'}`} style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Paso {step} de 2</span></div>
    {step === 1 ? <><p className={`mb-6 text-sm ${dark ? 'text-white/60' : 'text-[#6f6963]'}`}>Completa tus datos para recibir el acceso al taller.</p><div className="grid gap-3 sm:grid-cols-2"><input className={input} required placeholder="Nombre y apellido *" value={form.nombre} onChange={(e) => update('nombre', e.target.value)} /><input className={input} required type="email" placeholder="Email corporativo *" value={form.email} onChange={(e) => update('email', e.target.value)} /><input className={input} required placeholder="Empresa *" value={form.empresa} onChange={(e) => update('empresa', e.target.value)} /><input className={input} required placeholder="Cargo *" value={form.cargo} onChange={(e) => update('cargo', e.target.value)} /><input className={input} required type="tel" placeholder="Teléfono *" value={form.whatsapp} onChange={(e) => update('whatsapp', e.target.value)} /></div><button type="submit" className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-[#FF4500] px-5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-[#0A0A0A]" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Reservar mi cupo <span>→</span></button><p className={`mt-4 text-center text-[10px] uppercase tracking-widest ${dark ? 'text-white/45' : 'text-[#938B82]'}`} style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>3 septiembre · 20:00 hrs · Online · 45 minutos</p></> : <><div className="grid gap-3 sm:grid-cols-2"><select className={input} required value={form.equipo} onChange={(e) => update('equipo', e.target.value)}><option value="">Personas en equipo comercial</option>{['Solo yo', '2–4', '5–10', '11–20', '+20'].map((x) => <option key={x}>{x}</option>)}</select><select className={input} required value={form.clientes} onChange={(e) => update('clientes', e.target.value)}><option value="">Clientes activos aprox.</option>{['Menos de 20', '20–50', '51–100', '101–500', '+500'].map((x) => <option key={x}>{x}</option>)}</select><select className={input} required value={form.sku} onChange={(e) => update('sku', e.target.value)}><option value="">Productos / SKU</option>{['Menos de 20', '20–100', '101–500', '501–2.000', '+2.000'].map((x) => <option key={x}>{x}</option>)}</select><select className={input} required value={form.informacion} onChange={(e) => update('informacion', e.target.value)}><option value="">Información actual</option>{['Excel', 'ERP', 'CRM', 'Power BI', 'Varias fuentes'].map((x) => <option key={x}>{x}</option>)}</select><textarea className={`${input} sm:col-span-2`} required rows={3} placeholder="¿Cuál es tu principal desafío comercial? *" value={form.desafio} onChange={(e) => update('desafio', e.target.value)} /></div><div className="mt-5 flex gap-3"><button type="button" onClick={() => setStep(1)} className={`min-h-12 rounded-full border px-5 text-xs font-bold uppercase tracking-widest ${dark ? 'border-white/20 text-white' : 'border-black/15 text-[#0A0A0A]'}`} style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>Atrás</button><button disabled={loading} type="submit" className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#FF4500] px-5 text-xs font-bold uppercase tracking-widest text-white transition hover:bg-white hover:text-[#0A0A0A] disabled:opacity-60" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>{loading ? <><Loader2 className="h-4 w-4 animate-spin" /> Enviando</> : <>Reservar mi cupo <span>→</span></>}</button></div></>}
    {error && <p className="mt-4 text-sm font-bold text-[#FF4500]" role="alert">{error}</p>}
  </form>
}
