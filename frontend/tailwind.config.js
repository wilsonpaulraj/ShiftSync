/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#96ADDB",
        "charcoal-gray": "#535455",
        "soft-silver": "#D1D2D4",
        "navy-blue": "#3A4355",
        "pewter-gray": "#9F9FA1",
        "dark-text": "#193441",
        "light-text": "#4c6379",
        "dark-gray": "#91AAB4",
        "light-gray": "#CBDBD7",
        white: "#FCFFF5",
      },
      height: {
        128: "32rem",
        144: "36rem",
      },
      width: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
