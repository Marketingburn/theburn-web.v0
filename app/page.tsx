import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { HeroSection } from "@/components/hero-section"
import { ProblemSolutionSection } from "@/components/problem-solution-section"
import { FeaturesSection } from "@/components/features-section"
import { AITeamSection } from "@/components/ai-team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ROICalculatorSection } from "@/components/roi-calculator-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#F5F1EA] overflow-hidden">
      <main className="min-h-screen relative overflow-hidden">
        <div className="relative z-10">
          <GlassmorphismNav />
          <HeroSection />
          <ProblemSolutionSection />
          <FeaturesSection />
          <AITeamSection />
          <TestimonialsSection />
          <ROICalculatorSection />
          <CTASection />
          <section id="contacto" className="bg-[#0A0A0A] py-16 px-4">
            <div className="max-w-2xl mx-auto">
              <p className="text-[#FF4500] text-xs uppercase tracking-widest mb-4"
                 style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
                ■ HABLEMOS
              </p>
              <h2 className="text-4xl font-black uppercase text-white mb-4"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                Sin Humo.<br />Sin Jerga.
              </h2>
              <p className="text-[#938B82] mb-8 text-sm"
                 style={{ fontFamily: 'var(--font-barlow)' }}>
                Cuéntanos tu caso. Te respondemos en menos de 24 horas hábiles.
              </p>
              <ContactForm defaultNecesidad="No sé por dónde empezar" />
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </div>
  )
}
