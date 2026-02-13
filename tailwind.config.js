/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00B8DE',
        secondary: '#ffffff',
        background: '#f3f4f6',
      },
    },
  },
  plugins: [],
}
