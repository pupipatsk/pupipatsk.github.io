import type React from "react";
import type { Metadata } from "next";
import { Libre_Caslon_Text, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";

// Serif font for headings
const serifFont = Libre_Caslon_Text({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "700"],
});

// Sans Serif font for body text and subheadings
const sansSerifFont = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const monoFont = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["300"]
});

export const metadata: Metadata = {
  title: "Pupipat Singkhorn | Portfolio",
  description:
    "Personal portfolio of Pupipat Singkhorn - Computer Engineering Student and Data Scientist",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${serifFont.variable} ${sansSerifFont.variable} ${monoFont.variable} font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
