/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
        '9.5/12': '77.5%',
        '18': '4.3rem'
      },
      backgroundImage: {
        // 'hero': 'linear-gradient(to right, #00000036, #0000007a), url(../src/assets/images/bg3.jpg)',
        'hero': 'url(../src/assets/images/bg3.jpg)'
      }
    },
    colors: {
      primary: "#eb2429",
      gray: colors.gray,
      white: colors.white,
      red: colors.red,
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
  },
  plugins: [],
}
