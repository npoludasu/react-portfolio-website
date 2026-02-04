/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-content": "#A7A7A7",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-heading": "#1f2428",
      },
    },
  },
  plugins: [],
};
