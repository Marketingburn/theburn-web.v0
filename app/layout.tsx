import type React from "react"
import type { Metadata } from "next"
import { Suspense } from "react"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ContactProvider } from "@/app/contact-context"
import { ContactModal } from "@/components/contact-modal"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Barlow_Condensed, Barlow, JetBrains_Mono } from "next/font/google"

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
})

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Burn | Consultoría Comercial y Marketing Digital Chile",
  description:
    "Consultora chilena que implementa sistemas de crecimiento comercial con inteligencia de negocio, funnel digital y automatización de marketing. Santiago, Chile.",
  generator: "v0.app",
  charset: "UTF-8",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  metadataBase: new URL("https://theburn.cl"),
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://theburn.cl",
    siteName: "The Burn",
    title: "The Burn | Consultoría Comercial y Marketing Digital",
    description: "Sistemas de crecimiento comercial con inteligencia de negocio y automatización de marketing.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "The Burn",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@theburn",
    creator: "@theburn",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`font-sans antialiased ${barlowCondensed.variable} ${barlow.variable} ${jetbrainsMono.variable}`}>
        <ContactProvider>
          <Suspense fallback={null}>
            <NavigationTransition />
            <PageTransition>{children}</PageTransition>
          </Suspense>
          <ContactModal />
          <WhatsAppFloat />
        </ContactProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
