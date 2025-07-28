import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ theme, toggleTheme }) => {
  const [isRotating, setIsRotating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const handleThemeChange = () => {
    setIsRotating(true);
    setTimeout(() => setIsRotating(false), 500);
    toggleTheme();
  };

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScrollEvent = () => {
      const sections = ['Work', 'Skills', 'Experience', 'Contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  // Color based on theme
  const activeTextColor = theme === 'dark' ? 'text-yellow-400' : 'text-indigo-600';
  const hoverUnderlineColor = theme === 'dark' ? 'bg-yellow-400' : 'bg-indigo-600';

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-7xl px-6 py-2 bg-[#1a1a1a]/60 backdrop-blur-md border border-white/10 rounded-full shadow-md transition-all font-sans">
      
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Images/Yash copy.png"
            alt="Logo"
            className="h-8 w-auto sm:h-9 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {['Work', 'Skills', 'Experience', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`relative text-sm font-medium transition-all duration-300 group ${
                activeSection === item ? activeTextColor : 'text-gray-300'
              }`}
            >
              {item}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 transition-all duration-300 group-hover:w-full ${
                  activeSection === item ? 'w-full' : 'w-0'
                } ${hoverUnderlineColor}`}
              />
            </button>
          ))}

          {/* Theme Toggle (Desktop) */}
          <div className="flex items-center ml-2 mt-1">
            <button
              onClick={handleThemeChange}
              className="transition-transform hover:scale-110"
              title="Toggle Theme"
            >
              <span
                className={`inline-block transition-transform duration-500 ${
                  isRotating ? 'rotate-[360deg]' : ''
                }`}
              >
                {theme === 'dark' ? (
                  <FiSun size={20} className="text-yellow-400 drop-shadow-[0_0_4px_rgba(255,255,0,0.5)]" />
                ) : (
                  <FiMoon size={20} className="text-gray-800 drop-shadow-[0_0_3px_rgba(0,0,0,0.5)]" />
                )}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#111111]/95 backdrop-blur-md py-6 px-4 flex flex-col items-center gap-6 rounded-b-xl shadow-xl md:hidden transition-all animate-slideDown">
          {['Work', 'Skills', 'Experience', 'Contact'].map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`text-base font-medium hover:scale-105 transition duration-300 ${
                activeSection === item ? activeTextColor : 'text-gray-300'
              }`}
            >
              {item}
            </button>
          ))}

          {/* Theme Toggle (Mobile) */}
          <button
            onClick={handleThemeChange}
            className="transition-transform hover:scale-110 mt-2"
            title="Toggle Theme"
          >
            <span
              className={`inline-block transition-transform duration-500 ${
                isRotating ? 'rotate-[360deg]' : ''
              }`}
            >
              {theme === 'dark' ? (
                <FiSun size={22} className="text-yellow-400 drop-shadow-[0_0_4px_rgba(255,255,0,0.5)]" />
              ) : (
                <FiMoon size={22} className="text-gray-800 drop-shadow-[0_0_3px_rgba(0,0,0,0.5)]" />
              )}
            </span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
