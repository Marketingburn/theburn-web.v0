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
          <section id="contacto" className="bg-[#0A0A0A] py-24 px-4">
            <div className="max-w-2xl mx-auto">
              <p className="text-[#FF4500] text-xs uppercase tracking-widest mb-4"
                 style={{ fontFamily: 'var(--font-jetbrains-mono)' }}>
                ■ HABLEMOS
              </p>
              <h2 className="text-5xl font-black uppercase text-white mb-4"
                  style={{ fontFamily: 'var(--font-barlow-condensed)' }}>
                Sin Humo.<br />Sin Jerga.
              </h2>
              <p className="text-[#938B82] mb-12 text-lg"
                 style={{ fontFamily: 'var(--font-barlow)' }}>
                Cuéntanos tu caso. Te respondemos en menos de 24 horas hábiles.
              </p>
              <div className="[&_label]:text-white [&_input]:bg-white/5 [&_input]:border-white/10 [&_input]:text-white [&_input::placeholder]:text-white/30 [&_select]:bg-[#1B1917] [&_select]:border-white/10 [&_select]:text-white [&_textarea]:bg-white/5 [&_textarea]:border-white/10 [&_textarea]:text-white [&_textarea::placeholder]:text-white/30">
                <ContactForm defaultNecesidad="No sé por dónde empezar" />
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </div>
  )
}
