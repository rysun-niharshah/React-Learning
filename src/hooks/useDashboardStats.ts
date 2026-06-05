/**
 * Data-fetching hook — encapsulates loading/error/state for a page. Pages stay
 * declarative; this hook owns the imperative fetch lifecycle.
 */
import { useEffect, useState } from "react";
import { dashboardService } from "@/services/dashboardService";
import type { DashboardStat } from "@/types/dashboard";

export function useDashboardStats() {
  const [stats, setStats] = useState<DashboardStat[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    dashboardService
      .getStats()
      .then((data) => {
        if (!cancelled) setStats(data);
      })
      .catch(() => {
        if (!cancelled) setError("Failed to load dashboard stats");
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { stats, loading, error };
}
