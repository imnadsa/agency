"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"
import { useInView } from "react-intersection-observer"

type FAQItemProps = {
  question: string
  answer: string
  index: number
  isOpen: boolean
  onClick: () => void
}

function FAQItem({ question, answer, index, isOpen, onClick }: FAQItemProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "border border-white/10 rounded-xl overflow-hidden mb-4 bg-secondary transition-all",
        isOpen ? "shadow-md shadow-primary/10" : "hover:shadow-sm",
        inView ? "animate-fade-in" : "opacity-0 translate-y-5",
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-bold text-white">{question}</h3>
        <ChevronDown
          className={cn("w-5 h-5 text-accent-cyan transition-transform", isOpen ? "transform rotate-180" : "")}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="p-6 pt-0 text-white/80">{answer}</div>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      question: "Какие digital-услуги вы предлагаете для медицинских клиник?",
      answer:
        "Мы предлагаем комплексные digital-решения для медицинских учреждений, включая разработку сайтов и мобильных приложений, внедрение AI-решений для автоматизации процессов, настройку таргетированной и контекстной рекламы, SMM-продвижение и создание медицинского контента. Наши услуги адаптированы под специфику медицинской отрасли и учитывают все законодательные ограничения.",
    },
    {
      question: "Сколько времени занимает разработка сайта для клиники?",
      answer:
        "Сроки разработки сайта зависят от его сложности и функциональности. Типовой информационный сайт для клиники мы создаем за 3-4 недели. Для более сложных проектов с интеграцией CRM, онлайн-записью и личным кабинетом пациента срок составляет 2-3 месяца. На первой консультации мы детально обсудим ваши потребности и предоставим точные сроки реализации проекта.",
    },
    {
      question: "Как AI-решения могут помочь моей клинике?",
      answer:
        "Искусственный интеллект может значительно оптимизировать работу медицинского учреждения. Наши AI-решения помогают автоматизировать запись пациентов, проводить первичный сбор анамнеза, анализировать медицинские изображения для поддержки в диагностике, прогнозировать загруженность клиники и оптимизировать расписание врачей. Это позволяет сократить административную нагрузку на персонал, минимизировать ошибки и повысить качество обслуживания пациентов.",
    },
    {
      question: "Учитываете ли вы законодательные ограничения при продвижении медицинских услуг?",
      answer:
        "Да, мы тщательно следим за соблюдением всех законодательных норм при продвижении медицинских услуг. Наши специалисты хорошо знакомы с ограничениями рекламы медицинских услуг, требованиями к размещению информации о лицензиях и сертификатах, а также правилами обработки персональных данных пациентов. Мы гарантируем, что все маркетинговые материалы и digital-решения будут соответствовать действующему законодательству.",
    },
    {
      question: "Можно ли интегрировать ваши решения с существующими системами клиники?",
      answer:
        "Да, мы обеспечиваем интеграцию наших решений с существующими системами вашей клиники, включая медицинские информационные системы (МИС), CRM, ERP и другие программные продукты. Наши разработчики имеют опыт работы с различными API и протоколами обмена данными, что позволяет создавать единую цифровую экосистему для вашей клиники без необходимости полной замены существующего программного обеспечения.",
    },
  ]

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-gradient-to-r from-primary/5 to-accent-cyan/5">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">Часто задаваемые вопросы</span>
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            Ответы на <span className="text-primary">популярные</span> вопросы
          </h2>
          <p className="text-white/80">
            Мы собрали ответы на самые распространенные вопросы о наших услугах и процессе работы с медицинскими
            учреждениями
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="mb-6 text-white/80">Не нашли ответ на свой вопрос?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center h-10 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
          >
            Задайте его нам
          </a>
        </div>
      </div>
    </section>
  )
}
