import { TransactionalLanding } from "@/components/transactional-landing"
import { transactionalLandingBySlug } from "@/lib/transactional-landings"

export default function Page() {
  return <TransactionalLanding landing={transactionalLandingBySlug["power-bi-ventas"]} />
}
