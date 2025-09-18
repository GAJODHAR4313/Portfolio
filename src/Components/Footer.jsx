import React from 'react';

const Footer = ({ theme }) => {
  const year = new Date().getFullYear();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Theme Colors
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-[#E8DDC9]';
  const textColor = theme === 'dark' ? 'text-[#EDEDED]' : 'text-[#1C1C1C]';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-black';
  const subHeadingColor = 'text-[#FF0000]';
  const hoverColor = theme === 'dark' ? 'hover:text-[#A1A1A1]' : 'hover:text-[#2D2D2D]';
  const borderColor = theme === 'dark' ? 'border-t border-white' : 'border-t border-black';

  const emailBtnClass =
    theme === 'dark'
      ? 'bg-[#1E90FF] text-white'
      : 'bg-black text-white';

  return (
    <footer
      id="Contact"
      className={`relative overflow-hidden ${bgColor} ${borderColor} text-sm`}
    >
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-8 md:py-10">
        <div className="grid gap-8 sm:gap-10 md:gap-8 md:grid-cols-2 lg:grid-cols-4 text-[13px] sm:text-sm">
          
          {/* Brand */}
          <div>
            <h3 className={`text-lg sm:text-xl font-bold tracking-wide ${headingColor}`}>
              Yashraj Vijaysing Rajput
            </h3>
            <p className={`mt-2 leading-relaxed text-xs sm:text-sm ${textColor}`}>
              Passionate about design, code, deploy. Full stack excellence.
            </p>
          </div>        

          {/* Quick Links */}
          <div>
            <h4 className={`font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wider ${subHeadingColor}`}>
              Navigate
            </h4>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleScroll('Aboutme')}
                  className={`${textColor} ${hoverColor} transition duration-300 ease-in-out`}
                >
                  AboutMe
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('Work')}
                  className={`${textColor} ${hoverColor} transition duration-300 ease-in-out`}
                >
                  Work
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('Skills')}
                  className={`${textColor} ${hoverColor} transition duration-300 ease-in-out`}
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('Experience')}
                  className={`${textColor} ${hoverColor} transition duration-300 ease-in-out`}
                >
                  Experience 
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wider ${subHeadingColor}`}>
              Contact:
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <span className={subHeadingColor}>Phone:</span>{' '}
                <a
                  href="tel:+919823129836"
                  className={`${textColor} ${hoverColor} transition duration-300 ease-in-out`}
                >
                  +91 9823129836
                </a>
              </li>
              <li className="break-all">
                <span className={subHeadingColor}>Email:</span>{' '}
                <a
                  href="mailto:imrajputyashraj@gmail.com"
                  className={`${textColor} ${hoverColor} transition duration-300 ease-in-out`}
                >
                  imrajputyashraj@gmail.com
                </a>
              </li>
              <li>
                <span className={subHeadingColor}>Instagram:</span>{' '}
                <a
                  href="https://instagram.com/imyashrajput_01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColor} ${hoverColor} transition duration-300 ease-in-out`}
                >
                  @imyashrajput_01
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start">
            <h4 className={`font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wider ${subHeadingColor}`}>
              Let’s Connect
            </h4>
            <p className={`mb-3 text-xs sm:text-sm ${textColor}`}>
              Open to freelance, collaborations & learning opportunities.
            </p>
            <a
              href="mailto:imrajputyashraj@gmail.com"
              className={`inline-block px-4 py-2 text-xs sm:text-sm font-medium rounded-lg ${emailBtnClass} shadow hover:shadow-lg transition duration-300 ease-in-out`}
            >
              Email Me                                                                        
             </a>
            <div className={`text-xs sm:text-sm leading-none mt-3 ${textColor}`}>
              <p>© {year} Yashraj. All rights reserved.</p>
              <p className="text-[10px] sm:text-xs">Built with React & Tailwind.</p>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
