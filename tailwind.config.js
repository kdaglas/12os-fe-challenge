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
        '18': '4.3rem',
        '97': '600px'
      },
      backgroundImage: {
        'hero': 'url(../src/assets/images/bg3.jpg)'
      }
    },
    colors: {
      primary: "#eb2429",
      gray: colors.gray,
      white: colors.white,
      dark: "#181a1b",
    },
  },
  plugins: [],
}
