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
    },
  },
  plugins: [],
};
