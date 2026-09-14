import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-posts"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { ChevronLeft } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { TrackedLink } from "@/components/tracked-link"
import styles from "./article.module.css"

export const dynamicParams = true

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Artículo no encontrado",
    }
  }

  const url = `/blog/${post.slug}`

  return {
    title: `${post.title} | The Burn Blog`,
    description: post.metaDescription,
    robots: "index, follow",
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.metaDescription,
      publishedTime: post.dateISO,
      modifiedTime: post.dateModifiedISO || post.dateISO,
      authors: [post.author],
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
      images: ["/og-image.png"],
    },
  }
}

const categoryToService: Record<string, { label: string; href: string; ctaLabel: string }> = {
  Estrategia: { label: "Estrategia Comercial", href: "/estrategia-comercial", ctaLabel: "Ver cómo diseñamos una estrategia comercial" },
  "Business Intelligence": { label: "Power BI para ventas", href: "/power-bi-ventas", ctaLabel: "Conocer Power BI para ventas" },
  "Funnel Digital": { label: "Agencia de marketing y ventas B2B", href: "/agencia-marketing-ventas-b2b", ctaLabel: "Ver cómo conectamos marketing y ventas" },
  Performance: { label: "Funnel Digital de Performance", href: "/servicios/funnel-digital-performance", ctaLabel: "Conocer el Funnel Digital de Performance" },
  Consultoría: { label: "Consultoría Comercial B2B", href: "/consultoria-comercial-b2b", ctaLabel: "Conocer la Consultoría Comercial B2B" },
  "Marketing B2B": { label: "Agencia de marketing y ventas B2B", href: "/agencia-marketing-ventas-b2b", ctaLabel: "Ver la agencia de marketing y ventas B2B" },
  Growth: { label: "Implementación de procesos comerciales", href: "/implementacion-procesos-comerciales", ctaLabel: "Ver implementación de procesos comerciales" },
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const sameCategory = blogPosts.filter((p) => p.category === post.category && p.slug !== post.slug)
  const otherPosts = blogPosts.filter((p) => p.category !== post.category && p.slug !== post.slug)
  const relatedPosts = [...sameCategory, ...otherPosts].slice(0, 3)
  const relatedService = categoryToService[post.category]

  const canonicalUrl = `https://theburn.cl/blog/${post.slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.metaDescription,
        image: "https://theburn.cl/og-image.png",
        datePublished: post.dateISO,
        dateModified: post.dateModifiedISO || post.dateISO,
        author: {
          "@type": "Person",
          name: post.author,
        },
        publisher: {
          "@type": "Organization",
          name: "The Burn",
          url: "https://theburn.cl",
        },
        mainEntityOfPage: canonicalUrl,
        url: canonicalUrl,
        inLanguage: "es-CL",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://theburn.cl",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://theburn.cl/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlassmorphismNav />

      {/* Article Header */}
      <section className="bg-[#F5F1EA] px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Breadcrumbs
            className="mb-6"
            items={[
              { name: "Inicio", href: "/" },
              { name: "Blog", href: "/blog" },
              { name: post.title },
            ]}
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#938B82] hover:text-[#0A0A0A] transition-colors mb-6 mt-3"
            style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "12px" }}
          >
            <ChevronLeft size={16} />
            Volver al blog
          </Link>

          {/* Category Badge */}
          <div
            className="inline-block px-3 py-1.5 rounded-full text-[#FF4500] text-xs font-semibold mb-6"
            style={{
              backgroundColor: "#FFF",
              border: "1px solid #FF4500",
              fontFamily: "var(--font-jetbrains-mono)",
              letterSpacing: "0.05em",
            }}
          >
            {post.category}
          </div>

          {/* Article Title */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-[#0A0A0A] mb-6 text-balance leading-tight"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.92" }}
          >
            {post.title}
          </h1>

          {/* Author and Date */}
          <div
            className="flex flex-col gap-1 text-sm text-[#938B82]"
            style={{ fontFamily: "var(--font-jetbrains-mono)" }}
          >
            <div>
              <Link href="/autor/javier-troncoso" className="hover:text-[#0A0A0A] underline underline-offset-2">
                {post.author}
              </Link>{" "}
              · {post.authorRole}
            </div>
            <div>
              Publicado: {post.date}
              {post.dateModifiedISO && post.dateModifiedISO !== post.dateISO && (
                <> · Actualizado: {post.dateModifiedISO}</>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-2xl mx-auto">
          <article
            dangerouslySetInnerHTML={{ __html: post.content }}
            className={styles.article}
            style={{
              fontFamily: "var(--font-barlow)",
              color: "#0A0A0A",
              lineHeight: "1.75",
            }}
          />
        </div>
      </section>

      {/* Related content */}
      {relatedPosts.length > 0 && (
        <section className="px-4 py-16 bg-[#F5F1EA]">
          <div className="max-w-2xl mx-auto">
            <p
              className="text-[#FF4500] text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "var(--font-jetbrains-mono)" }}
            >
              También te puede interesar
            </p>
            <ul className="space-y-4">
              {relatedPosts.map((related) => (
                <li key={related.slug} className="border-b border-[#E8E3DA] pb-4">
                  <Link
                    href={`/blog/${related.slug}`}
                    className="text-lg font-bold text-[#0A0A0A] hover:text-[#FF4500] transition-colors"
                    style={{ fontFamily: "var(--font-barlow)" }}
                  >
                    {related.title}
                  </Link>
                  <p className="text-sm text-[#938B82] mt-1">{related.category}</p>
                </li>
              ))}
            </ul>
            {relatedService && (
              <div className="mt-8">
                <p className="text-[#FF4500] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "var(--font-jetbrains-mono)" }}>
                  Servicio relacionado
                </p>
                <TrackedLink
                  href={relatedService.href}
                  event="blog_to_service_click"
                  eventParams={{ service: relatedService.label, article: post.slug }}
                  className="inline-flex items-center gap-2 text-[#0A0A0A] font-bold underline underline-offset-2 hover:text-[#FF4500]"
                >
                  {relatedService.label} →
                </TrackedLink>
              </div>
            )}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="px-4 py-16 bg-[#0A0A0A]">
        <div className="max-w-2xl mx-auto text-center">
          <h3
            className="text-3xl md:text-4xl font-black uppercase text-white mb-4 text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.92" }}
          >
            {relatedService ? `¿Tu empresa tiene este problema?` : "¿Quieres aplicar esto en tu empresa?"}
          </h3>
          <p className="text-[#938B82] mb-8 text-lg" style={{ fontFamily: "var(--font-barlow)" }}>
            Comienza con un diagnóstico comercial personalizado{relatedService ? ` o ${relatedService.ctaLabel.toLowerCase()}.` : "."}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
          <TrackedLink
            href="/diagnostico"
            event="diagnostico_click"
            eventParams={{ article: post.slug }}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4500] text-white font-bold uppercase rounded-lg hover:bg-[#ff5c1a] transition-colors duration-300"
            style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.05em" }}
          >
            Comenzar diagnóstico
          </TrackedLink>
          {relatedService && (
            <TrackedLink
              href={relatedService.href}
              event="blog_to_service_click"
              eventParams={{ service: relatedService.label, article: post.slug }}
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white font-bold uppercase rounded-lg hover:border-[#FF4500] hover:text-[#FF4500] transition-colors duration-300"
              style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.05em" }}
            >
              {relatedService.ctaLabel}
            </TrackedLink>
          )}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
