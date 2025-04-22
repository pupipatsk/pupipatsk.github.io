import type React from "react"
import type { Metadata } from "next"
import { Frank_Ruhl_Libre, Geist as Geist_Sans } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"

// Serif font for headings (Frank Ruhl Libre)
const frankRuhlLibre = Frank_Ruhl_Libre({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-serif",
})

// Sans Serif font for body text and subheadings (Geist)
const geistSans = Geist_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Pupipat Singkhorn | Portfolio",
  description: "Personal portfolio of Pupipat Singkhorn - Computer Engineering Student and Data Scientist",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${frankRuhlLibre.variable} ${geistSans.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
