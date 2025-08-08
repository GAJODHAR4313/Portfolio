import { useState } from 'react';

import './App.css';

import Spiderplay from './Components/Spiderplay';

function App() {
  const [theme, setTheme] = useState('dark'); // dark by default

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={theme === 'dark' ? 'bg-[#060026] text-white' : 'bg-[#F8F9FA] text-[#2D2D2D]'}>
     
      
      <Spiderplay theme={theme} />
      
    </div>
  );
}

export default App;
