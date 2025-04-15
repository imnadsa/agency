"use client"

import type React from "react"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

type ServiceCardProps = {
  icon?: React.ReactNode
  title: string
  description: string
  index: number
  logos?: React.ReactNode
}

function ServiceCard({ icon, title, description, index, logos }: ServiceCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-white text-dark border border-white/10 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:shadow-xl relative overflow-hidden group",
        inView ? "animate-fade-in" : "opacity-0 translate-y-5",
      )}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold mb-4 text-dark">{title}</h3>
          <p className="text-dark/80 mb-4">{description}</p>
        </div>
        {icon && <div className="text-3xl">{icon}</div>}
      </div>

      {logos && <div className="flex flex-wrap gap-3 mt-4">{logos}</div>}
    </div>
  )
}

// Компоненты логотипов для сервисов
const VkLogo = () => (
  <div className="w-10 h-10 flex items-center justify-center bg-[#0077FF] rounded-md text-white">VK</div>
)

const MyTargetLogo = () => (
  <div className="w-10 h-10 flex items-center justify-center bg-[#F84E4E] rounded-md text-white">MT</div>
)

const TelegramLogo = () => (
  <div className="w-10 h-10 flex items-center justify-center bg-[#26A5E4] rounded-md text-white">TG</div>
)

const FigmaLogo = () => (
  <div className="w-10 h-10 flex items-center justify-center bg-[#F24E1E] rounded-md text-white">Fg</div>
)

const TildaLogo = () => (
  <div className="w-10 h-10 flex items-center justify-center bg-[#000000] rounded-md text-white">Td</div>
)

const YandexLogo = () => (
  <div className="w-10 h-10 flex items-center justify-center bg-[#FFCC00] rounded-md text-black">Я</div>
)

const SmmPlannerLogo = () => (
  <div className="w-10 h-10 flex items-center justify-center bg-[#6B7280] rounded-md text-white">SP</div>
)

const N8nLogo = () => (
  <div className="w-10 h-10 flex items-center justify-center bg-[#FF6B6B] rounded-md text-white">n8n</div>
)

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Таргетированная реклама",
      description: "Мы работаем с такими рекламным системами как VK реклама, My Target, Telegram Ads и др...",
      logos: (
        <>
          <VkLogo />
          <MyTargetLogo />
          <TelegramLogo />
        </>
      ),
    },
    {
      title: "Создаем сайты",
      description: "Задизайним и еще сверстаем самый красивый сайт в рунете",
      subtext: "*Лебедев будет нервно курить в сторонке",
      logos: (
        <>
          <FigmaLogo />
          <TildaLogo />
        </>
      ),
    },
    {
      title: "SMM",
      description: "В эпоху нейросетей, важно давать правильные промпты)))",
      logos: (
        <>
          <SmmPlannerLogo />
        </>
      ),
    },
    {
      title: "Контекстная реклама",
      description: "Улучшим показатели ваших рекламных кампаний в системе Яндекс Директ",
      logos: (
        <>
          <YandexLogo />
        </>
      ),
    },
    {
      title: "ИИ-Агенты",
      description: "Такого точно нету у ваших конкурентов.. Автоматизация процессов за копейки",
      logos: (
        <>
          <N8nLogo />
        </>
      ),
    },
  ]

  return (
    <section id="services" className="py-12 relative overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="lg:col-span-2">
            <ServiceCard
              title={services[0].title}
              description={services[0].description}
              index={0}
              logos={services[0].logos}
            />
          </div>

          {services.slice(1).map((service, index) => (
            <ServiceCard
              key={index + 1}
              title={service.title}
              description={service.description}
              index={index + 1}
              logos={service.logos}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
