import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        saffron: "#FF9933",
        maroon: "#7B2D26",
        cream: "#FFF8E8",
        charcoal: "#1A1A1A",
      },
      fontFamily: {
        sans: ["Inter", "Noto Sans Devanagari", "Arial", "sans-serif"],
        display: ["Poppins", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
