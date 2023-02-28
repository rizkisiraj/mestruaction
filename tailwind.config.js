/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ["./src/**/*.{html,js,jsx}"],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        'card':  '0px 2px 30px 5px rgba(0, 0, 0, 0.09)'
      }
    },
  },
  plugins: [],
}
