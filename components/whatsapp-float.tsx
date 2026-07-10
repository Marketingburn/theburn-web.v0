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
              ? "fixed left-1/2 -translate-x-1/2 bottom-20 w-[85vw] max-w-[300px] max-h-[70vh] overflow-y-auto z-[9999] rounded-2xl animate-slide-up"
              : "fixed bottom-24 right-6 w-[340px] z-[9999] rounded-2xl overflow-hidden animate-slide-up"
          }
          style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.24)' }}
        >
          <div className="bg-[#075E54] p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-[#25D366] flex items-center justify-center">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>
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

          <div className="bg-white p-3">
            <p className="text-[#0A0A0A] text-sm mb-2" style={{ fontFamily: 'var(--font-barlow)' }}>
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
