/**
 * Root App component — wires providers (router, theme, auth) and renders routes.
 * Keep business logic out of here; delegate to pages/, hooks/, and services/.
 */
import { RouterProvider } from "react-router-dom";
import { router } from "@/routes";

export default function App() {
  return <RouterProvider router={router} />;
}
