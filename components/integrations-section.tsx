"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { cn } from "@/lib/utils"

type IntegrationCardProps = {
  icon: string
  name: string
  description: string
  index: number
}

function IntegrationCard({ icon, name, description, index }: IntegrationCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-secondary border border-white/10 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all",
        inView ? "animate-fade-in" : "opacity-0 translate-y-5",
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="flex items-center mb-4">
        <div className="text-3xl mr-3">{icon}</div>
        <h3 className="text-lg font-bold text-white">{name}</h3>
      </div>
      <p className="text-sm opacity-80 text-white">{description}</p>
    </div>
  )
}

export default function IntegrationsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const integrations = [
    {
      icon: "🏥",
      name: "Медицинские информационные системы",
      description: "Интеграция с популярными МИС: 1С:Медицина, МЕДИАЛОГ, БАРС, Инфоклиника и другими.",
    },
    {
      icon: "📊",
      name: "CRM-системы",
      description:
        "Подключение к Битрикс24, amoCRM, RetailCRM и другим системам управления взаимоотношениями с клиентами.",
    },
    {
      icon: "📱",
      name: "Мобильные приложения",
      description: "Разработка нативных приложений для iOS и Android с интеграцией в общую экосистему клиники.",
    },
    {
      icon: "💳",
      name: "Платежные системы",
      description: "Интеграция с ЮKassa, Cloudpayments, Сбербанк Эквайринг для онлайн-оплаты услуг.",
    },
    {
      icon: "📞",
      name: "IP-телефония",
      description: "Подключение к Манго Телеком, Яндекс Телефония, Билайн и другим провайдерам IP-телефонии.",
    },
    {
      icon: "🤖",
      name: "Чат-боты и мессенджеры",
      description: "Интеграция с Telegram, WhatsApp, Viber для автоматизации коммуникации с пациентами.",
    },
    {
      icon: "📈",
      name: "Аналитические системы",
      description: "Подключение к Яндекс.Метрика, Google Analytics, Roistat для отслеживания эффективности.",
    },
    {
      icon: "📆",
      name: "Системы онлайн-записи",
      description: "Интеграция с популярными сервисами онлайн-записи и создание собственных решений.",
    },
  ]

  return (
    <section id="integrations" className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">Интеграции</span>
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            Бесшовные <span className="text-primary">интеграции</span> с вашими системами
          </h2>
          <p className="text-white/80">
            Наши решения легко интегрируются с существующими системами вашей клиники, обеспечивая единую цифровую
            экосистему без необходимости полной замены программного обеспечения
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {integrations.map((integration, index) => (
            <IntegrationCard
              key={index}
              icon={integration.icon}
              name={integration.name}
              description={integration.description}
              index={index}
            />
          ))}
        </div>

        <div
          ref={ref}
          className={cn(
            "mt-20 bg-secondary border border-white/10 rounded-2xl p-8 shadow-lg relative overflow-hidden",
            inView ? "animate-fade-in" : "opacity-0",
          )}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Индивидуальные интеграции</h3>
              <p className="mb-6 text-white/80">
                Если вы используете специфическое программное обеспечение, которого нет в списке, не беспокойтесь. Наша
                команда разработчиков создаст индивидуальное решение для интеграции с любой системой.
              </p>
              <ul className="space-y-3">
                {[
                  "Анализ существующей инфраструктуры",
                  "Разработка API для интеграции",
                  "Миграция данных из устаревших систем",
                  "Обучение персонала работе с новыми интеграциями",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <div className="text-accent-cyan mt-1">✓</div>
                    <span className="text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-64 md:h-auto">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Индивидуальные интеграции"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Декоративные элементы */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-primary opacity-10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-cyan opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </div>
    </section>
  )
}
