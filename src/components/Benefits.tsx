import "./Benefits.css"
import {
  CircleCheck as CheckCircle,
  Shield,
  Percent,
  Smartphone,
  Headphones,
  TrendingUp,
} from "lucide-react"

function Benefits() {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Прозрачные условия",
      description:
        "Все условия кредита понятны с первого взгляда. Без скрытых комиссий и сложных формулировок.",
      color: "blue",
    },
    {
      icon: Percent,
      title: "Выгодные платежи",
      description:
        "Распределите стоимость автомобиля на удобные ежемесячные платежи по низкой ставке.",
      color: "green",
    },
    {
      icon: Shield,
      title: "Надежный банк",
      description:
        "ВТБ — один из крупнейших банков России с безупречной репутацией и миллионами клиентов.",
      color: "blue",
    },
    {
      icon: Smartphone,
      title: "Онлайн-оформление",
      description:
        "Подайте заявку прямо сейчас без визита в банк. Вся процедура занимает несколько минут.",
      color: "purple",
    },
    {
      icon: Headphones,
      title: "Поддержка 24/7",
      description:
        "Персональная поддержка на всех этапах — от заявки до получения ключей от автомобиля.",
      color: "orange",
    },
    {
      icon: TrendingUp,
      title: "Гибкие программы",
      description:
        "Выберите оптимальный срок кредитования и размер первоначального взноса под ваш бюджет.",
      color: "green",
    },
  ] as const

  return (
    <section className="vtb-benefits" aria-label="Преимущества автокредита">
      <div className="vtb-benefits__container">
        <div className="vtb-benefits__header">
          <h2 className="vtb-benefits__title">Преимущества автокредита от ВТБ</h2>
          <p className="vtb-benefits__subtitle">
            Мы создали максимально комфортные условия для покупки вашего семейного автомобиля.
          </p>
        </div>

        <div className="vtb-benefits__grid">
          {benefits.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className={`vtb-benefits__card vtb-benefits__card--${item.color}`}
              >
                <div className="vtb-benefits__icon-wrap">
                  <Icon className="vtb-benefits__icon" />
                </div>
                <h3 className="vtb-benefits__card-title">{item.title}</h3>
                <p className="vtb-benefits__card-text">{item.description}</p>
                <div className="vtb-benefits__accent-line" aria-hidden="true" />
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Benefits

