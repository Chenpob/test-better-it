/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}','./components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors:{
        menu:{
          1:'#1b7ecf',
          2:'#fda750',
          3:'#558f8f',
          4:'#8b5cbc',
          5:'#73bc5b',
          6:'#df60be',
          7:'#b8944d'
        }
      }
    },
  },
  plugins: [],
}

