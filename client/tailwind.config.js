/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        defaultFont: ['Instrument Sans', 'sans-serif'],
      },
      colors: {
        'dark-grey': 'var(--dark-grey, #333)',
        customGrey: '#737373',
        customPurple: '#633CFF',
        lightGrey: '#FAFAFA',
        errorRed: '#FF3939',
      },
    },
  },
  plugins: [],
};
