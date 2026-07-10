import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diagnóstico Comercial y Marketing | The Burn — 3 semanas, roadmap concreto",
  description:
    "Analizamos tu negocio en 3 semanas: márgenes, pipeline, proceso comercial y marketing. Roadmap de crecimiento con datos reales. $500.000 CLP.",
}

export default function DiagnosticoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
