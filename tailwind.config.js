/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        screens: {
          sm: "426px",
          md: "768px",
          lg: "976px",
          xl: "1440px",
        },
        colors: {
          ocupacity: "#21252980",
          primary: "#2C1471",
          "primary-dark": "#23045A",
        },
        width: {
          90: "90%",
        },
      },
    },
  },
  plugins: [],
};
