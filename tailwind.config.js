/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      xs: "414px",
      sm: "790px",
      md: "960px",
      lg: "1130px",
    },
    extend: {
      backgroundColor: {
        footer: "rgb(45, 43, 69)",
        customGray: "rgb(249, 249, 249)",
        btnsBgColor: " rgb(255, 177, 42)",
      },
      borderColor:{
        borderColor:"rgb(255, 177, 42)"
      }
    },
  },
  plugins: [],
};
