import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPostBySlug, blogPosts } from "@/lib/blog-posts"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"
import { ChevronLeft } from "lucide-react"
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

  return {
    title: `${post.title} | The Burn Blog`,
    description: post.metaDescription,
    openGraph: {
      title: post.title,
      description: post.metaDescription,
    },
  }
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = getBlogPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <GlassmorphismNav />

      {/* Article Header */}
      <section className="bg-[#F5F1EA] px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#938B82] hover:text-[#0A0A0A] transition-colors mb-6"
            style={{ fontFamily: "var(--font-jetbrains-mono)", fontSize: "12px" }}
          >
            <ChevronLeft size={16} />
            Blog
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
              {post.author} · {post.authorRole}
            </div>
            <div>{post.date}</div>
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

      {/* CTA Section */}
      <section className="px-4 py-16 bg-[#0A0A0A]">
        <div className="max-w-2xl mx-auto text-center">
          <h3
            className="text-3xl md:text-4xl font-black uppercase text-white mb-4 text-balance"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.92" }}
          >
            ¿Quieres aplicar esto en tu empresa?
          </h3>
          <p className="text-[#938B82] mb-8 text-lg" style={{ fontFamily: "var(--font-barlow)" }}>
            Comienza con un diagnóstico comercial personalizado.
          </p>
          <Link
            href="/diagnostico"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#FF4500] text-white font-bold uppercase rounded-lg hover:bg-[#ff5c1a] transition-colors duration-300"
            style={{ fontFamily: "var(--font-barlow-condensed)", letterSpacing: "0.05em" }}
          >
            Comenzar diagnóstico
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
