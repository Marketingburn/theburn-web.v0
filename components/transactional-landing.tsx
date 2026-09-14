import Link from "next/link"
import { ArrowRight, Check, ChevronDown, Gauge, Target, Workflow } from "lucide-react"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import type { TransactionalLanding as LandingData } from "@/lib/transactional-landings"

const siteUrl = "https://theburn.cl"

export function TransactionalLanding({ landing }: { landing: LandingData }) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: landing.title,
    description: landing.description,
    provider: { "@type": "ProfessionalService", name: "The Burn", url: siteUrl },
    areaServed: { "@type": "Country", name: "Chile" },
    url: `${siteUrl}/${landing.slug}`,
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f1ea] text-[#171717]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <BreadcrumbSchema items={[{ name: "Inicio", path: "" }, { name: landing.eyebrow.split("·")[0].trim(), path: "/#servicios" }, { name: landing.h1, path: `/${landing.slug}` }]} />
      <GlassmorphismNav />
      <main>
        <section className="mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-24 lg:grid-cols-[1.15fr_.85fr] lg:items-end lg:px-10 lg:pb-28 lg:pt-36">
          <div>
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-[#e5532d]">{landing.eyebrow}</p>
            <h1 className="max-w-4xl text-balance font-sans text-5xl font-semibold leading-[1.04] tracking-[-0.055em] md:text-7xl">{landing.h1}</h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-[#57534e]">{landing.intro}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contacto" className="inline-flex items-center gap-2 rounded-full bg-[#171717] px-6 py-3 text-sm font-semibold text-[#f5f1ea] transition hover:bg-[#e5532d]">Conversemos sobre tu negocio <ArrowRight className="size-4" /></a>
              <a href="#metodo" className="inline-flex items-center rounded-full border border-[#171717]/20 px-6 py-3 text-sm font-semibold hover:border-[#e5532d] hover:text-[#e5532d]">Ver cómo trabajamos</a>
            </div>
          </div>
          <div className="border-t-2 border-[#e5532d] pt-6 lg:border-l-2 lg:border-t-0 lg:pl-8">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-[#78716c]">Para quién es</p>
            <p className="mt-4 text-xl leading-8">{landing.audience}</p>
          </div>
        </section>

        <section className="border-y border-[#171717]/10 bg-[#ebe5dc]">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-24">
            <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e5532d]">El problema</p><h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.04em] md:text-5xl">Ordenar antes de acelerar.</h2></div>
            <div><p className="max-w-2xl text-xl leading-8 text-[#3f3b37]">{landing.problem}</p><div className="mt-8 grid gap-3 sm:grid-cols-2">{landing.symptoms.map((item) => <div key={item} className="flex gap-3 border-t border-[#171717]/15 pt-4 text-sm leading-6"><span className="mt-1 text-[#e5532d]">—</span>{item}</div>)}</div></div>
          </div>
        </section>

        <section id="metodo" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
            <div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e5532d]">Método The Burn</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">Estrategia con ejecución.</h2></div>
            <div className="grid gap-0 border-t border-[#171717]/20">{landing.method.map((step, index) => <div key={step} className="grid gap-4 border-b border-[#171717]/20 py-6 sm:grid-cols-[4rem_1fr] sm:items-start"><span className="font-mono text-sm text-[#e5532d]">0{index + 1}</span><p className="max-w-xl text-xl leading-8">{step}</p></div>)}</div>
          </div>
        </section>

        <section className="bg-[#171717] text-[#f5f1ea]">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#f0825c]">Qué buscamos construir</p><div className="mt-10 grid gap-10 md:grid-cols-3">{landing.outcomes.map((outcome, index) => <div key={outcome} className="border-t border-[#f5f1ea]/25 pt-5"><div className="mb-7 text-[#f0825c]">{index === 0 ? <Target className="size-6" /> : index === 1 ? <Workflow className="size-6" /> : <Gauge className="size-6" />}</div><p className="text-xl leading-8">{outcome}</p></div>)}</div></div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-28"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e5532d]">Indicadores</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-5xl">Medir lo que ayuda a decidir.</h2></div><div className="grid gap-4 sm:grid-cols-2">{landing.metrics.map((metric) => <div key={metric} className="flex items-center gap-3 border-b border-[#171717]/15 pb-4 text-lg"><Check className="size-4 text-[#e5532d]" />{metric}</div>)}</div></section>

        <section className="border-t border-[#171717]/10 bg-[#ebe5dc]"><div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-10 lg:py-24"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e5532d]">Preguntas frecuentes</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em]">Antes de conversar.</h2></div><div className="divide-y divide-[#171717]/15 border-t border-[#171717]/15">{landing.faq.map((item) => <details key={item.question} className="group py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold">{item.question}<ChevronDown className="size-5 shrink-0 transition group-open:rotate-180" /></summary><p className="max-w-2xl pt-4 leading-7 text-[#57534e]">{item.answer}</p></details>)}</div></div></section>

        <section id="contacto" className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[.75fr_1.25fr] lg:px-10 lg:py-28"><div><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#e5532d]">Siguiente paso</p><h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">Cuéntanos dónde está el nudo.</h2><p className="mt-6 max-w-md leading-7 text-[#57534e]">Partimos entendiendo tu negocio, tus prioridades y los datos que ya tienes. Sin recetas genéricas.</p></div><ContactForm defaultNecesidad={landing.need} /></section>

        <section className="border-t border-[#171717]/10"><div className="mx-auto max-w-7xl px-6 py-12 lg:px-10"><p className="font-mono text-xs uppercase tracking-[0.18em] text-[#78716c]">También puede interesarte</p><div className="mt-5 flex flex-wrap gap-3">{landing.related.map((link) => <Link key={link.href} href={link.href} className="rounded-full border border-[#171717]/20 px-4 py-2 text-sm hover:border-[#e5532d] hover:text-[#e5532d]">{link.label} <ArrowRight className="ml-1 inline size-3" /></Link>)}</div></div></section>
      </main>
      <Footer />
    </div>
  )
}
