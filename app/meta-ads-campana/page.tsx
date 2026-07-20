import { AnnouncementBar } from '@/components/meta-ads/announcement-bar'
import { HeroSection } from '@/components/meta-ads/hero-section'
import { ProofSection } from '@/components/meta-ads/proof-section'
import { ProblemsSectionRedesign } from '@/components/meta-ads/problems-section-redesign'
import { AuditSection } from '@/components/meta-ads/audit-section'
import { ServicesSection } from '@/components/meta-ads/services-section'
import { RiskReversal } from '@/components/meta-ads/risk-reversal'
import { FAQSection } from '@/components/meta-ads/faq-section'
import { ClosingSection } from '@/components/meta-ads/closing-section'
import { MobileStickyFooter } from '@/components/meta-ads/mobile-sticky-footer'

export default function MetaAdsCampanaPage() {
  return (
    <>
      <AnnouncementBar />
      <main className="pt-12">
        <HeroSection />
        <ProofSection />
        <ProblemsSectionRedesign />
        <AuditSection />
        <ServicesSection />
        <RiskReversal />
        <FAQSection />
        <ClosingSection />
      </main>
      <MobileStickyFooter />
    </>
  )
}
