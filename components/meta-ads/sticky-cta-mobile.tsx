'use client'

import { useState, useEffect } from 'react'

export function StickyMetaAdsCTA() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after hero section (approx 600px of scrolling)
      setShow(window.scrollY > 600)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleClick = () => {
    document.querySelector('[data-cta-final]')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (!show) return null

  return (
    <div className="hidden max-sm:flex fixed bottom-0 left-0 right-0 z-[9996] bg-white border-t-2 border-[#E8E3DA] shadow-2xl animate-slide-up">
      <button
        onClick={handleClick}
        className="flex-1 bg-[#FF4500] hover:bg-[#E63E00] text-white font-bold py-4 px-4 text-sm transition-all duration-200 active:scale-95"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Quiero mi diagnóstico gratis
      </button>
    </div>
  )
}
