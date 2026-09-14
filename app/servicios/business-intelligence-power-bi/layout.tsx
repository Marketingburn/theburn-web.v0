import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consultoría Power BI Chile | Dashboards para empresas | The Burn",
  description:
    "Implementamos dashboards Power BI conectados a tus datos reales: márgenes, stock, pipeline y conversión. Decisiones con números, no con corazonadas.",
  alternates: {
    canonical: "https://theburn.cl/servicios/business-intelligence-power-bi",
  },
}

export default function BILayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
