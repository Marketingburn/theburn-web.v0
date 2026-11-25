import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export const LEAD =
  "Conectamos marketing, ventas y datos para que tu equipo sepa qué oportunidades llegan, cuáles avanzan y cuáles se convierten en clientes. Para dejar de vender por intuición, sin vuelta atrás."

export function Kicker({ className, dark = false }: { className?: string; dark?: boolean }) {
  return (
    <span
      className={cn(
        "flex items-center gap-3 font-mono text-xs tracking-widest uppercase",
        dark ? "text-cream/80" : "text-ink/80",
        className,
      )}
    >
      <span aria-hidden className="inline-block size-2 rounded-full bg-burn" />
      Consultoría comercial y marketing B2B en Chile
    </span>
  )
}

export function Ctas({ dark = false, className }: { dark?: boolean; className?: string }) {
  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)}>
      <a
        href="#contacto"
        className={cn(
          "btn-press group inline-flex h-13 items-center gap-2 rounded-full bg-burn px-7 font-heading text-lg font-bold tracking-wide text-ink uppercase",
          dark ? "hover:bg-cream" : "hover:bg-ink hover:text-cream",
        )}
      >
        Agendar Diagnóstico
        <ArrowRight aria-hidden className="tb-nudge-x size-5 transition-transform duration-200" />
      </a>
      <a
        href="#metodo"
        className={cn(
          "btn-press inline-flex h-13 items-center rounded-full border px-7 font-heading text-lg font-bold tracking-wide uppercase",
          dark ? "border-cream/30 text-cream hover:border-cream" : "border-ink/20 hover:border-ink",
        )}
      >
        Ver el método
      </a>
    </div>
  )
}

const phrases = [
  "Sin humo. Sin jerga.",
  "Lo que no se mide, no mejora.",
  "Estrategia sin ejecución es solo un PDF.",
  "Decide con datos.",
  "Menos bla, más marketing.",
]

/** Lo que viene después del hero, para juzgar la transición en contexto real. */
export function Aftermath() {
  return (
    <>
      <div className="relative z-10 overflow-hidden border-y border-ink bg-ink py-4 text-cream" aria-hidden>
        <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
          {[...phrases, ...phrases].map((p, i) => (
            <span key={i} className="flex items-center gap-10 font-heading text-2xl font-bold tracking-wide uppercase">
              {p}
              <span className="size-1.5 rounded-full bg-burn" />
            </span>
          ))}
        </div>
      </div>
      <section id="metodo" className="relative z-10 bg-cream py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
          <div>
            <p className="font-mono text-xs tracking-widest text-smoke uppercase">Bitácora 01 · El problema</p>
            <h2 className="mt-5 font-heading text-title font-extrabold uppercase">
              Tu empresa vende. <span className="text-ink/55">Pero no sabe exactamente por qué.</span>
            </h2>
          </div>
          <p className="self-end text-lead text-ink/80">
            Sin datos claros, sin proceso y sin un funnel que funcione solo, cada venta depende del esfuerzo de una
            persona. Eso no escala. Y cuando esa persona se va, se lleva el pipeline con ella.
          </p>
        </div>
        <div id="contacto" className="h-[40vh]" />
      </section>
    </>
  )
}
