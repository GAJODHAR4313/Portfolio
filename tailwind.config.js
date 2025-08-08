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
      },
      animation: {
        swing: 'swing 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};


