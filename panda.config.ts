import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes: {
        marqueeLeft: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        scrollBounce: {
          "0%, 100%": {
            top: "0%",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            top: "90%",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",

  themes: {
    light: {
      semanticTokens: {
        colors: {
          body: { value: "{colors.zinc.50}" },
          accent: { value: "{colors.zinc.200}" },
          text: {
            value: "{colors.zinc.900}",
          },
        },
      },
    },
    dark: {
      semanticTokens: {
        colors: {
          accent: { value: "{colors.indigo.800}" },
          body: { value: "{colors.indigo.950}" },
          text: {
            value: "{colors.indigo.50}",
          },
        },
      },
    },
  },

  staticCss: {
    themes: ["light", "dark"],
  },
});
