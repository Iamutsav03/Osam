/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
theme: {
  extend: {
    keyframes: {
      marquee: {
        from: { transform: "translateX(100%)" },
        to: { transform: "translateX(-100%)" },
      },
    },
    animation: {
      marquee: "marquee 10s linear infinite",
    },
  },
},
  plugins: [],
};
