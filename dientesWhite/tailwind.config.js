/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        scaleUpDown: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.5)' }, 
        },
      },
      animation: {
        scalePulse: 'scaleUpDown 2s infinite ease-in-out', 
      },
    },
  },
  plugins: [],
}