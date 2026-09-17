import type { Metadata } from "next"
import localFont from "next/font/local"
import { Marcellus } from "next/font/google"
import "./globals.css"

const handy = localFont({
  src: "../public/fonts/Handy.otf",
  variable: "--font-handy",
  display: "swap",
})

const ibmPlexSerif = localFont({
  src: "../public/fonts/IBMPlexSerif-Medium.ttf",
  variable: "--font-ibm-plex-serif",
  display: "swap",
})

const limelight = localFont({
  src: "../public/fonts/Limelight-Regular.ttf",
  variable: "--font-limelight",
  display: "swap",
})

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Solaris | Paneles solares en Cali",
  description:
    "Diseñamos, instalamos y mantenemos sistemas de energía solar para hogares, fincas y negocios de las zonas rurales del Valle del Cauca.",
  keywords: [
    "paneles solares",
    "energía solar",
    "Cali",
    "Valle del Cauca",
    "energía rural",
    "Solaris",
  ],
  openGraph: {
    title: "Solaris | Paneles solares en Cali",
    description:
      "Energía solar para tu hogar, finca o negocio en las zonas rurales del Valle del Cauca.",
    type: "website",
    locale: "es_CO",
  },
}

export const viewport = {
  themeColor: "#f5b800",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${handy.variable} ${ibmPlexSerif.variable} ${limelight.variable} ${marcellus.variable}`}
    >
      <body>{children}</body>
    </html>
  )
}
