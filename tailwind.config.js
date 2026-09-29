/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./data/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        display: ["'Inter Tight'", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["'JetBrains Mono'", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      colors: {
        paper: "#fafaf8",
        ink: {
          50: "#f5f5f4",
          100: "#e9e9e7",
          200: "#d6d6d3",
          300: "#b3b3ae",
          400: "#8a8a85",
          500: "#6b6b66",
          600: "#51514d",
          700: "#3a3a37",
          800: "#232326",
          900: "#141417",
          950: "#0b0b0d",
        },
        brand: {
          50: "#eef2ff",
          100: "#dfe6ff",
          200: "#c2cfff",
          300: "#9bb0ff",
          400: "#6e87ff",
          500: "#4a63fb",
          600: "#3447ea",
          700: "#2a37cc",
          800: "#2531a4",
          900: "#242f82",
        },
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
    },
  },
  plugins: [],
};
