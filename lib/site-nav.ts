// Datos compartidos del rediseño: navegación, servicios y contacto.
// Mantener aquí los enlaces internos: el menú y el footer los usan en todo el sitio
// y son parte del enlazado interno que sostiene el SEO.

export const SITE = "https://theburn.cl"
// TODO(Jordan): confirmar el correo público. La API de contacto notifica a marketing@theburn.cl.
export const EMAIL = "contacto@theburn.cl"

export type NavLink = { label: string; href: string }

export type ServiceGroup = { id: string; name: string; title: string; body: string; services: NavLink[] }

export const serviceGroups: ServiceGroup[] = [
  {
    id: "01",
    name: "Comercial",
    title: "Ordenar cómo vende tu empresa",
    body: "Definimos qué es una oportunidad calificada, quién la mueve y cuándo avanza. El proceso queda escrito y vive en el CRM, no en la cabeza de tu mejor vendedor.",
    services: [
      { label: "Consultoría comercial", href: "/servicios/consultoria-comercial" },
      { label: "Consultoría comercial B2B", href: "/consultoria-comercial-b2b" },
      { label: "Estrategia comercial", href: "/estrategia-comercial" },
      { label: "Procesos comerciales y CRM", href: "/implementacion-procesos-comerciales" },
    ],
  },
  {
    id: "02",
    name: "Marketing y performance",
    title: "Que lleguen las oportunidades correctas",
    body: "Paid media, landing pages y seguimiento automático conectados a ventas. Medimos contactos, reuniones y propuestas, no solo clics.",
    services: [
      { label: "Marketing y ventas B2B", href: "/agencia-marketing-ventas-b2b" },
      { label: "Funnel digital de performance", href: "/servicios/funnel-digital-performance" },
      { label: "Automatización de marketing", href: "/servicios/automatizacion-marketing" },
      { label: "Automatización comercial", href: "/automatizacion-comercial" },
    ],
  },
  {
    id: "03",
    name: "Datos y operaciones",
    title: "Decidir con números, no con corazonadas",
    body: "Dashboards en Power BI con tus márgenes, stock, pipeline y conversión. Y cuando el problema está en la operación, lo medimos con Lean Six Sigma.",
    services: [
      { label: "Business Intelligence y Power BI", href: "/servicios/business-intelligence-power-bi" },
      { label: "Power BI para ventas", href: "/power-bi-ventas" },
      { label: "Consultoría operacional Lean Six Sigma", href: "/servicios/consultoria-operacional" },
    ],
  },
]

export const mainNav: NavLink[] = [
  { label: "Método", href: "/#metodo" },
  { label: "Diagnóstico", href: "/diagnostico" },
  { label: "Casos", href: "/casos" },
  { label: "Blog", href: "/blog" },
]

export const footerNav: { label: string; links: NavLink[] }[] = [
  {
    label: "Empresa",
    links: [
      { label: "Inicio", href: "/" },
      { label: "Diagnóstico comercial", href: "/diagnostico" },
      { label: "Diagnóstico exprés", href: "/diagnostico-expres" },
      { label: "Casos", href: "/casos" },
      { label: "Blog", href: "/blog" },
      { label: "Contacto", href: "/contacto" },
    ],
  },
  {
    label: "Consultoría B2B",
    links: [
      { label: "Consultora comercial en Santiago", href: "/consultora-comercial-santiago" },
      ...serviceGroups[0].services,
    ],
  },
  {
    label: "Marketing y datos",
    links: [...serviceGroups[1].services, ...serviceGroups[2].services],
  },
]
