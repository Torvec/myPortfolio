/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      stone: colors.stone,
      orange: colors.orange,
      amber: colors.amber,
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
    extend: {
      // colors: {
      //   color1: "rgba(var(--color1)",
      // },
      backgroundImage: {
        "hero-pattern": 'url("/hero/bg_grid_64x64.png")',
      },
    },
  },
  plugins: [],
};
