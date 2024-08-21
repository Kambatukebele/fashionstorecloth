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
      }
    },
  },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};