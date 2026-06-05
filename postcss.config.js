/**
 * PostCSS sits between Tailwind and Vite. Vite processes CSS through PostCSS,
 * which runs Tailwind (utility generation) and Autoprefixer (browser prefixes).
 */
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
