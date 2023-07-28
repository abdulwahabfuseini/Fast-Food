/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Header: "#5F696E",
        Text: "#00030f",
        Button: "#2ca58d",
        transparents: "rgba(0,0,0,0.92)",
        Transparent: "rgba(0,0,0,0.5)",
        main: "#FFFDD1",
        submain: "#FFFEF2",
        dry: "#FFFBF1",
        star: "#FFB000",
        Text: "#080A1A",
        border: "#4b5563",
        dryGray: "#E0D5D5",
        glass: "rgb(255, 255,255, 0.5)",
      }
    },
  },
  plugins: [
    require("@shrutibalasa/tailwind-grid-auto-fit")
  ],
}




