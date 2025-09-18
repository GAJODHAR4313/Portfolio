import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Navbar = ({ theme, toggleTheme }) => {
  const [isRotating, setIsRotating] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = ['Aboutme', 'Work', 'Skills', 'Experience', 'Contact'];
  const activeTextColor = 'text-[#FF0000]';
  const hoverUnderlineColor = 'bg-[#FF0000]';

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
      const sections = ['Aboutme', 'Work', 'Skills', 'Experience', 'Spiderplay', 'Contact'];
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

  const bgNavbar =
    theme === 'dark'
      ? 'bg-[#0d0d0d]/60 text-white'
      : 'bg-white/60 text-black';

  return (
    <header className="relative z-50">
      {/* Navbar Container */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl px-6 py-2 flex items-center justify-between font-sans">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/Images/Yash copy.png"
            alt="Logo"
            className="h-8 w-auto sm:h-9 object-contain"
          />
        </div>

        {/* Center Nav Links */}
        <div
          className={`hidden md:flex justify-center items-center ${bgNavbar} backdrop-blur-md border border-white/10 rounded-full shadow-md px-8 py-3 gap-10`}
        >
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => handleScroll(item)}
              className={`relative text-sm font-medium transition-all duration-300 group ${
                activeSection === item
                  ? activeTextColor
                  : theme === 'dark'
                  ? 'text-gray-300'
                  : 'text-gray-700'
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
        </div>

        {/* Theme Toggle */}
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
                <FiSun
                  size={20}
                  className="text-yellow-400 drop-shadow-[0_0_4px_rgba(255,255,0,0.5)]"
                />
              ) : (
                <FiMoon
                  size={20}
                  className="text-yellow-400 drop-shadow-[0_0_4px_rgba(255,255,0,0.5)]"
                />
              )}
            </span>
          </button>
        </div>
      </div>

      {/* Hanging Spider-Man Image */}
      <div className="fixed -top-[39px] right-[80px] z-50 animate-swing origin-top">
        <img
          src="/Images/image-removebg-preview-4 copy.png"
          alt="Spider-Man Hanging"
          className="w-[250px] sm:w-[250px] md:w-[290px]"
        />
      </div>

      {/* Web Decoration based on Theme */}
      {theme === 'dark' ? (
        <img
          src="/Images/white web.png"
          alt="Web Background - Dark Mode"
          className="fixed bottom-90 right-90 w-[200px] sm:w-[220px] opacity-30 z-0 pointer-events-none select-none"
        />
      ) : (
        <img
          src="/Images/web.png"
          alt="Web Background - Light Mode"
          className="fixed bottom-90 right-90 w-[200px] sm:w-[220px] opacity-30 z-0 pointer-events-none select-none"
        />
      )}
    </header>
  );
};

export default Navbar;
