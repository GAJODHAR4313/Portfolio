// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        swing: {
          '0%, 100%': { transform: 'rotate(4deg)' },
          '50%': { transform: 'rotate(-4deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        swing: 'swing 2s ease-in-out infinite',
        'fade-in': 'fadeIn 1.2s ease-out both',
      },
    },
  },
  plugins: [],
};
