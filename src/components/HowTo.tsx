import "./HowTo.css"

function HowTo() {
  return (
    <section className="vtb-how" aria-label="Как оформить автокредит">
      <div className="vtb-how__container">
        <h2 className="vtb-how__title">Как оформить автокредит</h2>

        <ol className="vtb-how__steps">
          <li className="vtb-how__step">Оставьте заявку на сайте</li>
          <li className="vtb-how__step">Получите решение банка</li>
          <li className="vtb-how__step">Выберите автомобиль</li>
          <li className="vtb-how__step">Оформите кредит</li>
        </ol>
      </div>
    </section>
  )
}

export default HowTo

