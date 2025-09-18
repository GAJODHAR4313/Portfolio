import React, { useState, useEffect } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const AboutMe = ({ theme }) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = ["Web Developer", "UI/UX Designer", "Creative Thinker", "Problem Solver"];

  useEffect(() => {
    const langInterval = setInterval(() => {
      setIsEnglish((prev) => !prev);
    }, 3000);

    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => {
      clearInterval(langInterval);
      clearInterval(roleInterval);
    };
  }, []);

  const textColor = theme === 'dark' ? 'text-[#F5F5F5]' : 'text-[#1C1C1C]';
  const headingColor = 'text-[#FF0000]';
  const accentColor = theme === 'dark' ? 'text-[#1E90FF]' : 'text-black';
  const paraColor = theme === 'dark' ? 'text-[#CCCCCC]' : 'text-[#333333]';
  const borderGlow = theme === 'dark' ? 'border-[#FF0000] shadow-red-500' : 'border-[#FF0000] shadow-red-400';
  const bgColor = theme === 'dark' ? 'bg-[#000000]' : 'bg-[#E8DDC9]';

  return (
    <div
      id="Aboutme"
      className={`relative min-h-screen px-4 sm:px-6 py-12 flex items-center justify-center ${bgColor} ${textColor}`}
    >
      {theme === 'dark' && (
        <div className="absolute inset-0 bg-black/50 backdrop-blur-md z-0"></div>
      )}

      <div className="relative z-10 flex flex-col lg:flex-row gap-8 sm:gap-16 max-w-7xl mx-auto items-center animate-fade-in">
        
        {/* Profile Image */}
        <div
          className={`w-[220px] sm:w-[260px] lg:w-[300px] h-[250px] sm:h-[300px] lg:h-[350px] rounded-3xl overflow-hidden border-4 ${borderGlow} transition-transform duration-300 hover:scale-105`}
          style={{ boxShadow: '0 0 20px rgba(255, 0, 0, 0.5)' }}
        >
          <img
            src="/Images/profile.JPG"
            alt="Yashraj"
            className="w-full h-full object-cover object-top"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-2/3 w-full flex flex-col justify-center text-center lg:text-left">
          <h1 className={`text-4xl sm:text-5xl font-extrabold tracking-tight ${headingColor} drop-shadow-md`}>
            {isEnglish ? (
              <>Hi, I'm <span className={`${accentColor}`}>Yashraj</span></>
            ) : (
              <>नमस्ते, I'm <span className={`${accentColor}`}>Yashraj</span></>
            )}
          </h1>

          {/* Dynamic Role */}
          <p className="text-lg sm:text-xl mt-2 font-medium text-[#1E90FF] dark:text-[#87CEFA] transition-all duration-500">
            {roles[roleIndex]}
          </p>

          {/* Divider */}
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-orange-400 mt-3 mx-auto lg:mx-0 rounded-full"></div>

          {/* Bio */}
          <p className={`text-base sm:text-lg leading-relaxed mt-4 sm:mt-6 max-w-2xl mx-auto lg:mx-0 ${paraColor}`}>
            I'm a creative web developer and UI/UX designer who transforms ideas into elegant, user-focused interfaces.
            I blend development and design thinking to build modern digital experiences.
          </p>

          

          {/* Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="/Images/resume.png"
              target="_blank"
              rel="noopener noreferrer"
              className={`px-6 py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105
                ${theme === 'dark'
                  ? 'bg-gradient-to-r from-[#FF0000] to-[#FF4D4D] text-white hover:brightness-110'
                  : 'bg-black text-white hover:bg-[#222222]'
                }`}
            >
              View Resume
            </a>

            <a
              href="/Images/resume.png"
              download="Yashraj_Resume.png"
              className={`px-6 py-3 text-sm sm:text-base font-semibold rounded-full shadow-lg transition duration-300 transform hover:scale-105
                ${theme === 'dark'
                  ? 'bg-[#F5F5F5] text-black hover:bg-white'
                  : 'bg-gray-200 text-black hover:bg-gray-300'
                }`}
            >
              Download
            </a>
          </div>


          {/* Stats */}
          <div className="flex gap-6 mt-6 justify-center lg:justify-start">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-sky-500">1+</h3>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-sky-500">3+</h3>
              <p className="text-sm">Projects Done</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-sky-500">10+</h3>
              <p className="text-sm">Happy Clients</p>
            </div>
          </div>
          
          {/* Social Media */}
          <div className="flex gap-4 mt-6 justify-center lg:justify-start">
            <a href="https://instagram.com/imyashrajput_01" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-red-500 transition" />
            </a>
            <a href="https://linkedin.com/in/yashraj" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-red-500 transition" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-red-500 transition" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
