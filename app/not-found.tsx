import Link from "next/link"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] flex flex-col">
      <GlassmorphismNav />
      <main className="flex-1 flex items-center justify-center px-4 py-24">
        <div className="text-center max-w-2xl mx-auto animate-fade-in-section">
          <div className="mb-8">
            <p
              className="text-sm uppercase tracking-widest text-[#FF4500] font-bold mb-4"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              ERROR 404
            </p>
            <h1
              className="text-5xl md:text-7xl font-black uppercase text-[#0A0A0A] text-balance mb-4"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
            >
              Esta página <span className="text-[#FF4500]">no existe.</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-[#938B82] mb-12 leading-relaxed"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Pero tu negocio sí puede crecer.
            </p>
          </div>

          <Link href="/">
            <button
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#0A0A0A] hover:bg-[#1B1917] text-white rounded-full font-bold text-lg transition-all duration-300 hover:scale-105"
              style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
            >
              Volver al inicio
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
