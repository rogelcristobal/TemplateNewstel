/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "lexend":["Lexend",'sans-serif'],
        "plus":["Plus Jakarta Sans",'sans-serif']
      }
    },
  },
  plugins: [],
}