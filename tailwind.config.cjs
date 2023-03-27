/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        open: "Open Sans, sans-serif",
      },
      boxShadow: {
        "3xl": "5px 0 10px 0",
      },
      colors: {
        "red-primary": "#f44336",
        "black-100": "rgb(0 0 0 / 3%)",
        "gray-25": "#f1f5f9",
        "gray-75": "#eeeeee",
      },
      keyframes: {
        changeColor: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        changeColor: "changeColor 0.8s linear alternate infinite",
      },
    },
  },
  plugins: [],
};
