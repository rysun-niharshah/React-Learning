/**
 * Footer — part of the layout shell. Kept separate from Header for single-responsibility
 * and easier testing/replacement per layout variant.
 */
export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-6">
      <p className="text-center text-sm text-gray-500">
        React Vite Tailwind Template — standard folder structure
      </p>
    </footer>
  );
}
