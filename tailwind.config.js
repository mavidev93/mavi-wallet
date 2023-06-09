/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require("tailwindcss/defaultTheme");

// const colors = {
//   ...defaultColors,
//   // ...{
//   //   "custom-yellow": {
//   //     500: "#EDAE0A",
//   //   },
//   },
// };

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // colors: colors,
  },
  plugins: [],
};
