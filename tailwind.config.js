/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    require('tailwind-scrollbar'),
  ],
  theme: {
    extend: {
      colors: {
        'search-bg-color-dark': '#202327',
        'search-bg-color-light': '#EFF3F4',
        'search-text-color': '#71767B',
        'twitter-blue': '#1B9BF0',
        'chelsea-blue': '#014794',
        'liverpool-red': '#C80F2E',
        'lal-purple': '#552482',
        'lal-text-purple': '#AF9CC3',
        'hover-grey': '#191A1A',
        'list-hover': '#040404',
        'widget-border': '#2F3336',
      },
      screens: {
        ms: '320px',
        mlg: '425px',
        mmd: '375px',
        'max-mmd': '375px',
        'lg-ex1':'1071px'
      },
      boxShadow: {
        '3xl': 'rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px',
        '3xl-light':'rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px',
      }
    },
  },
};
