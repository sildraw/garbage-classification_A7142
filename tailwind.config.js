/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        // ????? - ??????
        forest: {
          DEFAULT: "#2D5F3F",
          50: "#F0F5F1",
          100: "#DBE8DF",
          200: "#B7D1BF",
          300: "#8FB39C",
          400: "#6B9778",
          500: "#4D7B5A",
          600: "#3A6248",
          700: "#2D5F3F",
          800: "#1F4A2E",
          900: "#143522",
        },
        sprout: {
          DEFAULT: "#7BC47F",
          light: "#A8DBAB",
          dark: "#5AA85F",
        },
        amber: {
          DEFAULT: "#F4C430",
          light: "#F8D873",
        },
        cream: "#F8F6F0",
        charcoal: "#1A2E1A",
        // ?????????
        recyclable: "#1E88E5",
        hazardous: "#E53935",
        kitchen: "#43A047",
        other: "#757575",
      },
      fontFamily: {
        serif: ['"Noto Serif SC"', "Georgia", "serif"],
        sans: ['"Noto Sans SC"', "system-ui", "sans-serif"],
        mono: ['"Space Grotesk"', "monospace"],
      },
      backgroundImage: {
        "leaf-texture":
          "radial-gradient(circle at 20% 30%, rgba(123, 196, 127, 0.08) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(45, 95, 63, 0.06) 0%, transparent 40%)",
        "grid-pattern":
          "linear-gradient(rgba(45, 95, 63, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45, 95, 63, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "spin-slow": "spin 3s linear infinite",
        "fade-up": "fadeUp 0.6s ease-out forwards",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        soft: "0 4px 20px rgba(45, 95, 63, 0.08)",
        card: "0 8px 30px rgba(45, 95, 63, 0.12)",
        "card-hover": "0 16px 40px rgba(45, 95, 63, 0.18)",
      },
    },
  },
  plugins: [],
};
