import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./data/**/*.ts"],
  theme: {
    extend: {
      colors: { ink: "#0E2747", paper: "#F6F8FC", mist: "#E3ECF9", accent: "#2563C9", line: "#CBD7EA" },
      fontFamily: { serif: ["var(--font-serif)", "Georgia", "serif"], sans: ["var(--font-sans)", "system-ui", "sans-serif"] },
    },
  },
  plugins: [],
};
export default config;
