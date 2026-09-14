import type { Metadata } from "next"
import Link from "next/link"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { BreadcrumbSchema } from "@/components/breadcrumb-schema"
import { blogPosts } from "@/lib/blog-posts"

const AUTHOR_NAME = "Javier Troncoso"
const AUTHOR_ROLE = "Co-founder, The Burn SpA"
const canonicalUrl = "https://theburn.cl/autor/javier-troncoso"

export const metadata: Metadata = {
  title: `${AUTHOR_NAME} | Autor en The Burn`,
  description: `Perfil de ${AUTHOR_NAME}, ${AUTHOR_ROLE}. Artículos sobre consultoría comercial, procesos de ventas, marketing B2B y Business Intelligence.`,
  robots: "index, follow",
  alternates: {
    canonical: "/autor/javier-troncoso",
  },
  openGraph: {
    type: "profile",
    url: canonicalUrl,
    title: `${AUTHOR_NAME} | The Burn`,
    description: `Perfil de ${AUTHOR_NAME}, ${AUTHOR_ROLE}, en el blog de The Burn.`,
  },
}

export default function AuthorPage() {
  const authorPosts = blogPosts.filter((post) => post.author === AUTHOR_NAME)
  const lastUpdated = authorPosts
    .map((post) => post.dateModifiedISO || post.dateISO)
    .sort()
    .at(-1)

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: AUTHOR_NAME,
    jobTitle: AUTHOR_ROLE,
    worksFor: {
      "@type": "Organization",
      name: "The Burn",
      url: "https://theburn.cl",
    },
    url: canonicalUrl,
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <BreadcrumbSchema
        items={[
          { name: "Inicio", path: "" },
          { name: "Blog", path: "/blog" },
          { name: AUTHOR_NAME, path: "/autor/javier-troncoso" },
        ]}
      />
      <GlassmorphismNav />
      <main>
        <section className="bg-[#F5F1EA] px-4 py-16 sm:py-24">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[#938B82] hover:text-[#0A0A0A] transition-colors mb-8 text-sm"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              ← Blog
            </Link>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6">
              <div
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#0A0A0A] text-2xl font-black text-white"
                style={{ fontFamily: "var(--font-barlow-condensed)" }}
                aria-hidden="true"
              >
                JT
              </div>
              <div>
                <h1
                  className="text-4xl sm:text-5xl font-black uppercase text-[#0A0A0A] text-balance leading-none"
                  style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.95" }}
                >
                  {AUTHOR_NAME}
                </h1>
                <p
                  className="text-[#FF4500] font-semibold mt-2"
                  style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "13px", letterSpacing: "0.04em" }}
                >
                  {AUTHOR_ROLE.toUpperCase()}
                </p>
              </div>
            </div>
            <p
              className="mt-8 max-w-2xl text-lg leading-relaxed text-[#5A5650]"
              style={{ fontFamily: "var(--font-barlow)" }}
            >
              Co-fundador de The Burn, consultora comercial B2B enfocada en conectar estrategia, marketing,
              ventas, procesos y datos para empresas que quieren crecer con un sistema y no solo con esfuerzo
              individual. Escribe sobre diagnóstico comercial, procesos de ventas, automatización y Business
              Intelligence aplicados a empresas B2B en Chile.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Estrategia comercial", "Procesos de ventas", "Marketing B2B", "Business Intelligence"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1.5 rounded-full bg-white border border-[#E8E3DA] text-[#5A5650] text-xs"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {tag}
                  </span>
                ),
              )}
            </div>
            {lastUpdated && (
              <p
                className="mt-6 text-xs text-[#938B82]"
                style={{ fontFamily: "var(--font-jetbrains-mono)" }}
              >
                Perfil actualizado: {lastUpdated}
              </p>
            )}
          </div>
        </section>

        <section className="bg-white px-4 py-16 sm:py-20">
          <div className="max-w-4xl mx-auto">
            <h2
              className="text-2xl sm:text-3xl font-black uppercase text-[#0A0A0A] mb-8"
              style={{ fontFamily: "var(--font-barlow-condensed)" }}
            >
              Artículos escritos por {AUTHOR_NAME}
            </h2>
            <ul className="divide-y divide-[#E8E3DA]">
              {authorPosts.map((post) => (
                <li key={post.slug} className="py-5">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-lg font-semibold text-[#0A0A0A] hover:text-[#FF4500] transition-colors"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {post.title}
                  </Link>
                  <p
                    className="mt-1 text-sm text-[#938B82]"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    {post.category} · {post.date}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
