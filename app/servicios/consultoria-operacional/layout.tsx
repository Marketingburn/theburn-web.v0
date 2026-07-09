import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consultoría Operacional Lean Six Sigma Chile | Margen y Procesos B2B | The Burn",
  description:
    "Mapeamos tus procesos con metodología Lean Six Sigma y dashboards Power BI. Identificamos dónde pierdes margen y tiempo, y te damos los números para decidir.",
}

export default function ConsultoriaOperacionalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
