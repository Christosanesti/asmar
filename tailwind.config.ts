import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        blue: "#2997FF",
        red: "#FF5533",
        green: "#62D470",
        purple: "#9354D7",
        yellow: "#FFB532",
      },
    },
  },
  plugins: [],
} satisfies Config;
