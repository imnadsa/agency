"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Pause } from "lucide-react"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

export default function DemoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">Демонстрация</span>
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-opacity transition-transform duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
            style={{ willChange: "transform, opacity" }}
          >
            Посмотрите, как <span className="text-primary">работают</span> наши решения
          </h2>
          <p className="text-white/80">
            Короткое видео демонстрирует, как наши технологии помогают клиникам оптимизировать процессы и улучшать
            обслуживание пациентов
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-white/10 group">
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>

          <Image
            src="/placeholder.svg?height=600&width=1000"
            alt="Демонстрация работы системы"
            width={1000}
            height={600}
            className="w-full"
            priority
          />

          <Button
            onClick={togglePlay}
            size="icon"
            className={cn(
              "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm text-white hover:bg-primary hover:text-white transition-transform transition-colors duration-200 shadow-xl",
              "group-hover:scale-110",
            )}
            style={{ willChange: "transform, background-color" }}
          >
            {isPlaying ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8 ml-1" />}
          </Button>

          <div 
            className="absolute bottom-0 left-0 right-0 p-6 bg-black/80 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-200"
            style={{ willChange: "transform" }}
          >
            <h3 className="text-xl font-bold mb-2 text-white">Интеграция AI в клинические процессы</h3>
            <p className="text-sm opacity-80 text-white">
              Видео демонстрирует, как искусственный интеллект помогает врачам в диагностике и принятии решений, а также
              как автоматизирует рутинные задачи администраторов клиники.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: "🏥",
              title: "Для клиник",
              description: "Оптимизация рабочих процессов, сокращение административной нагрузки и повышение эффективности работы персонала."
            },
            {
              icon: "👨‍⚕️",
              title: "Для врачей",
              description: "Поддержка в диагностике, доступ к актуальной медицинской информации и сокращение времени на заполнение документации."
            },
            {
              icon: "🧑‍🤝‍🧑",
              title: "Для пациентов",
              description: "Удобная запись на прием, минимальное время ожидания и персонализированный подход к лечению."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-secondary border border-white/10 rounded-xl p-6 shadow-md hover:shadow-lg hover:shadow-primary/10 transition-shadow transition-transform duration-200 hover:-translate-y-1"
              style={{ 
                transitionDelay: `${index * 50}ms`,
                willChange: "transform, box-shadow" 
              }}
            >
              <div className="text-2xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
              <p className="text-sm opacity-80 text-white">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
