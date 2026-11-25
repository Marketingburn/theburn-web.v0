import Link from "next/link"
import { Logo } from "@/components/site/logo"
import { EMAIL, footerNav } from "@/lib/site-nav"

// Footer del rediseño. Se mantiene el nombre `Footer` porque lo importan todas las páginas.
export function Footer() {
  return (
    <footer data-tb className="border-t border-ink bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Logo className="text-cream" />
          <p className="mt-6 font-heading text-4xl font-extrabold uppercase md:text-5xl">
            Menos bla,
            <span className="block text-burn">más marketing.</span>
          </p>
          <ul className="mt-8 grid gap-1">
            <li>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex min-h-11 items-center text-cream/85 transition-colors duration-150 hover:text-burn"
              >
                {EMAIL}
              </a>
            </li>
            {/* TODO(Jordan): agregar las URL reales de LinkedIn e Instagram */}
          </ul>
        </div>

        <div className="grid gap-10 sm:grid-cols-3">
          {footerNav.map((section) => (
            <nav key={section.label} aria-label={section.label}>
              <p className="font-mono text-xs tracking-widest text-cream/60 uppercase">{section.label}</p>
              <ul className="mt-4 grid">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="inline-flex min-h-10 items-center py-1 text-[15px] leading-snug text-cream/80 transition-colors duration-150 hover:text-burn"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </div>
      <div className="border-t border-cream/10">
        <p className="mx-auto max-w-7xl px-5 py-6 font-mono text-[11px] tracking-widest text-cream/60 uppercase md:px-8">
          © {new Date().getFullYear()} The Burn SpA · Santiago, Chile
        </p>
      </div>
    </footer>
  )
}
