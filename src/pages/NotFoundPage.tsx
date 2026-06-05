/**
 * 404 page — catch-all route renders this. Lives in pages/ like every other route.
 */
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";
import { ROUTES } from "@/constants/routes";

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[50vh] flex-col items-center justify-center px-4">
      <h1 className="text-6xl font-bold text-gray-300">404</h1>
      <p className="mt-2 text-lg text-gray-600">Page not found</p>
      <Link to={ROUTES.HOME} className="mt-6">
        <Button variant="outline">Back to home</Button>
      </Link>
    </section>
  );
}
