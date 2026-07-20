import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnóstico Gratis - 3 Cupos Limitados | The Burn',
  description: 'Buscamos 3 dueños de empresa que quieran ordenar y escalar. Diagnóstico comercial gratis de 30 min, sin compromiso.',
  robots: 'index, follow',
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
