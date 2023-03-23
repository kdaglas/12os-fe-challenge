/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      spacing: {
        '9.5/12': '77.5%',
        '10.5/12': '87%',
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
      dark: "#181a1b",
    },
    // fontFamily: {
    //   sans: ['Graphik', 'sans-serif'],
    //   serif: ['Merriweather', 'serif'],
    // },
  },
  plugins: [],
}
