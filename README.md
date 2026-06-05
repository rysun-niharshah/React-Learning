# React + Vite + Tailwind — Standard Folder Structure

Industry-standard React project scaffold with inline comments explaining **why** each folder exists.

## Quick start

```bash
cd react-vite-tailwind
npm install
npm run dev
```

## Folder map

```
react-vite-tailwind/
├── public/                 # Static files copied as-is (favicon, robots.txt)
├── src/
│   ├── api/                # HTTP client + endpoint constants
│   ├── assets/             # Images/fonts imported by components (bundled)
│   ├── components/
│   │   ├── ui/             # Primitive UI (Button, Input, Modal)
│   │   ├── layout/         # Header, Sidebar, Footer
│   │   └── features/       # Domain-specific components (orders/, dashboard/)
│   ├── config/             # Env-driven app configuration
│   ├── constants/          # Enums, route paths, magic-string replacements
│   ├── context/            # React Context providers (auth, theme)
│   ├── hooks/              # Custom hooks (useAuth, useDashboardStats)
│   ├── layouts/            # Route-level layout wrappers (RootLayout, AuthLayout)
│   ├── lib/                # Third-party adapters (query client, i18n)
│   ├── pages/              # One component per route
│   ├── routes/             # Router config + guards (ProtectedRoute)
│   ├── services/           # Domain API/business logic (authService, orderService)
│   ├── store/              # Redux/Zustand (when Context isn't enough)
│   ├── styles/             # Global CSS + Tailwind directives
│   ├── types/              # Shared TypeScript interfaces
│   ├── utils/              # Pure helpers (formatters, cn)
│   ├── App.tsx             # Root component
│   └── main.tsx            # Entry point
├── .env                    # VITE_* environment variables
├── index.html              # HTML shell
├── tailwind.config.js      # Tailwind theme + content paths
├── postcss.config.js       # Tailwind + Autoprefixer pipeline
├── vite.config.ts          # Vite build config + @ alias
└── tsconfig.json           # TypeScript + path aliases
```

## Key conventions

| Layer | Responsibility |
|-------|----------------|
| **pages/** | Route screens — compose hooks + components |
| **components/ui/** | Stateless primitives, no API calls |
| **components/features/** | Domain UI, receives data via props |
| **hooks/** | Stateful logic, calls services |
| **services/** | API calls, returns typed data |
| **api/** | HTTP infrastructure only |
| **layouts/** vs **components/layout/** | Wrappers vs visual chrome |

Every source file includes a header comment explaining its placement in this structure.
