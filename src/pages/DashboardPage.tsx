/**
 * Dashboard page — demonstrates data fetching via a custom hook. Pages should
 * import from hooks/ and components/, never call fetch/axios directly.
 */
import { useDashboardStats } from "@/hooks/useDashboardStats";
import { Spinner } from "@/components/ui/Spinner";
import { StatCard } from "@/components/features/dashboard/StatCard";

export default function DashboardPage() {
  const { stats, loading, error } = useDashboardStats();

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <Spinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-5xl px-4 py-16 text-center text-red-600">
        {error}
      </div>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-10">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
      <p className="mt-1 text-gray-600">Protected route — data from services/ layer.</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} />
        ))}
      </div>
    </section>
  );
}
