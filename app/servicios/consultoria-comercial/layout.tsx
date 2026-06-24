import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Consultoría Comercial Chile | Proceso de Ventas B2B | The Burn",
  description:
    "Ordenamos tu proceso comercial, definimos métricas de pipeline y construimos el roadmap de crecimiento. Estrategia con ejecución, no solo un PDF.",
}

export default function ConsultoriaComercialLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
