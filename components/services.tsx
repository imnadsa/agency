"use client"

import { useState, useCallback } from "react"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

type ServiceCardProps = {
  icon?: string
  title: string
  description: string
  index: number
  logos?: React.ReactNode
  features?: string[]
  onClick?: () => void
}

function ServiceCard({ icon, title, description, index, logos, features, onClick }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-secondary border border-white/10 rounded-2xl p-6 transition-shadow transition-opacity transition-transform duration-300 relative overflow-hidden group",
        isHovered ? "shadow-md shadow-primary/10 -translate-y-2" : "hover:shadow-sm",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      )}
      style={{
        transitionDelay: `${Math.min(index * 50, 400)}ms`,
        willChange: "transform, opacity, box-shadow",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
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
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3
              className={cn(
                "text-2xl font-bold mb-4 text-white transition-colors duration-200",
                isHovered && "text-primary",
              )}
            >
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
            <div
              className={cn(
                "mt-6 inline-flex items-center text-sm font-medium text-accent-cyan opacity-0 transform translate-x-[-10px] transition-all duration-250",
                isHovered && "opacity-100 translate-x-0",
              )}
              style={{ willChange: "opacity, transform" }}
            >
              Подробнее <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </div>

          {icon && (
            <div
              className={cn(
                "text-4xl bg-primary/20 p-4 rounded-xl text-accent-cyan transition-transform duration-200",
                isHovered && "scale-110 rotate-3",
              )}
              style={{ willChange: "transform" }}
            >
              {icon}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

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
        "Отслеживание конверсий и аналитика",
      ],
      logos: (
        <>
          <Image
            src="/icons/Group.png"
            alt="VK"
            width={50}
            height={50}
            className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
          />
          <Image
            src="/icons/Group 7.png"
            alt="MT"
            width={50}
            height={50}
            className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
          />
          <Image
            src="/icons/nu иконки.png"
            alt="TG"
            width={50}
            height={50}
            className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
          />
          <Image
            src="/icons/Clip path group.png"
            alt="OK"
            width={50}
            height={50}
            className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
          />
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
        "SEO-оптимизация и быстрая загрузка",
      ],
      logos: (
        <>
          <Image
            src="/icons/saitTD.png"
            alt="Sait TD"
            width={50}
            height={50}
            className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
          />
          <Image
            src="/icons/saitFG.png"
            alt="Sait FG"
            width={50}
            height={50}
            className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
          />
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
        "Работа с репутацией в комментариях",
      ],
      logos: (
        <>
          <Image
            src="/icons/smmGPT.png"
            alt="SMM GPT"
            width={50}
            height={50}
            className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
          />
          <Image
            src="/icons/smmPLANER.png"
            alt="SMM Planer"
            width={50}
            height={50}
            className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
          />
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
        "Оптимизация ставок и бюджета",
      ],
      logos: (
        <>
          <Image
            src="/icons/kontekstYA.png"
            alt="Kontekst YA"
            width={50}
            height={50}
            className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
          />
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
        "Предиктивная аналитика пациентопотока",
      ],
      logos: (
        <>
          <Image
            src="/icons/aiN8N.png"
            alt="AI N8N"
            width={50}
            height={50}
            className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
          />
        </>
      ),
    },
  ]

  const handleCardClick = useCallback((index: number) => {
    // Можно добавить логику для обработки клика, если нужно
  }, [])

  return (
    <section
      id="services"
      className="py-24 relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent-cyan/5"
    >
      <div className="container">
        {/* Заголовок секции */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">Наши услуги</span>
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-opacity transition-transform duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
            style={{ willChange: "transform, opacity" }}
          >
            Комплексные <span className="text-primary">digital-решения</span> для медицинских клиник
          </h2>
          <p className="text-white/80">
            Мы предлагаем полный спектр digital-услуг, специально адаптированных для медицинской отрасли
          </p>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>

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
              onClick={() => handleCardClick(index + 1)}
            />
          ))}
        </div>

        {/* Кнопка внизу */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className={cn(
              "inline-flex items-center justify-center h-10 px-6 py-2 bg-primary text-white rounded-lg transition-colors duration-200",
              "hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20",
            )}
            style={{ willChange: "background-color, box-shadow" }}
          >
            Обсудить ваш проект
          </a>
        </div>
      </div>
    </section>
  )
}
