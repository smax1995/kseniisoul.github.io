// src/components/TogetherSection.jsx
const TogetherSection = () => {
  return (
    <section className="together-section">
      <h2>Готовы поговорить? Запишитесь на консультацию</h2>

      <div className="two-columns">
        <div className="column photo-column">
          <img
            src="/ksenia-portrait.jpg"
            alt="Психолог Ксения Иванова"
            className="retro-photo"
          />
        </div>

        <div className="column content-column">
          <div className="contacts">
            <p>Помогаю разобраться в отношениях и эмоциях</p>
            <p>Телефон: +7 (999) 459-06-63</p>
            <p>Telegram: @kseniisoul</p>
          </div>

          <div className="socials">
            <a href="https://instagram.com/kseniisoul">
              <img src="instagram-icon.svg" alt="Instagram" className="social-icon" />
            </a>
            <a href="https://t.me/kseniisoul">
              <img src="telegram-icon.svg" alt="Telegram" className="social-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TogetherSection;