import "./HowTo.css"

function HowTo() {
  return (
    <section className="vtb-how" aria-label="Как оформить автокредит">
      <div className="vtb-how__container">
        <h2 className="vtb-how__title">Как оформить автокредит</h2>

        <p className="vtb-how__subtitle">
          Оформление кредита занимает всего несколько шагов. Подайте заявку онлайн
          и получите решение банка за несколько минут.
        </p>

        <ol className="vtb-how__steps">
          <li className="vtb-how__step">
            <h3>Оставьте заявку</h3>
            <p>Заполните короткую форму на сайте</p>
          </li>

          <li className="vtb-how__step">
            <h3>Получите решение</h3>
            <p>Банк рассмотрит заявку и сообщит решение</p>
          </li>

          <li className="vtb-how__step">
            <h3>Выберите автомобиль</h3>
            <p>Подберите автомобиль у дилера</p>
          </li>

          <li className="vtb-how__step">
            <h3>Оформите кредит</h3>
            <p>Подпишите документы и заберите автомобиль</p>
          </li>
        </ol>
      </div>
    </section>
  )
}

export default HowTo