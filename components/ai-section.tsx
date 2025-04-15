"use client"

import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type AIFeatureProps = {
  icon: string
  title: string
  description: string
  index: number
}

function AIFeature({ icon, title, description, index }: AIFeatureProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn("flex items-start gap-4 mb-6", inView ? "animate-fade-in" : "opacity-0 translate-y-5")}
      style={{ animationDelay: `${index * 0.2}s` }}
    >
      <div className="flex items-center justify-center min-w-12 h-12 rounded-xl bg-white/5 text-accent-cyan text-2xl">
        {icon}
      </div>
      <div>
        <h4 className="text-xl font-bold mb-2 text-white">{title}</h4>
        <p className="opacity-80 text-white">{description}</p>
      </div>
    </div>
  )
}

export default function AiSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: "🔍",
      title: "Анализ медицинских изображений",
      description:
        "ИИ-алгоритмы для распознавания патологий на рентгенах, МРТ и КТ с высокой точностью и в короткие сроки.",
    },
    {
      icon: "🗣️",
      title: "Виртуальные ассистенты",
      description:
        "Интеллектуальные чат-боты для первичного сбора анамнеза, записи на прием и ответов на часто задаваемые вопросы.",
    },
    {
      icon: "📈",
      title: "Предиктивная аналитика",
      description: "Системы для прогнозирования рисков заболеваний и оптимизации лечения на основе больших данных.",
    },
  ]

  return (
    <section
      id="ai"
      className="py-24 my-16 relative bg-gradient-to-r from-primary/10 to-accent-cyan/5 rounded-3xl overflow-hidden"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center">
          <div className="relative z-10">
            <span className="section-title-tag">AI В МЕДИЦИНЕ</span>
            <h2
              ref={ref}
              className={cn(
                "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              Революционные <span className="text-primary">ИИ-решения</span> для вашей клиники
            </h2>
            <p className="mb-8 text-white/80">
              Искусственный интеллект трансформирует медицину, и мы помогаем клиникам внедрять эти инновации, чтобы
              повысить качество диагностики, оптимизировать рабочие процессы и улучшить результаты лечения.
            </p>

            <div className="mt-8">
              {features.map((feature, index) => (
                <AIFeature
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>

            <Button asChild className="mt-8 bg-primary hover:bg-primary/90 text-white">
              <Link href="#">Узнать больше о наших AI-решениях</Link>
            </Button>
          </div>

          <div className="relative">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-xl border border-white/10 floating">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="AI в медицине"
                width={600}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
