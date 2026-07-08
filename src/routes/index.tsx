import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "../layouts/RootLayout";
import { Spinner } from "../components/ui/Spinner";
import { AuthLayout } from "../layouts/AuthLayout";

const HomePage = lazy(() => import("../pages/HomePage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));

function PageLoader() {
  return (
    <div className="flex items-center">
      <div className="flex min-h-[50vh] items-center justify-center">
        <Spinner />
      </div>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <HomePage />
          </Suspense>
        ),
      },
    ],
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/products",
        element: <ProductPage />,
      }
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      }
    ],
  },
]);
