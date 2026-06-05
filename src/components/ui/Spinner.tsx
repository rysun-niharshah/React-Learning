/**
 * Loading spinner — shared feedback UI. Small enough for ui/; if it had variants
 * tied to business domains, it would stay here anyway (still presentation-only).
 */
export function Spinner() {
  return (
    <div
      className="h-8 w-8 animate-spin rounded-full border-4 border-gray-200 border-t-brand-600"
      role="status"
      aria-label="Loading"
    />
  );
}
