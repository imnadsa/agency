"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

export default function ContactSection() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(false)
      setName("")
      setEmail("")
      setMessage("")
    }, 2000)
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-gradient-to-b from-background to-black/50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-title-tag">Контакты</span>
          <h2
            ref={ref}
            className={cn(
              "text-3xl md:text-4xl font-bold mb-6 transition-opacity transition-transform duration-500",
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
            )}
            style={{ willChange: "transform, opacity" }}
          >
            Свяжитесь с нами и начните <span className="text-primary">цифровую</span> трансформацию вашей клиники
          </h2>
          <p className="text-white/80">
            Оставьте заявку, и наши эксперты свяжутся с вами, чтобы обсудить ваши задачи и предложить оптимальное
            решение
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            "max-w-2xl mx-auto bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 shadow-xl transition-opacity transition-transform duration-400",
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5",
          )}
          style={{ willChange: "transform, opacity" }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                Ваше имя
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors duration-200 text-white"
                placeholder="Введите ваше имя"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors duration-200 text-white"
                placeholder="Введите ваш email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">
                Сообщение
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-colors duration-200 text-white"
                placeholder="Напишите ваше сообщение"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <Button type="submit" disabled={submitted} className="w-full bg-primary hover:bg-primary/90 text-white transition-colors duration-200">
              {submitted ? "Отправка..." : "Отправить сообщение"}
            </Button>
          </form>
          <p className="mt-4 text-xs text-center text-white/60">
            Отправляя форму, вы соглашаетесь с нашей{" "}
            <a href="#" className="text-accent-cyan hover:underline transition-colors duration-200">
              политикой конфиденциальности
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
