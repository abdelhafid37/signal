/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        bg: "#F1F1EE",
        surface: "#FFFFFF",
        ink: "#14161C",
        "ink-soft": "#5B5D66",
        accent: "#2451FF",
        tally: "#FFB800",
        border: "#DEDEDA",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      fontSize: {
        "display-xl": [
          "clamp(2.25rem, 1.546rem + 3.005vw, 4.25rem)",
          { lineHeight: "1.1" },
        ],
        "display-l": [
          "clamp(2rem, 1.472rem + 2.254vw, 3.5rem)",
          { lineHeight: "1.1" },
        ],
        "display-m": [
          "clamp(1.625rem, 1.273rem + 1.502vw, 2.625rem)",
          { lineHeight: "1.15" },
        ],
        "body-lg": [
          "clamp(0.9375rem, 0.8715rem + 0.282vw, 1.125rem)",
          { lineHeight: "1.6" },
        ],
      },
    },
  },
  plugins: [],
};
