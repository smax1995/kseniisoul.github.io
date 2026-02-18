import { useEffect } from 'react';
import './LampSwitch.css';

const LampSwitch = ({ mode, onToggle }) => {
  useEffect(() => {
    // Минимальная анимация при первой загрузке страницы
    const lamp = document.querySelector('.lamp');
    if (lamp) {
      lamp.classList.add('blink');
      setTimeout(() => {
        lamp.classList.remove('blink');
      }, 1200);
    }
  }, []);

  const handleClick = () => {
    const lamp = document.querySelector('.lamp');
    if (lamp) {
      lamp.classList.add('blink');
      setTimeout(() => {
        onToggle();
        // Убираем класс после завершения анимации
        setTimeout(() => {
          lamp.classList.remove('blink');
        }, 600);
      }, 300);
    } else {
      onToggle();
    }
  };

  return (
    <div 
      className="lamp-switch" 
      onClick={handleClick}
      role="button"
      tabIndex={0}
      aria-label={`Переключить на режим: ${mode === 'alone' ? 'Побыть с кем-то' : 'Побыть одному'}`}
    >
      <div className={`lamp ${mode === 'alone' ? 'off' : 'on'}`}></div>
      <div className="lamp-glow"></div>
    </div>
  );
};

export default LampSwitch;