"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle2 } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function AuditSection() {
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Имитация отправки формы
    setTimeout(() => {
      setSubmitted(true)
    }, 1000)
  }

  const auditBenefits = [
    "Анализ текущего состояния вашего сайта и онлайн-присутствия",
    "Оценка эффективности рекламных кампаний",
    "Анализ конкурентов в вашем регионе",
    "Рекомендации по улучшению конверсии",
    "Предложения по внедрению AI-решений",
  ]

  return (
    <section id="audit" className="py-24 relative overflow-hidden" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={cn("transition-opacity transition-transform duration-500", inView ? "opacity-100" : "opacity-0 translate-x-[-50px]")} style={{ willChange: "transform, opacity" }}>
            <span className="section-title-tag">Бесплатный аудит</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Получите <span className="text-primary">бесплатный аудит</span> вашего digital-присутствия
            </h2>
            <p className="mb-8 text-white/80">
              Наши эксперты проанализируют ваш сайт, социальные сети и рекламные кампании, чтобы выявить возможности для
              роста и оптимизации. Вы получите детальный отчет с конкретными рекомендациями.
            </p>

            <ul className="space-y-4 mb-8">
              {auditBenefits.map((benefit, index) => (
                <li
                  key={index}
                  className={cn(
                    "flex items-start gap-3 transition-opacity transition-transform duration-300",
                    inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
                  )}
                  style={{ transitionDelay: `${Math.min(index * 100, 400)}ms`, willChange: "transform, opacity" }}
                >
                  <CheckCircle2 className="h-6 w-6 text-accent-cyan flex-shrink-0 mt-0.5" />
                  <span className="text-white">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              "bg-secondary rounded-2xl p-8 border border-white/10 shadow-xl transition-opacity transition-transform duration-500",
              inView ? "opacity-100" : "opacity-0 translate-x-[50px]",
            )}
            style={{ willChange: "transform, opacity" }}
          >
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold mb-6 text-white text-center">Заполните форму для получения аудита</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="clinicName" className="block mb-2 text-sm font-medium text-white">
                      Название клиники
                    </label>
                    <input
                      type="text"
                      id="clinicName"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-white"
                      placeholder="Введите название вашей клиники"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-white">
                      Веб-сайт
                    </label>
                    <input
                      type="url"
                      id="website"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-white"
                      placeholder="https://вашсайт.рф"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                      Email для связи
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-white"
                      placeholder="email@клиника.рф"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-white">
                      Телефон
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-white"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <label htmlFor="goals" className="block mb-2 text-sm font-medium text-white">
                      Ваши цели
                    </label>
                    <textarea
                      id="goals"
                      rows={3}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-white"
                      placeholder="Расскажите, какие задачи вы хотите решить"
                    ></textarea>
                  </div>
                  <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">
                    Получить бесплатный аудит
                  </Button>
                </form>
                <p className="mt-4 text-xs text-center text-white/60">
                  Отправляя форму, вы соглашаетесь с нашей{" "}
                  <a href="#" className="text-accent-cyan hover:underline">
                    политикой конфиденциальности
                  </a>
                </p>
              </>
            ) : (
              <div className="text-center py-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
                  <CheckCircle2 className="h-10 w-10 text-accent-cyan" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Спасибо за заявку!</h3>
                <p className="mb-8 text-white/80">
                  Мы получили вашу заявку на аудит. Наши специалисты свяжутся с вами в течение 24 часов для уточнения
                  деталей.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="border-white/20 hover:border-accent-cyan hover:bg-white/5"
                >
                  Отправить еще одну заявку
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-cyan/5 rounded-full filter blur-3xl opacity-70 -z-10"></div>
    </section>
  )
}
