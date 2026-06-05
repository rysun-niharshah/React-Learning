/**
 * Route path constants — single source of truth prevents typos in Link/navigate
 * calls. Using an object (not string literals scattered everywhere) makes
 * refactors safe when URLs change.
 */
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  DASHBOARD: "/dashboard",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
