import { HeaderBar } from '@/components/meta-ads/header-bar'
import { HeroForm } from '@/components/meta-ads/hero-form'
import { ProblemsSection } from '@/components/meta-ads/problems-section'
import { ServicesSection } from '@/components/meta-ads/services-section'
import { HowItWorks } from '@/components/meta-ads/how-it-works'
import { CTAFinalSection } from '@/components/meta-ads/cta-final-section'
import { StickyMetaAdsCTA } from '@/components/meta-ads/sticky-cta-mobile'

export default function MetaAdsCampanaPage() {
  return (
    <>
      <HeaderBar />
      <main className="pt-0">
        <HeroForm />
        <ProblemsSection />
        <ServicesSection />
        <HowItWorks />
        <CTAFinalSection />
      </main>
      <StickyMetaAdsCTA />
    </>
  )
}
