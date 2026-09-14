import { blogPosts } from "@/lib/blog-posts"

const baseUrl = "https://theburn.cl"

function escapeXml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}

export async function GET() {
  const sortedPosts = [...blogPosts].sort((a, b) => (a.dateISO < b.dateISO ? 1 : -1))

  const items = sortedPosts
    .map((post) => {
      const url = `${baseUrl}/blog/${post.slug}`
      const pubDate = new Date(post.dateModifiedISO || post.dateISO).toUTCString()
      return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(post.metaDescription)}</description>
      <author>${escapeXml(post.author)}</author>
      <category>${escapeXml(post.category)}</category>
      <pubDate>${pubDate}</pubDate>
    </item>`
    })
    .join("\n")

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>The Burn Blog</title>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Recursos sobre consultoría comercial B2B, procesos de ventas, marketing y Business Intelligence en Chile.</description>
    <language>es-CL</language>
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
    },
  })
}
