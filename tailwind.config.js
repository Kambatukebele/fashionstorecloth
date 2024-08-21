/** @type {import('tailwindcss').Config} */
import remToPxPlugin from "tailwindcss-rem-to-px";
module.exports = {
  content: ["./**/*.{json,js,liquid}"],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        }
      },
      keyframes: {
        'slide-out': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'slide-out': 'slide-out 1s ease forwards',
        'slide-in': 'slide-in 1s ease forwards',
      },
    },
  },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};