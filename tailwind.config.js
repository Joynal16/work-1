/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        rotating: {
          'from': { transform: 'perspective(1000px) rotateX(-15deg) rotateY(0)' },
          'to': { transform: 'perspective(1000px) rotateX(-15deg) rotateY(1turn)' },
        }
      },
      animation: {
        rotating: 'rotating 20s linear infinite',
      }
    },
  },
  plugins: [],
}