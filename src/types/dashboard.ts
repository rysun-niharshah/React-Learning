/**
 * Dashboard types — co-located with dashboard domain. Import from @/types/dashboard
 * instead of defining inline in components (keeps props contracts explicit).
 */
export interface DashboardStat {
  label: string;
  value: string | number;
}
