'use client'

export function MobileStickyFooter() {
  const handleScroll = () => {
    document.getElementById('closing-form')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9996] bg-[#FF4500] p-3 md:hidden">
      <button
        onClick={handleScroll}
        className="w-full bg-[#D6862C] hover:bg-[#A02C00] text-white font-black py-3 px-4 uppercase tracking-widest transition-colors"
        style={{ fontFamily: 'var(--font-barlow-condensed)' }}
      >
        Quiero mi diagnóstico gratis
      </button>
    </div>
  )
}
