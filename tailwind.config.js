/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          // Paleta oficial (master_safe/assets/css/styles.css)
          green: '#0F3026',
          'green-dark': '#0A1F19',
          'green-mid': '#16432F',
          light: '#f4f4f4',
          grey: '#616161',
          line: '#d8d8d8',
          error: '#7a1f1f'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};