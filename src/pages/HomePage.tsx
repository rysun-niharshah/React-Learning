/**
 * Page components — one file per route. Pages compose layout sections and
 * feature components; they should not contain low-level UI or API logic.
 * Keep pages thin: fetch via hooks/services, render with components/.
 */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";
import { FeatureCard } from "@/components/features/home/FeatureCard";

export default function HomePage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          React + Vite + Tailwind
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Industry-standard folder structure with inline documentation.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link to={ROUTES.DASHBOARD}>
            <Button>Go to Dashboard</Button>
          </Link>
          <Link to={ROUTES.LOGIN}>
            <Button variant="outline">Login</Button>
          </Link>
        </div>
      </div>

      <div className="mt-16 grid gap-6 sm:grid-cols-3">
        <FeatureCard
          title="Feature-based"
          description="Domain components grouped under components/features/"
        />
        <FeatureCard
          title="Type-safe"
          description="Shared types in types/, constants in constants/"
        />
        <FeatureCard
          title="Tailwind"
          description="Utility-first styling with design tokens in tailwind.config.js"
        />
      </div>
    </section>
  );
}
