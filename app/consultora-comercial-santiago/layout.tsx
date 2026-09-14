import type { Metadata } from "next"
import { buildLandingMetadata } from "@/lib/transactional-landings"

export const metadata: Metadata = buildLandingMetadata("consultora-comercial-santiago")
export default function Layout({ children }: { children: React.ReactNode }) { return children }
