/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#00eaff",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(135deg, #0b1120 0%, #0f172a 50%, #1e293b 100%)",
        "gradient-primary":
          "linear-gradient(90deg, #2563eb 0%, #06b6d4 100%)",
      },
      boxShadow: {
        lgx: "0 4px 15px rgba(0,0,0,0.3)",
        xlx: "0 8px 25px rgba(0,0,0,0.4)",
      },
      keyframes: {
        moveStarsUp: {
          from: { backgroundPosition: "0 0" },
          to: { backgroundPosition: "0 -1000px" },
        },
        slideInUp: {
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          to: { opacity: "1" },
        },
        glow: {
  "0%,100%": { boxShadow: "0 0 5px rgba(34,211,238,0.6)" },
  "50%": {
    boxShadow:
      "0 0 20px rgba(34,211,238,1), 0 0 30px rgba(34,211,238,0.8)",
  },
},

        float: {
          "0%,100%": { transform: "translateY(0) rotate(0)" },
          "33%": { transform: "translateY(-20px) rotate(2deg)" },
          "66%": { transform: "translateY(-10px) rotate(-2deg)" },
        },
        bounce2: {
          "0%,20%,50%,80%,100%": {
            transform: "translateX(-50%) translateY(0)",
          },
          "40%": { transform: "translateX(-50%) translateY(-10px)" },
          "60%": { transform: "translateX(-50%) translateY(-5px)" },
        },
      },
      animation: {
        moveStarsUp: "moveStarsUp 40s linear infinite",
        slideInUp: "slideInUp 0.8s ease forwards",
        fadeIn: "fadeIn 1s ease forwards",
        glow: "glow 3s ease-in-out infinite",

        float: "float 6s ease-in-out infinite",
        bounce2: "bounce2 2s infinite",
      },
    },
  },
  plugins: [],
};
