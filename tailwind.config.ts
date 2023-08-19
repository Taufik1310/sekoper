const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/renderer/**/*.{js,jsx,ts,tsx,ejs}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        sky: colors.sky,
        cyan: colors.cyan,
      },
    },
    animation: {
      'ping-slow-1': 'ping 1s linear infinite',
      'ping-slow-2': 'ping 2s linear infinite',
      'ping-slow-3': 'ping 3s linear infinite',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
