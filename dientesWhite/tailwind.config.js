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
        bounce: { '0%, 100%': { transform: 'translateY(0)' }, 
                  '50%': { transform: 'translateY(-10px)' },
              }
      },
      animation: {
        scalePulse: 'scaleUpDown 2s infinite ease-in-out', 
         bounce: 'bounce 1.7s ease-in-out infinite',
      },

    },
  },
  plugins: [],
}
 