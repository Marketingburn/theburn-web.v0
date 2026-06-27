import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/blog-posts"
import { GlassmorphismNav } from "@/components/glassmorphism-nav"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "Blog | The Burn - Marketing B2B y Estrategia Comercial Chile",
  description: "Recursos para crecer sin humo. Artículos sobre diagnóstico comercial, Power BI, funnels digitales y estrategia B2B en Chile.",
  openGraph: {
    title: "Blog | The Burn - Marketing B2B y Estrategia Comercial Chile",
    description: "Recursos para crecer sin humo. Artículos sobre diagnóstico comercial, Power BI, funnels digitales y estrategia B2B en Chile.",
  },
}

export default function BlogPage() {
  return (
    <>
      <GlassmorphismNav />
      <h1 className="sr-only">Blog de Marketing B2B y Estrategia Comercial Chile</h1>

      {/* Hero Section */}
      <section className="min-h-[400px] flex items-center justify-center px-4 py-24 bg-[#F5F1EA]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white border border-[#E8E3DA] text-[#938B82] text-sm mb-6 mx-auto"
            style={{ fontFamily: "var(--font-jetbrains-mono)", letterSpacing: "0.05em" }}
          >
            <span className="w-2 h-2 bg-[#FF4500] rounded-sm mr-2 flex-shrink-0" />
            BLOG · THE BURN
          </div>

          {/* Title */}
          <h2
            className="text-4xl md:text-6xl font-black uppercase text-[#0A0A0A] text-balance leading-tight mb-6"
            style={{ fontFamily: "var(--font-barlow-condensed)", lineHeight: "0.92" }}
          >
            Recursos para crecer sin humo.
          </h2>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-4 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <article className="group h-full p-6 rounded-2xl border border-[#E8E3DA] bg-white hover:border-[#FF4500]/30 transition-all duration-300 cursor-pointer hover:shadow-lg">
                  {/* Category Badge */}
                  <div
                    className="inline-block px-2.5 py-1 rounded-full text-[#FF4500] text-xs font-semibold mb-4"
                    style={{
                      backgroundColor: "#F5F1EA",
                      fontFamily: "var(--font-jetbrains-mono)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {post.category}
                  </div>

                  {/* Title */}
                  <h3
                    className="text-lg font-bold uppercase text-[#0A0A0A] mb-3 leading-tight group-hover:text-[#FF4500] transition-colors duration-300"
                    style={{ fontFamily: "var(--font-barlow-condensed)" }}
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[#938B82] mb-4 line-clamp-2" style={{ fontFamily: "var(--font-barlow)" }}>
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div
                    className="flex flex-col gap-1 text-xs text-[#938B82] border-t border-[#E8E3DA] pt-4"
                    style={{ fontFamily: "var(--font-jetbrains-mono)" }}
                  >
                    <div>{post.author}</div>
                    <div>{post.date}</div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
