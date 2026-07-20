'use client'

export function AnnouncementBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A] py-3 px-4 text-center">
      <p
        className="text-[#F5F1EA] text-xs sm:text-sm font-bold uppercase tracking-widest"
        style={{ fontFamily: 'var(--font-jetbrains-mono)' }}
      >
        Solo 3 cupos de diagnóstico gratis este mes
      </p>
    </div>
  )
}
