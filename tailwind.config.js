/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // ✅ REQUIRED for dark mode
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        // Primary Trading Colors
        "trading-blue": "#2563EB",
        "trading-green": "#22C55E",
        "trading-cyan": "#06B6D4",
        "trading-navy": "#1E293B",

        // Accent Colors
        "trading-orange": "#F97316",
        "trading-violet": "#8B5CF6",
        "trading-coral": "#EF4444",

        // UI Colors
        "trading-light": "#F8FAFC",
        "trading-card": "#FFFFFF",
        "trading-border": "#E2E8F0",
        "trading-dark": "#475569",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 25s linear infinite",
        "price-up": "priceUp 0.5s ease-out",
        "price-down": "priceDown 0.5s ease-out",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        priceUp: {
          "0%": {
            color: "#22C55E",
            transform: "translateY(-5px)",
            opacity: 0,
          },
          "100%": {
            color: "#22C55E",
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        priceDown: {
          "0%": {
            color: "#EF4444",
            transform: "translateY(5px)",
            opacity: 0,
          },
          "100%": {
            color: "#EF4444",
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
