import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

const appleGaramond = {
  variable: "--font-apple-garamond",
}

export const metadata: Metadata = {
  title: "MegaWorld Smart City - Future-Ready Urban Development",
  description:
    "A living city that evolves with its people and the world around it. Creating a dynamic ecosystem driven by intelligent systems, green infrastructure, and forward-thinking solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${appleGaramond.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
