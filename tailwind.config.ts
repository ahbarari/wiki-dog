import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cardColor: "#FEF7FF",
        borderColor: "#CAC4D0"
      },
      fontSize: {
        base: '14px',
      },
    },
  },
  plugins: [],
};
export default config;
