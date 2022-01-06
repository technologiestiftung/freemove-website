module.exports = {
  mode: "jit",
  content: ["./src/**/*.{md,html,liquid,njk}"],
  theme: {
    fontFamily: {
      sans: ["Saira SemiCondensed", "sans-serif"],
    },
    extend: {
      colors: {
        blue: "#293377",
        orange: "#EA5B0C",
        green: "#00983A",
        purple: "#662483",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
