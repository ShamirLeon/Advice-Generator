/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        cyanC:{
          300: '#cee3e9',
        },
        neon:{
          300: '#52ffa8',
        },
        dark:{
          400: '#4e5d73',
          500: '#323a49',
          600: '#1f2632',

        }
      },
      fontFamily:{
        'manrope': ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
