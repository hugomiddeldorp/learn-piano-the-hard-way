/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ["./content/**/*.{html,js}", "./layouts/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightgray: '#D9D9D9',
        customblue: {
          400: '#0063C8',
          900: '#081A46'
        },
      },
      fontFamily: {
        'sans': ['Karla', 'ui-sans-serif', 'system-ui'],
        'serif': ['Crimson Text', 'ui-serif'],
        'display': ['Marcellus', 'ui-serif'],
      },
      spacing: {
        '88': '22rem',
      }
    },
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h2': {
          fontStyle: "italic",
          fontSize: theme('fontSize.3xl'),
          marginBottom: theme('spacing.4'),
          marginTop: theme('spacing.8'),
        },
        'h3': {
          fontStyle: "italic",
          fontSize: theme('fontSize.2xl'),
          marginBottom: theme('spacing.3'),
          marginTop: theme('spacing.5'),
        },
      })
    })
  ],
};

