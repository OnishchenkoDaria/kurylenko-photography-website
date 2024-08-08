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
        planBasePhoto: 'url("/img/base-plan.png")'
      }
    },
  },
  plugins: [],
}