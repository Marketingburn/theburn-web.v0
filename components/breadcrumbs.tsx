import Link from "next/link"
import { ChevronRight } from "lucide-react"

type BreadcrumbItem = {
  name: string
  href?: string
}

/**
 * Lightweight visible breadcrumb trail. Pair with BreadcrumbSchema for the
 * matching JSON-LD (visible copy and schema data must stay in sync).
 */
export function Breadcrumbs({ items, className = "" }: { items: BreadcrumbItem[]; className?: string }) {
  return (
    <nav aria-label="Breadcrumb" className={className}>
      <ol className="flex flex-wrap items-center gap-1.5 text-xs">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <li key={`${item.name}-${index}`} className="flex items-center gap-1.5">
              {item.href && !isLast ? (
                <Link href={item.href} className="text-[#938B82] hover:text-[#0A0A0A] transition-colors">
                  {item.name}
                </Link>
              ) : (
                <span aria-current={isLast ? "page" : undefined} className="text-[#938B82]">
                  {item.name}
                </span>
              )}
              {!isLast && <ChevronRight size={12} className="text-[#938B82]/60" />}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
