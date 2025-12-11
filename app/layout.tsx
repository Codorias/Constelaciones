import type React from "react"
import type { Metadata } from "next"
import { Inter, Anton } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const anton = Anton({ weight: "400", subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Constelaciones - Diálogos del Arte Santandereano Contemporáneo",
  description:
    "Un punto de encuentro entre artistas que conforman un mapa sensible del arte santandereano contemporáneo.",
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
