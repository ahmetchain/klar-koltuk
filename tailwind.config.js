/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-100px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInDown: "fadeInDown 1s ease-out forwards",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      desktop_table: "1110px",
      xl: "1280px",
      desktop: "1460px",
      dev_desktop: "1600px",
    },  
  },
  plugins: [],
};
