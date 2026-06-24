'use client'

import { Button } from "@/components/ui/button"
import RotatingText from "./RotatingText"
import Image from "next/image"
import { useContactModal } from "@/app/contact-context"

const ArrowRight = () => (
  <svg
    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
)

const Play = () => (
  <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
)

const companies = [
  "Droguería Michelson",
  "GDM Abogados",
  "Blue Wave",
  "The Mob",
  "Droguería Michelson",
  "GDM Abogados",
]

export function HeroSection() {
  const { openContactModal } = useContactModal()
  
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative bg-[#F5F1EA] overflow-hidden">
      {/* Fire glow ambient blurs */}
      <div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none animate-fire-glow"
        style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 70%)", opacity: 0.15 }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full pointer-events-none animate-fire-glow-2"
        style={{ background: "radial-gradient(circle, #FF4500 0%, transparent 70%)", opacity: 0.12 }}
      />
      <div className="max-w-5xl mx-auto relative z-10 animate-fade-in-hero">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#E8E3DA] text-[#938B82] text-sm mb-8 mt-12 animate-fade-in-badge" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}>
          <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0" />
          Consultoría Comercial &amp; Marketing — Chile
        </div>

        {/* Main Heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase text-balance mb-6 animate-fade-in-heading leading-none"
          style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.9" }}
        >
          <span className="text-[#0A0A0A] block">Haz crecer tu</span>
          <span className="flex items-center flex-wrap gap-3 mt-3 sm:mt-4 md:mt-5">
            <RotatingText
              texts={["Negocio", "Pipeline", "Equipo", "Estrategia", "Rentabilidad"]}
              mainClassName="px-6 sm:px-8 md:px-10 bg-[#FF4500] text-[#FFFFFF] overflow-hidden py-2 sm:py-3 md:py-4 justify-center rounded-lg inline-block"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#938B82] max-w-2xl mb-8 sm:mb-12 leading-relaxed animate-fade-in-subheading font-normal" style={{ fontFamily: "var(--font-barlow)" }}>
          The Burn diseña e implementa el sistema comercial y de marketing que tu empresa necesita para vender más y decidir con datos. Sin humo. Sin jerga.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
          <Button
            size="lg"
            onClick={openContactModal}
            className="bg-[#0A0A0A] text-white rounded-full px-8 py-4 text-lg font-bold transition-all duration-300 hover:bg-[#1B1917] hover:scale-105 hover:shadow-lg group cursor-pointer"
            style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.02em" }}
          >
            Agendar Diagnóstico
            <ArrowRight />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-medium border-[#E8E3DA] text-[#938B82] hover:bg-white hover:border-[#FF4500]/40 hover:text-[#0A0A0A] transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer"
            style={{ fontFamily: "var(--font-barlow)" }}
          >
            <Play />
            Ver cómo trabajamos
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="px-0 hidden sm:block overflow-hidden animate-fade-in-trust">
          <p className="text-xs text-[#938B82] mb-5 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.15em" }}>
            TRABAJAN CON NOSOTROS
          </p>
          <div className="relative overflow-hidden w-full max-w-3xl">
            <div
              className="absolute left-0 top-0 w-16 h-full z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #F5F1EA, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 w-16 h-full z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #F5F1EA, transparent)" }}
            />
            <div className="flex items-center gap-10 animate-slide-left">
              <div className="flex items-center gap-10 whitespace-nowrap">
                {companies.map((c) => (
                  <div key={c} className="text-sm font-semibold text-[#938B82] uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    {c}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-10 whitespace-nowrap">
                {companies.map((c) => (
                  <div key={c + "-dup"} className="text-sm font-semibold text-[#938B82] uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators */}
        <div className="mb-8 sm:hidden overflow-hidden animate-fade-in-trust">
          <p className="text-xs text-[#938B82] mb-4 uppercase tracking-widest" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>TRABAJAN CON NOSOTROS</p>
          <div className="relative overflow-hidden w-full max-w-sm">
            <div
              className="absolute left-0 top-0 w-8 h-full z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #F5F1EA, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 w-8 h-full z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #F5F1EA, transparent)" }}
            />
            <div className="flex items-center gap-6 animate-slide-left-mobile">
              <div className="flex items-center gap-6 whitespace-nowrap">
                {companies.map((c) => (
                  <div key={c} className="text-xs font-semibold text-[#938B82] uppercase tracking-wide" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    {c}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 whitespace-nowrap">
                {companies.map((c) => (
                  <div key={c + "-dup"} className="text-xs font-semibold text-[#938B82] uppercase tracking-wide" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
