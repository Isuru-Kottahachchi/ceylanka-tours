import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
// import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackToTop } from "@/components/back-to-top"
import { WhatsAppWidget } from "@/components/whatsapp-widget"
import { ThemeProvider } from "next-themes"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CeyLanka Tours - Discover the Pearl of the Indian Ocean",
  description:
    "Your ultimate guide to exploring Sri Lanka. Discover pristine beaches, ancient temples, lush tea plantations, incredible wildlife, and rich cultural heritage.",
  keywords: "Sri Lanka travel, tourism, beaches, temples, wildlife, tea plantations, cultural sites, vacation, holiday",
  authors: [{ name: "Sri Lanka Travel Guide" }],
  creator: "CeyLanka Tours",
  publisher: "CeyLanka Tours",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.ceylankatours.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "si-LK": "/si-LK",
      "ta-LK": "/ta-LK",
    },
  },
  openGraph: {
    title: "CeyLanka Tours - Discover the Pearl of the Indian Ocean",
    description:
      "Your ultimate guide to exploring Sri Lanka. Discover pristine beaches, ancient temples, lush tea plantations, incredible wildlife, and rich cultural heritage.",
    url: "https://www.ceylankatours.com",
    siteName: "CeyLanka Tourse",
    images: [
      {
        url: "/placeholder.svg?height=630&width=1200&text=Sri+Lanka+Travel+Guide",
        width: 1200,
        height: 630,
        alt: "CeyLanka Tours - Beautiful island paradise",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sri Lanka Travel Guide - Discover the Pearl of the Indian Ocean",
    description:
      "Your ultimate guide to exploring Sri Lanka. Discover pristine beaches, ancient temples, lush tea plantations, incredible wildlife, and rich cultural heritage.",
    images: ["/placeholder.svg?height=630&width=1200&text=Sri+Lanka+Travel+Guide"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preload hero image for Speed Index */}
        <link
          rel="preload"
          as="image"
          href="/images/stockvault-sunset-at-sri-lanka-southern-beach280430.jpg"
          imageSrcSet="/images/stockvault-sunset-at-sri-lanka-southern-beach280430.jpg 1920w"
          imageSizes="100vw"
        />
        {/* Google AdSense - Replace with your actual publisher ID */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXX"
          crossOrigin="anonymous"
        />

        <script async src="https://www.googletagmanager.com/gtag/js?id=G-9JYRWPZ8QK" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-9JYRWPZ8QK', {
                page_title: document.title,
                page_location: window.location.href,
              });
            `,
          }}
        />

        {/* AdSense Auto Ads */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-XXXXXXXXXX",
                enable_page_level_ads: true
              });
            `,
          }}
        />

        {/* Structured Data for Travel Website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Sri Lanka Travel Guide",
              description: "Your ultimate guide to exploring Sri Lanka",
              url: "https://www.ceylankatours.com",
              logo: "https://ceylankatours.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+94-11-1912",
                contactType: "customer service",
              },
              sameAs: [
                "https://facebook.com/ceylankatours",
                "https://twitter.com/ceylankatours",
                "https://instagram.com/ceylankatours",
                "https://youtube.com/ceylankatours",
              ],
              areaServed: {
                "@type": "Country",
                name: "Sri Lanka",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Travel Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "TouristTrip",
                      name: "Sri Lanka Tours",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Additional Meta Tags for AdSense */}
        <meta name="google-adsense-account" content="ca-pub-XXXXXXXXXX" />
        <meta name="google-site-verification" content="your-verification-code" />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen flex flex-col w-full max-w-[100vw] overflow-x-hidden">
            <Header />
            <main className="flex-1 w-full overflow-x-hidden">{children}</main>
            <Footer />
          </div>
          <BackToTop />
          <WhatsAppWidget />
        </ThemeProvider>
      </body>
    </html>
  )
}
