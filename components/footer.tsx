import Link from "next/link"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="py-16 border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div>
            <Link href="/" className="flex items-center mb-6">
              <Logo size="sm" className="mr-2" />
            </Link>
            <p className="opacity-70 mb-6">
              Мы помогаем медицинским клиникам выйти на новый уровень с помощью современных технологий и AI-решений.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white text-sm transition-all hover:bg-primary hover:border-transparent"
              >
                TG
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white text-sm transition-all hover:bg-primary hover:border-transparent"
              >
                VK
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-white text-sm transition-all hover:bg-primary hover:border-transparent"
              >
                YT
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Услуги</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#services" className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all">
                  Разработка сайтов
                </Link>
              </li>
              <li>
                <Link href="#services" className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all">
                  Мобильные приложения
                </Link>
              </li>
              <li>
                <Link href="#services" className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all">
                  AI решения
                </Link>
              </li>
              <li>
                <Link href="#services" className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all">
                  Интернет-маркетинг
                </Link>
              </li>
              <li>
                <Link href="#services" className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all">
                  SMM и контент
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Информация</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#cases" className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all">
                  Кейсы
                </Link>
              </li>
              <li>
                <Link href="#blog" className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all">
                  Блог
                </Link>
              </li>
              <li>
                <Link href="#faq" className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all">
                  О компании
                </Link>
              </li>
              <li>
                <Link href="#" className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all">
                  Вакансии
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 text-white">Контакты</h4>
            <ul className="space-y-4">
              <li className="opacity-70">Москва, ул. Инновационная, 42</li>
              <li>
                
                  href="tel:+74951234567"
                  className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all"
                >
                  +7 (495) 123-45-67
                </a>
              </li>
              <li>
                
                  href="mailto:info@hippocrat.ru"
                  className="opacity-70 hover:opacity-100 hover:text-accent-cyan transition-all"
                >
                  info@hippocrat.ru
                </a>
              </li>
              <li className="opacity-70">Пн-Пт: 9:00 - 18:00</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10">
          <div className="text-sm opacity-60 mb-4 md:mb-0">© {new Date().getFullYear()} eQuality. Все права защищены.</div>
          <div className="flex gap-6 text-sm">
            <Link href="#" className="opacity-60 hover:opacity-100 transition-all">
              Политика конфиденциальности
            </Link>
            <Link href="#" className="opacity-60 hover:opacity-100 transition-all">
              Условия использования
            </Link>
          </div>
          <Button
            asChild
            size="icon"
            variant="outline"
            className="fixed bottom-8 right-8 rounded-full border-white/20 bg-black/50 backdrop-blur-sm hover:bg-primary hover:border-transparent z-50"
          >
            <a href="#" aria-label="Наверх">
              <ArrowUp className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}
