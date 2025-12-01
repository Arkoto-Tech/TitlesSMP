import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

// <CHANGE> Updated fonts to match cosmic/fantasy theme
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  // <CHANGE> Updated metadata for Titles SMP
  title: "Titles SMP - Awaken Power, Shape Fate",
  description:
    "Join Titles SMP, a Minecraft SMP with a custom power system. Earn Titles, unlock abilities, and rise through the ranks from C to S-Class.",
  generator: "titlessmp.technium.cc",
  icons: {
    icon: [
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicon.ico",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
