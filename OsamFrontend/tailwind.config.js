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
        glowBlink: "glow 3s ease-in-out infinite",  // Combined glow and blink animation
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
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 2px 1.5px rgba(0, 128, 0, 0.8)", // Glow at start and end
            backgroundColor: "rgba(34, 197, 94, 1)", // bg-green-600
            opacity: 1, // Fully visible
          },
          "50%": {
            boxShadow: "0 0 0.04px 0.01px rgba(0, 255, 153, 1)", // Brightest glow
            backgroundColor: "rgba(34, 197, 94, 0.8)", // Slightly faded green
            opacity: 1, // Slight fade
          },
        },
      },
    },
  },
  plugins: [],
};
