import Link from "next/link"
import Image from "next/image"

const NAV_LINKS = [
  { href: "/services", label: "Услуги" },
  { href: "/cases", label: "Кейсы" },
  { href: "/blog", label: "Блог" },
  { href: "/about", label: "О компании" },
  { href: "/contacts", label: "Контакты" },
]

export default function Header() {
  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="section-container flex justify-between items-center py-4">
        {/* Логотип */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="eQuality логотип" width={140} height={40} />
        </Link>

        {/* Навигация */}
        <nav>
          <ul className="flex space-x-6">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-secondary hover:text-primary-light transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Кнопка связи */}
        <Link href="/contacts" className="btn-primary">
          Связаться
        </Link>
      </div>
    </header>
  )
}
