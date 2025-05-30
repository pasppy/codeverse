/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}",
    "./public/javascripts/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-bg': "url('/public/images/bg-gradient.jpg')",
      },
    },
  },
  plugins: [],
}
