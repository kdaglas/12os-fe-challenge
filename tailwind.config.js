/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero': 'url(../src/assets/images/bg3.jpg)'
      }
    },
    colors: {
      primary: "#eb2429",
      gray: colors.gray,
      white: colors.white
    }
  },
  plugins: [],
}
