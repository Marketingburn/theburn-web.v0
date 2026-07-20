'use client'

import { Flame } from 'lucide-react'

export function HeaderBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] text-white py-2.5 px-4 sm:py-3 sm:px-6 border-b border-[#FF4500]/20">
      <div className="max-w-6xl mx-auto flex items-center justify-center gap-2">
        <Flame size={18} className="text-[#FF4500] flex-shrink-0" />
        <span
          className="text-xs sm:text-sm font-bold text-center"
          style={{ fontFamily: 'var(--font-barlow-condensed)' }}
        >
          Solo 3 cupos de diagnóstico gratuito este mes
        </span>
      </div>
    </div>
  )
}
