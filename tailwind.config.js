module.exports = {
  content: [
    "./pages/**/*.js",
    "./pages/*.js",
    "./components/**/*.js",
    "./components/*.js",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: "#2c4444",
        },
        gray: {
          DEFAULT: "#1e1e1e",
        },
        lightGray: {
          DEFAULT: "#4c565a",
        },
        lightBlue: {
          DEFAULT: "#3366FF",
        },
        hoverGreen: {
          DEFAULT: "#243737",
        },
      },
    },
  },
  plugins: [],
};