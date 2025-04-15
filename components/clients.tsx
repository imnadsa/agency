"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { cn } from "@/lib/utils"

export default function Clients() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const clients = [
    { name: "Клиника 1", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Клиника 2", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Клиника 3", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Клиника 4", logo: "/placeholder.svg?height=100&width=100" },
    { name: "Клиника 5", logo: "/placeholder.svg?height=100&width=100" },
  ]

  return (
    <section className="py-16 relative overflow-hidden">
      <div className="section-divider"></div>
      <div className="container">
        <h2
          ref={ref}
          className={cn(
            "text-center text-xl mb-12 opacity-80 transition-all duration-700",
            inView ? "opacity-80 translate-y-0" : "opacity-0 translate-y-10",
          )}
        >
          Нам доверяют ведущие медицинские клиники
        </h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {clients.map((client, index) => (
            <div
              key={index}
              className={cn(
                "w-32 h-32 bg-white/5 rounded-lg flex items-center justify-center p-4 transition-all duration-700",
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
              )}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                width={100}
                height={100}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="section-divider"></div>
    </section>
  )
}
