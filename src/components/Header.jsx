// src/components/Header.jsx
const Header = ({ mode, onToggle }) => {
  return (
    <header className={`header ${mode}`}>
      <h1 className="logo">Психолог Ксения Иванова</h1>
      <nav>
        <button 
          className={mode === 'alone' ? 'active' : ''}
          onClick={() => onToggle('alone')}
        >
          Побыть одному
        </button>
        <button 
          className={mode === 'together' ? 'active' : ''}
          onClick={() => onToggle('together')}
        >
          Побыть с кем-то
        </button>
      </nav>
    </header>
  );
};

export default Header;