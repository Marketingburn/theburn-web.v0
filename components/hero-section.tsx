import { Button } from "@/components/ui/button"
import RotatingText from "./RotatingText"

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
  "The Mob",
  "Blue Wave",
  "Droguería Michelson",
  "GDM Abogados",
]

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative bg-[#0A0A0A]">
      {/* Subtle orange radial glow at top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #FF6B00 0%, transparent 70%)" }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in-hero">
        {/* Badge */}
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#333333] text-[#888888] text-sm font-medium mb-8 mt-12 animate-fade-in-badge">
          <span className="w-2 h-2 bg-[#FF6B00] rounded-full mr-2 animate-pulse"></span>
          Automatización de marketing con IA
        </div>

        {/* Main Heading */}
        <h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-balance mb-6 animate-fade-in-heading leading-none"
          style={{ fontFamily: "var(--font-barlow-condensed)" }}
        >
          <span className="text-white">Transforma tu</span>
          <br />
          <span className="inline-flex items-center justify-center flex-wrap gap-3 mt-3 sm:mt-4 md:mt-6">
            <RotatingText
              texts={["Departamento", "Pipeline", "Conversión", "Marketing"]}
              mainClassName="px-3 sm:px-4 md:px-5 bg-[#FF6B00] text-white overflow-hidden py-1 sm:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg md:text-xl text-[#888888] text-balance max-w-2xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4 sm:px-0 animate-fade-in-subheading font-normal">
          The Burn implementa sistemas de automatización de marketing con IA para empresas B2B en Chile. Sin agencias
          tradicionales. Sin bla bla.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 sm:mb-16 animate-fade-in-buttons">
          <Button
            size="lg"
            className="bg-white text-black rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-gray-100 hover:scale-105 hover:shadow-lg group cursor-pointer"
          >
            Agendar Diagnóstico
            <ArrowRight />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-4 text-lg font-medium border-[#333333] text-white hover:bg-[#1A1A1A] hover:border-[#FF6B00] transition-all duration-200 hover:scale-105 group bg-transparent cursor-pointer"
          >
            <Play />
            Ver cómo funciona
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="text-center px-4 hidden sm:block overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-[#888888] mb-6">Confiado por equipos como:</p>
          <div className="relative overflow-hidden w-full max-w-3xl mx-auto">
            <div
              className="absolute left-0 top-0 w-16 h-full z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #0A0A0A, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 w-16 h-full z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #0A0A0A, transparent)" }}
            />
            <div className="flex items-center gap-10 animate-slide-left">
              <div className="flex items-center gap-10 whitespace-nowrap">
                {companies.map((c) => (
                  <div key={c} className="text-sm font-semibold text-[#444444] uppercase tracking-wide">
                    {c}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-10 whitespace-nowrap">
                {companies.map((c) => (
                  <div key={c + "-dup"} className="text-sm font-semibold text-[#444444] uppercase tracking-wide">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Trust Indicators */}
        <div className="text-center px-4 mb-8 sm:hidden overflow-hidden animate-fade-in-trust">
          <p className="text-sm text-[#888888] mb-4">Confiado por equipos como:</p>
          <div className="relative overflow-hidden w-full max-w-sm mx-auto">
            <div
              className="absolute left-0 top-0 w-8 h-full z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #0A0A0A, transparent)" }}
            />
            <div
              className="absolute right-0 top-0 w-8 h-full z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #0A0A0A, transparent)" }}
            />
            <div className="flex items-center gap-6 animate-slide-left-mobile">
              <div className="flex items-center gap-6 whitespace-nowrap">
                {companies.map((c) => (
                  <div key={c} className="text-xs font-semibold text-[#444444] uppercase tracking-wide">
                    {c}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-6 whitespace-nowrap">
                {companies.map((c) => (
                  <div key={c + "-dup"} className="text-xs font-semibold text-[#444444] uppercase tracking-wide">
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
