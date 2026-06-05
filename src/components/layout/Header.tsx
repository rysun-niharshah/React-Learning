/**
 * Layout components — structural chrome (Header, Sidebar, Footer) live in
 * components/layout/, not layouts/. The layouts/ folder holds route wrappers;
 * components/layout/ holds the actual visual pieces those wrappers compose.
 */
import { Link } from "react-router-dom";
import { ROUTES } from "@/constants/routes";
import { useAuth } from "@/hooks/useAuth";

export function Header() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link to={ROUTES.HOME} className="text-lg font-semibold text-brand-600">
          {import.meta.env.VITE_APP_NAME}
        </Link>
        <nav className="flex items-center gap-4 text-sm">
          <Link to={ROUTES.HOME} className="text-gray-600 hover:text-gray-900">
            Home
          </Link>
          {isAuthenticated ? (
            <>
              <Link to={ROUTES.DASHBOARD} className="text-gray-600 hover:text-gray-900">
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </>
          ) : (
            <Link to={ROUTES.LOGIN} className="text-gray-600 hover:text-gray-900">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}
