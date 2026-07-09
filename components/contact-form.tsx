'use client';

import { useState } from 'react';
import { Check, User, Building2, Mail, Phone, Target, Wallet, MessageSquare, ChevronDown, Loader2 } from 'lucide-react';
import { pushEvent } from '@/lib/analytics';

interface ContactFormProps {
  isModal?: boolean;
  onSuccess?: () => void;
  defaultNecesidad?: string;
}

const inputBase =
  "w-full bg-[#F5F1EA] border-2 border-[#E8E3DA] rounded-xl pl-11 pr-4 py-3.5 text-sm text-[#0A0A0A] placeholder-[#938B82] focus:outline-none focus:border-[#FF4500] focus:bg-white focus:ring-4 focus:ring-[#FF4500]/10 transition-all duration-200";

const selectBase =
  "w-full bg-[#F5F1EA] border-2 border-[#E8E3DA] rounded-xl pl-11 pr-10 py-3.5 text-sm text-[#0A0A0A] focus:outline-none focus:border-[#FF4500] focus:bg-white focus:ring-4 focus:ring-[#FF4500]/10 transition-all duration-200 appearance-none cursor-pointer";

const labelBase =
  "flex items-center gap-1.5 text-[11px] font-bold text-[#0A0A0A] uppercase tracking-widest mb-2";

function FieldIcon({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none">
      <Icon className="w-4 h-4 text-[#0A0A0A]/40" />
    </div>
  );
}

