import type React from "react"
import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import Script from "next/script"
import "./globals.css"
import { PageTransition } from "@/components/page-transition"
import { NavigationTransition } from "@/components/navigation-transition"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ContactProvider } from "@/app/contact-context"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Barlow_Condensed, Barlow, JetBrains_Mono } from "next/font/google"

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["700", "800", "900"],
  display: "swap",
})

const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["400", "500", "700"],
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Burn | Consultoría Comercial y Marketing Digital Chile",
  description:
    "Consultora chilena que implementa sistemas de crecimiento comercial con inteligencia de negocio, funnel digital y automatización de marketing. Santiago, Chile.",
  generator: "v0.app",
  robots: "index, follow",
  metadataBase: new URL("https://theburn.cl"),
  alternates: {
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  // Google Search Console verification: no hay token verificado en este proyecto.
  // Para activarlo, agrega aquí `verification: { google: "TU_TOKEN" }` con el
  // token real obtenido en https://search.google.com/search-console, o usa el
  // método de verificación por DNS/registro del dominio. Sitemap a enviar:
  // https://theburn.cl/sitemap.xml
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://theburn.cl",
    siteName: "The Burn",
    title: "The Burn | Consultoría Comercial y Marketing Digital",
    description: "Sistemas de crecimiento comercial con inteligencia de negocio y automatización de marketing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "The Burn - Consultoría Comercial B2B",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@theburn",
    creator: "@theburn",
    images: ["/og-image.png"],
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "The Burn",
  alternateName: "The Burn SpA",
  url: "https://theburn.cl",
  logo: "https://theburn.cl/logo-theburn.png",
  image: "https://theburn.cl/og-image.png",
  description:
    "Consultora chilena que implementa sistemas de crecimiento comercial con inteligencia de negocio, funnel digital y automatización de marketing.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santiago",
    addressCountry: "CL",
  },
  areaServed: {
    "@type": "Country",
    name: "Chile",
  },
  email: "marketing@theburn.cl",
  telephone: "+56936504772",
  sameAs: [],
  priceRange: "$$",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <head>
        {/* Organization / LocalBusiness structured data */}
        <Script
          id="organization-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NQDHB35D');`,
          }}
        />
        {/* Clarity */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "vts56wttrq");
            `,
          }}
        />
      </head>
      <body className={`font-sans antialiased ${barlowCondensed.variable} ${barlow.variable} ${jetbrainsMono.variable}`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NQDHB35D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ContactProvider>
          <Suspense fallback={null}>
            <NavigationTransition />
            <PageTransition>{children}</PageTransition>
          </Suspense>
          <WhatsAppFloat />
        </ContactProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}
