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
    extend: {
      colors: {
        primary: "#06b6d4",
        secondary: " #064fd4",
        anger: " #d42406",
      },
    },
    // extend: {
    //   colors: {
    //     "primary-color": "var(--primary-color)",
    //     "secondary-color": "var(--secondary-color)",
    //     "danger-color": "var(--danger-color)",
    //   },
    // },
  },
  plugins: [],
};
