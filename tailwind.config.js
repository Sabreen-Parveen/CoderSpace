module.exports = {
  content: [
    "./pages/**/*.js",
    "./pages/*.js",
    "./components/**/*.js",
    "./components/*.js",
  ],
  theme: {
    extend: {
      height: {
        128: "32rem",
      },
      colors: {
        green: {
          DEFAULT: "#2c4444",
        },
        gray: {
          DEFAULT: "#1e1e1e",
        },
        csBlue: {
          DEFAULT: "#0070f3",
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
        blueGray: {
          DEFAULT: "#64748B",
        },
      },
    },
  },
  plugins: [],
};
