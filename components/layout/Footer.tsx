import Link from "next/link"
import Image from "next/image"

const FOOTER_LINKS = {
  services: [
    { href: "/services#targeted", label: "Таргетированная реклама" },
    { href: "/services#websites", label: "Разработка сайтов" },
    { href: "/services#smm", label: "SMM-продвижение" },
    { href: "/services#contextual", label: "Контекстная реклама" },
  ],
  company: [
    { href: "/about", label: "О компании" },
    { href: "/cases", label: "Кейсы" },
    { href: "/blog", label: "Блог" },
    { href: "/contacts", label: "Контакты" },
  ],
  legal: [
    { href: "/privacy", label: "Политика конфиденциальности" },
    { href: "/terms", label: "Условия использования" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="section-container">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Логотип и описание */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo-white.svg" alt="eQuality логотип" width={140} height={40} />
            </Link>
            <p className="text-gray-300 mb-6">
              Digital-агентство для медицинских учреждений. Помогаем клиникам расти с помощью инновационных технологий.
            </p>
            <div className="flex space-x-4">
              {[
                { name: "Telegram", icon: "✈️", link: "https://t.me/equality_digital" },
                { name: "WhatsApp", icon: "💬", link: "https://wa.me/79991234567" },
                { name: "Instagram", icon: "📸", link: "https://instagram.com/equality_digital" },
              ].map((social) => (
                <Link
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-white hover:text-primary-light transition-colors"
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Услуги */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Услуги</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Компания */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Компания</h3>
            <ul className="space-y-4">
              {FOOTER_LINKS.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Контакты</h3>
            <div className="space-y-4 text-gray-300">
              <p>+7 (999) 123-45-67</p>
              <p>info@equality-digital.ru</p>
              <p>г. Москва, ул. Цифровая, д. 10, офис 505</p>
            </div>
          </div>
        </div>

        {/* Копирайт */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} eQuality. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
