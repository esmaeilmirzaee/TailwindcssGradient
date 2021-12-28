module.exports = {
  content: [    "./index.html",    "./src/**/*.{vue,js,ts,jsx,tsx}",  ],
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
        tilt: "tilt 10s infinite linear",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)"
          },
          "25%": {
            transform: "rotate(2deg)"
          },
          "75%": {
            transform: "rotate(-2deg)"
          }
        },
        blob: {
          "0%": {
            transform: "translate(0, 0) scale(1)"
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)"
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)"
          },
          "100%": {
            transform: "translate(0, 0) scale(1)"
          }
        }
      }
    },
  },
  plugins: [],
}
