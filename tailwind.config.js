/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        rgba: "rgba(255,255,255,0.3)",
      },
      screens: {
        mobile: "320px",
        md: "560px",
      },
    },
  },
  plugins: [],
};
