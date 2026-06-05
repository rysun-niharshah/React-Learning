/**
 * Application entry point — lives at src/main.tsx (not index.tsx) because
 * Vite convention maps index.html → src/main.tsx. This file should stay thin:
 * mount React, apply global styles, and render <App />.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { AuthProvider } from "@/context/AuthContext";
import "@/styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
);
