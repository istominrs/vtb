import "./Footer.css"

function Footer() {
  return (
    <footer className="vtb-footer">
      <div className="vtb-footer__container">
        <span className="vtb-footer__text">© {new Date().getFullYear()} ВТБ. Все права защищены.</span>
        <div className="vtb-footer__links">
          <a href="#" className="vtb-footer__link">
            Политика обработки персональных данных
          </a>
          <a href="#" className="vtb-footer__link">
            Условия использования сайта
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

