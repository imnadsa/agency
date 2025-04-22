"use client"

import { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type CaseStudyProps = {
  image: string
  logo: string
  title: string
  description: string
  results: {
    label: string
    value: string
  }[]
  tags: string[]
  index: number
  isActive: boolean
  isTransitioning: boolean
  direction: "next" | "prev" | null
}

function CaseStudy({ 
  image, 
  logo, 
  title, 
  description, 
  results, 
  tags, 
  index, 
  isActive,
  isTransitioning,
  direction
}: CaseStudyProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center absolute w-full transition-all",
        isActive && !isTransitioning 
          ? "opacity-100 translate-x-0 z-20 duration-500" 
          : isActive && isTransitioning && direction === "next"
            ? "opacity-0 -translate-x-full z-10 duration-300" 
            : isActive && isTransitioning && direction === "prev"
              ? "opacity-0 translate-x-full z-10 duration-300"
              : !isActive && isTransitioning && direction === "next" && index === (direction === "next" ? 1 : -1)
                ? "opacity-0 translate-x-full z-10 duration-0"
                : !isActive && isTransitioning && direction === "prev" && index === (direction === "prev" ? -1 : 1)
                  ? "opacity-0 -translate-x-full z-10 duration-0"
                  : "opacity-0 translate-x-full invisible z-0 duration-0",
        inView ? "animate-fade-in" : "opacity-0",
      )}
      style={{ 
        animationDelay: `${index * 0.2}s`,
      }}
    >
      <div className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10 h-[400px]">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        <div className="absolute top-6 left-6 bg-black/50 backdrop-blur-sm p-3 rounded-xl">
          <Image
            src={logo || "/placeholder.svg"}
            alt={`${title} logo`}
            width={120}
            height={40}
            className="h-8 w-auto"
          />
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="bg-white/5 text-accent-cyan text-xs font-medium py-1 px-3 rounded-full border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{title}</h3>
        <p className="opacity-80 mb-6 text-white">{description}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {results.map((result, idx) => (
            <div key={idx} className="bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="text-2xl font-bold text-accent-cyan mb-1">{result.value}</div>
              <div className="text-xs opacity-70 text-white">{result.label}</div>
            </div>
          ))}
        </div>

        <Button asChild variant="outline" className="border-white/20 hover:border-accent-cyan hover:bg-white/5">
          <Link href="#" className="flex items-center">
            Подробнее о кейсе
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

export default function CasesSection() {
  const [activeCase, setActiveCase] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev" | null>(null)
  const [nextCaseIndex, setNextCaseIndex] = useState<number | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const caseStudies = [
    {
      image: "/placeholder.svg?height=600&width=800",
      logo: "/placeholder.svg?height=80&width=200",
      title: "Многопрофильная клиника «МедЭксперт»",
      description:
        "Разработали новый сайт с онлайн-записью, внедрили систему автоматизации маркетинга и настроили таргетированную рекламу для привлечения новых пациентов.",
      results: [
        { label: "Рост записей на прием", value: "+73%" },
        { label: "Снижение стоимости заявки", value: "-42%" },
        { label: "Увеличение конверсии", value: "+38%" },
      ],
      tags: ["Разработка сайта", "Автоматизация", "Таргетированная реклама"],
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      logo: "/placeholder.svg?height=80&width=200",
      title: "Стоматологическая клиника «ДентаПлюс»",
      description:
        "Внедрили AI-чат-бота для первичной консультации пациентов, разработали мобильное приложение и настроили систему лояльности для повторных обращений.",
      results: [
        { label: "Снижение нагрузки на администраторов", value: "-65%" },
        { label: "Рост повторных обращений", value: "+47%" },
        { label: "Увеличение среднего чека", value: "+28%" },
      ],
      tags: ["AI-решения", "Мобильное приложение", "Система лояльности"],
    },
    {
      image: "/placeholder.svg?height=600&width=800",
      logo: "/placeholder.svg?height=80&width=200",
      title: "Сеть лабораторий «ЛабТест»",
      description:
        "Разработали систему автоматического оповещения о готовности анализов, создали личный кабинет пациента и настроили контекстную рекламу для привлечения новых клиентов.",
      results: [
        { label: "Сокращение времени обработки результатов", value: "-58%" },
        { label: "Рост количества новых клиентов", value: "+62%" },
        { label: "Повышение удовлетворенности", value: "+41%" },
      ],
      tags: ["Автоматизация", "Личный кабинет", "Контекстная реклама"],
    },
  ]

  // Переход к следующему кейсу с анимацией
  const transitionToCase = (index: number, dir: "next" | "prev") => {
    if (isTransitioning || index === activeCase) return
    
    setDirection(dir)
    setIsTransitioning(true)
    setNextCaseIndex(index)
    
    // Сначала скрываем текущий слайд
    setTimeout(() => {
      setActiveCase(index)
      // Затем после короткой паузы завершаем переход
      setTimeout(() => {
        setIsTransitioning(false)
        setNextCaseIndex(null)
      }, 50)
    }, 300) // Время для анимации исчезновения текущего слайда
  }

  const nextCase = () => {
    const next = activeCase === caseStudies.length - 1 ? 0 : activeCase + 1
    transitionToCase(next, "next")
  }

  const prevCase = () => {
    const prev = activeCase === 0 ? caseStudies.length - 1 : activeCase - 1
    transitionToCase(prev, "prev")
  }

  const goToCase = (index: number) => {
    const dir = index > activeCase ? "next" : "prev"
    transitionToCase(index, dir)
  }

  return (
    <section id="cases" className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="mb-6 md:mb-0">
            <span className="section-title-tag">Наши кейсы</span>
            <h2
              ref={ref}
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
            >
              Истории <span className="text-primary">успеха</span> наших клиентов
            </h2>
            <p className="max-w-2xl text-white/80">
              Реальные примеры того, как наши digital-решения помогли медицинским клиникам увеличить поток пациентов и
              оптимизировать рабочие процессы
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={prevCase}
              size="icon"
              variant="outline"
              disabled={isTransitioning}
              className="rounded-full border-white/20 hover:border-accent-cyan hover:bg-white/5"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={nextCase}
              size="icon"
              variant="outline"
              disabled={isTransitioning}
              className="rounded-full border-white/20 hover:border-accent-cyan hover:bg-white/5"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative min-h-[600px]">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudy
              key={index}
              image={caseStudy.image}
              logo={caseStudy.logo}
              title={caseStudy.title}
              description={caseStudy.description}
              results={caseStudy.results}
              tags={caseStudy.tags}
              index={index}
              isActive={index === activeCase}
              isTransitioning={isTransitioning}
              direction={direction}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {caseStudies.map((_, index) => (
            <button
              key={index}
              onClick={() => goToCase(index)}
              disabled={isTransitioning}
              className={cn(
                "w-3 h-3 rounded-full mx-1 transition-all",
                index === activeCase ? "bg-primary scale-125" : "bg-white/30 hover:bg-white/50",
              )}
              aria-label={`Перейти к кейсу ${index + 1}`}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <Button asChild className="bg-primary hover:bg-primary/90 text-white">
            <Link href="#">Посмотреть все кейсы</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
