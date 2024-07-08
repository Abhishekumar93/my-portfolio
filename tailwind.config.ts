import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        bottom: "10px 10px 19px rgba(0, 0, 0, 0.1)",
        s_dark: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
        s_light: "5px 5px 15px #D1D9E6, -5px -5px 15px #ffffff",
      },
      colors: {
        light: "#878e99",
        dark: "#1e2125",
        light_dark: "#3c3e41",
        gradient_red: "linear-gradient(145deg, #ff014f, #d11414)",
        gradient_dark: "linear-gradient(145deg, #1e2024, #23272b)",
        gradient_light: "linear-gradient(145deg, #e2e8ec, #ffffff)",
        red_primary: "#ff014f",
        subtitle_red_primary: "#f9004d",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      keyframes: {
        growShrink: {
          "0%": { transform: "scaleX(0.1)", transformOrigin: "left" },
          "100%": { transform: "scaleX(1)", transformOrigin: "left" },
        },
        shrinkGrow: {
          "0%": { transform: "scaleX(1)", transformOrigin: "left" },
          "100%": { transform: "scaleX(0)", transformOrigin: "left" },
        },
      },
      animation: {
        grow: "growShrink 0.5s forwards",
        shrink: "shrinkGrow 0.5s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
