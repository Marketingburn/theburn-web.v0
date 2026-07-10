'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { pushEvent } from '@/lib/analytics'
import { WhatsAppPopupForm } from '@/components/whatsapp-popup-form'

export function WhatsAppFloat() {
  const [showForm, setShowForm] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isMobile) return
    const hasShown = sessionStorage.getItem('whatsapp_popup_shown')
    if (!hasShown) {
      const timer = setTimeout(() => {
        setShowForm(true)
        sessionStorage.setItem('whatsapp_popup_shown', 'true')
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [isMobile])

  const handleOpenForm = () => {
    pushEvent('whatsapp_click', {
      click_source: typeof window !== 'undefined' ? window.location.pathname : '',
    })
    setShowForm(true)
  }

  return (
    <>
      {/* Overlay para cerrar al hacer click afuera */}
      {showForm && (
        <div
          className="fixed inset-0 z-[9998] bg-black/20"
          onClick={() => setShowForm(false)}
        />
      )}

      {/* Botón flotante */}
      <div
        className={isMobile ? '' : 'group'}
        onMouseEnter={() => !isMobile && !showForm && setShowTooltip(true)}
        onMouseLeave={() => !isMobile && setShowTooltip(false)}
        style={{
          position: 'fixed',
          bottom: isMobile ? '20px' : '24px',
          right: isMobile ? '16px' : '24px',
          zIndex: 9999,
        }}
      >
        {!isMobile && (
          <div
            className={`absolute bottom-1/2 right-full mr-4 px-4 py-2 bg-[#0A0A0A] rounded-lg whitespace-nowrap transition-all duration-200 pointer-events-none ${
              showTooltip && !showForm ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
            }`}
            style={{ fontFamily: 'var(--font-barlow)' }}
          >
            <p className="text-white text-sm font-medium">¿Hablamos por WhatsApp?</p>
            <div
              className="absolute top-1/2 -right-1 w-0 h-0 -translate-y-1/2"
              style={{ borderLeft: '8px solid #0A0A0A', borderTop: '6px solid transparent', borderBottom: '6px solid transparent' }}
            />
          </div>
        )}

        <button
          onClick={handleOpenForm}
          className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-whatsapp"
          style={{ boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)' }}
          title="Contactar por WhatsApp"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>
      </div>

      {/* Popup con el formulario — mismo componente para mobile y desktop, solo cambia el posicionamiento */}
      {showForm && (
        <div
          className={
            isMobile
              ? "fixed inset-x-4 bottom-24 z-[9999] rounded-2xl overflow-hidden animate-slide-up"
              : "fixed bottom-24 right-6 w-[340px] z-[9999] rounded-2xl overflow-hidden animate-slide-up"
          }
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.24)' }}
        >
          <div className="bg-[#075E54] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-xl">🔥</div>
              <div>
                <p className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>The Burn</p>
                <p className="text-[#25D366] text-xs flex items-center gap-1" style={{ fontFamily: 'var(--font-barlow)' }}>
                  <span className="inline-block w-1.5 h-1.5 bg-[#25D366] rounded-full" />
                  En línea
                </p>
              </div>
            </div>
            <button onClick={() => setShowForm(false)} className="text-white hover:bg-white/10 p-1 rounded transition-colors">
              <X size={20} />
            </button>
          </div>

          <div className="bg-white p-4">
            <p className="text-[#0A0A0A] text-sm mb-3" style={{ fontFamily: 'var(--font-barlow)' }}>
              Déjanos tus datos y te escribimos por WhatsApp altiro 👋
            </p>
            <WhatsAppPopupForm onClose={() => setShowForm(false)} />
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-whatsapp {
          0%, 100% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.3); }
          50% { box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0); }
        }
        .animate-pulse-whatsapp { animation: pulse-whatsapp 3s ease-in-out infinite; }
        @keyframes slide-up {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        .animate-slide-up { animation: slide-up 0.3s ease-out; }
      `}</style>
    </>
  )
}
