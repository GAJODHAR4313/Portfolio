import React, { useState, useEffect } from 'react';
import { FaReact, FaFigma, FaCode } from 'react-icons/fa';
import { SiAdobephotoshop } from 'react-icons/si';

const AboutMe = ({ theme }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsEnglish((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const bgColor = theme === 'dark' ? 'bg-[#060026]' : 'bg-[#F8F9FA]';
  const textColor = theme === 'dark' ? 'text-[#A1A1A1]' : 'text-[#2D2D2D]';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-[#2D2D2D]';
  const accentColor = theme === 'dark' ? 'text-[#651AAC]' : 'text-[#6C63FF]';

  return (
    <div className={`relative ${bgColor} ${textColor} min-h-screen px-4 sm:px-6 py-8 sm:py-12 flex items-center justify-center overflow-hidden`}>

      <FaReact
        className={`absolute text-[60px] sm:text-[80px] opacity-20 animate-float-slow ${theme === 'dark' ? 'text-[#61DBFB]' : 'text-[#6C63FF]'}`}
        style={{ top: '20%', left: '5%' }}
      />
      <FaFigma
        className={`absolute text-[50px] sm:text-[70px] opacity-20 animate-float-slow ${theme === 'dark' ? 'text-pink-400' : 'text-[#FF6F61]'}`}
        style={{ top: '30%', right: '10%' }}
      />
      <SiAdobephotoshop
        className={`absolute text-[45px] sm:text-[60px] opacity-20 animate-float-slow ${theme === 'dark' ? 'text-blue-400' : 'text-blue-600'}`}
        style={{ bottom: '10%', left: '8%' }}
      />
      <FaCode
        className={`absolute text-[65px] sm:text-[90px] opacity-15 animate-float-slow ${theme === 'dark' ? 'text-green-400' : 'text-green-600]'}`}
        style={{ bottom: '5%', right: '12%' }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 sm:gap-16 max-w-7xl mx-auto items-center">
   
       <div className="w-[220px] sm:w-[260px] lg:w-[300px] h-[250px] sm:h-[300px] lg:h-[350px] rounded-2xl overflow-hidden shadow-lg border-4  mt-18 border-[#6C63FF]">
  <img
    src="public/Images/Android Compact - 1.png/public/icons/0A0DB5D8-7331-49B1-94A0-F8D4457A60C4 copy.JPG"
    alt="Yashraj"
    className="w-full h-full object-cover object-top"
  />
</div>



        <div className="lg:w-2/3 w-full flex flex-col justify-center text-center lg:text-left">
          <h1 className={`text-3xl sm:text-5xl font-semibold tracking-tight ${headingColor} transition-all duration-700 ease-in-out`}>
            {isEnglish ? (
              <>Hi, I'm <span className={accentColor}>Yashraj</span></>
            ) : (
              <>नमस्ते, I'm <span className={accentColor}>Yashraj</span></>
            )}
          </h1>

          <p className={`text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-2xl mx-auto lg:mx-0 ${theme === 'dark' ? 'text-[#C1C1C1]' : 'text-[#555]'}`}>
            I'm a creative web developer and UI/UX designer who transforms ideas into elegant, user-focused interfaces.
            I blend development and design thinking to build modern digital experiences.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="public/Images/Android Compact - 1.png/public/icons/WhatsApp Image 2025-07-21 at 15.29.52 copy.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block px-4 py-2 text-sm sm:text-base font-medium rounded-md shadow-md transition duration-300
                ${theme === 'dark' ? 'bg-[#651AAC] text-white hover:bg-[#7C34D1]' : 'bg-[#6C63FF] text-white hover:bg-[#5A54E8]'}`}
            >
              View Resume
            </a>
            <a
              href="/resume.pdf"
              download="Yashraj_Resume.pdf"
              className={`inline-block px-4 py-2 text-sm sm:text-base font-medium rounded-md shadow-md transition duration-300
                ${theme === 'dark' ? 'bg-[#A1A1A1] text-black hover:bg-[#C1C1C1]' : 'bg-gray-300 text-black hover:bg-gray-400'}`}
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
