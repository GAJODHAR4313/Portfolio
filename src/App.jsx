import { useState } from 'react';

import './App.css';
import Navbar from './Components/Navbar';
import Aboutme from './Components/Aboutme';
import Work from './Components/Work';
import Skills from './Components/Skills';
import Experience from './Components/Experience';
import Footer from './Components/Footer';


function App() {
  const [theme, setTheme] = useState('dark'); // dark by default

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={theme === 'dark' ? 'bg-[#060026] text-white' : 'bg-[#F8F9FA] text-[#2D2D2D]'}>
     
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Aboutme theme={theme} />
      <Work theme={theme} />
      <Skills theme={theme} />
     
      <Experience theme={theme} />
      <Footer theme={theme} />
    </div>
  );
}

export default App; 