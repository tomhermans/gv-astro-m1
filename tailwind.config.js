const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  // content: [
  //   "./public/**/*.html",
  //   "./src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}",
  // ],
  // ...other options come here
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      green: {
        100: "#ecf3e7",
        200: "#cee3c0",
        300: "#b2d59a",
        400: "#91c86f",
        500: "#72be46",
        600: "#599e33",
        700: "#3e7722",
        800: "#285115",
        900: "#112509",
      },
    },
    extend: {
      colors: {
        brown: {
          50: "#FCF3F0",
          100: "#f0e4e0",
          200: "#dcc5bc",
          300: "#c9a99c",
          400: "#b38c7a",
          500: "#9c735e",
          600: "#7a5d4d",
          700: "#564438",
          800: "#372c25",
          900: "#15110f",
        },
        gvgreen: {
          100: "#ecf3e7",
          200: "#cee3c0",
          300: "#b2d59a",
          400: "#91c86f",
          500: "#72be46",
          600: "#599e33",
          700: "#3e7722",
          800: "#285115",
          900: "#112509",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
