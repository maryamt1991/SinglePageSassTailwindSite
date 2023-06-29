/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1280px",
      },
    },
    extend: {
      colors: {
        w_color: "#FFFFF",
        g_color: "#2ccdac",
        y_color: "#f0b114",
        r_color: "#b00a0c",
        hover_color: "#61ce70",
      },
      screens: {
        res_menu: {
          max: "990px",
        },
        com: { min: "768px" },
        mob: { max: "400px" },
      },
    },
  },
  plugins: [],
};
