/**
 * Default layout — wraps every page with shared chrome (header, footer, outlet).
 * Layouts live in layouts/ (not components/) because they define page structure,
 * not reusable UI widgets. Nested layouts (AuthLayout) handle auth-specific UI.
 */
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
