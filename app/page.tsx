import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { SiteHeader } from "@/components/site/header"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/site/reveal"
import { Hero } from "@/components/home/hero"
import { RouteMethod } from "@/components/home/route-method"
import { BurnSection } from "@/components/home/burn-section"
import { ContactFormHome } from "@/components/home/contact-form-home"
import { serviceGroups } from "@/lib/site-nav"

export const metadata: Metadata = {
  title: "Consultora Comercial B2B en Chile | The Burn",
  description:
    "Conectamos estrategia comercial, marketing, ventas y datos para empresas B2B en Chile. Diagnóstico de 3 semanas con un roadmap claro de implementación.",
  alternates: {
    canonical: "https://theburn.cl",
  },
}

const phrases = [
  "Sin humo. Sin jerga.",
  "Lo que no se mide, no mejora.",
  "Estrategia sin ejecución es solo un PDF.",
  "Decide con datos.",
  "Una consultora que también ejecuta.",
  "Menos bla, más marketing.",
]

const before = [
  "Las decisiones se toman por intuición",
  "No hay métricas de pipeline ni de conversión",
  "Ventas trabaja sin un proceso definido",
  "El presupuesto de marketing no tiene trazabilidad",
]

const after = [
  "Cada decisión se apoya en números de tu negocio",
  "Dashboard con márgenes, stock y pipeline",
  "Un funnel digital que genera y califica leads",
  "Un proceso comercial que no depende de una sola persona",
]

// TODO(Jordan): reemplazar por casos reales documentados. Son plantillas de los casos que conviene crear.
const cases = [
  {
    area: "Comercial",
    who: "Distribuidora industrial · 40 personas",
    from: "Las ventas dependían de dos vendedores senior. Nadie sabía cuántas cotizaciones se perdían ni por qué.",
    did: "Definimos las etapas del pipeline, ordenamos el CRM y armamos una reunión semanal con métricas.",
    result: "[Dato por medir: tasa de cierre antes y después]",
  },
  {
    area: "Marketing y performance",
    who: "Empresa de software B2B",
    from: "Mucho tráfico pagado y pocas reuniones. Marketing y ventas medían cosas distintas.",
    did: "Landing por segmento, criterio común de lead calificado y seguimiento automático.",
    result: "[Dato por medir: costo por reunión calificada]",
  },
  {
    area: "Datos y operaciones",
    who: "Importadora con tres sucursales",
    from: "El margen por producto se calculaba a mano en Excel, una vez al mes y con retraso.",
    did: "Dashboard en Power BI con márgenes, stock y pipeline, actualizado todos los días.",
    result: "[Dato por medir: horas ahorradas y decisiones de precio]",
  },
]

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-widest text-smoke uppercase">
      Bitácora {n} · {children}
    </p>
  )
}

