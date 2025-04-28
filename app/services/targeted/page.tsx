import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { 
  ArrowRight, 
  BarChart3, 
  Target, 
  Users, 
  PieChart, 
  Zap 
} from "lucide-react";

// Метаданные страницы для SEO
export const metadata: Metadata = {
  title: "Таргетированная реклама для медицинских клиник | Hippocrat",
  description: "Профессиональная настройка таргетированной рекламы для медицинских учреждений. Привлекаем целевых клиентов из социальных сетей по оптимальной стоимости.",
  keywords: ["таргетированная реклама", "таргет в медицине", "реклама для клиник", "медицинский маркетинг"]
};

export default function TargetedPage() {
  return (
    <div className="relative pt-24 overflow-hidden">
      {/* Hero секция */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_600px] lg:gap-12 xl:grid-cols-[1fr_700px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-accent-cyan">
                Таргетированная реклама
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Привлекаем <span className="text-primary">целевых пациентов</span> из социальных сетей
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Настраиваем эффективную таргетированную рекламу для медицинских клиник с учетом всех законодательных ограничений и специфики отрасли.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#contact-form"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Получить консультацию
                </Link>
                <Link
                  href="#how-it-works"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Как это работает
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[450px] w-full">
                <Image
                  src="/placeholder.svg?height=450&width=600"
                  alt="Таргетированная реклама для медицинских клиник"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция преимуществ */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 text-center md:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Почему таргетированная реклама <span className="text-primary">эффективна</span> для медицинских клиник
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Таргетированная реклама позволяет точечно обращаться к потенциальным пациентам, которые с наибольшей вероятностью заинтересуются услугами вашей клиники.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Точное таргетирование</h3>
                <p className="text-muted-foreground text-center">
                  Настраиваем показы рекламы только тем людям, которые с наибольшей вероятностью станут вашими пациентами.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Измеримый результат</h3>
                <p className="text-muted-foreground text-center">
                  Предоставляем подробную аналитику эффективности рекламных кампаний и точную стоимость привлечения пациента.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border bg-card p-6 shadow-sm">
                <div className="rounded-full bg-primary/10 p-3">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Расширение аудитории</h3>
                <p className="text-muted-foreground text-center">
                  Находим новые сегменты аудитории, которые ранее не были охвачены другими маркетинговыми каналами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Как это работает" */}
      <section id="how-it-works" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-accent-cyan">
                Процесс работы
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Как мы <span className="text-primary">настраиваем</span> таргетированную рекламу
              </h2>
              <p className="max-w-[700px] text-muted-foreground md:text-lg">
                Наш подход к созданию таргетированной рекламы включает несколько важных этапов, которые обеспечивают максимальную эффективность каждой кампании.
              </p>
              <div className="space-y-4">
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Аналитика и исследование</h3>
                      <p className="text-muted-foreground">
                        Изучаем вашу клинику, конкурентов и целевую аудиторию. Определяем ключевые преимущества и уникальное торговое предложение.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Разработка стратегии</h3>
                      <p className="text-muted-foreground">
                        Формируем стратегию продвижения, выбираем оптимальные платформы для размещения и разрабатываем план рекламных кампаний.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Создание креативов</h3>
                      <p className="text-muted-foreground">
                        Разрабатываем рекламные материалы с учетом специфики медицинской отрасли и законодательных требований.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Запуск и оптимизация</h3>
                      <p className="text-muted-foreground">
                        Запускаем рекламные кампании, осуществляем постоянный мониторинг и оптимизацию для достижения максимальной эффективности.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative h-[550px] w-full">
                <Image
                  src="/placeholder.svg?height=550&width=550"
                  alt="Процесс настройки таргетированной рекламы"
                  fill
                  className="object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Платформы" */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 text-center md:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Платформы для <span className="text-primary">таргетированной рекламы</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Мы работаем со всеми популярными платформами, выбирая оптимальные каналы для продвижения медицинских услуг.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              <div className="flex flex-col items-center space-y-3 rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/targetVK.png"
                  alt="ВКонтакте"
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <h3 className="font-bold">ВКонтакте</h3>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/targetMT.png"
                  alt="Мой Телеграм"
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <h3 className="font-bold">Телеграм</h3>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/targetTG.png"
                  alt="TikTok"
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <h3 className="font-bold">TikTok</h3>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/targetAV.png"
                  alt="Авито"
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <h3 className="font-bold">MyTarget</h3>
              </div>
              <div className="flex flex-col items-center space-y-3 rounded-lg border bg-card p-6 shadow-sm">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Яндекс"
                  width={64}
                  height={64}
                  className="object-contain"
                />
                <h3 className="font-bold">Яндекс</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Кейсы" */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 text-center md:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Успешные <span className="text-primary">кейсы</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Истории успеха наших клиентов в продвижении медицинских услуг через таргетированную рекламу.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Кейс стоматологической клиники"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Стоматологическая клиника «ДентаЛюкс»</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Рост новых клиентов</span>
                      <span className="font-bold text-primary">+74%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Снижение стоимости заявки</span>
                      <span className="font-bold text-primary">-31%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ROI</span>
                      <span className="font-bold text-primary">428%</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary"
                    >
                      Подробнее о кейсе
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Кейс многопрофильной клиники"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Многопрофильная клиника «МедЭксперт»</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Увеличение записей на прием</span>
                      <span className="font-bold text-primary">+63%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Снижение стоимости лида</span>
                      <span className="font-bold text-primary">-45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ROI</span>
                      <span className="font-bold text-primary">385%</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary"
                    >
                      Подробнее о кейсе
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg border bg-card shadow-sm">
                <div className="relative h-48 w-full">
                  <Image
                    src="/placeholder.svg?height=200&width=400"
                    alt="Кейс косметологической клиники"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">Центр косметологии «БьютиМед»</h3>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Рост обращений</span>
                      <span className="font-bold text-primary">+89%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Снижение цены обращения</span>
                      <span className="font-bold text-primary">-38%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">ROI</span>
                      <span className="font-bold text-primary">512%</span>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Link
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary"
                    >
                      Подробнее о кейсе
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Тарифы" */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 text-center md:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Тарифы на <span className="text-primary">таргетированную рекламу</span>
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
                Выберите оптимальный формат сотрудничества для вашей клиники.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-transform hover:shadow-md">
                <div className="flex flex-1 flex-col p-6 pb-3">
                  <h3 className="text-xl font-bold">Базовый</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-3xl font-bold">от 30 000 ₽</span>
                    <span className="ml-1 text-xl text-muted-foreground">/мес</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Оптимальный вариант для небольших клиник, которые только начинают использовать таргетированную рекламу.
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <PieChart className="mr-2 h-4 w-4 text-primary" />
                      <span>1 рекламный кабинет</span>
                    </div>
                    <div className="flex items-center">
                      <PieChart className="mr-2 h-4 w-4 text-primary" />
                      <span>До 3 рекламных кампаний</span>
                    </div>
                    <div className="flex items-center">
                      <PieChart className="mr-2 h-4 w-4 text-primary" />
                      <span>Еженедельные отчеты</span>
                    </div>
                    <div className="flex items-center">
                      <PieChart className="mr-2 h-4 w-4 text-primary" />
                      <span>Базовая аналитика</span>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary p-6">
                  <Link
                    href="#contact-form"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md border border-primary bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Выбрать тариф
                  </Link>
                </div>
              </div>
              <div className="relative flex flex-col overflow-hidden rounded-lg border border-primary bg-card shadow-sm transition-transform hover:shadow-md">
                <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  Популярный
                </div>
                <div className="flex flex-1 flex-col p-6 pb-3">
                  <h3 className="text-xl font-bold">Оптимальный</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-3xl font-bold">от 50 000 ₽</span>
                    <span className="ml-1 text-xl text-muted-foreground">/мес</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Идеальный вариант для растущих клиник, которые стремятся увеличить поток пациентов.
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>2 рекламных кабинета</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>До 7 рекламных кампаний</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Еженедельные отчеты</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>Расширенная аналитика</span>
                    </div>
                    <div className="flex items-center">
                      <Zap className="mr-2 h-4 w-4 text-primary" />
                      <span>A/B тестирование</span>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary p-6">
                  <Link
                    href="#contact-form"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Выбрать тариф
                  </Link>
                </div>
              </div>
              <div className="flex flex-col overflow-hidden rounded-lg border bg-card shadow-sm transition-transform hover:shadow-md">
                <div className="flex flex-1 flex-col p-6 pb-3">
                  <h3 className="text-xl font-bold">Премиум</h3>
                  <div className="mt-4 flex items-baseline text-gray-900">
                    <span className="text-3xl font-bold">от 85 000 ₽</span>
                    <span className="ml-1 text-xl text-muted-foreground">/мес</span>
                  </div>
                  <p className="mt-4 text-muted-foreground">
                    Максимально эффективное решение для крупных медицинских центров и сетей клиник.
                  </p>
                  <div className="mt-6 space-y-4">
                    <div className="flex items-center">
                      <PieChart className="mr-2 h-4 w-4 text-primary" />
                      <span>3+ рекламных кабинета</span>
                    </div>
                    <div className="flex items-center">
                      <PieChart className="mr-2 h-4 w-4 text-primary" />
                      <span>До 15 рекламных кампаний</span>
                    </div>
                    <div className="flex items-center">
                      <PieChart className="mr-2 h-4 w-4 text-primary" />
                      <span>Ежедневный мониторинг</span>
                    </div>
                    <div className="flex items-center">
                      <PieChart className="mr-2 h-4 w-4 text-primary" />
                      <span>Комплексная аналитика</span>
                    </div>
                    <div className="flex items-center">
                      <PieChart className="mr-2 h-4 w-4 text-primary" />
                      <span>Персональный менеджер</span>
                    </div>
                  </div>
                </div>
                <div className="bg-secondary p-6">
                  <Link
                    href="#contact-form"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md border border-primary bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Выбрать тариф
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция "Форма контакта" */}
      <section id="contact-form" className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm text-accent-cyan">
                Связаться с нами
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Готовы увеличить поток <span className="text-primary">пациентов</span>?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Оставьте заявку, и наши специалисты свяжутся с вами в течение 24 часов для обсуждения деталей сотрудничества.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg
                      className=" h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      Бесплатный анализ вашей целевой аудитории
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg
                      className=" h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      Расчет примерной стоимости привлечения пациента
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="rounded-full bg-primary/10 p-1">
                    <svg
                      className=" h-5 w-5 text-primary"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">
                      Предварительный медиаплан на 3 месяца
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-md space-y-6 rounded-lg border bg-card p-6 shadow-sm">
                <div className="space-y-2 text-center">
                  <h3 className="text-2xl font-bold">Заполните форму</h3>
                  <p className="text-muted-foreground">
                    Оставьте свои контактные данные, и мы свяжемся с вами для обсуждения проекта.
                  </p>
                </div>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="name"
                    >
                      Ваше имя
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="name"
                      placeholder="Иван Иванов"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="email"
                      placeholder="email@example.com"
                      required
                      type="email"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone"
                    >
                      Телефон
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="phone"
                      placeholder="+7 (999) 123-45-67"
                      type="tel"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Сообщение
                    </label>
                    <textarea
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="message"
                      placeholder="Расскажите кратко о вашей клинике и целях рекламной кампании"
                    ></textarea>
                  </div>
                  <button
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    type="submit"
                  >
                    Отправить заявку
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Секция FAQ */}
      <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-8">
            <div className="space-y-2 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Часто задаваемые <span className="text-primary">вопросы</span>
              </h2>
              <p className="text-muted-foreground md:text-lg">
                Ответы на самые распространенные вопросы о таргетированной рекламе для медицинских клиник
              </p>
            </div>
            <div className="space-y-4">
              <div className="rounded-lg border bg-card">
                <details className="group p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                    Как быстро можно ожидать первые результаты?
                    <svg
                      className="h-6 w-6 shrink-0 transition-transform duration-200 group-open:-rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="mt-4 text-muted-foreground">
                    <p>
                      Первые результаты в виде обращений обычно появляются уже через 5-7 дней после запуска рекламной кампании. 
                      Однако для достижения стабильных результатов и оптимизации рекламных объявлений требуется в среднем 2-4 недели.
                    </p>
                  </div>
                </details>
              </div>
              <div className="rounded-lg border bg-card">
                <details className="group p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                    Как учитываются законодательные ограничения в медицинской рекламе?
                    <svg
                      className="h-6 w-6 shrink-0 transition-transform duration-200 group-open:-rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="mt-4 text-muted-foreground">
                    <p>
                      Мы тщательно следим за соблюдением всех требований законодательства при разработке рекламных 
                      материалов для медицинских услуг. Наши специалисты регулярно проходят обучение по нормативным 
                      требованиям и имеют большой опыт в создании эффективной и легальной медицинской рекламы.
                    </p>
                  </div>
                </details>
              </div>
              <div className="rounded-lg border bg-card">
                <details className="group p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                    Какой бюджет необходим для запуска таргетированной рекламы?
                    <svg
                      className="h-6 w-6 shrink-0 transition-transform duration-200 group-open:-rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="mt-4 text-muted-foreground">
                    <p>
                      Минимальный рекомендуемый рекламный бюджет составляет от 50 000 рублей в месяц. Однако точная сумма 
                      зависит от конкуренции в вашем регионе, специализации клиники и поставленных целей. На первичной консультации 
                      мы составим индивидуальный медиаплан с оптимальным распределением бюджета.
                    </p>
                  </div>
                </details>
              </div>
              <div className="rounded-lg border bg-card">
                <details className="group p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                    Какие данные нужны для запуска рекламной кампании?
                    <svg
                      className="h-6 w-6 shrink-0 transition-transform duration-200 group-open:-rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="mt-4 text-muted-foreground">
                    <p>
                      Для запуска эффективной кампании нам потребуются: информация о ваших услугах и их стоимости, 
                      уникальные преимущества клиники, портрет целевой аудитории, географическое расположение, 
                      предыдущий маркетинговый опыт (если есть) и доступ к рекламным кабинетам. 
                      Мы составили удобный чек-лист, который вы получите после первичного обращения.
                    </p>
                  </div>
                </details>
              </div>
              <div className="rounded-lg border bg-card">
                <details className="group p-6">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-medium">
                    Как вы отслеживаете эффективность рекламных кампаний?
                    <svg
                      className="h-6 w-6 shrink-0 transition-transform duration-200 group-open:-rotate-180"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </summary>
                  <div className="mt-4 text-muted-foreground">
                    <p>
                      Мы используем комплексный подход к аналитике: настраиваем системы сквозной аналитики (Roistat, CoMagic), 
                      отслеживаем звонки через коллтрекинг, настраиваем цели в Яндекс.Метрике и Google Analytics, 
                      интегрируем данные с CRM-системой клиники. Вы получаете регулярные отчеты с полной информацией 
                      о результатах и стоимости привлечения каждого пациента.
                    </p>
                  </div>
                </details>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA секция */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 items-center">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Готовы привлечь новых <span className="text-primary">пациентов</span> уже сегодня?
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                Оставьте заявку сейчас и получите бесплатный аудит вашей целевой аудитории и персональную стратегию продвижения.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="#contact-form"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Оставить заявку
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Связаться по телефону
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
