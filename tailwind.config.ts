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
        dark_shadow:
          "inset 21px 21px 19px #181a1d, inset -21px -21px 19px #202225",
        inner_shadow:
          "1px 4px 2px -3px rgba(0, 0, 0, 0.7) inset, -1px -3px 3px -2px rgba(255, 255, 255, 0.2) inset",
        progress_bar:
          "inset 8px 8px 16px rgba(0, 0, 0, 0.4588235294), inset -8px -8px 16px rgba(56, 62, 69, 0.4588235294)",
      },
      colors: {
        light: "#878e99",
        dark: "#1e2125",
        light_text: "#c4cfde",
        dark_text: "#3c3e41",
        gradient_red: "linear-gradient(145deg, #ff014f, #d11414)",
        gradient_dark: "linear-gradient(145deg, #1e2024, #23272b)",
        gradient_light: "linear-gradient(145deg, #e2e8ec, #ffffff)",
        red_primary: "#ff014f",
        subtitle_red_primary: "#f9004d",
        light_bg: "#fdfefe",
        dark_bg: "#191b1e",
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
        progressBar: {
          "0%": {
            opacity: "0",
            width: "0%",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        grow: "growShrink 0.5s forwards",
        shrink: "shrinkGrow 0.5s forwards",
        progressBarFadeLeft: "progressBar 0.6s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