export default function HomePage() {
  return (
    <div data-tb className="bg-cream">
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-cream"
      >
        Saltar al contenido
      </a>
      <SiteHeader transparentAtTop ctaHref="#contacto" />

      <main id="contenido">
        <Hero />

        {/* Cinta de frases */}
        <div className="overflow-hidden border-y border-ink bg-ink py-4 text-cream" aria-hidden>
          <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
            {[...phrases, ...phrases].map((p, i) => (
              <span key={i} className="flex items-center gap-10 font-heading text-2xl font-bold tracking-wide uppercase">
                {p}
                <span className="size-1.5 rounded-full bg-burn" />
              </span>
            ))}
          </div>
        </div>

        {/* El problema */}
        <section aria-labelledby="problema-title" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <Reveal>
                <SectionLabel n="01">El problema</SectionLabel>
                <h2 id="problema-title" className="mt-5 font-heading text-title font-extrabold uppercase">
                  Tu empresa vende. <span className="text-ink/55">Pero no sabe exactamente por qué.</span>
                </h2>
              </Reveal>
              <Reveal index={1} className="self-end">
                <p className="text-lead text-ink/80">
                  Sin datos claros, sin proceso y sin un funnel que funcione solo, cada venta depende del esfuerzo de
                  una persona. Eso no escala. Y cuando esa persona se va, se lleva el pipeline con ella.
                </p>
              </Reveal>
            </div>

            <div className="mt-16 grid overflow-hidden rounded-lg border border-chart-line md:grid-cols-2">
              <Reveal className="bg-paper p-6 md:p-10">
                <p className="font-mono text-xs tracking-widest text-smoke uppercase">Navegar a la vista</p>
                <p className="mt-3 font-heading text-5xl font-extrabold text-ink/55 uppercase">Intuición</p>
                <ul className="mt-8 grid gap-4">
                  {before.map((b) => (
                    <li key={b} className="flex gap-4 text-ink/70">
                      <span aria-hidden className="mt-2.5 h-px w-4 shrink-0 bg-ink/40" />
                      {b}
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal index={1} className="chart-grid border-t border-chart-line p-6 md:border-t-0 md:border-l md:p-10">
                <p className="font-mono text-xs tracking-widest text-burn-text uppercase">Navegar con carta · The Burn</p>
                <p className="mt-3 font-heading text-5xl font-extrabold uppercase">Datos</p>
                <ul className="mt-8 grid gap-4">
                  {after.map((a) => (
                    <li key={a} className="flex gap-4">
                      <span aria-hidden className="mt-2 size-2 shrink-0 rounded-full bg-burn" />
                      {a}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <dl className="mt-16 grid grid-cols-3 gap-4 border-t border-chart-line pt-8">
              {[
                ["3", "semanas de diagnóstico"],
                ["90", "días de roadmap"],
                ["1", "equipo: estrategia, marketing y datos"],
              ].map(([n, l], i) => (
                <Reveal key={l} index={i}>
                  <dt className="sr-only">{l}</dt>
                  <dd>
                    <span className="block font-heading text-6xl font-extrabold md:text-8xl">{n}</span>
                    <span className="mt-1 block font-mono text-[11px] tracking-widest text-smoke uppercase md:text-xs">
                      {l}
                    </span>
                  </dd>
                </Reveal>
              ))}
            </dl>
          </div>
        </section>

        {/* Método */}
        <section
          id="metodo"
          aria-labelledby="metodo-title"
          className="scroll-mt-16 overflow-x-clip border-t border-chart-line bg-paper py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <Reveal>
                <SectionLabel n="02">La ruta</SectionLabel>
                <h2 id="metodo-title" className="mt-5 font-heading text-title font-extrabold uppercase">
                  Tres fases. <span className="text-burn">Un sistema</span> que crece contigo.
                </h2>
              </Reveal>
              <Reveal index={1} className="self-end">
                <p className="text-lead text-ink/80">
                  Primero entendemos tu negocio. Después implementamos. Después acompañamos. Del diagnóstico a un
                  sistema funcionando, sin que dependas de nosotros para siempre.
                </p>
              </Reveal>
            </div>
            <div className="mt-14 md:mt-20">
              <RouteMethod />
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" aria-labelledby="servicios-title" className="scroll-mt-16 py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal className="max-w-3xl">
              <SectionLabel n="03">Servicios</SectionLabel>
              <h2 id="servicios-title" className="mt-5 font-heading text-title font-extrabold uppercase">
                Consultoría comercial y marketing B2B. En un solo equipo.
              </h2>
            </Reveal>

            <div className="mt-16 border-t border-ink">
              {serviceGroups.map((g, i) => (
                <Reveal
                  key={g.id}
                  as="article"
                  index={i}
                  className="grid gap-6 border-b border-chart-line py-10 md:grid-cols-[5rem_1.2fr_1fr] md:gap-10 md:py-14"
                >
                  <p className="font-mono text-sm text-burn-text">{g.id}</p>
                  <div>
                    <p className="font-mono text-xs tracking-widest text-smoke uppercase">{g.name}</p>
                    <h3 className="mt-3 font-heading text-4xl font-extrabold uppercase md:text-5xl">{g.title}</h3>
                    <p className="mt-4 max-w-lg text-ink/80">{g.body}</p>
                  </div>
                  <ul className="self-end">
                    {g.services.map((s) => (
                      <li key={s.href} className="border-t border-chart-line first:border-t-0">
                        <Link
                          href={s.href}
                          className="group flex min-h-12 items-center justify-between gap-4 py-3 font-medium transition-colors duration-150 hover:text-burn-text"
                        >
                          {s.label}
                          <ArrowUpRight aria-hidden className="tb-nudge size-4 shrink-0" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Casos */}
        <section
          id="casos"
          aria-labelledby="casos-title"
          className="chart-grid scroll-mt-16 border-t border-chart-line py-24 md:py-32"
        >
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <Reveal>
                <SectionLabel n="04">Casos</SectionLabel>
                <h2 id="casos-title" className="mt-5 font-heading text-title font-extrabold uppercase">
                  Lo que cambia cuando hay carta de navegación.
                </h2>
              </Reveal>
              <Reveal index={1} className="self-end">
                <p className="text-lead text-ink/80">
                  Cada caso parte igual: dónde estaba la empresa, qué hicimos y qué número se movió.
                </p>
                <Link
                  href="/casos"
                  className="group mt-5 inline-flex min-h-11 items-center gap-2 font-mono text-xs tracking-wider uppercase underline decoration-ink/30 underline-offset-4 transition-colors duration-150 hover:text-burn-text"
                >
                  Ver todos los casos
                  <ArrowUpRight aria-hidden className="tb-nudge size-3.5" />
                </Link>
              </Reveal>
            </div>

            <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-chart-line bg-chart-line lg:grid-cols-3">
              {cases.map((c, i) => (
                <Reveal key={c.who} as="li" index={i} className="flex flex-col bg-cream p-6 md:p-8">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-xs tracking-widest text-smoke uppercase">
                      Caso 0{i + 1} · {c.area}
                    </span>
                    <span className="rounded-full border border-dashed border-burn-text px-2.5 py-1 font-mono text-[10px] tracking-wider text-burn-text uppercase">
                      Ejemplo
                    </span>
                  </div>
                  <h3 className="mt-6 font-heading text-3xl font-extrabold uppercase">{c.who}</h3>
                  <dl className="mt-6 grid gap-5 text-sm">
                    <div>
                      <dt className="font-mono text-[11px] tracking-widest text-smoke uppercase">Punto de partida</dt>
                      <dd className="mt-1.5 text-ink/80">{c.from}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[11px] tracking-widest text-smoke uppercase">Qué hicimos</dt>
                      <dd className="mt-1.5 text-ink/80">{c.did}</dd>
                    </div>
                  </dl>
                  <div className="mt-auto pt-8">
                    <p className="border-t border-ink pt-4 font-mono text-xs leading-relaxed text-ink">{c.result}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <BurnSection />

        {/* Contacto */}
        <section id="contacto" aria-labelledby="contacto-title" className="scroll-mt-16 py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal>
              <SectionLabel n="06">Hablemos</SectionLabel>
              <h2 id="contacto-title" className="mt-5 font-heading text-title font-extrabold uppercase">
                Sin humo.
                <span className="block">Sin jerga.</span>
              </h2>
              <p className="mt-6 max-w-md text-lead text-ink/80">
                Cuéntanos tu caso. Te respondemos en menos de 24 horas hábiles, con una persona del equipo y no con
                un bot.
              </p>
              <p className="mt-6 max-w-md text-ink/80">
                ¿Todavía no sabes por dónde empezar?{" "}
                <Link
                  href="/diagnostico-expres"
                  className="font-medium underline decoration-burn underline-offset-4 transition-colors duration-150 hover:text-burn-text"
                >
                  Haz el diagnóstico exprés
                </Link>
                : 3 minutos y te dice dónde están los puntos ciegos.
              </p>
              <p className="mt-8 font-mono text-xs tracking-widest text-smoke uppercase">
                Santiago, Chile · 33°27′S 70°40′W
              </p>
            </Reveal>
            <Reveal index={1}>
              <ContactFormHome />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
