import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: { center: true, padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" }, screens: { "2xl": "1240px" } },
    extend: {
      colors: {
        navy: { 950: "#0A1B33", 900: "#102A4C", 800: "#15335B", 700: "#1B3F6E" },
        brand: { 700: "#17578F", 600: "#1E6BB0", 500: "#2A7BC2", 300: "#7FB0DE", 200: "#B7D2EE", 100: "#DCE9F7", 50: "#EEF4FB" },
        paper: "#F6F8FB",
        ink: { DEFAULT: "#43506A", muted: "#5C6880", strong: "#102A4C" },
        line: "#D5E2F0",
        ball: "#D4E157",
        gold: "#C9A45C",
      },
      fontFamily: { sans: ["Poppins", "ui-sans-serif", "system-ui", "Segoe UI", "Arial", "sans-serif"] },
      boxShadow: {
        card: "0 1px 2px rgba(16,42,76,0.06), 0 8px 24px -12px rgba(16,42,76,0.18)",
        lift: "0 2px 4px rgba(16,42,76,0.06), 0 20px 40px -20px rgba(16,42,76,0.35)",
      },
      borderRadius: { xl2: "1.25rem" },
    },
  },
  plugins: [],
};
export default config;
