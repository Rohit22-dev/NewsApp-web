/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          "0%,100%": {
            transform: "translateY(-3px)",
          },
        },
      },
      animation: {
        wiggle: "wiggle 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
