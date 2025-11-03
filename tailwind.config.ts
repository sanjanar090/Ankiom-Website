extend: {
  keyframes: {
    moveStarsUp: {
      "0%": { backgroundPosition: "0 0" },
      "100%": { backgroundPosition: "0 -1000px" },
    },
    slideInUp: {
      to: { opacity: "1", transform: "translateY(0)" },
      from: { opacity: "0", transform: "translateY(30px)" },
    },
    fadeIn: { to: { opacity: "1" } },
    float: {
      "0%,100%": { transform: "translateY(0) rotate(0deg)" },
      "33%": { transform: "translateY(-20px) rotate(2deg)" },
      "66%": { transform: "translateY(-10px) rotate(-2deg)" },
    },
    pulse: {
      "0%,100%": { opacity: "0.7" },
      "50%": { opacity: "1" },
    },
    glow: {
      "0%,100%": { transform: "scale(1)", opacity: "0.7" },
      "50%": { transform: "scale(1.2)", opacity: "1" },
    },
  },
  animation: {
    moveStarsUp: "moveStarsUp 40s linear infinite",
    slideInUp: "slideInUp 0.8s ease forwards",
    fadeIn: "fadeIn 1s ease forwards",
    float: "float 6s ease-in-out infinite",
    pulse: "pulse 2s infinite",
    glow: "glow 3s infinite",
  },
},
