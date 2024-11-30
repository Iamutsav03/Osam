/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        typing: "typing 5s steps(45) 1s 1 normal both", // Typing animation with correct steps
        blinkCaret: "blinkCaret 0.75s step-end infinite", // Cursor blink
      },
      keyframes: {
        typing: {
          "0%": { width: "0%" }, // Start with 0% width
          "100%": { width: "100%" }, // End with 100% width
        },
        blinkCaret: {
          "50%": { borderColor: "transparent" }, // Make cursor blink
        },
      },
    },
  },
  plugins: [],
};
