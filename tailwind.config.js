/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'mainFont': ['Orbitron', 'monospace'],
        'Chakra': ['Chakra Petch', 'sans-serif']
      }
    },
  },
  plugins: [],
}