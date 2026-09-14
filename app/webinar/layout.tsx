import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'De Sell Out a Prioridades Comerciales | The Burn',
  description: 'Taller Ejecutivo online para transformar datos de clientes, productos, ventas y stock en prioridades concretas.',
  alternates: {
    canonical: 'https://theburn.cl/webinar',
  },
  openGraph: {
    title: 'De Sell Out a Prioridades Comerciales | The Burn',
    description: 'Martes 8 de septiembre de 2026 · 20:00 hrs · Online · Hora Chile',
    type: 'website',
    locale: 'es_CL',
  },
}

export default function WebinarLayout({ children }: { children: React.ReactNode }) {
  return children
}
