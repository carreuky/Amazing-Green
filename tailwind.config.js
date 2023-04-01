/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ale': ["Alegreya Sans SC", "sans-serif"],
        'playfair':['Playfair Display', 'serif']
      },
    },
  },
  plugins: [],
}