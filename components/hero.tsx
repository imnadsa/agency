"use client"

import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"

export default function Hero() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial z-[-1]"></div>

      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Основной заголовок */}
          <div
            ref={ref}
            className={cn(
              "transition-all duration-700",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Digital-решения{" "}
              <span className="relative inline-block">
                <span 
                  className="relative z-10 inline-block whitespace-nowrap px-4 py-1 text-white rounded-full transform -rotate-2 bg-[#6812F3]"
                >
                  в медицине:
                </span>
              </span>
              <br className="md:hidden" />
              <span className="block mt-2 md:mt-4">реклама, автоматизация, дизайн</span>
            </h1>

            <p className="text-xl mb-10 opacity-90 max-w-3xl">
              От рекламы до AI-автоматизации — ваш бизнес станет эффективнее
            </p>

            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-block text-white font-medium text-3xl rounded-xl px-20 py-8 bg-[#6812F3]"
              >
                обсудить проект
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Декоративные элементы */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute w-[300px] h-[300px] top-[10%] left-[-150px] bg-primary opacity-10 rounded-[20%]"></div>
        <div className="absolute w-[200px] h-[200px] bottom-[15%] right-[-100px] bg-primary opacity-10 rounded-[20%]"></div>
        <div className="absolute w-[150px] h-[150px] bottom-[-75px] left-[30%] bg-primary opacity-10 rounded-[20%]"></div>
      </div>
