/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "search-bg-color-dark": "#202327",
        "search-bg-color-light": "#EFF3F4",
        "search-text-color": "#71767B",
        "twitter-blue": "#1B9BF0",
        "chelsea-blue": "#014794",
        "liverpool-red": "#C80F2E",
      },
      screens: {
        "ms": "320px",
        "mlg":"425px",
        "mmd":"375px",
        "max-mmd":"375px",
      },
    },
  },
  plugins: [],
};
