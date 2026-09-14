import type { Metadata } from "next"
import { transactionalLandingBySlug } from "@/lib/transactional-landings"

const landing = transactionalLandingBySlug["consultora-comercial-santiago"]
export const metadata: Metadata = { title: landing.title, description: landing.description, alternates: { canonical: `https://theburn.cl/${landing.slug}` }, openGraph: { title: landing.title, description: landing.description, url: `https://theburn.cl/${landing.slug}`, type: "website" } }
export default function Layout({ children }: { children: React.ReactNode }) { return children }
