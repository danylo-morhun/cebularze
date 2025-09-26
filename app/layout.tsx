import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Cebularze Kalisz - Oficjalna strona hokejowej drużyny",
  description:
    "Oficjalna strona hokejowej drużyny Cebularze Kalisz. Sprawdź rozkład meczów, skład drużyny, wyniki i najnowsze wiadomości.",
  keywords: ["hokej", "Cebularze", "Kalisz", "drużyna hokejowa", "sport"],
  authors: [{ name: "Cebularze Kalisz" }],
  creator: "Cebularze Kalisz",
  publisher: "Cebularze Kalisz",
  openGraph: {
    title: "Cebularze Kalisz - Oficjalna strona hokejowej drużyny",
    description:
      "Oficjalna strona hokejowej drużyny Cebularze Kalisz. Sprawdź rozkład meczów, skład drużyny, wyniki i najnowsze wiadomości.",
    url: "https://cebularze-kalisz.com",
    siteName: "Cebularze Kalisz",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Cebularze Kalisz Logo",
      },
    ],
    locale: "pl_PL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cebularze Kalisz - Oficjalna strona hokejowej drużyny",
    description:
      "Oficjalna strona hokejowej drużyny Cebularze Kalisz. Sprawdź rozkład meczów, skład drużyny, wyniki i najnowsze wiadomości.",
    images: ["/logo.png"],
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
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pl" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>{children}</Suspense>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
