import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { caseStudies, getCaseStudyBySlug } from "@/lib/casos"

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const caso = getCaseStudyBySlug(params.slug)
  if (!caso) {
    return { title: "Caso no encontrado" }
  }
  return {
    title: `Caso de éxito: ${caso.cliente} | The Burn`,
    description: caso.resultado,
    robots: "index, follow",
    alternates: { canonical: `/casos/${caso.slug}` },
    openGraph: {
      type: "article",
      url: `/casos/${caso.slug}`,
      title: `Caso de éxito: ${caso.cliente}`,
      description: caso.resultado,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: caso.cliente }],
    },
  }
}

/**
 * Plantilla técnica para casos de éxito. No se renderizan casos hasta que
 * existan datos reales en lib/casos.ts — ver Fase 15 de SEO-IMPLEMENTATION.md.
 */
export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caso = getCaseStudyBySlug(params.slug)

  if (!caso) {
    notFound()
  }

  const canonicalUrl = `https://theburn.cl/casos/${caso.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: `Caso de éxito: ${caso.cliente}`,
        description: caso.resultado,
        datePublished: caso.dateISO,
        dateModified: caso.dateModifiedISO || caso.dateISO,
        author: { "@type": "Organization", name: "The Burn" },
        publisher: { "@type": "Organization", name: "The Burn", url: "https://theburn.cl" },
        mainEntityOfPage: canonicalUrl,
        url: canonicalUrl,
        inLanguage: "es-CL",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: "https://theburn.cl" },
          { "@type": "ListItem", position: 2, name: "Casos de éxito", item: "https://theburn.cl/casos" },
          { "@type": "ListItem", position: 3, name: caso.cliente, item: canonicalUrl },
        ],
      },
    ],
  }

  const sections: { label: string; body: string }[] = [
    { label: "Contexto", body: caso.contexto },
    { label: "Diagnóstico", body: caso.diagnostico },
    { label: "Estrategia", body: caso.estrategia },
    { label: "Implementación", body: caso.implementacion },
    { label: "Resultado", body: caso.resultado },
    { label: "Aprendizajes", body: caso.aprendizajes },
  ]

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", path: "" },
          { name: "Casos de éxito", path: "/casos" },
          { name: caso.cliente, path: `/casos/${caso.slug}` },
        ]}
      />
      <GlassmorphismNav />
      <main>
        <section className="bg-[#F5F1EA] px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs
              className="mb-6"
              items={[{ name: "Inicio", href: "/" }, { name: "Casos de éxito", href: "/casos" }, { name: caso.cliente }]}
            />
            <p className="text-[#FF4500] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
              {caso.industria}
            </p>
            <h1
              className="text-4xl sm:text-6xl font-black uppercase text-[#0A0A0A] text-balance leading-none"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.92" }}
            >
              {caso.cliente}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5A5650]" style={{ fontFamily: "var(--font-barlow)" }}>
              {caso.problema}
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:py-20">
          <div className="max-w-3xl mx-auto space-y-10">
            {sections.map(({ label, body }) => (
              <div key={label}>
                <h2 className="text-2xl font-black uppercase text-[#0A0A0A] mb-3" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  {label}
                </h2>
                <p className="text-[#5A5650] leading-relaxed" style={{ fontFamily: "var(--font-barlow)" }}>
                  {body}
                </p>
              </div>
            ))}
            {caso.kpis.length > 0 && (
              <div>
                <h2 className="text-2xl font-black uppercase text-[#0A0A0A] mb-3" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  KPIs
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {caso.kpis.map((kpi) => (
                    <li key={kpi} className="rounded-lg border border-[#E8E3DA] p-4 text-sm text-[#5A5650]">
                      {kpi}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {caso.serviciosUtilizados.length > 0 && (
              <div>
                <h2 className="text-2xl font-black uppercase text-[#0A0A0A] mb-3" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
                  Servicios utilizados
                </h2>
                <div className="flex flex-wrap gap-3">
                  {caso.serviciosUtilizados.map((s) => (
                    <Link key={s.href} href={s.href} className="rounded-full border border-[#E8E3DA] px-4 py-2 text-sm hover:border-[#FF4500] hover:text-[#FF4500]">
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="bg-[#0A0A0A] px-4 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-black uppercase text-white mb-4" style={{ fontFamily: "var(--font-barlow-condensed)" }}>
              ¿Quieres un resultado similar?
            </h2>
            <Link
              href="/diagnostico"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4500] text-white font-bold uppercase rounded-lg hover:bg-[#ff5c1a] transition-colors"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Solicitar diagnóstico
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
