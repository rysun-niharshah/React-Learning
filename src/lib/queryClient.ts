/**
 * lib/ — third-party client setup and adapters (query client, i18n, analytics).
 * Differs from utils/: lib wraps external libraries; utils holds your own pure functions.
 *
 * Example placeholder for React Query / TanStack Query setup:
 */
export const queryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 60_000,
      retry: 1,
    },
  },
};
