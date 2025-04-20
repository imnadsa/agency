"use client"

import type React from "react"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ServiceCardProps = {
  icon?: React.ReactNode
  title: string
  description: string
  index: number
  logos?: React.ReactNode
  features?: string[]
}

function ServiceCard({ icon, title, description, index, logos, features }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-secondary border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group",
        inView ? "animate-fade-in" : "opacity-0 translate-y-5",
      )}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Градиентный фон при наведении */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-cyan/10 opacity-0 transition-opacity duration-300",
        isHovered && "opacity-100"
      )} />
      
      {/* Основной контент */}
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#6812F3] transition-colors">
              {title}
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">{description}</p>
            
            {/* Список возможностей */}
            {features && features.length > 0 && (
              <ul className="space-y-2 mb-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-accent-cyan mt-1 flex-shrink-0">✓</span>
                    <span className="text-white/70">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            {/* Логотипы */}
            {logos && (
              <div className="flex flex-wrap gap-3 mt-4 mb-2">
                {logos}
              </div>
            )}
            
            {/* CTA */}
            <div className={cn(
              "mt-6 inline-flex items-center text-sm font-medium text-accent-cyan opacity-0 transform translate-x-[-10px] transition-all duration-300",
              isHovered && "opacity-100 translate-x-0"
            )}>
              Подробнее <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </div>
          
          {icon && (
            <div className={cn(
              "text-4xl bg-primary/20 p-4 rounded-xl text-accent-cyan transition-transform duration-300",
              isHovered && "scale-110 rotate-3"
            )}>
              {icon}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Улучшенные компоненты логотипов
const ServiceLogo = ({ bg, text, textColor = "white" }: { bg: string; text: string; textColor?: string }) => (
  <div 
    className={`w-12 h-12 flex items-center justify-center rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-3`}
    style={{ backgroundColor: bg }}
  >
    <span className={`font-bold text-${textColor}`}>{text}</span>
  </div>
)

export default function Services() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      title: "Таргетированная реклама",
      description: "Приводим целевых клиентов из социальных сетей по оптимальной стоимости, масштабируя ваш медицинский бизнес.",
      icon: "🎯",
      features: [
        "Комплексные рекламные кампании",
        "Ретаргетинг и поиск похожих аудиторий",
        "Отслеживание конверсий и аналитика"
      ],
      logos: (
        <>
          <ServiceLogo bg="#0077FF" text="VK" />
          <ServiceLogo bg="#F84E4E" text="MT" />
          <ServiceLogo bg="#26A5E4" text="TG" />
          <ServiceLogo bg="#EC5E06" text="OK" />
        </>
      ),
    },
    {
      title: "Разработка сайтов",
      description: "Создаем современные медицинские сайты с высокой конверсией, адаптированные для специфики вашей клиники.",
      icon: "💻",
      features: [
        "Адаптивный дизайн для всех устройств",
        "Интеграция с CRM и МИС системами",
        "SEO-оптимизация и быстрая загрузка"
      ],
      logos: (
        <>
          <ServiceLogo bg="#F24E1E" text="Fg" />
          <ServiceLogo bg="#000000" text="Td" />
          <ServiceLogo bg="#4A5568" text="WP" />
        </>
      ),
    },
    {
      title: "SMM-продвижение",
      description: "Повышаем узнаваемость вашей клиники и формируем доверие аудитории через профессиональное ведение социальных сетей.",
      icon: "📱",
      features: [
        "Контент-стратегия для медицинских услуг",
        "Вовлекающие публикации и сторис",
        "Работа с репутацией в комментариях"
      ],
      logos: (
        <>
          <ServiceLogo bg="#6B7280" text="SP" />
          <ServiceLogo bg="#3b5998" text="FB" />
          <ServiceLogo bg="#E1306C" text="IG" />
        </>
      ),
    },
    {
      title: "Контекстная реклама",
      description: "Привлекаем пациентов точно в момент, когда они ищут медицинские услуги, обеспечивая высокую конверсию.",
      icon: "🔍",
      features: [
        "Глубокий анализ ключевых слов",
        "A/B тестирование объявлений",
        "Оптимизация ставок и бюджета"
      ],
      logos: (
        <>
          <ServiceLogo bg="#FFCC00" text="Я" textColor="black" />
          <ServiceLogo bg="#4285F4" text="G" />
        </>
      ),
    },
    {
      title: "ИИ-автоматизация",
      description: "Внедряем инновационные решения на базе искусственного интеллекта для оптимизации процессов вашей клиники.",
      icon: "🤖",
      features: [
        "Чат-боты для записи и консультаций",
        "Автоматизация документооборота",
        "Предиктивная аналитика пациентопотока"
      ],
      logos: (
        <>
          <ServiceLogo bg="#FF6B6B" text="n8n" />
          <ServiceLogo bg="#5C4EE5" text="AI" />
          <ServiceLogo bg="#38B2AC" text="GPT" />
        </>
      ),
    },
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container">
        {/* Заголовок секции */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">Наши услуги</span>
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            Комплексные <span className="text-primary">digital-решения</span> для медицинских клиник
          </h2>
          <p className="text-white/80">
            Мы предлагаем полный спектр digital-услуг, специально адаптированных для медицинской отрасли
          </p>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-70 -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-cyan/10 rounded-full filter blur-3xl opacity-70 -z-10"></div>

        {/* Основной блок */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 md:col-span-2">
            <ServiceCard
              title={services[0].title}
              description={services[0].description}
              icon={services[0].icon}
              index={0}
              logos={services[0].logos}
              features={services[0].features}
            />
          </div>

          {services.slice(1).map((service, index) => (
            <ServiceCard
              key={index + 1}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index + 1}
              logos={service.logos}
              features={service.features}
            />
          ))}
        </div>

        {/* Кнопка внизу */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block text-white font-medium text-lg rounded-xl px-10 py-4 bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/20"
          >
            Обсудить ваш проект
          </a>
        </div>
      </div>
    </section>
  )
}
