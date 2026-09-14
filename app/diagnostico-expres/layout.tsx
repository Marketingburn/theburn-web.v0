import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Diagnóstico Exprés Gratis | 3 Minutos | The Burn",
  description:
    "Responde 6 preguntas sobre tu proceso comercial y recibe un resultado inmediato con las brechas que más te están frenando. Gratis, sin registro.",
  alternates: {
    canonical: "https://theburn.cl/diagnostico-expres",
  },
}

export default function DiagnosticoExpresLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