export function ContactForm({ isModal = false, onSuccess, defaultNecesidad }: ContactFormProps) {
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    email: '',
    telefono: '',
    tipoEmpresa: '',
    necesidad: defaultNecesidad || '',
    presupuesto: '',
    mensaje: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error('Error en el servidor');

      pushEvent('form_submitted', {
        form_type: 'contact',
        necesidad: formData.necesidad,
      });

      setSuccess(true);
      setFormData({
        nombre: '', empresa: '', email: '', telefono: '',
        tipoEmpresa: '', necesidad: defaultNecesidad || '', presupuesto: '', mensaje: '',
      });

      if (onSuccess) setTimeout(() => onSuccess(), 2000);
    } catch (err) {
      setError('Hubo un error al enviar. Escríbenos directamente a marketing@theburn.cl');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-3xl p-10 text-center shadow-2xl border border-black/5">
        <div className="flex justify-center mb-6">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#FF4500]/15 rounded-full animate-ping" />
            <div className="relative w-16 h-16 bg-[#FF4500] rounded-full flex items-center justify-center">
              <Check className="w-8 h-8 text-white" strokeWidth={3} />
            </div>
          </div>
        </div>
        <h3
          className="text-3xl font-black uppercase text-[#0A0A0A] mb-3"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          ¡Mensaje enviado!
        </h3>
        <p className="text-[#938B82] mb-1 text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
          Te contactamos en menos de 24 horas hábiles.
        </p>
        <p className="text-[#938B82] mb-6 text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
          Revisa tu bandeja, te llegará una confirmación.
        </p>
        <div className="border-t border-[#E8E3DA] pt-5 mt-2">
          <p className="text-[#938B82] text-xs" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
            marketing@theburn.cl
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl border border-black/5 space-y-5"
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-8 h-8 rounded-lg bg-[#FF4500]/10 flex items-center justify-center">
          <MessageSquare className="w-4 h-4 text-[#FF4500]" />
        </div>
        <p
          className="text-[10px] font-bold text-[#938B82] uppercase tracking-widest"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          Cuéntanos tu caso
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="nombre" className={labelBase}>Nombre completo *</label>
          <div className="relative">
            <FieldIcon icon={User} />
            <input
              type="text" id="nombre" name="nombre" value={formData.nombre}
              onChange={handleChange} placeholder="Tu nombre" required
              className={inputBase}
            />
          </div>
        </div>
        <div>
          <label htmlFor="empresa" className={labelBase}>Empresa *</label>
          <div className="relative">
            <FieldIcon icon={Building2} />
            <input
              type="text" id="empresa" name="empresa" value={formData.empresa}
              onChange={handleChange} placeholder="Nombre de tu empresa" required
              className={inputBase}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={labelBase}>Email *</label>
          <div className="relative">
            <FieldIcon icon={Mail} />
            <input
              type="email" id="email" name="email" value={formData.email}
              onChange={handleChange} placeholder="tu@empresa.cl" required
              className={inputBase}
            />
          </div>
        </div>
        <div>
          <label htmlFor="telefono" className={labelBase}>Teléfono</label>
          <div className="relative">
            <FieldIcon icon={Phone} />
            <input
              type="tel" id="telefono" name="telefono" value={formData.telefono}
              onChange={handleChange} placeholder="+56 9 XXXX XXXX"
              className={inputBase}
            />
          </div>
        </div>
      </div>

      <div>
        <label htmlFor="tipoEmpresa" className={labelBase}>Tipo de empresa</label>
        <div className="relative">
          <FieldIcon icon={Building2} />
          <select
            id="tipoEmpresa" name="tipoEmpresa" value={formData.tipoEmpresa}
            onChange={handleChange} className={selectBase}
          >
            <option value="">Selecciona una opción</option>
            <option value="E-commerce / Tienda online">E-commerce / Tienda online</option>
            <option value="Servicios profesionales (abogados, consultoras)">Servicios profesionales (abogados, consultoras)</option>
            <option value="Distribuidora / Industrial">Distribuidora / Industrial</option>
            <option value="Retail / Comercio">Retail / Comercio</option>
            <option value="Inmobiliaria / Construcción">Inmobiliaria / Construcción</option>
            <option value="SaaS / Tecnología">SaaS / Tecnología</option>
            <option value="Otro">Otro</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8AFA4] pointer-events-none" />
        </div>
      </div>

      <div>
        <label htmlFor="necesidad" className={labelBase}>¿Qué necesitas? *</label>
        <div className="relative">
          <FieldIcon icon={Target} />
          <select
            id="necesidad" name="necesidad" value={formData.necesidad}
            onChange={handleChange} className={selectBase} required
          >
            <option value="">Selecciona una opción</option>
            <option value="Diagnóstico Comercial">Diagnóstico Comercial</option>
            <option value="Business Intelligence / Power BI">Business Intelligence / Power BI</option>
            <option value="Funnel Digital">Funnel Digital</option>
            <option value="Automatización de Marketing">Automatización de Marketing</option>
            <option value="Consultoría Comercial">Consultoría Comercial</option>
            <option value="Consultoría Operacional">Consultoría Operacional</option>
            <option value="No sé por dónde empezar">No sé por dónde empezar</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8AFA4] pointer-events-none" />
        </div>
      </div>

      <div>
        <label htmlFor="presupuesto" className={labelBase}>Presupuesto mensual</label>
        <div className="relative">
          <FieldIcon icon={Wallet} />
          <select
            id="presupuesto" name="presupuesto" value={formData.presupuesto}
            onChange={handleChange} className={selectBase}
          >
            <option value="">Selecciona una opción</option>
            <option value="Menos de $500.000 CLP">Menos de $500.000 CLP</option>
            <option value="$500.000 – $1.000.000 CLP">$500.000 – $1.000.000 CLP</option>
            <option value="$1.000.000 – $3.000.000 CLP">$1.000.000 – $3.000.000 CLP</option>
            <option value="Más de $3.000.000 CLP">Más de $3.000.000 CLP</option>
          </select>
          <ChevronDown className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#B8AFA4] pointer-events-none" />
        </div>
      </div>

      <div>
        <label htmlFor="mensaje" className={labelBase}>Mensaje (opcional)</label>
        <div className="relative">
          <FieldIcon icon={MessageSquare} />
          <textarea
            id="mensaje" name="mensaje" value={formData.mensaje}
            onChange={handleChange} placeholder="Cuéntanos brevemente sobre tu empresa..." rows={4}
            className="w-full bg-[#F5F1EA] border-2 border-[#E8E3DA] rounded-xl px-4 py-3.5 text-sm text-[#0A0A0A] placeholder-[#938B82] focus:outline-none focus:border-[#FF4500] focus:bg-white focus:ring-4 focus:ring-[#FF4500]/10 transition-all duration-200 resize-none"
          />
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#FF4500] hover:bg-[#FF6B20] text-white font-bold py-3.5 px-6 rounded-full text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 mt-6 disabled:opacity-70"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          'Enviar mensaje →'
        )}
      </button>
    </form>
  );
}
