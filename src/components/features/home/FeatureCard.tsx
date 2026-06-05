/**
 * Feature-specific components — grouped by domain (home/, dashboard/, orders/).
 * Industry pattern: co-locate components with the feature they serve. Avoid a
 * flat components/ folder with 100+ unrelated files.
 */
interface FeatureCardProps {
  title: string;
  description: string;
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
      <h3 className="font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </article>
  );
}
