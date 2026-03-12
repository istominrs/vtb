import "./Hero.css"
import mascotImg from "../assets/mascot.png"
import logoImg from "../assets/logo.png"

function Hero() {
  return (
    <section className="vtb-hero" aria-label="Семейный автокредит от ВТБ">
      <div className="vtb-hero__container">
        <div className="vtb-hero__grid">
          <div className="vtb-hero__content">
            <div className="vtb-hero__brand" aria-label="ВТБ">
              <div className="vtb-hero__logo" aria-hidden="true">
                <img src={logoImg} alt="ВТБ" />
              </div>
            </div>

            <h1 className="vtb-hero__title">Семейный автокредит от ВТБ</h1>
            <p className="vtb-hero__subtitle">
              Выгодные условия для покупки нового или подержанного авто. Решение онлайн —
              быстро и удобно.
            </p>

            <div className="vtb-hero__actions">
              <a
                className="vtb-hero__cta"
                href="#"
                role="button"
                aria-label="Оформить онлайн"
              >
                Оформить онлайн
              </a>
            </div>
          </div>

          <div className="vtb-hero__media" aria-hidden="true">
            <img className="vtb-hero__image" src={mascotImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero