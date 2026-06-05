/**
 * Pure utility functions — no React, no side effects. cn() merges Tailwind classes.
 * Validators, formatters, and mappers also live here.
 */
export function cn(...classes: (string | undefined | false | null)[]) {
  return classes.filter(Boolean).join(" ");
}
