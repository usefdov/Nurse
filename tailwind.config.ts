import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#102536",
        medical: "#5D9FB1",
        teal: "#2F8C86",
        paper: "#F6F8F8"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Arial", "sans-serif"],
        display: ["var(--font-manrope)", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
export default config;