'use client'

import { useState, useEffect } from 'react'
import { MessageCircle, PhoneCall } from 'lucide-react'

export function StickyMobileCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (!isMobile) return

    const handleScroll = () => {
      // Show after scrolling 300px
      const scrolled = window.scrollY > 300
      setIsVisible(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMobile])

  if (!isMobile || !isVisible) return null

  const handleContactScroll = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-[9997] bg-gradient-to-t from-white via-white to-white/95 border-t-2 border-[#E8E3DA] shadow-2xl animate-slide-up"
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex gap-2 p-3 max-w-md mx-auto w-full">
        {/* Primary CTA - Diagnóstico */}
        <button
          onClick={handleContactScroll}
          className="flex-1 bg-[#FF4500] text-white rounded-full py-2.5 px-3 font-bold text-sm transition-all duration-200 hover:bg-[#E63E00] active:scale-95 flex items-center justify-center gap-1.5 min-h-[44px] shadow-md hover:shadow-lg"
          style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '0.02em' }}
          title="Agendar diagnóstico comercial"
        >
          <PhoneCall size={16} strokeWidth={2.5} />
          <span className="hidden xs:inline">Diagnóstico</span>
          <span className="xs:hidden">Agendar</span>
        </button>

        {/* Secondary CTA - WhatsApp */}
        <button
          onClick={() => window.open('https://wa.me/56936504772?text=Hola%20The%20Burn%2C%20me%20interesa%20agendar%20un%20diagn%C3%B3stico%20comercial.', '_blank')}
          className="flex-1 bg-[#25D366] text-white rounded-full py-2.5 px-3 font-bold text-sm transition-all duration-200 hover:bg-[#1FA853] active:scale-95 flex items-center justify-center gap-1.5 min-h-[44px] shadow-md hover:shadow-lg"
          style={{ fontFamily: 'var(--font-barlow-condensed)', letterSpacing: '0.02em' }}
          title="Escribir por WhatsApp"
        >
          <MessageCircle size={16} strokeWidth={2.5} />
          <span className="hidden xs:inline">WhatsApp</span>
          <span className="xs:hidden">Chat</span>
        </button>
      </div>
    </div>
  )
}
