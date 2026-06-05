/** @type {import('tailwindcss').Config} */
export default {
  // Scan all src files so Tailwind purges unused classes in production builds
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Extend the default theme with brand tokens (colors, spacing, fonts)
      colors: {
        brand: {
          50: "#eff6ff",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
    },
  },
  plugins: [],
};
