"use client"

import { useState, useCallback } from "react"
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
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-secondary border border-white/10 rounded-xl p-6 transition-shadow transition-opacity transition-transform duration-300 relative overflow-hidden group",
        isHovered ? "shadow-md shadow-primary/10 -translate-y-2" : "hover:shadow-sm",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      )}
      style={{
        transitionDelay: `${Math.min(index * 50, 400)}ms`,
        willChange: "transform, opacity, box-shadow",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Градиентный фон при наведении */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-cyan/10 opacity-0 transition-opacity duration-250",
          isHovered && "opacity-100",
        )}
        style={{ willChange: "opacity" }}
      />

      {/* Основной контент */}
      <div className="relative z-10">
        <div className="flex items-center mb-4">
          <div
            className={cn(
              "text-3xl mr-3 transition-transform duration-200",
              isHovered && "scale-110 rotate-3",
            )}
            style={{ willChange: "transform" }}
          >
            {icon}
          </div>
          <h3
            className={cn(
              "text-lg font-bold text-white transition-colors duration-200",
              isHovered && "text-primary",
            )}
          >
            {name}
          </h3>
        </div>
        <p className="text-sm text-white/80">{description}</p>
      </div>
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

  const handleCardClick = useCallback((index: number) => {
    // Можно добавить логику для обработки клика, если нужно
  }, [])

  return (
    <section
      id="integrations"
      className="py-24 relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent-cyan/5"
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">Интеграции</span>
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-opacity transition-transform duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
            style={{ willChange: "transform, opacity" }}
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
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>

        <div
          ref={ref}
          className={cn(
            "mt-20 bg-secondary border border-white/10 rounded-2xl p-8 transition-shadow transition-opacity transition-transform duration-300 relative overflow-hidden",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
            "hover:shadow-md hover:shadow-primary/10 hover:-translate-y-2",
          )}
          style={{
            transitionDelay: `${Math.min(0 * 50, 400)}ms`,
            willChange: "transform, opacity, box-shadow",
          }}
        >
          {/* Градиентный фон при наведении */}
          <div
            className={cn(
              "absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-cyan/10 opacity-0 transition-opacity duration-250 group-hover:opacity-100",
            )}
            style={{ willChange: "opacity" }}
          />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3
                className={cn(
                  "text-2xl font-bold mb-4 text-white transition-colors duration-200",
                  "group-hover:text-primary",
                )}
              >
                Индивидуальные интеграции
              </h3>
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
                className={cn(
                  "object-contain transition-transform duration-200",
                  "group-hover:scale-105",
                )}
                style={{ willChange: "transform" }}
              />
            </div>
          </div>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
      </div>
    </section>
  )
}
