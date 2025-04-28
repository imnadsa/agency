"use client"

import { useState, useCallback } from "react"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

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

// Компоненты SVG-иконок для Таргетированной рекламы
const VkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="47"
    fill="none"
    className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
  >
    <path
      fill="#04E061"
      d="M14.976 46.29c8.271 0 14.977-6.706 14.977-14.978 0-8.271-6.706-14.977-14.977-14.977C6.704 16.335 0 23.041 0 31.312c0 8.272 6.704 14.977 14.976 14.977Z"
    />
    <path
      fill="#FF4053"
      d="M40.95 44.401a9.049 9.049 0 0 0 0-18.098 9.05 9.05 0 1 0 0 18.098Z"
    />
    <path
      fill="#965EEB"
      d="M17.838 14.391a5.6 5.6 0 0 0 5.6-5.6 5.601 5.601 0 1 0-5.6 5.6Z"
    />
    <path
      fill="#0AF"
      d="M37.436 24.353c6.726 0 12.177-5.452 12.177-12.177S44.163 0 37.436 0C30.712 0 25.26 5.451 25.26 12.176c0 6.725 5.452 12.177 12.176 12.177Z"
    />
  </svg>
);

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
          <VkIcon />
          <MtIcon />
          <TgIcon />
          <OkIcon />
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
          <FgIcon />
          <TdIcon />
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
          <SmmIcon />
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
          <YandexIcon />
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
          <N8nIcon />
          <AiIcon />
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

const MtIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="none"
    className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
  >
    <path
      fill="#07F"
      d="M0 23.77C0 12.566 0 6.953 3.482 3.482 6.952 0 12.566 0 23.77 0h2.46c11.204 0 16.806 0 20.288 3.482C50 6.964 50 12.566 50 23.77v2.46c0 11.204 0 16.806-3.482 20.288C43.036 50 37.434 50 26.23 50h-2.46c-11.204 0-16.806 0-20.288-3.482C0 43.036 0 37.434 0 26.23v-2.46Z"
    />
    <path
      fill="#fff"
      d="M24.906 41.215c9.008 0 16.31-7.303 16.31-16.312 0-9.008-7.302-16.311-16.31-16.311-9.01 0-16.312 7.303-16.312 16.311 0 9.009 7.302 16.312 16.312 16.312Z"
    />
    <path
      fill="#313131"
      fillRule="evenodd"
      d="M39.926 6.888v3.13h3.088c1.756 0 2.658 2.11 1.438 3.372l-4.227 4.416a1.989 1.989 0 0 1-1.44.615h-3.998l-4.14 4.46a6.09 6.09 0 0 1 .472 2.328 5.987 5.987 0 1 1-5.988-5.986c.561 0 1.11.077 1.625.22l4.756-5.119V11.04c0-.55.232-1.077.626-1.45l4.416-4.163c1.274-1.197 3.362-.297 3.362 1.45l.01.01Z"
      clipRule="evenodd"
    />
  </svg>
);

const TgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="30"
    fill="none"
    className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
  >
    <path
      fill="#24A0DC"
      d="M39.136 29.325c-9.218 0-14.617-5.597-14.617-14.625C24.52 5.895 30.117 0 38.873 0 45.302 0 49.297 2.91 50 6.566v2.91h-6.167c-.373-1.455-2.15-2.984-4.96-2.984-4.213 0-6.781 3.32-6.781 8.17s2.678 8.134 7.133 8.134c1.514 0 2.72-.224 3.796-.672V18.58h-4.367v-5.746h11.302v12.35c-1.382 2.014-5.508 4.14-10.82 4.14ZM7.38 28.652V7.2H0V.67h22.348V7.2h-7.396v21.452H7.38Z"
    />
  </svg>
);

const OkIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="none"
    className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
  >
    <path
      fill="#FC2C38"
      fillRule="evenodd"
      d="M21.393 7.1C9.578 7.1 0 16.68 0 28.495 0 40.31 9.578 49.887 21.393 49.887c11.815 0 21.393-9.578 21.393-21.393h-7.13c0 7.878-6.386 14.262-14.263 14.262-7.876 0-14.261-6.384-14.261-14.262 0-7.877 6.385-14.262 14.26-14.262V7.1Z"
      clipRule="evenodd"
    />
    <path
      fill="#FC2C38"
      fillRule="evenodd"
      d="m35.659 0-7.132 7.102v9.29L23.3 21.621a7.13 7.13 0 0 0-9.034 6.875 7.13 7.13 0 0 0 7.13 7.13 7.13 7.13 0 0 0 6.904-8.922l5.34-5.34h9.221L50 14.231H35.659V0Z"
      clipRule="evenodd"
    />
  </svg>
);

