import "./FinalOffer.css"
import { Building2, Users, Award, Globe } from "lucide-react"

function FinalOffer() {
  const stats = [
    {
      icon: Building2,
      number: "30+",
      label: "лет на рынке",
      description: "Один из крупнейших банков России",
    },
    {
      icon: Users,
      number: "15М+",
      label: "клиентов",
      description: "Доверяют нам по всей стране",
    },
    {
      icon: Award,
      number: "ТОП‑3",
      label: "банков России",
      description: "По оценкам ведущих деловых изданий",
    },
    {
      icon: Globe,
      number: "1000+",
      label: "отделений",
      description: "Во всех регионах страны",
    },
  ]

  return (
    <section className="vtb-final" aria-label="Финальное предложение автокредита">
      <div className="vtb-final__container">
        <div className="vtb-final__card">
          <div className="vtb-final__header">
            <h2 className="vtb-final__title">Почему ВТБ можно доверить автокредит</h2>
          </div>

          <div className="vtb-final__stats">
            {stats.map((stat) => {
              const Icon = stat.icon
              return (
                <div className="vtb-final__stat" key={stat.label}>
                  <div className="vtb-final__stat-top">
                    <div className="vtb-final__stat-icon-wrap" aria-hidden="true">
                      <Icon className="vtb-final__stat-icon" />
                    </div>
                    <div className="vtb-final__stat-number">{stat.number}</div>
                  </div>
                  <div className="vtb-final__stat-label">{stat.label}</div>
                  <p className="vtb-final__stat-desc">{stat.description}</p>
                </div>
              )
            })}
          </div>

          <div className="vtb-final__bottom">
            <div className="vtb-final__quote">
              <div className="vtb-final__rating">
                <div className="vtb-final__stars" aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span className="vtb-final__star" key={star}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="vtb-final__rating-text">
                  Рейтинг 4,8 на основе 50&nbsp;000+ отзывов
                </span>
              </div>
            </div>

            <a
              className="vtb-final__cta"
              href="#vtb-application"
              role="button"
              aria-label="Оставить заявку на автокредит"
            >
              Оставить заявку на автокредит
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalOffer

