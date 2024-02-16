/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      quantico: '"Quantico", sans-serif',
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      primary: "#FF6363",
      yellow: "#FAFF00",
      secondary: {
        100: "#E2E2D5",
        200: "#888883",
      },
    },
    extend: {},
  },
  plugins: [],
};
