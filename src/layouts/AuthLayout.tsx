/**
 * Auth layout — centered card for login/register pages. Separate from RootLayout
 * so auth screens don't inherit the main app header/sidebar.
 */
import { Outlet } from "react-router-dom";

export function AuthLayout() {
  return (
    <div className="flex min-h-[calc(100vh-8rem)] items-center justify-center px-4">
      <div className="w-full max-w-md rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <Outlet />
      </div>
    </div>
  );
}
