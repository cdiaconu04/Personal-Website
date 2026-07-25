/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          '3xl': '1850px',
        },
        fontFamily: {
          sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
          heading: ['"Roboto Slab"', 'serif'],
        },
      },
    },
    plugins: [],
  };
  
  