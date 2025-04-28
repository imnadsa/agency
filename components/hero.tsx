"use client"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const [isLoaded, setIsLoaded] = useState(false)
  const [currentWord, setCurrentWord] = useState("Реклама")
  
  const words = ["Реклама", "SMM", "Автоматизация", "Дизайн", "AI-решения"]
  
  useEffect(() => {
    // Имитируем загрузку всех ресурсов перед запуском анимации
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100) // Короткая задержка
    return () => clearTimeout(timer)
  }, [])
  
  // Простая анимация смены слов без эффекта печатания
  useEffect(() => {
    if (!isLoaded || !inView) return
    
    let index = 0
    
    // Функция для смены слова целиком
    const changeWord = () => {
      index = (index + 1) % words.length
      setCurrentWord(words[index])
    }
    
    // Смена слов каждые 3 секунды
    const intervalId = setInterval(changeWord, 3000)
    
    return () => clearInterval(intervalId)
  }, [isLoaded, inView, words])
  
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial z-[-1]"></div>
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Основной заголовок с улучшенной анимацией */}
          <div
            ref={ref}
            className={cn(
              "transition-opacity transition-transform duration-700",
              (inView && isLoaded) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
            style={{ willChange: "transform, opacity" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              <span className="inline-block overflow-hidden">
                <span className={cn(
                  "inline-block transition-transform duration-1000 delay-200",
                  (inView && isLoaded) ? "translate-y-0" : "translate-y-full"
                )}>Digital-</span>
              </span>
              <span className="inline-block overflow-hidden">
                <span className={cn(
                  "inline-block transition-transform duration-1000 delay-300",
                  (inView && isLoaded) ? "translate-y-0" : "translate-y-full"
                )}>решения </span>
              </span>
              <span className="relative inline-block">
                <span 
                  className={cn(
                    "relative z-10 inline-block whitespace-nowrap px-4 py-1 text-white rounded-full transition-all duration-1000 delay-500",
                    (inView && isLoaded) ? "opacity-100 transform -rotate-2 translate-y-0 bg-[#6812F3]" : "opacity-0 rotate-0 translate-y-8 bg-transparent"
                  )}
                >
                  в медицине:
                </span>
              </span>
              <br className="md:hidden" />
              <span className="block mt-2 md:mt-4 min-h-[60px]">
                <span className={cn(
                  "inline-block transition-transform duration-1000 delay-700",
                  (inView && isLoaded) ? "translate-y-0" : "translate-y-full"
                )}
                style={{ color: "#02FFFF" }}
                >
                  {currentWord}
                </span>
              </span>
            </h1>
            <p className={cn(
              "text-xl mb-10 opacity-0 max-w-3xl transition-all duration-1000",
              (inView && isLoaded) ? "opacity-90 translate-y-0 delay-900" : "translate-y-10"
            )}>
              От рекламы до AI-автоматизации — ваш бизнес станет эффективнее
            </p>
            <div className={cn(
              "mt-8 transform transition-all duration-700 delay-1000",
              (inView && isLoaded) ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-10 scale-95"
            )}>
              <Link
                href="#contact"
                className="inline-block text-white font-medium text-base sm:text-xl md:text-2xl lg:text-3xl rounded-xl px-6 sm:px-10 md:px-16 lg:px-20 py-3 sm:py-4 md:py-6 lg:py-8 bg-[#6812F3] hover:shadow-lg hover:shadow-[#6812F3]/30 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
              >
                <span className="relative z-10">обсудить проект</span>
                <span className="absolute inset-0 bg-[#7c3ffe] transform -translate-x-full transition-transform duration-500 group-hover:translate-x-0"></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Декоративные элементы с анимацией */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div 
          className={cn(
            "absolute w-[300px] h-[300px] top-[10%] left-[-150px] bg-primary opacity-0 rounded-[20%] transition-all duration-1500 ease-out",
            (inView && isLoaded) ? "opacity-10 left-[-150px]" : "opacity-0 left-[-250px]"
          )}
          style={{ animationName: isLoaded ? 'float-slow' : 'none', animationDuration: '15s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out' }}
        ></div>
        <div 
          className={cn(
            "absolute w-[200px] h-[200px] bottom-[15%] right-[-100px] bg-primary opacity-0 rounded-[20%] transition-all duration-1500 ease-out delay-300",
            (inView && isLoaded) ? "opacity-10 right-[-100px]" : "opacity-0 right-[-200px]"
          )}
          style={{ animationName: isLoaded ? 'float' : 'none', animationDuration: '12s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.5s' }}
        ></div>
        <div 
          className={cn(
            "absolute w-[150px] h-[150px] bottom-[-75px] left-[30%] bg-primary opacity-0 rounded-[20%] transition-all duration-1500 ease-out delay-600",
            (inView && isLoaded) ? "opacity-10 bottom-[-75px]" : "opacity-0 bottom-[-175px]"
          )}
          style={{ animationName: isLoaded ? 'float-fast' : 'none', animationDuration: '10s', animationIterationCount: 'infinite', animationTimingFunction: 'ease-in-out', animationDelay: '0.8s' }}
        ></div>
      </div>
      
      {/* Добавляем стили для анимации частиц */}
      <style jsx>{`
        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-8deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        
        @keyframes float-fast {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(10deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
      `}</style>
    </section>
  )
}
