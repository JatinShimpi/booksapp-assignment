/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ashGray: "#9FA29B", // Define your custom colors here
        mauve: "#F2BEFC",
        flame: "#EC4E20",
        plum: "#8E518D",
        RaisinBlack: "#272838",
        prussianBlue: "#132F45",
        Brown: "#A3320B",
        
      },
    },
  },
  plugins: [],
};

