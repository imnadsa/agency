import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import { montserrat, inter } from "./fonts"

export const metadata: Metadata = {
  title: "Hippocrat | AI и диджитал-решения для медицины",
  description:
    "Мы — команда экспертов, которая помогает клиникам выйти на новый уровень с помощью современных технологий.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`bg-dark text-white antialiased ${montserrat.variable} ${inter.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}


import './globals.css'