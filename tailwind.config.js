/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        peachy: "#7fd8be",
        lightpurple: "#dac4f7",
        darkGreyishBlue: "hsl(210, 10%, 33%)",
        grayishblue: "hsl(201, 11%, 66%)",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
  },
  plugins: [],
};
