/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#008000',
        blue: '#ADD8E6',
        yellow: '#F5F0B3',
        lightGreen: '#90EE90',
      },
    },
  },
  plugins: [],
}
