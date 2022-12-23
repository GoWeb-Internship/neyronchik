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
      boxShadow: {
        "insta-button":
          "0px 20px 25px -5px rgba(108, 0, 0, 0.1), 0px 8px 10px -6px rgba(92, 0, 0, 0.1), inset -4px -4px 12px rgba(255, 255, 255, 0.25), inset 4px 4px 12px rgba(255, 255, 255, 0.25)", // class="shadow-insta-button"
        "insta-card":
          "0px 25px 50px -12px rgba(0, 0, 0, 0.15), inset -5px -4px 13px #DAE9EF, inset 5px 4px 13px #DAE9EF", // class="shadow-insta-card"
        "directions-card":
          "0px 25px 50px -12px rgba(11, 87, 121, 0.2), inset -5px -4px 25px rgba(255, 255, 255, 0.5), inset 5px 4px 25px rgba(255, 255, 255, 0.5)", // class="shadow-directions-card"
        "tab-selected":
          "0px 0px 19px 5px rgba(52, 101, 123, 0.15), inset -20px -20px 40px rgba(255, 255, 255, 0.2), inset 20px 20px 40px rgba(255, 255, 255, 0.2)", // class="shadow-tab-selected"
      },
      // TEXT COLORS
      textColor: {
        "insta-white": "#FAFAFA", // class="text-insta-white"
        "insta-black": "#171717", // class="text-insta-black"
        "directions-white": "#FAFAFA", // class="text-directions-white"
        "directions-black": "#171717", // class="text-directions-black"
      },
      // BG-COLORS
      backgroundColor: {
        "insta-card": "rgba(253, 253, 253, 0.3)", // class="bg-insta-card"
        "directions-card": "rgba(250, 250, 250, 0.4)", // class="bg-directions-card"
      },
      textShadow: {
        small: "2px 1px 0px #171717",
        medium: "2px 2px 0px #171717",
      },
    },
    plugins: ["gatsby-plugin-postcss"],
  },
};
