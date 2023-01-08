/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'wave-pattern': 'url(img/wave-white.png)'
      })
    },
  },
  plugins: [],
}
