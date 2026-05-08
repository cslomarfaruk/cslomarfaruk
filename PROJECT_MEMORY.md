# DEV.CSL Portfolio - Project Memory

> **Agent Note:** Read this document first to understand the architecture, design tokens, and conventions of the project before making modifications. Update this document when major structural or architectural changes occur.

## 1. Project Overview
A premium web engineering studio portfolio for **Omar Faruk (DEV.CSL)**. The project is designed with a heavy emphasis on modern, high-performance UI (glassmorphism, subtle micro-interactions, hardware-accelerated animations) and SEO optimization.

## 2. Tech Stack
- **Framework:** Next.js 15.1.7 (App Router, Turbopack)
- **Library:** React 19
- **Styling:** Tailwind CSS v4, PostCSS, Framer Motion v12
- **Icons:** Lucide React
- **Themes:** `next-themes` (Dark/Light mode support)
- **Forms/Mails:** Nodemailer
- **Language:** TypeScript
- **Deployment:** Docker, Docker Compose (Standalone Next.js output)

## 3. Directory Structure
```text
devcsl/
├── app/                  # Next.js 15 App Router
│   ├── api/              # API Routes (e.g., contact form)
│   ├── layout.tsx        # Root layout with providers & structural components
│   ├── page.tsx          # Main entry page
│   ├── globals.css       # Global styling & Tailwind directives
│   └── sitemap.ts / robots.ts # SEO components
├── src/
│   ├── components/
│   │   ├── layout/       # Structural UI (Navbar, Footer, FloatingNav, WhatsApp)
│   │   ├── sections/     # Main page sections (Hero, Projects, Services, Contact, etc.)
│   │   ├── ThemeProvider.tsx # Theme handling
│   │   └── ThemeToggle.tsx   # Theme switcher
│   ├── lib/              # Utilities (utils.ts) & i18n implementation
│   └── index.css         # Legacy/Alias CSS file for Tailwind base
├── content/              # Static content / copy (likely JSON or markdown)
├── public/               # Static assets, images, and logos
└── scripts/              # deploy.sh, Dockerfile, docker-compose.yml
```

## 4. UI & Design System Guidelines
The project has a highly specific visual identity that must be maintained:
- **Primary Fonts:** Inter (Sans), Noto Sans Bengali, JetBrains Mono (Monospace)
- **Brand Colors:** Emerald/Accent (`#10b981`), heavily reliant on Zinc and dark Brand (`#050505`) shades.
- **Glassmorphism:** The core aesthetic relies on glassy cards. Use predefined utility classes from `globals.css`:
  - `.glass`: Main glass background with backdrop blur and inner shadow.
  - `.glass-clean`: Transparent border-heavy glass.
  - `.glass-accent`: Emerald-tinted glass for highlighted elements.
  - `.section-shell`: Outer container styling for large sections.
- **Typography:**
  - `.mono-label`: Small, tracked-out uppercase monospace text for sub-headers and technical labels.
  - `.text-gradient`: White to Emerald text gradient.
- **Animations:**
  - GPU acceleration is explicitly enabled on demanding components (e.g., `.gpu-accelerated`, `transform: translateZ(0)`).
  - Framer motion is used for page transitions (`PageTransition.tsx`) and scroll reveal animations inside `sections/`.

## 5. Development Conventions
- **Component Architecture:** Keep structural components in `src/components/layout/` and page content sections in `src/components/sections/`.
- **State & Context:** Minimal global state. Relies on standard React contexts (like `ThemeProvider`, `LanguageProvider`).
- **Styling:** Avoid inline styles. Use Tailwind utility classes or custom classes defined in `globals.css` if reusability is needed across multiple elements (like `.glass`).
- **SEO Optimization:** `layout.tsx` is heavily loaded with OpenGraph, Twitter Cards, Alternate languages, and structured metadata. Make sure to preserve these if altering metadata.

## 6. Scripts & Commands
- `npm run dev`: Starts the Next.js dev server with Turbopack.
- `npm run build`: Creates a production build (Standalone output is configured in `next.config.mjs`).
- **Docker Deployment:** Follow instructions in `DOCKER_DEPLOY_GUIDE.md` and use `deploy.sh` to spin up production containers.
