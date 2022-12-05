/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.{js,jsx,ts,tsx}",
    "./src/features/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    // MEDIA QUERIES
    screens: {
      smOnly: { max: "767.98px" },
      sm: "320px",
      mdOnly: { min: "768px", max: "1279.98px" },
      md: "768px",
      xl: "1280px",
      notXl: { max: "1279.98px" },
    },
    borderRadius: {
      none: "0",
      DEFAULT: "0.5rem",
    },

    // CONTAINER
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "0",
        md: "0.75rem",
        xl: "6rem",
      },
    },
    extend: {
      fontFamily: {
        adigiana: ["Adigiana"],
      },
    },
  },
  plugins: ["gatsby-plugin-postcss"],
};
