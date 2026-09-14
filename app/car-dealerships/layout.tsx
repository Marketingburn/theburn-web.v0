import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Marketing y Automatización para Automotoras | The Burn",
  description:
    "Sistema de captación y seguimiento omnicanal para concesionarios de autos en Chile: leads calificados, respuesta automática por WhatsApp e Instagram, cero tyre kickers.",
  alternates: {
    canonical: "https://theburn.cl/car-dealerships",
  },
}

export default function CarDealershipsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
