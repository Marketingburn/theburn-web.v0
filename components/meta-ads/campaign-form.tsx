'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface CampaignFormProps {
  variant?: 'hero' | 'closing'
}

export function CampaignForm({ variant = 'hero' }: CampaignFormProps) {
  const router = useRouter()
  const [formData, setFormData] = useState({
    nombre: '',
    whatsapp: '',
    email: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Validation
    if (!formData.nombre.trim() || !formData.whatsapp.trim() || !formData.email.trim()) {
      setError('Todos los campos son requeridos')
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: formData.nombre,
          whatsapp: formData.whatsapp,
          email: formData.email,
          necesidad: 'Diagnóstico Gratis - Meta Ads',
        }),
      })

      if (!response.ok) throw new Error('Error al enviar')

      setIsSuccess(true)
      setTimeout(() => {
        router.push('/gracias')
      }, 1500)
    } catch (err) {
      setError('Error al enviar el formulario. Intenta de nuevo.')
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-6">
        <p className="text-[#0A0A0A] font-black text-lg mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          ✓ Listo
        </p>
        <p className="text-[#D6862C]" style={{ fontFamily: 'var(--font-barlow)' }}>
          Te escribimos por WhatsApp para coordinar tu diagnóstico.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} id={variant === 'closing' ? 'closing-form' : undefined} className="space-y-4">
      {/* Nombre */}
      <div>
        <label htmlFor="nombre" className="block text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] mb-2" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
          Nombre
        </label>
        <input
          id="nombre"
          name="nombre"
          type="text"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre completo"
          className="w-full px-4 py-2.5 bg-[#F5F1EA] border-b-2 border-[#D6862C] text-[#0A0A0A] placeholder-[#B98B2E] focus:outline-none focus:border-[#FF4500]"
          style={{ fontFamily: 'var(--font-barlow)' }}
        />
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="whatsapp" className="block text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] mb-2" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
          WhatsApp
        </label>
        <input
          id="whatsapp"
          name="whatsapp"
          type="tel"
          value={formData.whatsapp}
          onChange={handleChange}
          placeholder="+56 9 XXXX XXXX"
          className="w-full px-4 py-2.5 bg-[#F5F1EA] border-b-2 border-[#D6862C] text-[#0A0A0A] placeholder-[#B98B2E] focus:outline-none focus:border-[#FF4500]"
          style={{ fontFamily: 'var(--font-barlow)' }}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-[10px] font-black uppercase tracking-widest text-[#0A0A0A] mb-2" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@empresa.cl"
          className="w-full px-4 py-2.5 bg-[#F5F1EA] border-b-2 border-[#D6862C] text-[#0A0A0A] placeholder-[#B98B2E] focus:outline-none focus:border-[#FF4500]"
          style={{ fontFamily: 'var(--font-barlow)' }}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-[#D6862C] text-sm font-bold" style={{ fontFamily: 'var(--font-barlow)' }}>
          {error}
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#FF4500] hover:bg-[#D6862C] text-white font-black py-3 px-4 uppercase tracking-widest transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {isSubmitting ? 'Enviando...' : 'Quiero mi diagnóstico gratis'}
      </button>
    </form>
  )
}
