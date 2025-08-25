import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import BackgroundElements from "./components/BackgroundElements";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
  preload: true,
});

const appleGaramond = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-apple-garamond",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "MegaWorld Smart City - Future-Ready Urban Development",
  description:
    "A living city that evolves with its people and the world around it. Creating a dynamic ecosystem driven by intelligent systems, green infrastructure, and forward-thinking solutions.",
  keywords:
    "smart city, urban development, sustainable design, intelligent systems",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${appleGaramond.variable} font-sans antialiased relative`}
      >
        <BackgroundElements />

        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
