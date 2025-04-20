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
// Иконки для сервисов
const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="47" fill="none" className="w-full h-full">
    <path fill="#04E061" d="M14.976 46.29c8.271 0 14.977-6.706 14.977-14.978 0-8.271-6.706-14.977-14.977-14.977C6.704 16.335 0 23.041 0 31.312c0 8.272 6.704 14.977 14.976 14.977Z"/>
    <path fill="#FF4053" d="M40.95 44.401a9.049 9.049 0 0 0 0-18.098 9.05 9.05 0 1 0 0 18.098Z"/>
    <path fill="#965EEB" d="M17.838 14.391a5.6 5.6 0 0 0 5.6-5.6 5.601 5.601 0 1 0-5.6 5.6Z"/>
    <path fill="#0AF" d="M37.436 24.353c6.726 0 12.177-5.452 12.177-12.177S44.163 0 37.436 0C30.712 0 25.26 5.451 25.26 12.176c0 6.725 5.452 12.177 12.176 12.177Z"/>
  </svg>
);

const WebsiteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" className="w-full h-full">
    <path fill="#FC2C38" fill-rule="evenodd" d="M21.393 7.1C9.578 7.1 0 16.68 0 28.495 0 40.31 9.578 49.887 21.393 49.887c11.815 0 21.393-9.578 21.393-21.393h-7.13c0 7.878-6.386 14.262-14.263 14.262-7.876 0-14.261-6.384-14.261-14.262 0-7.877 6.385-14.262 14.26-14.262V7.1Z" clip-rule="evenodd"/>
    <path fill="#FC2C38" fill-rule="evenodd" d="m35.659 0-7.132 7.102v9.29L23.3 21.621a7.13 7.13 0 0 0-9.034 6.875 7.13 7.13 0 0 0 7.13 7.13 7.13 7.13 0 0 0 6.904-8.922l5.34-5.34h9.221L50 14.231H35.659V0Z" clip-rule="evenodd"/>
  </svg>
);

const SmmIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="65" height="65" fill="none" className="w-full h-full">
    <path fill="currentColor" d="M59.023 33.23a13.433 13.433 0 0 0-3.778-6.32 12.03 12.03 0 0 0-.633-10.708 13.452 13.452 0 0 0-8.219-6.306c-2.458-.658-4.99-.601-7.37.114C36.759 6.997 33.23 5.2 29.44 5.2c-6.378 0-11.727 4.44-13.15 10.388-.014.002-.025-.004-.038-.002a11.917 11.917 0 0 0-8.925 5.913 13.44 13.44 0 0 0-1.352 10.27 13.435 13.435 0 0 0 3.782 6.325 12.005 12.005 0 0 0 .629 10.704 13.452 13.452 0 0 0 8.219 6.306c1.164.312 2.349.467 3.524.467 1.304 0 2.593-.21 3.844-.585 2.265 3.019 5.779 4.814 9.585 4.814 6.384 0 11.736-4.449 13.156-10.404 3.744-.455 7.06-2.608 8.958-5.895a13.446 13.446 0 0 0 1.35-10.27ZM45.72 12.407a10.859 10.859 0 0 1 6.64 5.095 9.424 9.424 0 0 1 .739 7.757c-.129-.08-.251-.17-.382-.247l-11.92-6.883a1.31 1.31 0 0 0-1.313.008L26.226 25.99 26.16 20l11.262-6.5a10.874 10.874 0 0 1 8.299-1.094Zm-7.063 16.447.08 7.156-6.156 3.646-6.239-3.508-.08-7.156 6.156-3.646 6.24 3.509ZM18.505 18.736C18.505 12.705 23.41 7.8 29.44 7.8c2.742 0 5.32 1.19 7.095 3.234-.136.073-.278.134-.413.212l-11.92 6.882a1.305 1.305 0 0 0-.65 1.14l.172 15.407-5.22-2.935V18.736ZM8.485 31.097A10.87 10.87 0 0 1 9.58 22.8a9.32 9.32 0 0 1 6.349-4.516c-.005.151-.024.3-.024.453V32.5c0 .47.254.902.663 1.134l13.428 7.553-5.153 3.052-11.26-6.503a10.86 10.86 0 0 1-5.097-6.639Zm10.793 21.497a10.859 10.859 0 0 1-6.64-5.095 9.407 9.407 0 0 1-.744-7.76c.131.081.255.172.389.25l11.92 6.883a1.3 1.3 0 0 0 1.312-.008l13.258-7.854.067 5.99-11.262 6.5a10.852 10.852 0 0 1-8.3 1.094Zm27.215-6.33c0 6.031-4.904 10.936-10.935 10.936a9.366 9.366 0 0 1-7.097-3.242c.137-.073.281-.128.416-.206l11.921-6.882c.406-.235.655-.672.65-1.14l-.174-15.405 5.22 2.936v13.003Zm8.926-4.063a9.384 9.384 0 0 1-6.349 4.527c.005-.156.023-.308.023-.464V32.5c0-.47-.253-.902-.663-1.134l-13.427-7.553 5.153-3.052 11.26 6.503a10.864 10.864 0 0 1 5.097 6.639 10.87 10.87 0 0 1-1.094 8.298Z"/>
  </svg>
);

const AdIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="none" className="w-full h-full">
    <path fill="#24A0DC" d="M39.136 29.325c-9.218 0-14.617-5.597-14.617-14.625C24.52 5.895 30.117 0 38.873 0 45.302 0 49.297 2.91 50 6.566v2.91h-6.167c-.373-1.455-2.15-2.984-4.96-2.984-4.213 0-6.781 3.32-6.781 8.17s2.678 8.134 7.133 8.134c1.514 0 2.72-.224 3.796-.672V18.58h-4.367v-5.746h11.302v12.35c-1.382 2.014-5.508 4.14-10.82 4.14ZM7.38 28.652V7.2H0V.67h22.348V7.2h-7.396v21.452H7.38Z"/>
  </svg>
);

const AiIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" className="w-full h-full">
    <path fill="#07F" d="M0 23.77C0 12.566 0 6.953 3.482 3.482 6.952 0 12.566 0 23.77 0h2.46c11.204 0 16.806 0 20.288 3.482C50 6.964 50 12.566 50 23.77v2.46c0 11.204 0 16.806-3.482 20.288C43.036 50 37.434 50 26.23 50h-2.46c-11.204 0-16.806 0-20.288-3.482C0 43.036 0 37.434 0 26.23v-2.46Z"/>
    <path fill="#fff" d="M24.906 41.215c9.008 0 16.31-7.303 16.31-16.312 0-9.008-7.302-16.311-16.31-16.311-9.01 0-16.312 7.303-16.312 16.311 0 9.009 7.302 16.312 16.312 16.312Z"/>
    <path fill="#313131" fill-rule="evenodd" d="M39.926 6.888v3.13h3.088c1.756 0 2.658 2.11 1.438 3.372l-4.227 4.416a1.989 1.989 0 0 1-1.44.615h-3.998l-4.14 4.46a6.09 6.09 0 0 1 .472 2.328 5.987 5.987 0 1 1-5.988-5.986c.561 0 1.11.077 1.625.22l4.756-5.119V11.04c0-.55.232-1.077.626-1.45l4.416-4.163c1.274-1.197 3.362-.297 3.362 1.45l.01.01Z" clip-rule="evenodd"/>
  </svg>
);
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
      icon: <TargetIcon />,
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
      icon: <WebsiteIcon />,
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
      icon: <SmmIcon />,
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
      icon: <AdIcon />,
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
      icon: <AiIcon />,
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
