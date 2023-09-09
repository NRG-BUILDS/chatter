/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        fontBig: ['Nanum Myeongjo'],
        primary: ['Monomaniac One']
      },
      colors:{
        primary: {
          'light': '#dcfce7',
          'normal': '#22c55e',
        },
        txtColor: {
          'light': '#f9fafb',
          'dark': '#030712',
        },
        backdrop: {
          'light': '#ffffff',
          'offwhite': '#f9fafb',
          'dark': '#1e293b',
          'darker': '#0f172a',
        }
      }
    }
  },
  plugins: [],
}
