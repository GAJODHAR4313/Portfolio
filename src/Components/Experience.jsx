import React, { useState } from 'react';
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
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);
  const [showCalc, setShowCalc] = useState(false);

  const bgColor = theme === 'dark' ? 'bg-[#000000]' : 'bg-[#E8DDC9]';
  const textColor = theme === 'dark' ? 'text-white' : 'text-[#1C1C1C]';
  const cardBg = theme === 'dark' ? 'bg-[#1a1a1a]/80' : 'bg-white/70';
  const borderColor = 'border-[#FF0000]/60';
  const hoverShadow = 'hover:shadow-[#FF0000]/60';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-black'; // ✅ dynamic
  const positionColor = 'text-sky-500';
  const companyColor = 'text-[#FF0000]';
  const calcBg = theme === 'dark' ? 'bg-[#1C1C1C]' : 'bg-white';
  const inputBg = theme === 'dark' ? 'bg-[#333333]' : 'bg-gray-200';

  const calculate = (op) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    if (isNaN(n1) || isNaN(n2)) {
      setResult('⚠️ Enter valid numbers');
      return;
    }
    switch (op) {
      case '+':
        setResult(n1 + n2);
        break;
      case '-':
        setResult(n1 - n2);
        break;
      case '*':
        setResult(n1 * n2);
        break;
      case '/':
        setResult(n2 !== 0 ? n1 / n2 : '⚠️ Cannot divide by zero');
        break;
      default:
        setResult(null);
    }
  };

  return (
    <section
      id="Experience"
      className={`${bgColor} ${textColor} relative overflow-hidden py-12 sm:py-16 px-4 sm:px-6 md:px-16 lg:px-24`}
    >
      {/* Heading */}
      <motion.h2
        className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-14 relative z-10 ${headingColor}`}
      >
        💼 Experience
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 pt-10 md:grid-cols-2 gap-8 relative z-10">
        {experiences.map((exp, index) => (
          <motion.div key={index} className="relative group hover:scale-[1.02] transition">
            <div
              className={`w-full h-full p-6 sm:p-7 border-t-0 border-l-0 border-r-0 rounded-b-2xl ${cardBg} border ${borderColor} shadow-lg ${hoverShadow}`}
            >
              <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${positionColor}`}>{exp.position}</h3>
              <p className={`text-sm sm:text-md font-semibold mb-1 ${companyColor}`}>{exp.company}</p>
              <p className="text-xs sm:text-sm italic text-gray-400 mb-3">{exp.duration}</p>
              <p className="text-sm sm:text-base leading-relaxed">{exp.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Toggle Calculator Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowCalc(!showCalc)}
          className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 shadow-lg"
        >
          {showCalc ? 'Close Calculator' : 'Open Calculator'}
        </button>
      </div>

      {/* Calculator */}
      {showCalc && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className={`mt-8 p-4 rounded-xl shadow-lg w-full max-w-2xl mx-auto ${calcBg} relative z-10`}
        >
          <h3 className="text-xl font-bold mb-4">🧮 Simple Calculator</h3>
          <div className="flex gap-2 mb-4">
            <input
              type="number"
              value={num1}
              onChange={(e) => setNum1(e.target.value)}
              className={`flex-1 px-3 py-2 rounded-lg focus:outline-none ${inputBg}`}
              placeholder="First number"
            />
            <input
              type="number"
              value={num2}
              onChange={(e) => setNum2(e.target.value)}
              className={`flex-1 px-3 py-2 rounded-lg focus:outline-none ${inputBg}`}
              placeholder="Second number"
            />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            <button onClick={() => calculate('+')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">+</button>
            <button onClick={() => calculate('-')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">-</button>
            <button onClick={() => calculate('*')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">×</button>
            <button onClick={() => calculate('/')} className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600">÷</button>
          </div>
          {result !== null && (
            <div className="text-lg font-semibold">Result: {result}</div>
          )}
        </motion.div>
      )}
    </section>
  );
};

export default Experience;
