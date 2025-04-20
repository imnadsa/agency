"use client"

import type React from "react"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ServiceCardProps = {
  icon?: React.ReactNode
  title: string
  description: string
  index: number
  logos?: React.ReactNode
  features?: string[]
}

function ServiceCard({ icon, title, description, index, logos, features }: ServiceCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-secondary border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl relative overflow-hidden group",
        inView ? "animate-fade-in" : "opacity-0 translate-y-5",
      )}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Градиентный фон при наведении */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-br from-primary/10 to-accent-cyan/10 opacity-0 transition-opacity duration-300",
        isHovered && "opacity-100"
      )} />
      
      {/* Основной контент */}
      <div className="relative z-10">
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#6812F3] transition-colors">
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
            <div className={cn(
              "mt-6 inline-flex items-center text-sm font-medium text-accent-cyan opacity-0 transform translate-x-[-10px] transition-all duration-300",
              isHovered && "opacity-100 translate-x-0"
            )}>
              Подробнее <ArrowRight className="ml-1 w-4 h-4" />
            </div>
          </div>
          
          {icon && (
            <div className={cn(
              "text-4xl bg-primary/20 p-4 rounded-xl text-accent-cyan transition-transform duration-300",
              isHovered && "scale-110 rotate-3"
            )}>
              {icon}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// Улучшенные компоненты логотипов
const ServiceLogo = ({ bg, text, textColor = "white" }: { bg: string; text: string; textColor?: string }) => (
  <div 
    className="w-12 h-12 flex items-center justify-center rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-3"
    style={{ backgroundColor: bg }}
  >
    <span className={`font-bold text-${textColor}`}>{text}</span>
  </div>
)

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
        "Отслеживание конверсий и аналитика"
      ],
      logos: (
        <>
          <svg className="w-12 h-12 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"><path fill="#07F" d="M0 23.77C0 12.566 0 6.953 3.482 3.482 6.952 0 12.566 0 23.77 0h2.46c11.204 0 16.806 0 20.288 3.482C50 6.964 50 12.566 50 23.77v2.46c0 11.204 0 16.806-3.482 20.288C43.036 50 37.434 50 26.23 50h-2.46c-11.204 0-16.806 0-20.288-3.482C0 43.036 0 37.434 0 26.23v-2.46Z"/><path fill="#fff" d="M24.906 41.215c9.008 0 16.31-7.303 16.31-16.312 0-9.008-7.302-16.311-16.31-16.311-9.01 0-16.312 7.303-16.312 16.311 0 9.009 7.302 16.312 16.312 16.312Z"/><path fill="#313131" fill-rule="evenodd" d="M39.926 6.888v3.13h3.088c1.756 0 2.658 2.11 1.438 3.372l-4.227 4.416a1.989 1.989 0 0 1-1.44.615h-3.998l-4.14 4.46a6.09 6.09 0 0 1 .472 2.328 5.987 5.987 0 1 1-5.988-5.986c.561 0 1.11.077 1.625.22l4.756-5.119V11.04c0-.55.232-1.077.626-1.45l4.416-4.163c1.274-1.197 3.362-.297 3.362 1.45l.01.01Z" clip-rule="evenodd"/></svg>
          <svg className="w-12 h-12 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"><path fill="#FC2C38" fill-rule="evenodd" d="M21.393 7.1C9.578 7.1 0 16.68 0 28.495 0 40.31 9.578 49.887 21.393 49.887c11.815 0 21.393-9.578 21.393-21.393h-7.13c0 7.878-6.386 14.262-14.263 14.262-7.876 0-14.261-6.384-14.261-14.262 0-7.877 6.385-14.262 14.26-14.262V7.1Z" clip-rule="evenodd"/><path fill="#FC2C38" fill-rule="evenodd" d="m35.659 0-7.132 7.102v9.29L23.3 21.621a7.13 7.13 0 0 0-9.034 6.875 7.13 7.13 0 0 0 7.13 7.13 7.13 7.13 0 0 0 6.904-8.922l5.34-5.34h9.221L50 14.231H35.659V0Z" clip-rule="evenodd"/></svg>
          <svg className="w-12 h-12 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-3" xmlns="http://www.w3.org/2000/svg" width="50" height="47" fill="none"><path fill="#04E061" d="M14.976 46.29c8.271 0 14.977-6.706 14.977-14.978 0-8.271-6.706-14.977-14.977-14.977C6.704 16.335 0 23.041 0 31.312c0 8.272 6.704 14.977 14.976 14.977Z"/><path fill="#FF4053" d="M40.95 44.401a9.049 9.049 0 0 0 0-18.098 9.05 9.05 0 1 0 0 18.098Z"/><path fill="#965EEB" d="M17.838 14.391a5.6 5.6 0 0 0 5.6-5.6 5.601 5.601 0 1 0-5.6 5.6Z"/><path fill="#0AF" d="M37.436 24.353c6.726 0 12.177-5.452 12.177-12.177S44.163 0 37.436 0C30.712 0 25.26 5.451 25.26 12.176c0 6.725 5.452 12.177 12.176 12.177Z"/></svg>
          <svg className="w-12 h-12 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-3" xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="none"><path fill="#24A0DC" d="M39.136 29.325c-9.218 0-14.617-5.597-14.617-14.625C24.52 5.895 30.117 0 38.873 0 45.302 0 49.297 2.91 50 6.566v2.91h-6.167c-.373-1.455-2.15-2.984-4.96-2.984-4.213 0-6.781 3.32-6.781 8.17s2.678 8.134 7.133 8.134c1.514 0 2.72-.224 3.796-.672V18.58h-4.367v-5.746h11.302v12.35c-1.382 2.014-5.508 4.14-10.82 4.14ZM7.38 28.652V7.2H0V.67h22.348V7.2h-7.396v21.452H7.38Z"/></svg>
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
        "SEO-оптимизация и быстрая загрузка"
      ],
      logos: (
        <>
          <ServiceLogo bg="#F24E1E" text="Fg" />
          <ServiceLogo bg="#000000" text="Td" />
          <ServiceLogo bg="#4A5568" text="WP" />
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
        "Работа с репутацией в комментариях"
      ],
      logos: (
        <>
          <ServiceLogo bg="#6B7280" text="SP" />
          <ServiceLogo bg="#3b5998" text="FB" />
          <ServiceLogo bg="#E1306C" text="IG" />
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
        "Оптимизация ставок и бюджета"
      ],
      logos: (
        <>
          <svg className="w-12 h-12 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"><mask id="a" width="50" height="50" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M50 25C50 11.193 38.807 0 25 0S0 11.193 0 25s11.193 25 25 25 25-11.193 25-25Z"/></mask><g mask="url(#a)"><path fill="#1A4A7F" d="M50 25C50 11.193 38.807 0 25 0S0 11.193 0 25s11.193 25 25 25 25-11.193 25-25Z"/><path fill="url(#b)" fill-rule="evenodd" d="M56.588 3.01a6.608 6.608 0 0 1 4.252 8.418L48.115 49.302c-1.18 3.514-4.999 5.443-8.528 4.308a6.608 6.608 0 0 1-4.252-8.419l4.258-12.672-59.161 54.294-9.414-10.259 59.12-54.257-12.878 3.13a6.608 6.608 0 0 1-8.023-4.958c-.828-3.613 1.42-7.252 5.022-8.128L52 3.17a6.765 6.765 0 0 1 4.59-.16Z" clip-rule="evenodd"/></g><defs><linearGradient id="b" x1="136.285" x2="-23.804" y1="66.72" y2="85.549" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB800"/><stop offset="1" stop-color="#FFF11D"/></linearGradient></defs></svg>
          <svg className="w-12 h-12 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-3" xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none"><mask id="a" width="50" height="50" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:luminance"><path fill="#fff" d="M50 25C50 11.193 38.807 0 25 0S0 11.193 0 25s11.193 25 25 25 25-11.193 25-25Z"/></mask><g mask="url(#a)"><path fill="#1A4A7F" d="M50 25C50 11.193 38.807 0 25 0S0 11.193 0 25s11.193 25 25 25 25-11.193 25-25Z"/><path fill="url(#b)" fill-rule="evenodd" d="M56.588 3.01a6.608 6.608 0 0 1 4.252 8.418L48.115 49.302c-1.18 3.514-4.999 5.443-8.528 4.308a6.608 6.608 0 0 1-4.252-8.419l4.258-12.672-59.161 54.294-9.414-10话说59.12-54.257-12.878 3.13a6.608 6.608 0 0 1-8.023-4.958c-.828-3.613 1.42-7.252 5.022-8.128L52 3.17a6.765 6.765 0 0 1 4.59-.16Z" clip-rule="evenodd"/></g><defs><linearGradient id="b" x1="136.285" x2="-23.804" y1="66.72" y2="85.549" gradientUnits="userSpaceOnUse"><stop stop-color="#FFB800"/><stop offset="1" stop-color="#FFF11D"/></linearGradient></defs></svg>
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
        "Предиктивная аналитика пациентопотока"
      ],
      logos: (
        <>
          <svg className="w-12 h-12 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-3" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" width="500" height="200" fill="none"><path fill="#EA4B71" fill-rule="evenodd" d="M239 83c-11.183 0-20.58-7.649-23.244-18h-27.508a12 12 0 0 0-11.836 10.027l-.987 5.919A23.945 23.945 0 0 1 167.626 95a23.945 23.945 0 0 1 7.799 14.054l.987 5.919A12 12 0 0 0 188.248 125h3.508c2.664-10.351 12.061-18 23.244-18 13.255 0 24 10.745 24 24s-10.745 24-24 24c-11.183 0-20.58-7.649-23.244-18h-3.508c-11.732 0-21.744-8.482-23.673-20.054l-.987-5.919A12 12 0 0 0 151.752 101h-9.508c-2.664 10.351-12.061 18-23.244 18s-20.58-7.649-23.244-18H82.244C79.58 111.351 70.183 119 59 119c-13.255 0-24-10.745-24-24s10.745-24 24-24c11.183 0 20.58 7.649 23.244 18h13.512C98.42 78.649 107.817 71 119 71s20.58 7.649 23.244 18h9.508a12 12 0 0 0 11.836-10.027l.987-5.919C166.504 61.482 176.516 53 188.248 53h27.508C218.42 42.649 227.817 35 239 35c13.255 0 24 10.745 24 24s-10.745 24-24 24zm0-12c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zM59 107c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm72-12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm96 36c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z" clip-rule="evenodd"/><path fill="#101330" fill-rule="evenodd" d="M407.017 86.887v-.571c4.187-2.097 8.374-5.719 8.374-12.867 0-10.294-8.469-16.489-20.173-16.489-11.99 0-20.554 6.576-20.554 16.679 0 6.863 3.996 10.58 8.374 12.677v.571c-4.853 1.716-10.658 6.863-10.658 15.441 0 10.388 8.564 17.632 22.743 17.632 14.178 0 22.457-7.244 22.457-17.632 0-8.578-5.71-13.63-10.563-15.441zm-11.894-21.158c4.758 0 8.278 3.049 8.278 8.196s-3.616 8.197-8.278 8.197c-4.663 0-8.565-3.05-8.565-8.197 0-5.242 3.712-8.196 8.565-8.196zm0 45.081c-5.52 0-9.992-3.526-9.992-9.531 0-5.432 3.711-9.531 9.896-9.531 6.091 0 9.802 4.003 9.802 9.722 0 5.814-4.282 9.34-9.706 9.34z" clip-rule="evenodd"/><path fill="#101330" d="M432.26 119.007h12.18V93.178c0-8.483 5.139-12.2 10.943-12.2 5.71 0 10.182 3.813 10.182 11.628v26.401h12.18V90.128c0-12.486-7.232-19.729-18.555-19.729-7.137 0-11.134 2.859-13.989 6.576h-.761l-1.047-5.623H432.26v47.655zM324.44 119.007h-12.18V71.352h11.133l1.047 5.623h.761c2.855-3.717 6.852-6.576 13.989-6.576 11.323 0 18.555 7.243 18.555 19.729v28.879h-12.18V92.606c0-7.815-4.472-11.628-10.182-11.628-5.804 0-10.943 3.717-10.943 12.2v25.829z"/></svg>
          <svg className="w-12 h-12 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-3" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" width="500" height="200" fill="none"><path fill="#EA4B71" fill-rule="evenodd" d="M239 83c-11.183 0-20.58-7.649-23.244-18h-27.508a12 12 0 0 0-11.836 10.027l-.987 5.919A23.945 23.945 0 0 1 167.626 95a23.945 23.945 0 0 1 7.799 14.054l.987 5.919A12 12 0 0 0 188.248 125h3.508c2.664-10.351 12.061-18 23.244-18 13.255 0 24 10.745 24 24s-10.745 24-24 24c-11.183 0-20.58-7.649-23.244-18h-3.508c-11.732 0-21.744-8.482-23.673-20.054l-.987-5.919A12 12 0 0 0 151.752 101h-9.508c-2.664 10.351-12.061 18-23.244 18s-20.58-7.649-23.244-18H82.244C79.58 111.351 70.183 119 59 119c-13.255 0-24-10.745-24-24s10.745-24 24-24c11.183 0 20.58 7.649 23.244 18h13.512C98.42 78.649 107.817 71 119 71s20.58 7.649 23.244 18h9.508a12 12 0 0 0 11.836-10.027l.987-5.919C166.504 61.482 176.516 53 188.248 53h27.508C218.42 42.649 227.817 35 239 35c13.255 0 24 10.745 24 24s-10.745 24-24 24zm0-12c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zM59 107c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm72-12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm96 36c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z" clip-rule="evenodd"/><path fill="#101330" fill-rule="evenodd" d="M407.017 86.887v-.571c4.187-2.097 8.374-5.719 8.374-12.867 0-10.294-8.469-16.489-20.173-16.489-11.99 0-20.554 6.576-20.554 16.679 0 6.863 3.996 10.58 8.374 12.677v.571c-4.853 1.716-10.658 6.863-10.658 15.441 0 10.388 8.564 17.632 22.743 17.632 14.178 0 22.457-7.244 22.457-17.632 0-8.578-5.71-13.63-10.563-15.441zm-11.894-21.158c4.758 0 8.278 3.049 8.278 8.196s-3.616 8.197-8.278 8.197c-4.663 0-8.565-3.05-8.565-8.197 0-5.242 3.712-8.196 8.565-8.196zm0 45.081c-5.52 0-9.992-3.526-9.992-9.531 0-5.432 3.711-9.531 9.896-9.531 6.091 0 9.802 4.003 9.802 9.722 0 5.814-4.282 9.34-9.706 9.34z" clip-rule="evenodd"/><path fill="#101330" d="M432.26 119.007h12.18V93.178c0-8.483 5.139-12.2 10.943-12.2 5.71 0 10.182 3.813 10.182 11.628v26.401h12.18V90.128c0-12.486-7.232-19.729-18.555-19.729-7.137 0-11.134 2.859-13.989 6.576h-.761l-1.047-5.623H432.26v47.655zM324.44 119.007h-12.18V71.352h11.133l1.047 5.623h.761c2.855-3.717 6.852-6.576 13.989-6.576 11.323 0 18.555 7.243 18.555 19.729v28.879h-12.18V92.606c0-7.815-4.472-11.628-10.182-11.628-5.804 0-10.943 3.717-10.943 12.2v25.829z"/></svg>
          <svg className="w-12 h-12 rounded-lg shadow-md transition-transform duration-300 hover:scale-110 hover:rotate-3" viewBox="0 0 500 200" xmlns="http://www.w3.org/2000/svg" width="500" height="200" fill="none"><path fill="#EA4B71" fill-rule="evenodd" d="M239 83c-11.183 0-20.58-7.649-23.244-18h-27.508a12 12 0 0 0-11.836 10.027l-.987 5.919A23.945 23.945 0 0 1 167.626 95a23.945 23.945 0 0 1 7.799 14.054l.987 5.919A12 12 0 0 0 188.248 125h3.508c2.664-10.351 12.061-18 23.244-18 13.255 0 24 10.745 24 24s-10.745 24-24 24c-11.183 0-20.58-7.649-23.244-18h-3.508c-11.732 0-21.744-8.482-23.673-20.054l-.987-5.919A12 12 0 0 0 151.752 101h-9.508c-2.664 10.351-12.061 18-23.244 18s-20.58-7.649-23.244-18H82.244C79.58 111.351 70.183 119 59 119c-13.255 0-24-10.745-24-24s10.745-24 24-24c11.183 0 20.58 7.649 23.244 18h13.512C98.42 78.649 107.817 71 119 71s20.58 7.649 23.244 18h9.508a12 12 0 0 0 11.836-10.027l.987-5.919C166.504 61.482 176.516 53 188.248 53h27.508C218.42 42.649 227.817 35 239 35cbreak13.255 0 24 10.745 24 24s-10.745 24-24 24zm0-12c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zM59 107c6.627 0 12-5.373 12-12s-5.373-12-12-12-12 5.373-12 12 5.373 12 12 12zm72-12c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12zm96 36c0 6.627-5.373 12-12 12s-12-5.373-12-12 5.373-12 12-12 12 5.373 12 12z" clip-rule="evenodd"/><path fill="#101330" fill-rule="evenodd" d="M407.017 86.887v-.571c4.187-2.097 8.374-5.719 8.374-12.867 0-10.294-8.469-16.489-20.173-16.489-11.99 0-20.554 6.576-20.554 16.679 0 6.863 3.996 10.58 8.374 12.677v.571c-4.853 1.716-10.658 6.863-10.658 15.441 0 10.388 8.564 17.632 22.743 17.632 14.178 0 22.457-7.244 22.457-17.632 0-8.578-5.71-13.63-10.563-15.441zm-11.894-21.158c4.758 0 8.278 3.049 8.278 8.196s-3.616 8.197-8.278 8.197c-4.663 0-8.565-3.05-8.565-8.197 0-5.242 3.712-8.196 8.565-8.196zm0 45.081c-5.52 0-9.992-3.526-9.992-9.531 0-5.432 3.711-9.531 9.896-9.531 6.091 0 9.802 4.003 9.802 9.722 0 5.814-4.282 9.34-9.706 9.34z" clip-rule="evenodd"/><path fill="#101330" d="M432.26 119.007h12.18V93.178c0-8.483 5.139-12.2 10.943-12.2 5.71 0 10.182 3.813 10.182 11.628v26.401h12.18V90.128c0-12.486-7.232-19.729-18.555-19.729-7.137 0-11.134 2.859-13.989 6.576h-.761l-1.047-5.623H432.26v47.655zM324.44 119.007h-12.18V71.352h11.133l1.047 5.623h.761c2.855-3.717 6.852-6.576 13.989-6.576 11.323 0 18.555 7.243 18.555 19.729v28.879h-12.18V92.606c0-7.815-4.472-11.628-10.182-11.628-5.804 0-10.943 3.717-10.943 12.2v25.829z"/></svg>
        </>
      ),
    },
  ]

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container">
        {/* Заголовок секции */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">Наши услуги</span>
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            Комплексные <span className="text-primary">digital-решения</span> для медицинских клиник
          </h2>
          <p className="text-white/80">
            Мы предлагаем полный спектр digital-услуг, специально адаптированных для медицинской отрасли
          </p>
        </div>

        {/* Декоративные элементы */}
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl opacity-70 -z-10"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent-cyan/10 rounded-full filter blur-3xl opacity-70 -z-10"></div>

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
            />
          ))}
        </div>

        {/* Кнопка внизу */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block text-white font-medium text-lg rounded-xl px-10 py-4 bg-primary hover:bg-primary/90 transition-colors duration-300 shadow-lg hover:shadow-primary/20"
          >
            Обсудить ваш проект
          </a>
        </div>
      </div>
    </section>
  )
}
