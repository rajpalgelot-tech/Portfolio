import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "rgb(var(--primary) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-fugaz)", "sans-serif"],
        body: ["var(--font-open-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
