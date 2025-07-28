import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Tech Surya Solutions',
    position: 'Software Developer',
    duration: 'Jan 2025 - Present',
    description:
      'Led frontend team for client projects. Built scalable React apps, integrated REST APIs, and enhanced performance by 30%.',
  },
  {
    company: 'CodeCrafters Inc.',
    position: 'Frontend Intern',
    duration: 'Jun 2019 - Dec 2019',
    description:
      'Redesigned UI for user dashboards, implemented reusable components, and improved mobile responsiveness.',
  },
];

const Experience = ({ theme }) => {
  const bgColor = theme === 'dark' ? 'bg-[#060026]' : 'bg-[#F8F9FA]';
  const textColor = theme === 'dark' ? 'text-[#A1A1A1]' : 'text-[#2D2D2D]';
  const cardBg = theme === 'dark' ? 'bg-[#0B003A]' : 'bg-white';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-[#2D2D2D]';

  return (
    <section
      id="Experience"
      className={`${bgColor} ${textColor} py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24 relative overflow-hidden`}
    >
    
      <motion.h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-14 ${headingColor}`}
        initial={{ opacity: 0, y: 50, scale: 0.8 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        💼 Experience
      </motion.h2>

   
      <motion.div
        className="relative flex flex-col gap-8 sm:gap-10"
        initial={{ opacity: 0, y: 60, scale: 0.85 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="relative group"
            whileHover={{ scale: 1.02 }}
          >
            
            <div
              className={`p-4 sm:p-5 rounded-xl border border-purple-500/30 shadow-lg transition group-hover:shadow-purple-500/40 ${cardBg}`}
            >
              <h3
                className={`text-lg sm:text-xl lg:text-2xl font-semibold ${headingColor}`}
              >
                {exp.position}
              </h3>
              <p className="text-sm sm:text-md font-medium text-purple-400">
                {exp.company}
              </p>
              <p className="text-xs sm:text-sm italic text-gray-400 mb-2">
                {exp.duration}
              </p>
              <p className="text-xs sm:text-sm md:text-base">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Experience;
