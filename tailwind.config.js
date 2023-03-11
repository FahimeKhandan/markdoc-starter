/** @type {import('tailwindcss').Config} */
  
const {
  colors
} = require('./designTokens/colors.cjs');
const {
  fontSize
} = require('./designTokens/fontSize.cjs');
const {
  screens
} = require('./designTokens/screens.cjs');


module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
   
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      './node_modules/tw-elements/dist/js/**/*.js'
    ],
    theme: {
      colors,
      fontSize,
      screens,
      // fontFamily: {
      //   'yekan-bakh': ['yekan-bakh'],
      //   'yekan-faNum-bold': ['yekan-faNum-bold'],
      //   'yekan-faNum-regular': ['yekan-faNum-regular'],
      //   'IRANSans': ['IRANSans'],
      // }
    },
    plugins: [
      require('tw-elements/dist/plugin')
    ],
    // important: true,
  }
