/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        forest: {
          50: "#eef7f0",
          100: "#d9ebdd",
          200: "#b9d9c1",
          300: "#8fba9c",
          400: "#72a882",
          500: "#5e9671",
          600: "#477a59",
          700: "#365f46",
          800: "#294a38",
          900: "#1c3428",
        },

        sand: {
          50: "#fdfaf3",
          100: "#f6efdf",
          200: "#ede0c5",
        },

        gold: {
          300: "#e8cb79",
          400: "#dfbb54",
          500: "#d4a93c",
          600: "#b88a28",
          700: "#91691e",
        },
      },

      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },

      backgroundImage: {
        "hero-overlay":
          "linear-gradient(90deg, rgba(20,52,40,0.92) 0%, rgba(20,52,40,0.68) 55%, rgba(20,52,40,0.30) 100%)",
      },

      keyframes: {
        slowZoom: {
          "0%": {
            transform: "scale(1)",
          },
          "100%": {
            transform: "scale(1.08)",
          },
        },

        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },

        fadeUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },

      animation: {
        "slow-zoom": "slowZoom 20s ease-in-out infinite alternate",
        "fade-in": "fadeIn 0.8s ease-out both",
        "fade-up": "fadeUp 0.8s ease-out both",
      },
    },
  },

  plugins: [],
}
