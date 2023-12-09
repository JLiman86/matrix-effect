/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      primary: "Saira",
    },
    extend: {
      animation: {
        matrixEffect: "matrixEffect 5s linear infinite",
      },
      keyframes: {
        matrixEffect: {
          "0%": { color: "white" },
          "20%": { color: "green" },
          "50%,100%": { color: "black" },
        },
      },
    },
  },
  plugins: [],
};
