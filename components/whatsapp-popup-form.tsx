'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, Mail, Building2, Phone, Loader2 } from 'lucide-react';
import { pushEvent } from '@/lib/analytics';

interface WhatsAppPopupFormProps {
  onClose?: () => void;
}

const inputBase =
  "w-full bg-[#F5F1EA] border-2 border-[#E8E3DA] rounded-xl pl-9 pr-3 py-2 text-sm text-[#0A0A0A] placeholder-[#938B82] focus:outline-none focus:border-[#FF4500] focus:bg-white focus:ring-4 focus:ring-[#FF4500]/10 transition-all duration-200";

const labelBase =
  "flex items-center gap-1.5 text-[10px] font-bold text-[#0A0A0A] uppercase tracking-widest mb-1";

function FieldIcon({ icon: Icon }: { icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none">
      <Icon className="w-4 h-4 text-[#0A0A0A]/40" />
    </div>
  );
}

export function WhatsAppPopupForm({ onClose }: WhatsAppPopupFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    empresa: '',
    telefono: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
        body: JSON.stringify({
          ...formData,
          necesidad: 'Popup WhatsApp Flotante',
        }),
      });

      if (!response.ok) throw new Error('Error en el servidor');

      pushEvent('form_submitted', {
        form_type: 'whatsapp_popup',
        necesidad: 'Popup WhatsApp Flotante',
      });

      router.push('/gracias');
    } catch (err) {
      setError('Hubo un error al enviar. Escríbenos directo a marketing@theburn.cl');
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div>
        <label htmlFor="wa-nombre" className={labelBase}>Nombre completo *</label>
        <div className="relative">
          <FieldIcon icon={User} />
          <input
            type="text" id="wa-nombre" name="nombre" value={formData.nombre}
            onChange={handleChange} placeholder="Tu nombre" required
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="wa-email" className={labelBase}>Correo *</label>
        <div className="relative">
          <FieldIcon icon={Mail} />
          <input
            type="email" id="wa-email" name="email" value={formData.email}
            onChange={handleChange} placeholder="tu@empresa.cl" required
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="wa-empresa" className={labelBase}>Empresa *</label>
        <div className="relative">
          <FieldIcon icon={Building2} />
          <input
            type="text" id="wa-empresa" name="empresa" value={formData.empresa}
            onChange={handleChange} placeholder="Nombre de tu empresa" required
            className={inputBase}
          />
        </div>
      </div>

      <div>
        <label htmlFor="wa-telefono" className={labelBase}>Teléfono *</label>
        <div className="relative">
          <FieldIcon icon={Phone} />
          <input
            type="tel" id="wa-telefono" name="telefono" value={formData.telefono}
            onChange={handleChange} placeholder="+56 9 XXXX XXXX" required
            className={inputBase}
          />
        </div>
      </div>

      {error && (
        <div className="bg-[#EF4444]/10 border border-[#EF4444]/30 text-[#EF4444] px-3 py-2 rounded-lg text-xs">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold py-2.5 px-4 rounded-full text-sm transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>Iniciar conversación →</>
        )}
      </button>
    </form>
  );
}
