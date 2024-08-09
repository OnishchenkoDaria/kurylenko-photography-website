/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      listStyleImage: {
        check: 'url("/img/check.svg")',
      },
      backgroundImage: {
        planBasicPhoto: 'url("/img/base-plan.png")',
        planArtisticPhoto: 'url("/img/artistic-plan.png")'
      }
    },
  },
  plugins: [],
}