'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { pushEvent } from '@/lib/analytics'

const WHATSAPP_URL = 'https://wa.me/56936504772?text=Hola%20The%20Burn%2C%20me%20interesa%20agendar%20un%20diagn%C3%B3stico%20comercial.'

export function WhatsAppFloat() {
  const [showPopup, setShowPopup] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)
  const [hasShownPopup, setHasShownPopup] = useState(false)

  useEffect(() => {
    // Check if popup was already shown this session
    const hasShown = sessionStorage.getItem('whatsapp_popup_shown')
    if (!hasShown) {
      const timer = setTimeout(() => {
        setShowPopup(true)
        setHasShownPopup(true)
        sessionStorage.setItem('whatsapp_popup_shown', 'true')
      }, 8000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleWhatsAppClick = () => {
    pushEvent('whatsapp_click', {
      click_source: typeof window !== 'undefined' ? window.location.pathname : '',
    })
    window.open(WHATSAPP_URL, '_blank')
  }

  const handlePopupClose = () => {
    setShowPopup(false)
  }

  return (
    <>
      {/* Popup overlay */}
      {showPopup && (
        <div
          className="fixed inset-0 z-[9998]"
          onClick={handlePopupClose}
        />
      )}

      {/* WhatsApp Button */}
      <div
        className="fixed bottom-6 right-6 z-[9999] group"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {/* Tooltip */}
        <div
          className={`absolute bottom-1/2 right-full mr-4 px-4 py-2 bg-[#0A0A0A] rounded-lg whitespace-nowrap transition-all duration-200 pointer-events-none ${
            showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
          }`}
          style={{ fontFamily: 'var(--font-barlow)' }}
        >
          <p className="text-white text-sm font-medium">¿Hablamos por WhatsApp?</p>
          {/* Arrow pointing right */}
          <div
            className="absolute top-1/2 -right-1 w-0 h-0 -translate-y-1/2"
            style={{
              borderLeft: '8px solid #0A0A0A',
              borderTop: '6px solid transparent',
              borderBottom: '6px solid transparent',
            }}
          />
        </div>

        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          className="relative w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-whatsapp"
          style={{
            boxShadow: '0 4px 20px rgba(37, 211, 102, 0.4)',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 8px 30px rgba(37, 211, 102, 0.6)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 20px rgba(37, 211, 102, 0.4)'
          }}
          title="Contactar por WhatsApp"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        </button>
      </div>

      {/* Popup Card */}
      {showPopup && (
        <div
          className="fixed bottom-24 right-6 w-[300px] z-[9999] rounded-2xl overflow-hidden transition-all duration-300 animate-slide-up"
          style={{
            boxShadow: '0 8px 32px rgba(0,0,0,0.16)',
          }}
        >
          {/* Header */}
          <div className="bg-[#075E54] p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-xl">
                🔥
              </div>
              <div>
                <p className="text-white font-semibold text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
                  The Burn
                </p>
                <p className="text-[#25D366] text-xs flex items-center gap-1" style={{ fontFamily: 'var(--font-barlow)' }}>
                  <span className="inline-block w-1.5 h-1.5 bg-[#25D366] rounded-full" />
                  En línea
                </p>
              </div>
            </div>
            <button
              onClick={handlePopupClose}
              className="text-white hover:bg-white/10 p-1 rounded transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="bg-[#ECE5DD] p-4">
            <div className="bg-white rounded-lg shadow-sm p-3 mb-2">
              <p className="text-[#0A0A0A] text-sm" style={{ fontFamily: 'var(--font-barlow)' }}>
                ¡Hola! 👋
              </p>
              <p className="text-[#0A0A0A] text-sm mt-1" style={{ fontFamily: 'var(--font-barlow)' }}>
                ¿Quieres agendar un diagnóstico comercial o tienes alguna consulta?
              </p>
              <p className="text-[#938B82] text-xs mt-2" style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
                ahora
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-white p-3">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => pushEvent('whatsapp_click', {
                click_source: typeof window !== 'undefined' ? window.location.pathname : '',
              })}
              className="w-full block bg-[#25D366] text-white text-center py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:bg-[#20BA5A] active:scale-95"
              style={{ fontFamily: 'var(--font-barlow)' }}
            >
              Iniciar conversación →
            </a>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse-whatsapp {
          0%, 100% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 0 rgba(37, 211, 102, 0.3);
          }
          50% {
            box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4), 0 0 0 10px rgba(37, 211, 102, 0);
          }
        }

        .animate-pulse-whatsapp {
          animation: pulse-whatsapp 3s ease-in-out infinite;
        }

        @keyframes slide-up {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }

        @media (max-width: 640px) {
          .fixed.bottom-24.right-6.w-\\[300px\\] {
            bottom: 80px !important;
            left: 12px !important;
            right: 12px !important;
            width: calc(100% - 24px) !important;
          }
        }
      `}</style>
    </>
  )
}
