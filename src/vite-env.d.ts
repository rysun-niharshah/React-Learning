/// <reference types="vite/client" />

/**
 * Vite env type augmentation — enables import.meta.env.VITE_* with TypeScript.
 * Env files (.env, .env.local) live at project root, not in src/.
 */
interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string;
  readonly VITE_APP_NAME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
