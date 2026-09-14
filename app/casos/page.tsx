import type { Metadata } from "next"
import Link from "next/link"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { caseStudies } from "@/lib/casos"

export const metadata: Metadata = {
  title: "Casos de Éxito | The Burn",
  description: "Casos de éxito de The Burn en consultoría comercial B2B, procesos de ventas y automatización en Chile.",
  // Sin casos verificados publicados todavía: se mantiene fuera de la indexación
  // hasta contar con resultados reales documentados.
  robots: "noindex, follow",
  alternates: {
    canonical: "/casos",
  },
}

export default function CasosPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", path: "" }, { name: "Casos de éxito", path: "/casos" }]} />
      <GlassmorphismNav />
      <main>
        <section className="bg-[#F5F1EA] px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs className="mb-6" items={[{ name: "Inicio", href: "/" }, { name: "Casos de éxito" }]} />
            <h1
              className="text-4xl sm:text-6xl font-black uppercase text-[#0A0A0A] text-balance leading-none"
              style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.92" }}
            >
              Casos de éxito
            </h1>
            <p
              className="mt-6 max-w-2xl text-lg leading-relaxed text-[#5A5650]"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Estamos documentando los primeros casos de éxito de The Burn con datos verificados de clientes reales.
              Publicaremos aquí cada caso apenas contemos con resultados confirmados y autorización para compartirlos.
            </p>
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            {caseStudies.length === 0 ? (
              <div className="rounded-2xl border border-[#E8E3DA] bg-[#F5F1EA] p-8 sm:p-12 text-center">
                <p
                  className="text-lg text-[#5A5650] leading-relaxed"
                  style={{ fontFamily: "var(--font-barlow)" }}
                >
                  Todavía no hay casos publicados. Mientras tanto, puedes revisar cómo trabajamos en el{" "}
                  <Link href="/blog" className="text-[#FF4500] underline underline-offset-2">
                    blog
                  </Link>{" "}
                  o solicitar un{" "}
                  <Link href="/diagnostico" className="text-[#FF4500] underline underline-offset-2">
                    Diagnóstico Comercial
                  </Link>{" "}
                  para ver cómo aplicaríamos nuestra metodología a tu empresa.
                </p>
              </div>
            ) : (
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {caseStudies.map((caso) => (
                  <li key={caso.slug} className="rounded-2xl border border-[#E8E3DA] p-6">
                    <Link href={`/casos/${caso.slug}`} className="text-lg font-bold hover:text-[#FF4500]">
                      {caso.cliente}
                    </Link>
                    <p className="mt-2 text-sm text-[#938B82]">{caso.industria}</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
