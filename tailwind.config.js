/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Epilogue", "Open Sans", "sans-serif"],
    },
    extend: {
      colors: {
        cream: "#FFFCDD",
        offWhite: "#FEFCED",
        drk: "#211311",
        textColor: "#333",
        carrot: "#F18F01",
        ocean: "#048BA8",
        forrest: "#4F9D69",
        warning: "#CC3F0C",
        rosewood: "#C65B7C",
        selective: "#FCBA04",
      },
      fontFamily: {
        titleFont: ["Imprima", "sans-serif"],
      },
    },
  },
  plugins: [],
};
