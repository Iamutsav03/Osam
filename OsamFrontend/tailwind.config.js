/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include paths to your files
  ],
  theme: {
    extend: {
      animation: {
        shine: "shine 1s ease-in-out infinite", // Keeps original shine effect
        borderShine: "borderShine 1.5s ease-in-out infinite", // New shimmer animation for the border
      },
      keyframes: {
        shine: {
          "0%": {
            backgroundPosition: "-200% 0",
          },
          "100%": {
            backgroundPosition: "200% 0",
          },
        },
        borderShine: {
          "0%": {
            borderColor: "transparent", // Start with no visible border
            boxShadow: "0 0 5px 4px rgba(255, 255, 255, 0.3)", // Subtle glow on all sides
          },
          "25%": {
            borderColor: "#ffffff", // Shiny white border in the middle
            boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.2)", // Bright glow effect
          },
          "50%": {
            borderColor: "#ffffff", // Shiny white border in the middle
            boxShadow: "0 0 15px 5px rgba(255, 255, 255, 0.6)", // Bright glow effect
          },
          "75%": {
            borderColor: "#ffffff", // Shiny white border in the middle
            boxShadow: "0 0 10px 5px rgba(255, 255, 255, 0.2)", // Bright glow effect
          },
          "100%": {
            borderColor: "transparent", // End with no visible border
            boxShadow: "0 0 5px 4px rgba(255, 255, 255, 0.3)", // Subtle glow on all sides
          },
        },
      },
    },
  },
  plugins: [],
};
