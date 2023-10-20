/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: 15,
        screens: {
          xl: "1440px"
        }
      },
      fontSize:{
        lg: "clamp(18px,5cqw,24px)",
        "3xl": "clamp(72px,15cqw,250px)"
      },
      colors:{
        "light-gray": "#A3A3A3"
      },
      screens: {
        tablet: "820px",
      }
    },
  },
  plugins: [],
};
