"use client"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

type MetricCardProps = {
  value: string
  symbol: string
  title: string
  description: string
  index: number
}

function MetricCard({ value, symbol, title, description, index }: MetricCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-secondary border border-white/10 rounded-2xl p-10 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10 hover:border-primary/30",
        inView ? "opacity-100 translate-y-0 transition-opacity transition-transform duration-300" : "opacity-0 translate-y-5",
      )}
      style={{ transitionDelay: `${Math.min(index * 150, 300)}ms`, willChange: "transform, opacity" }}
    >
      <div className="text-6xl font-extrabold mb-4 text-accent-cyan">
        {value}
        <span className="text-4xl">{symbol}</span>
      </div>
      <h3 className="text-xl font-bold mb-4 text-white">{title}</h3>
      <p className="opacity-70 text-[0.95rem] text-white">{description}</p>
    </div>
  )
}

export default function Advantages() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const metrics = [
    {
      value: "+47",
      symbol: "%",
      title: "Рост потока пациентов",
      description: "Среднее увеличение количества новых пациентов после внедрения комплексных диджитал-решений",
    },
    {
      value: "-35",
      symbol: "%",
      title: "Сокращение времени ожидания",
      description: "Оптимизация процессов записи и приема пациентов благодаря автоматизации",
    },
    {
      value: "+82",
      symbol: "%",
      title: "Увеличение повторных обращений",
      description: "Рост лояльности пациентов благодаря улучшению клиентского опыта и персонализации",
    },
    {
      value: "328",
      symbol: "%",
      title: "ROI от диджитал-решений",
      description: "Средняя окупаемость инвестиций в наши решения за первый год использования",
    },
  ]

  return (
    <section id="advantages" className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">Измеримые результаты</span>
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-opacity transition-transform duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
            style={{ willChange: "transform, opacity" }}
          >
            Реальные <span className="text-primary">преимущества</span> для вашей клиники
          </h2>
          <p className="text-white/80">
            Наши решения приносят не просто красивый сайт, а конкретные бизнес-показатели, которые вы можете измерить
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <MetricCard
              key={index}
              value={metric.value}
              symbol={metric.symbol}
              title={metric.title}
              description={metric.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
