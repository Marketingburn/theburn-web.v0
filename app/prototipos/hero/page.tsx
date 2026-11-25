import type { Metadata } from "next"
import { HeroPicker } from "./picker"

// Superficie de prueba aislada: no se enlaza desde el sitio, no se indexa y se borra
// cuando se elija la versión ganadora.
export const metadata: Metadata = {
  title: "Prototipos del hero | The Burn",
  robots: { index: false, follow: false },
}

export default function HeroPrototypesPage() {
  return <HeroPicker />
}
