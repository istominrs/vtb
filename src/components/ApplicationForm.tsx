import "./ApplicationForm.css"
import { Phone, Send, User } from "lucide-react"

function ApplicationForm() {
  return (
    <section
      id="vtb-application"
      className="vtb-application"
      aria-label="Форма заявки на автокредит"
    >
      <div className="vtb-application__container">
        <h2 className="vtb-application__title">Оставьте заявку на автокредит</h2>
        <p className="vtb-application__subtitle">
          Оставьте контакты, и наш специалист свяжется с вами, чтобы рассказать об условиях и
          подобрать удобный формат оформления.
        </p>

        <form className="vtb-application__form">
          <div className="vtb-application__field">
            <label className="vtb-application__label" htmlFor="application-name">
              Имя
            </label>
            <div className="vtb-application__input-wrap">
              <User className="vtb-application__input-icon" aria-hidden="true" />
              <input
                className="vtb-application__input"
                id="application-name"
                name="name"
                type="text"
                placeholder="Например, Анна"
                required
              />
            </div>
          </div>

          <div className="vtb-application__field">
            <label className="vtb-application__label" htmlFor="application-phone">
              Телефон
            </label>
            <div className="vtb-application__input-wrap">
              <Phone className="vtb-application__input-icon" aria-hidden="true" />
              <input
                className="vtb-application__input"
                id="application-phone"
                name="phone"
                type="tel"
                placeholder="+7"
                required
              />
            </div>
          </div>

          <label className="vtb-application__consent">
          <input
            className="vtb-application__checkbox"
            type="checkbox"
            name="consent"
            required
          />
          <span className="vtb-application__consent-text">
            Я согласен на обработку персональных данных
          </span>
        </label>

          <button className="vtb-application__submit" type="submit">
            <span>Отправить заявку</span>
            <Send className="vtb-application__submit-icon" aria-hidden="true" />
          </button>
        </form>
      </div>
    </section>
  )
}

export default ApplicationForm

