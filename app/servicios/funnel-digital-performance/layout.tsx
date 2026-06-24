import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Funnel Digital de Ventas Chile | Marketing Performance | The Burn",
  description:
    "Diseñamos e implementamos tu funnel de captación y conversión: paid media, landing pages y automatización. Más leads, mejor calificados.",
}

export default function FunnelDigitalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
