/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        shore: {
          navy: "#0c1f33",
          deep: "#132c47",
          teal: "#1fb6a8",
          aqua: "#5fd8cf",
          sand: "#f4ecdd",
          shell: "#fbf7ef",
          coral: "#ff6b5c",
          ink: "#0a1626",
        },
      },
      fontFamily: {
        display: ["'Fraunces'", "Georgia", "serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 12px 30px -12px rgba(12, 31, 51, 0.25)",
        "card-hover": "0 22px 45px -16px rgba(12, 31, 51, 0.35)",
      },
      backgroundImage: {
        "shore-gradient":
          "linear-gradient(135deg, #0c1f33 0%, #132c47 45%, #1fb6a8 130%)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
