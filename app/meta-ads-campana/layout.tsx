import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnóstico Gratis - 3 Cupos Limitados | The Burn',
  description: 'Buscamos 3 dueños de empresa que quieran ordenar y escalar. Diagnóstico comercial gratis de 30 min, sin compromiso.',
  // Landing exclusiva para tráfico pagado de Meta Ads: se mantiene fuera del
  // índice para no competir con /diagnostico-expres por las mismas keywords.
  robots: 'noindex, follow',
  alternates: {
    canonical: 'https://theburn.cl/meta-ads-campana',
  },
  openGraph: {
    title: 'Diagnóstico Gratis - 3 Cupos Limitados | The Burn',
    description: 'Buscamos 3 dueños de empresa que quieran ordenar y escalar. Diagnóstico comercial gratis.',
    type: 'website',
    locale: 'es_CL',
  },
}

export default function MetaAdsCampanaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