// Компонент SVG-иконки для SMM-продвижения
const SmmIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 1024 284"
    fill="none"
    className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
  >
    <path
      d="M241 3.2c-3.4 2-5.4 3.1-20 11-3.6 2-13.9 7.6-23 12.5s-19.9 10.8-24 13c-9.9 5.3-38.9 21.1-52 28.3-5.8 3.2-22 12-36 19.5-14 7.6-30.7 16.6-37 20-6.3 3.4-19.1 10.4-28.5 15.5C2.1 132.9-.4 134.7.6 137.3c.3.9 5.6 4.4 11.7 7.8 6.2 3.4 13.7 7.7 16.7 9.5 3 1.7 7.2 4.1 9.3 5.3 15.3 8.6 14.5 7.7 9.7 11.2-2.2 1.6-4 3.3-4 3.7 0 1.9 3 4.3 10.5 8.5 4.4 2.5 17 9.7 28 16l20 11.4.3 22.8c.2 23.1.6 25.5 4.1 25.5.8 0 8.6-7.3 17.3-16.3l15.7-16.2V253c.1 22.1.4 26.9 1.6 28.7 1 1.4 2.2 2 3.2 1.6 1.4-.6 24.4-23.7 35.8-36 5.5-6.1 7-6.4 15.3-2.9 24.1 10.1 58.5 23.6 60.1 23.6 1 0 2.3-.6 2.8-1.3.6-.6 1.8-11.6 2.7-24.2 2.1-28.7 5-68.3 7.1-96.5 2.9-41.3 4.5-62.6 5.5-73.6 1.5-16.6 1.3-20.1-.9-21.3-2-1.1-3-.7-18.3 7.7-4.2 2.3-7.8 3.9-8.1 3.5-.2-.5.5-14 1.6-30.1 1.8-25.5 1.9-29.5.6-30.3-2.1-1.3-4-1-7.9 1.3zm-13.9 36.4c1.4 1.7 1.2 5.7-8.1 129.4-1.1 14.6-2.2 30.2-2.6 34.8-.8 11.6-1.3 11.8-17.1 5.3-6.8-2.8-19.5-8-28.3-11.6l-16.1-6.5-14.8 15.2c-14.4 14.8-14.9 15.2-17.5 14L120 219v-34.5l11.3-17.8c6.1-9.7 16.5-26.1 23-36.3 6.5-10.2 11.7-18.8 11.5-18.9-.3-.3-8.7 5-62.8 40.4-9.6 6.3-18.5 11.6-19.7 11.9-2.5.5-39.9-20.3-41.4-23-1.1-2.1-.4-4 2-5.5 1-.6 29-15.9 62.2-33.8 33.2-18 61.8-33.5 63.4-34.5 1.7-.9 7.5-4.1 13-7 5.5-2.9 10.5-5.6 11-6 .6-.4 5.3-3 10.6-5.8s11.6-6.3 14-7.7c5.1-2.9 7.2-3.1 9-.9z"
    />
  </svg>
);

// Компоненты SVG-иконок для Разработки сайтов
const FgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="400"
    height="600"
    fill="none"
    className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
  >
    <path
      fill="#24CB71"
      d="M0 500c0-55.228 44.772-100 100-100h100v100c0 55.228-44.772 100-100 100S0 555.228 0 500Z"
    />
    <path
      fill="#FF7237"
      d="M200 0v200h100c55.228 0 100-44.772 100-100S355.228 0 300 0H200Z"
    />
    <path
      fill="#00B6FF"
      d="M299.167 400c55.228 0 100-44.772 100-100s-44.772-100-100-100-100 44.772-100 100 44.772 100 100 100Z"
    />
    <path
      fill="#FF3737"
      d="M0 100c0 55.228 44.772 100 100 100h100V0H100C44.772 0 0 44.772 0 100Z"
    />
    <path
      fill="#874FFF"
      d="M0 300c0 55.228 44.772 100 100 100h100V200H100C44.772 200 0 244.772 0 300Z"
    />
  </svg>
);

const TdIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="200"
    height="200"
    viewBox="0 0 100 100"
    className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
  >
    <path
      d="M50 14c-19.87 0-36 16.13-36 36s16.13 36 36 36 36-16.13 36-36-16.13-36-36-36zm0 2c18.79 0 34 15.21 34 34S68.79 84 50 84 16 68.79 16 50s15.21-34 34-34zm0 2.5a.5.5 0 1 0 0 1c16.85 0 30.5 13.65 30.5 30.5 0 11.781-6.676 21.997-16.45 27.078a.5.5 0 1 0 .462.887C74.606 72.716 81.5 62.159 81.5 50c0-17.391-14.109-31.5-31.5-31.5zm-8.492 1.174a.5.5 0 0 0-.133.021 31.37 31.37 0 0 0-10.016 4.91.5.5 0 1 0 .592.805 30.374 30.374 0 0 1 9.697-4.754.5.5 0 0 0-.14-.982zm-13.656 8.115a.5.5 0 0 0-.342.154A31.405 31.405 0 0 0 18.5 50c0 17.391 14.109 31.5 31.5 31.5 1.041 0 2.07-.05 3.086-.148a.5.5 0 0 0-.098-.997c-.984.096-1.98.145-2.988.145-16.85 0-30.5-13.65-30.5-30.5 0-8.319 3.328-15.853 8.725-21.355a.5.5 0 0 0-.373-.856zm12.86 4.963c-2.323 0-4.524 1.018-6.081 2.9-1.557 1.882-2.479 4.59-2.479 7.963a1 1 0 0 0 .86.99l4.056.577a1 1 0 0 0 1.13-.85c.277-1.956.708-3.277 1.204-3.998.497-.721.949-.95 1.862-.95 1.081 0 1.77.114 2.761.509.992.395 2.278 1.102 4.301 2.263 4.065 2.333 5.611 3.035 9.785 3.035 2.278 0 4.603-.82 6.266-2.648 1.663-1.828 2.596-4.613 2.291-8.297a1 1 0 0 0-.996-.918h-4.057a1 1 0 0 0-1 1c0 1.63-.29 2.75-.699 3.367-.41.617-.866.866-1.78.866-1.08 0-1.777-.113-2.855-.516-1.077-.403-2.517-1.12-4.832-2.283-2.301-1.157-3.613-1.896-4.967-2.373-1.353-.478-2.682-.637-4.77-.637zm0 2c1.994 0 2.992.13 4.104.521 1.112.393 2.404 1.104 4.735 2.276 2.317 1.164 3.78 1.902 5.031 2.369a9.557 9.557 0 0 0 3.555.643c1.415 0 2.696-.631 3.445-1.76.6-.904.843-2.105.94-3.473h2.082c.034 2.69-.603 4.658-1.706 5.87-1.24 1.363-2.984 1.993-4.787 1.993-3.986 0-4.742-.448-8.789-2.771-2.033-1.167-3.364-1.912-4.556-2.387-1.193-.475-2.256-.648-3.502-.648-1.415 0-2.703.645-3.508 1.814-.663.963-1.041 2.29-1.332 3.871l-2.15-.306c.153-2.533.825-4.54 1.898-5.836 1.203-1.454 2.785-2.176 4.54-2.176zm6.345 8.441a1 1 0 0 0-.961.998v26.713a1 1 0 0 0 1 1h4.656a1 1 0 0 0 1-1v-24.96a1 1 0 0 0-.648-.936l-4.657-1.752a1 1 0 0 0-.39-.063zm1.039 2.444 2.656 1v23.267h-2.656V45.637zm11.293 33.408a.5.5 0 0 0-.133.025 30.27 30.27 0 0 1-2.215.614.5.5 0 1 0 .229.972 31.293 31.293 0 0 0 2.289-.633.5.5 0 0 0-.17-.978z"
    />
  </svg>
);

// Компонент SVG-иконки для Контекстной рекламы
const YandexIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="50"
    height="50"
    fill="none"
    className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
  >
    <mask id="yandex-mask" width="50" height="50" x="0" y="0" maskUnits="userSpaceOnUse">
      <path fill="#fff" d="M50 25C50 11.193 38.807 0 25 0S0 11.193 0 25s11.193 25 25 25 25-11.193 25-25Z" />
    </mask>
    <g mask="url(#yandex-mask)">
      <path
        fill="#1A4A7F"
        d="M50 25C50 11.193 38.807 0 25 0S0 11.193 0 25s11.193 25 25 25 25-11.193 25-25Z"
      />
      <path
        fill="url(#yandex-gradient)"
        fillRule="evenodd"
        d="M56.588 3.01a6.608 6.608 0 0 1 4.252 8.418L48.115 49.302c-1.18 3.514-4.999 5.443-8.528 4.308a6.608 6.608 0 0 1-4.252-8.419l4.258-12.672-59.161 54.294-9.414-10.259 59.12-54.257-12.878 3.13a6.608 6.608 0 0 1-8.023-4.958c-.828-3.613 1.42-7.252 5.022-8.128L52 3.17a6.765 6.765 0 0 1 4.59-.16Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <linearGradient id="yandex-gradient" x1="136.285" x2="-23.804" y1="66.72" y2="85.549" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFB800" />
        <stop offset="1" stopColor="#FFF11D" />
      </linearGradient>
    </defs>
  </svg>
);

