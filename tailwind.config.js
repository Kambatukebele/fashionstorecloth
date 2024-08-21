/** @type {import('tailwindcss').Config} */
import remToPxPlugin from "tailwindcss-rem-to-px";
module.exports = {
  content: ["./**/*.{json,js,liquid}"],
  theme: {
    extend: {},
  },
  plugins: [
    remToPxPlugin({
      baseFontSize: 16,
    }),
  ],
};