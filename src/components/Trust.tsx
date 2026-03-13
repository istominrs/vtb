import "./Trust.css"
import { Building2, Users, ShieldCheck, BriefcaseBusiness } from "lucide-react"

function Trust() {
  const trustItems = [
    {
      icon: Building2,
      title: "Один из крупнейших банков",
      text: "Системообразующий банк страны с государственным участием.",
    },
    {
      icon: Users,
      title: "Миллионы клиентов",
      text: "Нам доверяют частные лица и бизнес по всей России.",
    },
    {
      icon: ShieldCheck,
      title: "Надёжная система",
      text: "Высокая финансовая устойчивость и защита ваших средств.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Широкий выбор продуктов",
      text: "Подобираем удобный формат оформления и условия под вас.",
    },
  ]

  return (
    <section className="vtb-trust" aria-label="Доверие к банку">
      <div className="vtb-trust__container">
        <div className="vtb-trust__header">
          <h2 className="vtb-trust__title">Почему ВТБ можно доверять</h2>
          <p className="vtb-trust__subtitle">
            Ваша уверенность и безопасность — наш главный приоритет. Мы строим долгосрочные
            отношения, основанные на открытости и надежности.
          </p>
        </div>

        <ul className="vtb-trust__list">
          {trustItems.map((item, index) => {
            const IconComponent = item.icon
            return (
              <li className="vtb-trust__item" key={index}>
                <div className="vtb-trust__card">
                  <div className="vtb-trust__icon-wrapper">
                    <IconComponent className="vtb-trust__icon" aria-hidden="true" />
                  </div>
                  <div className="vtb-trust__content">
                    <h3 className="vtb-trust__item-title">{item.title}</h3>
                    <p className="vtb-trust__item-text">{item.text}</p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Trust