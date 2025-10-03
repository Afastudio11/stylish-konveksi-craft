# Sekala Industry - Vite React Application

## Overview
This is a frontend-only website for Sekala Industry, a company specializing in professional convection solutions. The website showcases their products and services including jackets, uniforms, t-shirts, and custom merchandise.

## Tech Stack
- **Framework**: Vite + React 18
- **Language**: TypeScript
- **UI Library**: Shadcn UI (Radix UI components)
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **State Management**: TanStack Query (React Query)
- **Build Tool**: Vite with SWC

## Project Structure
```
src/
├── assets/          # Images and static assets
├── components/      # React components
│   ├── ui/         # Shadcn UI components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Products.tsx
│   └── Services.tsx
├── hooks/          # Custom React hooks
├── lib/            # Utility functions
├── pages/          # Page components
│   ├── Index.tsx
│   └── NotFound.tsx
└── App.tsx         # Main app component
```

## Development

### Local Development
The development server runs on port 5000 with Vite's hot module replacement (HMR).

```bash
npm run dev
```

The Vite configuration is set up for Replit environment with:
- Host: 0.0.0.0 (allows external connections)
- Port: 5000
- WebSocket HMR configured for Replit proxy

### Build
To create a production build:

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Preview Production Build
To preview the production build locally:

```bash
npm start
```

or

```bash
npm run preview
```

## Deployment
This project is configured for Replit deployment with:
- **Build command**: `npm run build`
- **Start command**: `npm start`
- **Deployment type**: Autoscale (for static sites)

## Configuration Files
- `vite.config.ts` - Vite configuration with Replit-specific settings
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `components.json` - Shadcn UI configuration

## Environment Setup
The project is configured to work seamlessly in the Replit environment with:
- WebSocket support for HMR using Replit's dev domain
- Proper host and port configuration
- Path aliases (@/) for clean imports

## Recent Changes (October 3, 2025)
- Migrated from GitHub to Replit
- Updated Vite config for Replit environment (port 5000, 0.0.0.0 host)
- Configured WebSocket HMR for Replit proxy support
- Added production start script
- Configured deployment settings for Replit autoscale

## Features
The website includes:
- Responsive hero section with company branding
- Product showcase (jackets, uniforms, t-shirts)
- Services section
- About company information
- Contact form/information
- Professional navigation and footer