// Компоненты SVG-иконок для ИИ-автоматизации
const N8nIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="500"
    height="200"
    fill="none"
    className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
  >
    <path
      fill="#EA4B71"
      fillRule="evenodd"
      d="M239 83c-11.183 0-20.58-7.649-23.244-18h-27.508a12 12 0 0 0-11.836 10.027l-.987 5.919A23.945 23.945 0 0 1 167.626 95a23.945 23.945 0 0 1 7.799 14.054l.987 5.919A12 12 0 0 0 188.248 125h3.508c2.664-10.351 12.061-18 23.244-18 13.255 0 24 10.745 24 24s-10.745 24-24 24c-11.183 0-20.58-7.649-23.244-18h-3.508c-11.732 0-21.744-8.482-23.673-20.054l-.987-5.919A12 12 0 0 0 151.752 101h-9.508c-2.664 10.351-12.061 18-23.244 18s-20.58-7.649-23.244-18H82.244C79.58 111.351 70.183 119 59 119c-13.255 0-24-10.745-24-24s10.745-24 24-24c11.183 0 20.58 7.649 23.244 18h13.512C98.42 78.649 107.817 71 119 71s20.58 7.649 23.244 18h9.508a12 12 0 0 0 11.836-10.027l.987-5.919C166.504 61.482 176.516 53 188.248 53h27.508C218.42 42.649 227.817 35 239 35c13.255 0 24 10.745 24 24s-10.745 24-24 24zm0-12c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zM59 107c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm72-12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm96 36c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z"
      clipRule="evenodd"
    />
  </svg>
);

const AiIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="65"
    height="65"
    fill="none"
    className="w-12 h-12 transition-transform duration-200 hover:scale-110 hover:rotate-3"
  >
    <path
      fill="#000"
      d="M59.023 33.23a13.433 13.433 0 0 0-3.778-6.32 12.03 12.03 0 0 0-.633-10.708 13.452 13.452 0 0 0-8.219-6.306c-2.458-.658-4.99-.601-7.37.114C36.759 6.997 33.23 5.2 29.44 5.2c-6.378 0-11.727 4.44-13.15 10.388-.014.002-.025-.004-.038-.002a11.917 11.917 0 0 0-8.925 5.913 13.44 13.44 0 0 0-1.352 10.27 13.435 13.435 0 0 0 3.782 6.325 12.005 12.005 0 0 0 .629 10.704 13.452 13.452 0 0 0 8.219 6.306c1.164.312 2.349.467 3.524.467 1.304 0 2.593-.21 3.844-.585 2.265 3.019 5.779 4.814 9.585 4.814 6.384 0 11.736-4.449 13.156-10.404 3.744-.455 7.06-2.608 8.958-5.895a13.446 13.446 0 0 0 1.35-10.27ZM45.72 12.407a10.859 10.859 0 0 1 6.64 5.095 9.424 9.424 0 0 1 .739 7.757c-.129-.08-.251-.17-.382-.247l-11.92-6.883a1.31 1.31 0 0 0-1.313.008L26.226 25.99 26.16 20l11.262-6.5a10.874 10.874 0 0 1 8.299-1.094Zm-7.063 16.447.08 7.156-6.156 3.646-6.239-3.508-.08-7.156 6.156-3.646 6.24 3.509ZM18.505 18.736C18.505 12.705 23.41 7.8 29.44 7.8c2.742 0 5.32 1.19 7.095 3.234-.136.073-.278.134-.413.212l-11.92 6.882a1.305 1.305 0 0 0-.65 1.14l.172 15.407-5.22-2.935V18.736ZM8.485 31.097A10.87 10.87 0 0 1 9.58 22.8a9.32 9.32 0 0 1 6.349-4.516c-.005.151-.024.3-.024.453V32.5c0 .47.254.902.663 1.134l13.428 7.553-5.153 3.052-11.26-6.503a10.86 10.86 0 0 1-5.097-6.639Zm10.793 21.497a10.859 10.859 0 0 1-6.64-5.095 9.407 9.407 0 0 1-.744-7.76c.131.081.255.172.389.25l11.92 6.883a1.3 1.3 0 0 0 1.312-.008l13.258-7.854.067 5.99-11.262 6.5a10.852 10.852 0 0 1-8.3 1.094Zm27.215-6.33c0 6.031-4.904 10.936-10.935 10.936a9.366 9.366 0 0 1-7.097-3.242c.137-.073.281-.128.416-.206l11.921-6.882c.406-.235.655-.672.65-1.14l-.174-15.405 5.22 2.936v13.003Zm8.926-4.063a9.384 9.384 0 0 1-6.349 4.527c.005-.156.023-.308.023-.464V32.5c0-.47-.253-.902-.663-1.134l-13.427-7.553 5.153-3.052 11.26 6.503a10.864 10.864 0 0 1 5.097 6.639 10.87 10.87 0 0 1-1.094 8.298Z"
    />
  </svg>
);

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
          <VkIcon />
          <MtIcon />
          <TgIcon />
          <OkIcon />
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
          <FgIcon />
          <TdIcon />
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
          <SmmIcon />
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
          <YandexIcon />
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
          <N8nIcon />
          <AiIcon />
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
