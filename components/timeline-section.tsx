"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

type TimelineItemProps = {
  step: number
  title: string
  description: string
  icon: string
  index: number
  isLast: boolean
}

function TimelineItem({ step, title, description, icon, index, isLast }: TimelineItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "flex relative",
        isLast ? "" : "pb-16",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
      )}
      style={{ 
        transitionProperty: "opacity, transform",
        transitionDuration: "400ms",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDelay: `${Math.min(index * 150, 600)}ms`,
        willChange: "transform, opacity"
      }}
    >
      {/* Линия */}
      {!isLast && (
        <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-gradient-to-b from-primary to-accent-cyan opacity-30"></div>
      )}

      {/* Иконка с номером */}
      <div className="relative z-10 flex-shrink-0 w-14 h-14 rounded-full bg-primary/20 text-white flex items-center justify-center text-2xl">
        {icon}
      </div>

      {/* Контент */}
      <div className="ml-8">
        <div className="bg-secondary rounded-xl p-6 border border-white/10 shadow-md hover:shadow-lg hover:shadow-primary/10 transition-shadow transition-transform duration-300 hover:-translate-y-1">
          <div className="inline-block bg-white/5 text-accent-cyan text-sm font-medium py-1 px-3 rounded-full mb-3">
            Шаг {step}
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
          <p className="opacity-80 text-white">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default function TimelineSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const timelineItems = [
    {
      step: 1,
      title: "Консультация и анализ",
      description:
        "Мы проводим детальный анализ вашей клиники, изучаем текущее digital-присутствие, конкурентов и целевую аудиторию. Определяем ключевые цели и KPI.",
      icon: "🔍",
    },
    {
      step: 2,
      title: "Разработка стратегии",
      description:
        "На основе анализа создаем индивидуальную digital-стратегию для вашей клиники, включающую все необходимые каналы продвижения и технологические решения.",
      icon: "📝",
    },
    {
      step: 3,
      title: "Дизайн и разработка",
      description:
        "Создаем современный дизайн и разрабатываем технические решения: сайт, мобильное приложение, CRM-систему или внедряем AI-инструменты.",
      icon: "💻",
    },
    {
      step: 4,
      title: "Запуск и оптимизация",
      description:
        "Запускаем разработанные решения, настраиваем аналитику и начинаем рекламные кампании. Постоянно отслеживаем результаты и оптимизируем процессы.",
      icon: "🚀",
    },
    {
      step: 5,
      title: "Поддержка и развитие",
      description:
        "Обеспечиваем техническую поддержку, регулярно анализируем эффективность и предлагаем новые решения для дальнейшего роста вашей клиники.",
      icon: "🔄",
    },
  ]

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent-cyan/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">Как мы работаем</span>
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-opacity transition-transform duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
            style={{ willChange: "transform, opacity" }}
          >
            Прозрачный <span className="text-primary">процесс</span> работы
          </h2>
          <p className="text-white/80">
            Мы придерживаемся четкого и структурированного подхода к работе с каждым клиентом, чтобы обеспечить
            максимальную эффективность и результативность
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <TimelineItem
              key={index}
              step={item.step}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
              isLast={index === timelineItems.length - 1}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="mb-6 text-white/80">Готовы начать сотрудничество?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-10 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
          >
            Обсудить проект
          </a>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-1/3 left-0 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
    </section>
  )
}
