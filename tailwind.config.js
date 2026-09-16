/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        dusk: {
          950: '#12181B',
          900: '#161D20',
          800: '#1E2629',
          700: '#2A3438',
        },
        parchment: {
          50: '#FAF8F3',
          100: '#F4F0E6',
          200: '#EAE3D2',
        },
        savanna: {
          400: '#E0AE52',
          500: '#D19A38',
          600: '#B37F27',
        },
        jacaranda: {
          400: '#8B7BB8',
          500: '#6E5C9E',
          600: '#584A80',
        },
        acacia: {
          400: '#5C7A63',
          500: '#3F5A47',
          600: '#2F4538',
        },
        clay: {
          500: '#B4623F',
          600: '#96502F',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Manrope"', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(18,24,27,0.06), 0 8px 24px -12px rgba(18,24,27,0.25)',
      },
      borderRadius: {
        card: '22px',
        pill: '999px',
      },
    },
  },
  plugins: [],
}
