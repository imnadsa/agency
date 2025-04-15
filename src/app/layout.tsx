import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import "@/styles/globals.css"

// Инициализация шрифта Inter с кириллицей
const inter = Inter({
  subsets: ["latin", "cyrillic"],
  weight: ["400", "600", "700"],
  display: "swap",
})

// Метаданные сайта
export const metadata: Metadata = {
  title: {
    default: "eQuality - Digital-агентство для медицинских учреждений",
    template: "%s | eQuality",
  },
  description:
    "Инновационные digital-решения для медицинского бизнеса. Помогаем клиникам расти с помощью современных технологий.",
  keywords: [
    "digital-маркетинг",
    "медицинский маркетинг",
    "интернет-реклама для клиник",
    "ai-решения",
    "сайты для медицины",
  ],
  metadataBase: new URL("https://equality-digital.ru"), // Замените на ваш домен
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://equality-digital.ru",
    siteName: "eQuality",
    images: [
      {
        url: "/og-image.png", // Путь к вашему OG изображению
        width: 1200,
        height: 630,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  verification: {
    google: "ваш-google-verification-код", // Необязательно
    yandex: "ваш-яндекс-verification-код", // Необязательно
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-secondary`}>
        {/* Прогресс-бар или глобальные нотификации могут быть здесь */}
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
