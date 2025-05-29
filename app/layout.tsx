import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata: Metadata = {
  title: "La Maison Typology",
  description: "Terarah dalam Etika, Akrab dalam Interaksi dan Merangkul Kebersamaan ",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />
        <meta name="viewport" content="width" initial-scale="1" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-amber-950 via-stone-900 to-amber-900 text-amber-100 font-serif">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
