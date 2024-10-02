
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
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