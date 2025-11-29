import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _inter = Inter({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Nubastalia Chile | Partner Odoo - Implementación ERP",
  description:
    "Somos Odoo Chile desde 2011. Partner Silver de Odoo especializado en desarrollo, personalización e implementación del ERP. +14 años de experiencia en España, Europa y América Latina.",
  keywords: "Odoo, ERP, Chile, implementación, desarrollo, personalización, partner, Silver Partner",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
