import "./CookieBanner.css"
import { useEffect, useState } from "react"

function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Простая болванка: всегда показываем при загрузке
    setVisible(true)
  }, [])

  if (!visible) {
    return null
  }

  return (
    <div className="vtb-cookie-banner" aria-live="polite">
      <div className="vtb-cookie-banner__inner" role="dialog" aria-label="Уведомление о куки">
        <p className="vtb-cookie-banner__text">
          Здесь будет текст о том, что мы используем файлы cookie для улучшения работы сервиса.
        </p>
        <div className="vtb-cookie-banner__actions">
          <button
            type="button"
            className="vtb-cookie-banner__button"
            onClick={() => setVisible(false)}
          >
            Понятно
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner

