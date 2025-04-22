"use client"

import { useState, useCallback } from "react"
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
  direction,
}: CaseStudyProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-8 items-center absolute w-full",
        "transition-opacity transition-transform",
        isActive && !isTransitioning
          ? "opacity-100 translate-x-0 z-20 duration-300 pointer-events-auto"
          : isActive && isTransitioning && direction === "next"
            ? "opacity-0 -translate-x-full z-10 duration-250 pointer-events-none"
            : isActive && isTransitioning && direction === "prev"
              ? "opacity-0 translate-x-full z-10 duration-250 pointer-events-none"
              : !isActive && isTransitioning && direction === "next" && index === (direction === "next" ? 1 : -1)
                ? "opacity-0 translate-x-full z-10 duration-0 pointer-events-none"
                : !isActive && isTransitioning && direction === "prev" && index === (direction === "prev" ? -1 : 1)
                  ? "opacity-0 -translate-x-full z-10 duration-0 pointer-events-none"
                  : "opacity-0 translate-x-full invisible z-0 duration-0 pointer-events-none",
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
      )}
      style={{
        willChange: "transform, opacity",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        transitionDelay: `${Math.min(index * 50, 400)}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={cn(
          "relative rounded-2xl overflow-hidden shadow-md border border-white/10 h-[400px] transition-transform duration-200",
          isHovered && "scale-105",
        )}
        style={{ willChange: "transform" }}
      >
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          loading="lazy"
          className="object-cover"
        />
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
              className={cn(
                "bg-white/5 text-accent-cyan text-xs font-medium py-1 px-3 rounded-full border border-white/10 transition-transform duration-200",
                isHovered && "scale-105",
              )}
              style={{ willChange: "transform" }}
            >
              {tag}
            </span>
          ))}
        </div>

        <h3
          className={cn(
            "text-2xl md:text-3xl font-bold mb-4 text-white transition-colors duration-200",
            isHovered && "text-primary",
          )}
        >
          {title}
        </h3>
        <p className="text-white/80 mb-6">{description}</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
          {results.map((result, idx) => (
            <div
              key={idx}
              className={cn(
                "bg-white/5 p-4 rounded-xl border border-white/10 transition-transform duration-200",
                isHovered && "scale-105",
              )}
              style={{ willChange: "transform" }}
            >
              <div className="text-2xl font-bold text-accent-cyan mb-1">{result.value}</div>
              <div className="text-xs text-white/70">{result.label}</div>
            </div>
          ))}
        </div>

        <Button
          asChild
          variant="outline"
          className={cn(
            "border-white/20 text-white hover:border-accent-cyan hover:bg-white/5 transition-all duration-200",
            isHovered && "border-accent-cyan bg-white/5",
          )}
          style={{ willChange: "background-color, border-color" }}
        >
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

  const transitionToCase = useCallback(
    (index: number, dir: "next" | "prev") => {
      if (isTransitioning || index === activeCase) return;

      setDirection(dir);
      setIsTransitioning(true);

      requestAnimationFrame(() => {
        setTimeout(() => {
          setActiveCase(index);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 50);
        }, 250);
      });
    },
    [isTransitioning, activeCase],
  );

  const nextCase = useCallback(() => {
    const next = activeCase === caseStudies.length - 1 ? 0 : activeCase + 1;
    transitionToCase(next, "next");
  }, [activeCase, caseStudies.length, transitionToCase]);

  const prevCase = useCallback(() => {
    const prev = activeCase === 0 ? caseStudies.length - 1 : activeCase - 1;
    transitionToCase(prev, "prev");
  }, [activeCase, caseStudies.length, transitionToCase]);

  const goToCase = useCallback(
    (index: number) => {
      const dir = index > activeCase ? "next" : "prev";
      transitionToCase(index, dir);
    },
    [activeCase, transitionToCase],
  );

  return (
    <section
      id="cases"
      className="py-24 relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent-cyan/5"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="mb-6 md:mb-0">
            <span className="section-title-tag">Наши кейсы</span>
            <h2
              ref={ref}
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 transition-opacity transition-transform duration-500",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ willChange: "transform, opacity" }}
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
              className={cn(
                "rounded-full border-white/20 transition-all duration-200",
                !isTransitioning && "hover:border-accent-cyan hover:bg-white/5",
              )}
              style={{ willChange: "background-color, border-color" }}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              onClick={nextCase}
              size="icon"
              variant="outline"
              disabled={isTransitioning}
              className={cn(
                "rounded-full border-white/20 transition-all duration-200",
                !isTransitioning && "hover:border-accent-cyan hover:bg-white/5",
              )}
              style={{ willChange: "background-color, border-color" }}
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
                "w-3 h-3 rounded-full mx-1 transition-colors transition-transform duration-200",
                index === activeCase ? "bg-primary scale-125" : "bg-white/30 hover:bg-white/50",
              )}
              style={{ willChange: "background-color, transform" }}
              aria-label={`Перейти к кейсу ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex justify-center mt-16">
          <Button
            asChild
            className={cn(
              "bg-primary text-white px-6 py-2 rounded-lg transition-all duration-200",
              "hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20",
            )}
            style={{ willChange: "background-color, box-shadow" }}
          >
            <Link href="#">Посмотреть все кейсы</Link>
          </Button>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
    </section>
  )
}
