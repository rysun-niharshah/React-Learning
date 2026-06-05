/**
 * Dashboard service — domain-specific API calls. Mirrors backend resource naming.
 */
import { apiClient, API_ENDPOINTS } from "@/api/apiClient";
import type { DashboardStat } from "@/types/dashboard";

export const dashboardService = {
  async getStats(): Promise<DashboardStat[]> {
    try {
      return await apiClient.get<DashboardStat[]>(API_ENDPOINTS.DASHBOARD.STATS);
    } catch {
      // Demo fallback when backend is unavailable
      return [
        { label: "Total Orders", value: 1284 },
        { label: "Revenue", value: "$42,580" },
        { label: "Customers", value: 892 },
        { label: "Products", value: 156 },
      ];
    }
  },
};
