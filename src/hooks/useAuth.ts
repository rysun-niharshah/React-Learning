/**
 * Custom hooks — reusable stateful logic extracted from components. Naming
 * convention: useXxx. Hooks call services/ for data, never raw fetch in pages.
 */
import { useContext } from "react";
import { AuthContext } from "@/context/AuthContext";

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
