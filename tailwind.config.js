module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{html,liquid,njk}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Helvetica", "sans-serif"],
    },
    extend: {
      colors: {
        blue: '#293377',
        orange: '#EA5B0C',
        green: '#00983A',
        purple: '#662483',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
