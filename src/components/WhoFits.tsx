import "./WhoFits.css"
import { Baby, Car, CreditCard, Users } from "lucide-react"

function WhoFits() {
  const audiences = [
    {
      icon: Users,
      title: "Молодым семьям",
      description: "Создайте комфортные условия для вашей семьи с собственным автомобилем",
    },
    {
      icon: Baby,
      title: "Родителям с детьми",
      description: "Удобные поездки в школу, на кружки и семейные путешествия",
    },
    {
      icon: Car,
      title: "Ищущим личный транспорт",
      description: "Независимость от общественного транспорта и такси",
    },
    {
      icon: CreditCard,
      title: "Планирующим бюджет",
      description: "Распределите стоимость автомобиля на удобные ежемесячные платежи",
    },
  ]

  return (
    <section className="vtb-who" aria-label="Кому подойдет автокредит">
      <div className="vtb-who__container">
        <div className="vtb-who__header">
          <h2 className="vtb-who__title">Кому подойдет автокредит</h2>
          <p className="vtb-who__subtitle">
            Мы создали условия кредитования специально для семей, которые ценят комфорт и
            планируют свой бюджет.
          </p>
        </div>

        <div className="vtb-who__grid">
          {audiences.map((item) => {
            const Icon = item.icon
            return (
              <article className="vtb-who__card" key={item.title}>
                <div className="vtb-who__icon-wrap" aria-hidden="true">
                  <Icon className="vtb-who__icon" />
                </div>
                <h3 className="vtb-who__card-title">{item.title}</h3>
                <p className="vtb-who__card-text">{item.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhoFits
