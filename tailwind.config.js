/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mob: "400px",
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1200px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1920px",
        // => @media (min-width: 1536px) { ... }
      },
      colors: {
        brand: "#8257E5",
        brandHover: "#996DFF",
        textOnBrand: "#FFFFFF",

        surfacePrimary: "#18181b",
        surfaceSecondary: "#27272a",
        surfaceSecondaryHover: "#3f3f46",
        stroke: "#52525b",

        backGroundButton: "#FCDA2A",

        backGroundGradient1: "#6229b9",
        backGroundGradient2: "#424141",

        textPrimary: "#f4f4f5",
        textSecondary: "#a1a1aa",
        textLinkColor: "#FCDA2A",
        textOnTooltip: "#27272a",

        ocupacity: "#21252980",
        primary: "#2C1471",
        "primary-dark": "#23045A",
        "primary-ligth": "#A578F4",
        "background-color-cloudy": "rgba(0, 0, 0, 0.75)",
      },
      fontFamily: {
        inter: ["Inter", "ui-monospace", "SFMono-Regular"],
        bebas: ["Bebas Neue", "ui-monospace", "SFMono-Regular"],
      },
      fontSize: {
        title1: "2.5rem",
        title2: "1.5rem",
        headline: "0.750rem",
        headline2: "1rem",
        headline3: "0.875rem",
        placeholder: "1rem",
        size: "1.1rem",
      },
      fontWeight: {
        bold: "700",
        semibold: "600",
        medium: "500",
        regular: "400",
      },
      fontHeight: {
        small: "17px",
        medium: "500",
        large: "400",
      },
      width: {
        90: "90%",
      },
      height: {
        80: "80%",
      },
    },
  },
  plugins: [],
};
