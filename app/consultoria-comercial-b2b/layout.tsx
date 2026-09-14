import type { Metadata } from "next"
import { buildLandingMetadata } from "@/lib/transactional-landings"
export const metadata: Metadata = buildLandingMetadata("consultoria-comercial-b2b")
export default function Layout({ children }: { children: React.ReactNode }) { return children }
