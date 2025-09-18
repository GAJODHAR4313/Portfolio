import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useAnimationFrame } from 'framer-motion';

const skills = [
  { name: 'Figma', img: '/Images/figma.png' },
  { name: 'Photoshop', img: '/Images/photoshop.png' },
  { name: 'HTML5', img: '/Images/html.png' },
  { name: 'CSS3', img: '/Images/css.png' },
  { name: 'JavaScript', img: '/Images/java.png' },
  { name: 'React.js', img: '/Images/react.png' },
  { name: 'Framer', img: '/Images/framer.png' },
  { name: 'Python', img: '/Images/python.png' },
];

const SPEED = 60;

const Skills = ({ theme }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [paused, setPaused] = useState(false);
  const xRef = useRef(0);

  const measure = useCallback(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  useAnimationFrame((t, delta) => {
    if (!contentWidth || paused) return;
    const deltaPx = (SPEED * delta) / 1000;
    xRef.current -= deltaPx;
    if (Math.abs(xRef.current) >= contentWidth) {
      xRef.current += contentWidth;
    }
    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(${xRef.current}px)`;
    }
  });

  const bgColor = theme === 'dark' ? 'bg-[#000000]' : 'bg-[#E8DDC9]';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-black';

  return (
    <section
      id="Skills"
      className={`min-h-[60vh] ${bgColor} flex flex-col items-center justify-center px-4 sm:px-6 lg:px-12 py-10 sm:py-14 lg:py-20 overflow-hidden`}
    >
      <div className="w-full max-w-6xl mx-auto">
        <h2
          className={`text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 ${headingColor}`}
        >
          Skills
        </h2>

        <div
          className={`relative overflow-hidden rounded-2xl sm:rounded-3xl border ${
            theme === 'dark'
              ? 'border-white/10 bg-black'
              : 'border-gray-200 bg-white'
          } py-4 sm:py-6 lg:py-8`}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Fading edges */}
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-28 lg:w-32 ${
              theme === 'dark'
                ? 'bg-gradient-to-r from-black via-black/70 to-transparent'
                : 'bg-gradient-to-r from-white via-white/70 to-transparent'
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-28 lg:w-32 ${
              theme === 'dark'
                ? 'bg-gradient-to-l from-black via-black/70 to-transparent'
                : 'bg-gradient-to-l from-white via-white/70 to-transparent'
            }`}
          />

          {/* Moving skills */}
          <div
            ref={containerRef}
            className="flex gap-6 sm:gap-8 lg:gap-10 will-change-transform select-none"
          >
            <div ref={contentRef} className="flex gap-6 sm:gap-8 lg:gap-10">
              {skills.map((s, i) => (
                <SkillChip key={'a-' + i} skill={s} theme={theme} />
              ))}
              {skills.map((s, i) => (
                <SkillChip key={'b-' + i} skill={s} theme={theme} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillChip = ({ skill, theme }) => (
  <div
    className={`group relative flex flex-col items-center justify-center
      min-w-[90px] sm:min-w-[130px] lg:min-w-[170px]
      px-2 sm:px-4 lg:px-5 py-3 sm:py-5 lg:py-6
      rounded-xl sm:rounded-2xl border-2 transition-all duration-300
      ${
        theme === 'dark'
          ? 'bg-black border-blue-500 text-white hover:border-red-500'
          : 'bg-white border-blue-500 text-[#2D2D2D] hover:border-red-500'
      }
      shadow-[0_3px_15px_-3px_rgba(0,0,0,0.4)]
      hover:shadow-[0_6px_25px_-2px_rgba(255,0,0,0.5)]`}
  >
    <div className="relative w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center">
      <div
        className={`absolute inset-0 rounded-xl bg-gradient-to-br ${
          theme === 'dark'
            ? 'from-blue-500 to-red-500'
            : 'from-blue-500 to-red-500'
        } opacity-0 group-hover:opacity-20 blur-sm transition`}
      />
      <img
        src={skill.img}
        alt={skill.name}
        className="relative w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-110"
        loading="lazy"
      />
    </div>
    <p className="mt-2 text-xs sm:text-sm lg:text-lg font-medium tracking-wide text-center">
      {skill.name}
    </p>
  </div>
);

export default Skills;
