/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eeff',
          100: '#ccdcff',
          200: '#99b9ff',
          300: '#6695ff',
          400: '#3372ff',
          500: '#0F52BA', // Primary color
          600: '#0c42a9',
          700: '#093178',
          800: '#062154',
          900: '#03102a',
        },
        secondary: {
          50: '#e6f7f7',
          100: '#ccefef',
          200: '#99dede',
          300: '#66cecd',
          400: '#33bdbc',
          500: '#05A3A3', // Secondary color
          600: '#048282',
          700: '#036261',
          800: '#024141',
          900: '#012020',
        },
        accent: {
          50: '#fff2ed',
          100: '#ffe5da',
          200: '#ffcbb5',
          300: '#ffb290',
          400: '#ff986b',
          500: '#FF7F50', // Accent color
          600: '#ff5a1f',
          700: '#cc4816',
          800: '#99360f',
          900: '#661f09',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-in-out',
        'slide-down': 'slideDown 0.5s ease-in-out',
        'blob': 'blob 7s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.1)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.9)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};