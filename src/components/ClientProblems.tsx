import "./ClientProblems.css"
import {
  CircleAlert as AlertCircle,
  Clock,
  DollarSign,
  FileQuestion,
  MapPin,
} from "lucide-react"

function ClientProblems() {
  const problems = [
    {
      icon: DollarSign,
      title: "Сложно накопить всю сумму",
      description: "Автомобиль нужен сейчас, но накопление нужной суммы может занять годы.",
      solution: "С автокредитом вы начинаете пользоваться машиной уже сегодня, а платите постепенно.",
    },
    {
      icon: FileQuestion,
      title: "Непонятные условия",
      description: "Сложные формулировки, комиссии и мелкий шрифт вызывают недоверие.",
      solution: "Мы заранее объясняем все условия простым языком — без скрытых платежей и сюрпризов.",
    },
    {
      icon: Clock,
      title: "Долгое оформление",
      description: "Сбор документов и походы в офис банка отнимают много времени.",
      solution: "Онлайн‑заявка и быстрое решение — без лишних визитов и очередей.",
    },
    {
      icon: MapPin,
      title: "Слишком много вариантов",
      description: "Сложно разобраться в моделях, комплектациях и программах кредитования.",
      solution: "Помогаем подобрать автомобиль и условия под ваш бюджет и задачи.",
    },
  ]

  return (
    <section className="vtb-problems" aria-label="Сложности при оформлении автокредита">
      <div className="vtb-problems__container">
        <div className="vtb-problems__header">
          <div className="vtb-problems__badge">
            <AlertCircle className="vtb-problems__badge-icon" aria-hidden="true" />
            <span className="vtb-problems__badge-text">Решаем ваши проблемы</span>
          </div>
          <h2 className="vtb-problems__title">Мы понимаем ваши сложности</h2>
        </div>

        <div className="vtb-problems__grid">
          {problems.map((item) => {
            const Icon = item.icon
            return (
              <article className="vtb-problems__card" key={item.title}>
                <div className="vtb-problems__card-top">
                  <div className="vtb-problems__icon-wrap" aria-hidden="true">
                    <Icon className="vtb-problems__icon" />
                  </div>
                  <div className="vtb-problems__card-main">
                    <h3 className="vtb-problems__card-title">{item.title}</h3>
                    <p className="vtb-problems__card-desc">{item.description}</p>
                  </div>
                </div>
                <div className="vtb-problems__solution">
                  <span className="vtb-problems__solution-dot" aria-hidden="true" />
                  <p className="vtb-problems__solution-text">{item.solution}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ClientProblems
