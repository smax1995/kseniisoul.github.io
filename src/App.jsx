// src/App.jsx
import { useState } from 'react';
import './App.css';
import LampSwitch from './components/LampSwitch';
import Header from './components/Header';
import Footer from './components/Footer';
import AloneSection from './components/AloneSection';
import TogetherSection from './components/TogetherSection';

function App() {
  const [mode, setMode] = useState('alone'); // 'alone' or 'together'

  const toggleMode = () => {
    setMode(prev => prev === 'alone' ? 'together' : 'alone');
  };

  return (
    <div className={`app ${mode}`}>
      <Header mode={mode} onToggle={(newMode) => setMode(newMode)} />
      <LampSwitch mode={mode} onToggle={toggleMode} />
      <main>
        {mode === 'alone' ? <AloneSection /> : <TogetherSection />}
      </main>
      <Footer mode={mode} />
    </div>
  );
}

export default App;