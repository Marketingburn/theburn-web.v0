type BreadcrumbItem = {
  name: string
  path: string
}

/**
 * Renders BreadcrumbList JSON-LD for a page. `path` is relative to
 * https://theburn.cl (e.g. "" for the home page, "/servicios/diagnostico").
 * Works in both server and client components since it's a plain <script> tag.
 */
export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://theburn.cl${item.path}`,
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
