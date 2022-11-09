/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/templates/component/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    // MEDIA QUERIES
    screens: {
      smOnly: { max: "767.98px" },
      sm: "375px",
      mdOnly: { min: "768px", max: "1439.98px" },
      md: "768px",
      xl: "1440px",
      notXl: { max: "1439.98px" },
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
        sm: "1.25rem",
        md: "2rem",
        xl: "2.5rem",
      },
    },
    extend: {},
  },
  plugins: [],
};
