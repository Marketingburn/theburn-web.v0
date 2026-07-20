'use client'

import { useState } from 'react'
import { Mail, Phone, Building2, User, Loader2 } from 'lucide-react'

interface CampaignFormProps {
  onSuccess?: () => void
}

export function CampaignForm({ onSuccess }: CampaignFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    whatsapp: '',
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    // Validación básica
    if (!formData.nombre.trim() || !formData.email.trim() || !formData.whatsapp.trim()) {
      setError('Por favor completa nombre, email y WhatsApp')
      return
    }

    setLoading(true)

    try {
      // TODO: Conectar a API real cuando esté lista
      // Por ahora solo simulamos
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log('[v0] Form submitted:', {
        ...formData,
        source: 'meta-ads-campana',
        timestamp: new Date().toISOString(),
      })

      setSuccess(true)
      setFormData({ nombre: '', empresa: '', email: '', whatsapp: '' })

      if (onSuccess) {
        setTimeout(onSuccess, 2000)
      }
    } catch (err) {
      setError('Hubo un error. Intenta de nuevo.')
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="mb-4 text-5xl">✓</div>
        <h3 className="text-xl font-bold text-[#0A0A0A] mb-2" style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
          ¡Listo!
        </h3>
        <p className="text-[#938B82] text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
          Te escribimos por WhatsApp en menos de 24 horas para coordinar tu diagnóstico gratuito.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      {/* Nombre */}
      <div className="relative">
        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#938B82]" size={18} />
        <input
          type="text"
          name="nombre"
          placeholder="Tu nombre"
          value={formData.nombre}
          onChange={handleChange}
          className="w-full bg-white border-2 border-[#E8E3DA] rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#0A0A0A] placeholder-[#938B82] focus:outline-none focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/20 transition-all duration-200"
          style={{ fontFamily: 'var(--font-barlow)' }}
          required
        />
      </div>

      {/* Empresa */}
      <div className="relative">
        <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 text-[#938B82]" size={18} />
        <input
          type="text"
          name="empresa"
          placeholder="Tu empresa (opcional)"
          value={formData.empresa}
          onChange={handleChange}
          className="w-full bg-white border-2 border-[#E8E3DA] rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#0A0A0A] placeholder-[#938B82] focus:outline-none focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/20 transition-all duration-200"
          style={{ fontFamily: 'var(--font-barlow)' }}
        />
      </div>

      {/* Email */}
      <div className="relative">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#938B82]" size={18} />
        <input
          type="email"
          name="email"
          placeholder="tu@email.com"
          value={formData.email}
          onChange={handleChange}
          className="w-full bg-white border-2 border-[#E8E3DA] rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#0A0A0A] placeholder-[#938B82] focus:outline-none focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/20 transition-all duration-200"
          style={{ fontFamily: 'var(--font-barlow)' }}
          required
        />
      </div>

      {/* WhatsApp */}
      <div className="relative">
        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#938B82]" size={18} />
        <input
          type="tel"
          name="whatsapp"
          placeholder="+56 9 XXXX XXXX"
          value={formData.whatsapp}
          onChange={handleChange}
          className="w-full bg-white border-2 border-[#E8E3DA] rounded-lg pl-10 pr-4 py-2.5 text-sm text-[#0A0A0A] placeholder-[#938B82] focus:outline-none focus:border-[#FF4500] focus:ring-2 focus:ring-[#FF4500]/20 transition-all duration-200"
          style={{ fontFamily: 'var(--font-barlow)' }}
          required
        />
      </div>

      {/* Error message */}
      {error && <div className="text-red-600 text-xs p-2 bg-red-50 rounded-lg">{error}</div>}

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#FF4500] hover:bg-[#E63E00] text-white font-bold py-3 px-4 rounded-lg text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 mt-4"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {loading ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Reservando cupo...
          </>
        ) : (
          'Quiero mi diagnóstico gratis'
        )}
      </button>
    </form>
  )
}
