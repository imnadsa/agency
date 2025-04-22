"use client"

import { useState, useCallback } from "react"
import { useInView } from "react-intersection-observer"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"

type TestimonialCardProps = {
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

function TestimonialCard({
  title,
  description,
  results,
  tags,
  index,
  isActive,
  isTransitioning,
  direction,
}: TestimonialCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "absolute w-full",
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
          "bg-secondary border border-white/10 rounded-2xl p-6 transition-shadow transition-transform duration-300 relative overflow-hidden group",
          isHovered ? "shadow-md shadow-primary/10 -translate-y-2" : "hover:shadow-sm",
        )}
        style={{ willChange: "transform, box-shadow" }}
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
        </div>
      </div>
    </div>
  )
}

export default function TestimonialsSection() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [direction, setDirection] = useState<"next" | "prev" | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const testimonials = [
    {
      title: "Стоматологическая клиника «ДентаПлюс»",
      description:
        "Внедрили AI-чат-бота для первичной консультации пациентов, разработали мобильное приложение и настроили систему лояльности для повторных обращений.",
      results: [
        { label: "Снижение нагрузки на администраторов", value: "-65%" },
        { label: "Рост повторных обращений", value: "+100%" },
      ],
      tags: ["AI-решения", "Мобильное приложение", "Система лояльности"],
    },
    {
      title: "Многопрофильная клиника «МедЭксперт»",
      description:
        "Разработали новый сайт с онлайн-записью, внедрили систему автоматизации маркетинга и настроили таргетированную рекламу для привлечения новых пациентов.",
      results: [
        { label: "Рост записей на прием", value: "+73%" },
        { label: "Снижение стоимости заявки", value: "-42%" },
      ],
      tags: ["Разработка сайта", "Автоматизация", "Таргетированная реклама"],
    },
    {
      title: "Сеть лабораторий «ЛабТест»",
      description:
        "Разработали систему автоматического оповещения о готовности анализов, создали личный кабинет пациента и настроили контекстную рекламу для привлечения новых клиентов.",
      results: [
        { label: "Сокращение времени обработки результатов", value: "-58%" },
        { label: "Рост количества новых клиентов", value: "+62%" },
      ],
      tags: ["Автоматизация", "Личный кабинет", "Контекстная реклама"],
    },
  ]

  const transitionToTestimonial = useCallback(
    (index: number, dir: "next" | "prev") => {
      if (isTransitioning || index === activeTestimonial) return;

      setDirection(dir);
      setIsTransitioning(true);

      requestAnimationFrame(() => {
        setTimeout(() => {
          setActiveTestimonial(index);
          setTimeout(() => {
            setIsTransitioning(false);
          }, 50);
        }, 250);
      });
    },
    [isTransitioning, activeTestimonial],
  );

  const nextTestimonial = useCallback(() => {
    const next = activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1;
    transitionToTestimonial(next, "next");
  }, [activeTestimonial, testimonials.length, transitionToTestimonial]);

  const prevTestimonial = useCallback(() => {
    const prev = activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1;
    transitionToTestimonial(prev, "prev");
  }, [activeTestimonial, testimonials.length, transitionToTestimonial]);

  const goToTestimonial = useCallback(
    (index: number) => {
      const dir = index > activeTestimonial ? "next" : "prev";
      transitionToTestimonial(index, dir);
    },
    [activeTestimonial, transitionToTestimonial],
  );

  return (
    <section
      id="testimonials"
      className="py-24 relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent-cyan/5"
    >
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="mb-6 md:mb-0">
            <span className="section-title-tag">Отзывы</span>
            <h2
              ref={ref}
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 transition-opacity transition-transform duration-500",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ willChange: "transform, opacity" }}
            >
              Отзывы наших <span className="text-primary">клиентов</span>
            </h2>
            <p className="max-w-2xl text-white/80">
              Узнайте, что говорят наши клиенты о наших решениях и как они помогли их бизнесу
            </p>
          </div>

          <div className="flex gap-2">
            <Button
              onClick={prevTestimonial}
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
              onClick={nextTestimonial}
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

        <div className="relative min-h-[400px]">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              title={testimonial.title}
              description={testimonial.description}
              results={testimonial.results}
              tags={testimonial.tags}
              index={index}
              isActive={index === activeTestimonial}
              isTransitioning={isTransitioning}
              direction={direction}
            />
          ))}
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              disabled={isTransitioning}
              className={cn(
                "w-3 h-3 rounded-full mx-1 transition-colors transition-transform duration-200",
                index === activeTestimonial ? "bg-primary scale-125" : "bg-white/30 hover:bg-white/50",
              )}
              style={{ willChange: "background-color, transform" }}
              aria-label={`Перейти к отзыву ${index + 1}`}
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
            <Link href="#faq" className="flex items-center">
              Часто задаваемые вопросы
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
    </section>
  )
}
