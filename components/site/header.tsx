"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react"
import { Logo } from "@/components/site/logo"
import { mainNav, serviceGroups } from "@/lib/site-nav"
import { cn } from "@/lib/utils"

type HeaderProps = {
  /** Fondo transparente mientras no hay scroll (solo en páginas con hero claro). */
  transparentAtTop?: boolean
  /** Destino del botón principal. En el home baja al formulario. */
  ctaHref?: string
}

export function SiteHeader({ transparentAtTop = false, ctaHref = "/diagnostico" }: HeaderProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  // Cerrar menús al cambiar de página
  useEffect(() => {
    setServicesOpen(false)
    setMenuOpen(false)
  }, [pathname])

  // Desplegable de servicios: cerrar con clic afuera o Escape
  useEffect(() => {
    if (!servicesOpen) return
    const onPointer = (e: PointerEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false)
        servicesRef.current?.querySelector("button")?.focus()
      }
    }
    document.addEventListener("pointerdown", onPointer)
    document.addEventListener("keydown", onKey)
    return () => {
      document.removeEventListener("pointerdown", onPointer)
      document.removeEventListener("keydown", onKey)
    }
  }, [servicesOpen])

  const solid = !transparentAtTop || scrolled || servicesOpen
  const linkClass =
    "font-mono text-xs tracking-wider text-ink/75 uppercase transition-colors duration-150 hover:text-ink"

  return (
    <header
      data-tb
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-200",
        solid ? "border-chart-line bg-cream/90 backdrop-blur-md" : "border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Logo />

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          <div ref={servicesRef} className="relative">
            <button
              type="button"
              aria-expanded={servicesOpen}
              aria-controls="menu-servicios"
              onClick={() => setServicesOpen((v) => !v)}
              className={cn(linkClass, "inline-flex h-10 cursor-pointer items-center gap-1")}
            >
              Servicios
              <ChevronDown
                aria-hidden
                className={cn("size-3.5 transition-transform duration-200", servicesOpen && "rotate-180")}
              />
            </button>

            <div
              id="menu-servicios"
              data-open={servicesOpen}
              className="tb-pop absolute top-full left-[-1.5rem] mt-3 w-[54rem] overflow-hidden rounded-lg border border-chart-line bg-paper shadow-[0_24px_48px_-24px_rgb(10_10_10/0.35)]"
            >
              <div className="grid grid-cols-3 gap-px bg-chart-line">
                {serviceGroups.map((g) => (
                  <div key={g.id} className="bg-paper p-5">
                    <p className="font-mono text-[11px] tracking-widest text-smoke uppercase">
                      {g.id} · {g.name}
                    </p>
                    <ul className="mt-3">
                      {g.services.map((s) => (
                        <li key={s.href}>
                          <Link
                            href={s.href}
                            tabIndex={servicesOpen ? undefined : -1}
                            className="group flex min-h-10 items-center justify-between gap-3 py-1.5 text-[15px] leading-snug font-medium transition-colors duration-150 hover:text-burn-text"
                          >
                            {s.label}
                            <ArrowUpRight aria-hidden className="tb-nudge size-3.5 shrink-0" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <Link
                href="/diagnostico"
                tabIndex={servicesOpen ? undefined : -1}
                className="group flex items-center justify-between border-t border-chart-line bg-ink px-5 py-4 text-cream"
              >
                <span>
                  <span className="block font-heading text-xl font-bold tracking-wide uppercase">
                    Diagnóstico comercial
                  </span>
                  <span className="font-mono text-[11px] tracking-widest text-cream/65 uppercase">
                    3 semanas · $500.000 + IVA
                  </span>
                </span>
                <ArrowUpRight aria-hidden className="tb-nudge size-4 text-burn" />
              </Link>
            </div>
          </div>

          {mainNav.map((item) => (
            <Link key={item.href} href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href={ctaHref}
            className="btn-press hidden h-10 items-center rounded-full bg-burn px-5 font-heading text-base font-bold tracking-wide text-ink uppercase hover:bg-ink hover:text-cream sm:inline-flex"
          >
            Agendar Diagnóstico
          </Link>

          <Dialog.Root open={menuOpen} onOpenChange={setMenuOpen}>
            <Dialog.Trigger
              className="btn-press inline-flex size-11 items-center justify-center rounded-full border border-ink/15 lg:hidden"
              aria-label="Abrir menú"
            >
              <Menu className="size-5" aria-hidden />
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="tb-overlay fixed inset-0 z-[10000] bg-ink/40" />
              <Dialog.Content
                data-tb
                className="tb-sheet fixed inset-y-0 right-0 z-[10001] flex w-[88vw] max-w-sm flex-col overflow-y-auto border-l border-chart-line bg-cream"
              >
                <Dialog.Title className="sr-only">Menú</Dialog.Title>
                <Dialog.Description className="sr-only">Navegación principal de The Burn</Dialog.Description>
                <div className="flex h-16 shrink-0 items-center justify-between px-6">
                  <span className="font-mono text-xs tracking-widest text-smoke uppercase">Menú</span>
                  <Dialog.Close
                    className="btn-press inline-flex size-11 items-center justify-center rounded-full border border-ink/15"
                    aria-label="Cerrar menú"
                  >
                    <X className="size-5" aria-hidden />
                  </Dialog.Close>
                </div>

                <nav aria-label="Menú móvil" className="chart-grid flex flex-1 flex-col px-6 pb-8">
                  {mainNav.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline gap-4 border-b border-chart-line py-4 font-heading text-4xl font-extrabold uppercase"
                    >
                      <span className="font-mono text-xs font-normal text-smoke">0{i + 1}</span>
                      {item.label}
                    </Link>
                  ))}

                  <p className="mt-8 font-mono text-xs tracking-widest text-smoke uppercase">Servicios</p>
                  <ul className="mt-2">
                    {serviceGroups.flatMap((g) => g.services).map((s) => (
                      <li key={s.href}>
                        <Link
                          href={s.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex min-h-11 items-center border-b border-chart-line/70 py-2 font-medium"
                        >
                          {s.label}
                        </Link>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={ctaHref}
                    onClick={() => setMenuOpen(false)}
                    className="btn-press mt-8 inline-flex h-14 shrink-0 items-center justify-center rounded-full bg-burn font-heading text-lg font-bold tracking-wide text-ink uppercase"
                  >
                    Agendar Diagnóstico
                  </Link>
                </nav>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  )
}
