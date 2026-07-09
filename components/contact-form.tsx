'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { pushEvent } from '@/lib/analytics';

interface ContactFormProps {
  isModal?: boolean;
  onSuccess?: () => void;
  defaultNecesidad?: string;
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
        nombre: '',
        empresa: '',
        email: '',
        telefono: '',
        tipoEmpresa: '',
        necesidad: defaultNecesidad || '',
        presupuesto: '',
        mensaje: '',
      });

      if (onSuccess) {
        setTimeout(() => onSuccess(), 2000);
      }
    } catch (err) {
      setError('Hubo un error al enviar. Escríbenos directamente a marketing@theburn.cl');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="text-center py-8">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-[#FF4500] rounded-full flex items-center justify-center">
            <Check className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3
          className="text-2xl font-black uppercase text-[#0A0A0A] mb-4"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          ¡MENSAJE ENVIADO!
        </h3>
        <p className="text-[#938B82] mb-2" style={{ fontFamily: 'var(--font-barlow)' }}>
          Te contactamos en menos de 24 horas hábiles.
        </p>
        <p className="text-[#938B82] mb-6" style={{ fontFamily: 'var(--font-barlow)' }}>
          Revisa tu bandeja, te llegará una confirmación.
        </p>
        <div className="border-t border-black/10 pt-6 mt-6">
          <p className="text-[#938B82] text-sm" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
            marketing@theburn.cl
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Nombre completo */}
      <div>
        <label
          htmlFor="nombre"
          className="block text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          Nombre completo *
        </label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
          className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#FF4500] transition-colors duration-200"
          style={{ fontFamily: 'var(--font-barlow)' }}
        />
      </div>

      {/* Empresa */}
      <div>
        <label
          htmlFor="empresa"
          className="block text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          Empresa *
        </label>
        <input
          type="text"
          id="empresa"
          name="empresa"
          value={formData.empresa}
          onChange={handleChange}
          placeholder="Nombre de tu empresa"
          required
          className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#FF4500] transition-colors duration-200"
          style={{ fontFamily: 'var(--font-barlow)' }}
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@empresa.cl"
          required
          className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#FF4500] transition-colors duration-200"
          style={{ fontFamily: 'var(--font-barlow)' }}
        />
      </div>

      {/* Teléfono */}
      <div>
        <label
          htmlFor="telefono"
          className="block text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          Teléfono
        </label>
        <input
          type="tel"
          id="telefono"
          name="telefono"
          value={formData.telefono}
          onChange={handleChange}
          placeholder="+56 9 XXXX XXXX"
          className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#FF4500] transition-colors duration-200"
          style={{ fontFamily: 'var(--font-barlow)' }}
        />
      </div>

      {/* Tipo de empresa */}
      <div>
        <label
          htmlFor="tipoEmpresa"
          className="block text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          Tipo de empresa
        </label>
        <select
          id="tipoEmpresa"
          name="tipoEmpresa"
          value={formData.tipoEmpresa}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-sm focus:outline-none focus:border-[#FF4500] transition-colors duration-200 appearance-none cursor-pointer"
          style={{ fontFamily: 'var(--font-barlow)' }}
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
      </div>

      {/* Qué necesitas */}
      <div>
        <label
          htmlFor="necesidad"
          className="block text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          ¿Qué necesitas?
        </label>
        <select
          id="necesidad"
          name="necesidad"
          value={formData.necesidad}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-sm focus:outline-none focus:border-[#FF4500] transition-colors duration-200 appearance-none cursor-pointer"
          style={{ fontFamily: 'var(--font-barlow)' }}
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
      </div>

      {/* Presupuesto */}
      <div>
        <label
          htmlFor="presupuesto"
          className="block text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          Presupuesto mensual disponible
        </label>
        <select
          id="presupuesto"
          name="presupuesto"
          value={formData.presupuesto}
          onChange={handleChange}
          className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-sm focus:outline-none focus:border-[#FF4500] transition-colors duration-200 appearance-none cursor-pointer"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          <option value="">Selecciona una opción</option>
          <option value="Menos de $500.000 CLP">Menos de $500.000 CLP</option>
          <option value="$500.000 – $1.000.000 CLP">$500.000 – $1.000.000 CLP</option>
          <option value="$1.000.000 – $3.000.000 CLP">$1.000.000 – $3.000.000 CLP</option>
          <option value="Más de $3.000.000 CLP">Más de $3.000.000 CLP</option>
        </select>
      </div>

      {/* Mensaje */}
      <div>
        <label
          htmlFor="mensaje"
          className="block text-[10px] font-medium text-white/40 uppercase tracking-widest mb-1"
          style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
        >
          Mensaje (opcional)
        </label>
        <textarea
          id="mensaje"
          name="mensaje"
          value={formData.mensaje}
          onChange={handleChange}
          placeholder="Cuéntanos brevemente sobre tu empresa..."
          rows={4}
          className="w-full bg-transparent border-b border-white/20 px-0 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#FF4500] transition-colors duration-200 resize-none"
          style={{ fontFamily: 'var(--font-barlow)' }}
        />
      </div>

      {/* Error state */}
      {error && (
        <div
          className="bg-[#EF4444] text-white px-4 py-3 rounded-full text-sm"
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          {error}
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full border border-[#FF4500] text-[#FF4500] hover:bg-[#FF4500] hover:text-black font-bold py-4 px-6 rounded-full text-sm uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 mt-8"
        style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
      >
        {loading ? (
          <>
            <div className="w-4 h-4 border-2 border-[#FF4500]/30 border-t-[#FF4500] rounded-full animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Enviar mensaje →
          </>
        )}
      </button>
    </form>
  );
}
