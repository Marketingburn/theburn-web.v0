import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Automatización de Marketing Chile | Nurturing y Leads B2B | The Burn",
  description:
    "Implementamos flujos automáticos de nurturing, seguimiento y calificación de leads por email y WhatsApp. Tu equipo cierra; el sistema prospecta.",
  alternates: {
    canonical: "https://theburn.cl/servicios/automatizacion-marketing",
  },
}

export default function AutomatizacionMarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
