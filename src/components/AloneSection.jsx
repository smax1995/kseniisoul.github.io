// src/components/AloneSection.jsx
const AloneSection = () => {
  return (
    <section className="alone-section">
      <div className="two-columns">
        <div className="column video-column">
          <div className="video-player">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=GdHmExpjEQHXAT0f"
              title="Meditative Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="column content-column">
          <div className="techniques">
            <div className="card">
              <h3>Техника дыхания 4-7-8</h3>
              <p>Описание техники...</p>
              <p>Цена: 500 руб.</p>
              <button className="buy-button">Купить</button>
            </div>
            <div className="card">
              <h3>Журналинг для одиночества</h3>
              <p>Описание...</p>
              <p>Цена: 500 руб.</p>
              <button className="buy-button">Купить</button>
            </div>
            <div className="card">
              <h3>Другая техника</h3>
              <p>Описание...</p>
              <p>Цена: 500 руб.</p>
              <button className="buy-button">Купить</button>
            </div>
          </div>

          <p className="call-to-action">Выберите технику и начните прямо сейчас</p>
        </div>
      </div>
    </section>
  );
};

export default AloneSection;