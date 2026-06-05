/**
 * Shared TypeScript types — domain models and API response shapes.
 * Split by domain file (user.ts, order.ts) rather than one giant index.ts
 * to avoid merge conflicts and improve discoverability.
 */
export interface User {
  id: string;
  email: string;
  name: string;
}
