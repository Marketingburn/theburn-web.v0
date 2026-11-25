import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Scramble } from "@/components/site/scramble";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="chart-grid relative isolate overflow-hidden pt-28 md:pt-32"
    >
      {/* Bruma y luz de amanecer */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="fog absolute top-[8%] right-[-10%] h-[70%] w-[75%] rounded-full bg-[radial-gradient(closest-side,rgb(255_69_0/0.13),transparent)]" />
        <div className="fog absolute top-[30%] left-[-20%] h-[60%] w-[90%] rounded-full bg-[radial-gradient(closest-side,rgb(255_255_255/0.85),transparent)] [animation-delay:-9s]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-cream to-transparent" />
      </div>

      {/* Coordenadas en los bordes */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-24 right-5 hidden flex-col items-end gap-1 font-mono text-[11px] tracking-widest text-smoke uppercase md:flex md:right-8"
      >
        <Scramble text="LAT 33°27′S" delay={600} />
        <Scramble text="LON 70°40′W" delay={750} />
        <Scramble text="RUMBO → CLIENTES" delay={900} />
      </div>

      <div className="mx-auto grid max-w-7xl items-end gap-8 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-4">
        <div className="relative z-10 pb-4 lg:pb-24">
          <h1 id="hero-title" className="flex flex-col gap-5">
            <span className="flex items-center gap-3 font-mono text-xs tracking-widest text-ink/80 uppercase">
              <span aria-hidden className="inline-block size-2 rounded-full bg-burn" />
              <span className="hero-fade [animation-delay:100ms]">Consultoría comercial y marketing B2B en Chile</span>
            </span>
            <span className="block font-heading text-display font-extrabold uppercase">
              <span className="hero-line block" style={{ ["--i" as string]: 0 }}>
                Quema
              </span>
              <span className="hero-line block" style={{ ["--i" as string]: 1 }}>
                los <span className="text-burn">barcos.</span>
              </span>
            </span>
          </h1>

          <p className="hero-fade mt-6 max-w-[34rem] text-lead text-ink/80">
            Conectamos marketing, ventas y datos para que tu equipo sepa qué oportunidades llegan, cuáles
            avanzan y cuáles se convierten en clientes. Para dejar de vender por intuición, sin vuelta atrás.
          </p>

          <div className="hero-fade mt-8 flex flex-wrap items-center gap-3 [animation-delay:500ms]">
            <a
              href="#contacto"
              className="btn-press group inline-flex h-13 items-center gap-2 rounded-full bg-burn px-7 font-heading text-lg font-bold tracking-wide text-ink uppercase hover:bg-ink hover:text-cream"
            >
              Agendar Diagnóstico
              <ArrowRight aria-hidden className="tb-nudge-x size-5 transition-transform duration-200" />
            </a>
            <a
              href="#metodo"
              className="btn-press inline-flex h-13 items-center rounded-full border border-ink/20 px-7 font-heading text-lg font-bold tracking-wide uppercase hover:border-ink"
            >
              Ver el método
            </a>
          </div>

          <p className="hero-fade mt-6 font-mono text-xs tracking-wider text-smoke uppercase [animation-delay:650ms]">
            Diagnóstico de 3 semanas · $500.000 + IVA
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-2xl lg:-mr-16 lg:max-w-none">
          <div className="ship-emerge mix-blend-multiply">
            <div className="ship-bob ship-mask relative">
              <Image
                src="/images/galeon-calma.jpg"
                alt="Galeón español del siglo XVII navegando entre la bruma al amanecer, con la cruz de Borgoña en la vela mayor"
                width={1536}
                height={1024}
                priority
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
          {/* Bruma que pasa por delante de la línea de flotación */}
          <div aria-hidden className="pointer-events-none absolute inset-x-0 bottom-[6%] h-1/3">
            <div className="fog absolute inset-0 bg-[radial-gradient(60%_50%_at_40%_60%,rgb(245_241_234/0.9),transparent)]" />
            <div className="fog absolute inset-0 bg-[radial-gradient(45%_40%_at_75%_70%,rgb(255_255_255/0.6),transparent)] [animation-delay:-13s]" />
          </div>
        </div>
      </div>
    </section>
  );
}
