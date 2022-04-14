const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],

  theme: {
    container: {
      // maxWidth: '100%',
      padding: {
        sm: '1rem',
        lg: '4rem',
        xl: '5rem',
      },
      extend: {
        fontFamily: {
          sans: [
            'Roboto',
            'Arial',
            'sans-serif',
            ...defaultTheme.fontFamily.sans,
          ],
        },
        letterSpacing: {},
      },
    },
  },
  plugins: [],
}
