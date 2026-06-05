/**
 * API endpoint paths — versioned REST paths in one file. When the backend changes
 * a URL, update here once instead of hunting through every service file.
 */
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/auth/login",
    ME: "/auth/me",
  },
  DASHBOARD: {
    STATS: "/dashboard/stats",
  },
  ORDERS: {
    LIST: "/orders",
    BY_ID: (id: string) => `/orders/${id}`,
  },
} as const;
