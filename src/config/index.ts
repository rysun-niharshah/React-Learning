/**
 * App configuration — reads Vite env vars once. config/ (not .env parsing scattered
 * in files) gives a typed, testable single entry for environment-driven values.
 */
export const config = {
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL ?? "/api",
  appName: import.meta.env.VITE_APP_NAME ?? "Ecom Admin",
  isDev: import.meta.env.DEV,
} as const;
