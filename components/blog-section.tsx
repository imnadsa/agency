"use client"

import { useInView } from "react-intersection-observer"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

type BlogCardProps = {
  image: string
  category: string
  title: string
  excerpt: string
  date: string
  author: string
  index: number
}

function BlogCard({ image, category, title, excerpt, date, author, index }: BlogCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div
      ref={ref}
      className={cn(
        "bg-secondary border border-white/10 rounded-2xl overflow-hidden shadow-md hover:shadow-xl hover:shadow-primary/10 transition-transform transition-shadow duration-300 hover:-translate-y-1 group",
        inView ? "opacity-100 translate-y-0 transition-opacity transition-transform duration-300" : "opacity-0 translate-y-5",
      )}
      style={{ transitionDelay: `${Math.min(index * 100, 300)}ms`, willChange: "transform, opacity" }}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm py-1 px-3 rounded-full text-xs font-medium text-accent-cyan">
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-cyan transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-sm opacity-80 mb-4 text-white line-clamp-3">{excerpt}</p>
        <div className="flex justify-between items-center">
          <div className="text-xs opacity-70">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{author}</span>
          </div>
          <Link
            href="#"
            className="text-accent-cyan text-sm font-medium flex items-center transition-all group-hover:text-white"
          >
            Читать
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function BlogSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const blogPosts = [
    {
      image: "/placeholder.svg?height=300&width=500",
      category: "AI в медицине",
      title: "Как искусственный интеллект помогает в диагностике заболеваний",
      excerpt:
        "Современные AI-алгоритмы способны анализировать медицинские изображения и выявлять патологии с точностью, сравнимой с опытными врачами. Рассказываем о последних достижениях в этой области.",
      date: "15 марта 2024",
      author: "Анна Петрова",
    },
    {
      image: "/placeholder.svg?height=300&width=500",
      category: "Маркетинг",
      title: "5 эффективных стратегий продвижения медицинских услуг в 2024 году",
      excerpt:
        "Рынок медицинских услуг становится все более конкурентным. Мы собрали самые эффективные стратегии digital-маркетинга, которые помогут вашей клинике привлечь новых пациентов.",
      date: "2 апреля 2024",
      author: "Михаил Соколов",
    },
    {
      image: "/placeholder.svg?height=300&width=500",
      category: "Автоматизация",
      title: "Как автоматизировать запись пациентов и сократить нагрузку на администраторов",
      excerpt:
        "Внедрение системы онлайн-записи и чат-ботов может значительно снизить нагрузку на администраторов клиники и улучшить опыт пациентов. Делимся опытом успешных внедрений.",
      date: "20 апреля 2024",
      author: "Елена Иванова",
    },
  ]

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div className="mb-6 md:mb-0">
            <span className="section-title-tag">Наш блог</span>
            <h2
              ref={ref}
              className={cn(
                "text-3xl md:text-4xl font-bold mb-4 transition-opacity transition-transform duration-500",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ willChange: "transform, opacity" }}
            >
              Полезные <span className="text-primary">статьи</span> и кейсы
            </h2>
            <p className="max-w-2xl text-white/80">
              Делимся экспертизой в области digital-маркетинга для медицинских учреждений, рассказываем о новых
              технологиях и успешных кейсах
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className="border-white/20 hover:border-accent-cyan hover:bg-white/5 self-start md:self-auto"
          >
            <Link href="#" className="flex items-center">
              Все статьи
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard
              key={index}
              image={post.image}
              category={post.category}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              author={post.author}
              index={index}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="mb-6 text-white/80">
            Хотите получать новые статьи и кейсы на свою почту? Подпишитесь на нашу рассылку
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-grow px-4 py-3 rounded-l-lg bg-white/5 border border-white/10 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-white"
              required
            />
            <Button className="rounded-l-none bg-primary hover:bg-primary/90 text-white">Подписаться</Button>
          </form>
        </div>
      </div>
    </section>
  )
}
