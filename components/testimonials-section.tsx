import Link from "next/link"

const services = [
  { title: "Consultoría comercial B2B", href: "/consultoria-comercial-b2b", text: "Define qué es una oportunidad calificada y cómo coordinar marketing y ventas durante el ciclo comercial." },
  { title: "Implementación de procesos comerciales", href: "/implementacion-procesos-comerciales", text: "Ordena etapas, responsables, criterios de avance y seguimiento en el CRM de tu equipo." },
  { title: "Automatización comercial", href: "/automatizacion-comercial", text: "Conecta formularios, asignación de leads, tareas y alertas con un proceso definido." },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-[#0A0A0A] px-6 py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <p className="mb-5 text-xs uppercase tracking-widest text-[#FF4500]">Marketing, ventas y datos</p>
        <h2 className="mb-6 text-4xl font-black uppercase md:text-6xl" style={{ fontFamily: "var(--font-barlow-condensed)" }}>Conecta la captación con el cierre comercial.</h2>
        <p className="mb-10 max-w-2xl leading-7 text-[#b8b0a7]">Revisamos dónde se pierden oportunidades y qué necesita tu equipo para gestionarlas. Desde la definición del cliente ideal hasta el seguimiento de propuestas.</p>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map(service => (
            <article key={service.href} className="rounded-2xl border border-[#2A2725] p-6">
              <h3 className="mb-4 text-2xl font-bold" style={{ fontFamily: "var(--font-barlow-condensed)" }}><Link href={service.href} className="hover:text-[#FF4500]">{service.title}</Link></h3>
              <p className="text-sm leading-7 text-[#b8b0a7]">{service.text}</p>
            </article>
          ))}
        </div>
        <Link href="/diagnostico" className="mt-10 inline-flex rounded-full bg-[#FF4500] px-6 py-3 font-bold text-white">Conocer el diagnóstico: 3 semanas · $500.000 + IVA</Link>
      </div>
    </section>
  )
}
