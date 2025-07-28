import React from 'react';

const Footer = ({ theme }) => {
  const year = new Date().getFullYear();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const bgColor = theme === 'dark' ? 'bg-[#060026]' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-[#A1A1A1]' : 'text-[#2D2D2D]';
  const headingColor = theme === 'dark' ? 'text-white' : 'text-[#2D2D2D]';
  const accent = theme === 'dark' ? 'from-[#651AAC] to-[#FFD86D]' : 'from-[#6C63FF] to-[#FF6584]';

  return (
    <footer
      id="Contact"
      className={`relative overflow-hidden ${bgColor} border-t border-gray-300 text-sm`}
    >
      {/* Decorative blurred gradient */}
      <div
        className={`pointer-events-none absolute -top-16 -right-16 w-56 h-56 bg-gradient-to-br ${accent} opacity-20 blur-[100px]`}
      />
      <div
        className={`pointer-events-none absolute -bottom-16 -left-16 w-56 h-56 bg-gradient-to-tr ${accent} opacity-10 blur-[90px]`}
      />

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
            <h4
              className={`font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wider ${headingColor}`}
            >
              Navigate
            </h4>
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => handleScroll('Services')}
                  className={`${textColor} hover:text-[#6C63FF]`}
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('Skills')}
                  className={`${textColor} hover:text-[#6C63FF]`}
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleScroll('Experience')}
                  className={`${textColor} hover:text-[#6C63FF]`}
                >
                  Experience
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className={`font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wider ${headingColor}`}
            >
              Contact
            </h4>
            <ul className="space-y-1 text-xs sm:text-sm">
              <li>
                <span className="text-[#6C63FF]">Phone:</span>{' '}
                <a
                  href="tel:+919823129836"
                  className={`${textColor} hover:text-[#6C63FF] transition`}
                >
                  +91 9823129836
                </a>
              </li>
              <li className="break-all">
                <span className="text-[#6C63FF]">Email:</span>{' '}
                <a
                  href="mailto:imrajputyashraj@gmail.com"
                  className={`${textColor} hover:text-[#6C63FF] transition`}
                >
                  imrajputyashraj@gmail.com
                </a>
              </li>
              <li>
                <span className="text-[#6C63FF]">Instagram:</span>{' '}
                <a
                  href="https://instagram.com/imyashrajput_01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${textColor} hover:text-[#6C63FF] transition`}
                >
                  @imyashrajput_01
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-start">
            <h4
              className={`font-semibold mb-2 text-xs sm:text-sm uppercase tracking-wider ${headingColor}`}
            >
              Let’s Connect
            </h4>
            <p className={`mb-3 text-xs sm:text-sm ${textColor}`}>
              Open to freelance, collaborations & learning opportunities.
            </p>
            <a
              href="mailto:imrajputyashraj@gmail.com"
              className={`inline-block px-4 py-2 text-xs sm:text-sm font-medium rounded-lg bg-gradient-to-r ${accent} text-white shadow hover:shadow-lg transition`}
            >
              Email Me
            </a>
            {/* Bottom Section */}
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
