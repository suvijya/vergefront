# VERGE 2026 — Project Context

## Overview

**VERGE 2026** is an immersive, cinematic single-page web experience focused on **space debris awareness**. It presents data about orbital debris through a futuristic, HUD-style interface with smooth scroll-driven animations, 3D Earth visualizations, and a sci-fi "mission control" aesthetic. The tagline is **"WHERE INNOVATION DEFIES GRAVITY"**.

The site walks users through a boot sequence, a hero reveal, a data dashboard with real-time debris statistics, a historical timeline of space events, and closes with a call-to-action message about environmental harm in orbit.

---

## Tech Stack

| Layer            | Technology                                                                 |
| ---------------- | -------------------------------------------------------------------------- |
| **Framework**    | React 19 + TypeScript                                                      |
| **Build Tool**   | Vite (with `@vitejs/plugin-react`)                                         |
| **Styling**      | Tailwind CSS 3.4 + CSS Variables (HSL-based theming) + `tailwindcss-animate` |
| **UI Components**| shadcn/ui (New York style, Radix UI primitives, Lucide icons)              |
| **Animations**   | GSAP (ScrollTrigger, timelines, scrub-based scroll animations)             |
| **Smooth Scroll**| Lenis (connected to GSAP ticker for smooth scroll + ScrollTrigger sync)    |
| **3D / Canvas**  | HTML5 Canvas 2D API (wireframe globe, starfields, debris particles), React Three Fiber + Three.js (available but unused in current sections) |
| **Charts**       | Recharts (available, not actively used in current sections)                |
| **Forms**        | React Hook Form + Zod + @hookform/resolvers (available)                    |
| **Linting**      | ESLint 9 + typescript-eslint + react-hooks + react-refresh                 |
| **Package Mgr**  | npm (private, `"type": "module"`)                                          |

---

## Project Structure

```
vergefront/
├── index.html                  # Entry HTML — title "VERGE 2026"
├── package.json                # Dependencies & scripts
├── vite.config.ts              # Vite config with @ alias → ./src
├── tsconfig.json               # TS project references
├── tsconfig.app.json           # App TS config (ES2022, strict, react-jsx)
├── tsconfig.node.json          # Node TS config
├── tailwind.config.js          # Tailwind + cosmic color palette + custom animations
├── postcss.config.js           # PostCSS (tailwindcss + autoprefixer)
├── eslint.config.js            # ESLint flat config
├── components.json             # shadcn/ui configuration (new-york style)
├── src/
│   ├── main.tsx                # React 19 createRoot entry point
│   ├── App.tsx                 # Root component — orchestrates boot → main content
│   ├── App.css                 # App-level utility CSS classes
│   ├── index.css               # Global styles, fonts, Tailwind layers, animations
│   ├── components/
│   │   ├── Header.tsx          # Fixed top nav bar (system info, clock, VERGE logo)
│   │   └── ui/                 # 50+ shadcn/ui primitives (accordion, dialog, etc.)
│   ├── hooks/
│   │   └── use-mobile.ts       # Mobile breakpoint detection hook (768px)
│   ├── lib/
│   │   └── utils.ts            # cn() utility (clsx + tailwind-merge)
│   └── sections/
│       ├── BootSequence.tsx     # Loading screen with wireframe globe & system checks
│       ├── HeroSection.tsx      # Hero text reveal → 3D Earth transition
│       ├── DataDashboard.tsx    # Scroll-driven debris counter & statistics
│       ├── TimelineSection.tsx  # Historical timeline of space events (1957–2080)
│       └── FinalMessage.tsx     # Closing message, info panels, footer
```

---

## Path Aliases

- `@/*` → `./src/*` (configured in both `tsconfig.json` and `vite.config.ts`)

---

## Color System (Cosmic Theme)

All colors are defined as CSS variables (HSL) in `index.css` and mirrored in `tailwind.config.js`:

| Token             | Value      | Usage                            |
| ----------------- | ---------- | -------------------------------- |
| `cosmic-black`    | `#000000`  | Primary background               |
| `cosmic-dark`     | `#0a0a0f`  | Card/panel backgrounds           |
| `cosmic-blue`     | `#00d4ff`  | Primary accent (links, progress) |
| `cosmic-purple`   | `#a855f7`  | Secondary accent, gradients      |
| `cosmic-red`      | `#ef4444`  | Alerts, collision events, danger |
| `cosmic-green`    | `#22c55e`  | Active states, success           |
| `cosmic-amber`    | `#f59e0b`  | Warnings, pending states         |
| `cosmic-gray`     | `#6b7280`  | Muted text                       |
| `cosmic-light`    | `#e5e7eb`  | Light text                       |

---

## Typography

- **Primary font**: `Inter` (sans-serif) — body text
- **Monospace font**: `JetBrains Mono` — HUD elements, counters, system text
- Loaded via Google Fonts in `index.css`

---

## Sections & Page Flow

### 1. Boot Sequence (`BootSequence.tsx`)
- **Full-screen loading overlay** displayed for ~5 seconds
- Animated **wireframe globe** rendered on Canvas 2D with rotating longitude lines and axis labels
- **Red orbital paths** (SVG ellipses) fade in progressively
- **9 system status items** load sequentially (Quality Assessment, Orbit Analysis, X/Y/Z Trajectory Simulation, Risk Assessment, Communication Check, Final Validation, Report Generation)
- At 85% progress, transitions to a **terminal view** showing status lines
- Includes a bottom **progress bar** with percentage readout
- Bottom-left shows `Z-AXIS: 0°` and `X-24°` indicators
- Bottom-right shows a waveform graph with historical year X-axis labels

### 2. Hero Section (`HeroSection.tsx`)
- **Pinned scroll section** (ScrollTrigger, `end: +=200%`)
- Text `[SPACE IS THE DREAM OF HUMANITY]` types out character-by-character using GSAP stagger
- On scroll: text fades up and out, **CSS-based 3D Earth** scales in
- Earth uses:
  - Radial gradients for sphere shading
  - Wikipedia world map texture with rotating `backgroundPosition`
  - Atmosphere glow (box-shadow)
  - Day/night terminator gradient
- Sun flare radial gradient on the left side

### 3. Data Dashboard (`DataDashboard.tsx`)
- **Pinned scroll section** (`end: +=300%`)
- Central **Canvas 2D Earth** with:
  - Radial-gradient sphere with simplified continent ellipses
  - Up to 500 orbiting debris particles (count based on scroll-driven debris number)
  - 3 orbital path ellipses in red
- **Debris counter**: scrolls from `000.000.000` → `123.001.210`
- **Year counter**: 1950 → 2080
- Left panel: Key space debris events (Sputnik-1 1957, Satellite Collision 2009) — appear as year thresholds are reached
- Right panel: Debris type breakdown (Rocket Fragments 46%, Upper Stage Parts 22%, Decommissioned Satellites 28%, Other 4%)
- Bottom: Waveform SVG graph with red sinusoidal line and current-position indicator dot

### 4. Timeline Section (`TimelineSection.tsx`)
- **Pinned scroll section** (`end: +=200%`)
- Canvas-based **starfield** background (200 twinkling stars)
- Horizontal timeline with 7 events:
  - 1957 — Sputnik-1 Launch
  - 1969 — Apollo 11 Moon Landing
  - 1986 — Challenger Disaster
  - 1998 — ISS Construction
  - 2009 — Satellite Collision in GEO
  - 2020 — Starlink Constellation
  - 2080 — Projected Debris Peak
- Events color-coded by type: green (launch), red (collision), amber (milestone)
- Active event details shown below with large year number, title, and description
- Bottom progress bar from 1950 → 2080

### 5. Final Message (`FinalMessage.tsx`)
- **Non-pinned scrolling section**
- Large counter `123.001.210` zooms in then out
- Red glowing variant of the same counter
- **5 info panels** in a responsive grid:
  - Growing Hazard (blue bullets)
  - Collision Risks (red bullets)
  - Kessler Syndrome (purple bullets)
  - Mitigation Strategies (green bullets)
  - Future Outlook (amber bullets, spans 2 columns)
- Bold hero message: **"ENVIRONMENTAL HARM CAN BE STOPPED"**
- Sub-text: "NASA TAKES STEPS."
- **Footer**: VERGE 2026 branding, Privacy/Terms/Contact links, copyright

---

## Persistent UI Elements

### Header (`Header.tsx`)
- Fixed top bar (`z-50`) with black/blur background
- Left: `SMART-EARTH-PROTECTION` label, cycle counter (`2485`), live clock (24h format)
- Center: `VERGE` logo
- Right: `DONATE` and `JOIN-THE-PROGRAM` nav buttons
- `X-3` indicator positioned at `right-1/3`

### Status Bar (in `App.tsx`)
- Fixed bottom bar (`z-50`)
- Left: `SINUSOID OF SPREADING: ACTIVE`, `QUALITY ASSESSMENT: ACTIVE` with atom icon
- Right: `ALL SYSTEM: ACTIVE/PENDING` (changes after boot completes)

### Global Overlays (in `App.tsx`)
- **Noise overlay** (`z-50`): SVG fractalNoise filter at 3% opacity
- **Grid pattern** (`z-40`): 50px grid lines at 2% white opacity

---

## Animation & Scroll System

- **Lenis** handles smooth scrolling (duration 1.2s, exponential easing)
- **GSAP ScrollTrigger** is connected to Lenis for scroll-driven animations
- Three sections are **pinned** (Hero, DataDashboard, Timeline) with `scrub: 1`
- GSAP `lagSmoothing(0)` is disabled for precise scroll tracking
- Custom CSS animations: `blink`, `pulse-glow`, `shimmer`, `typewriter`, `fadeIn`, `slideUp`, `orbit`, `float`, `spin-slow`

---

## Visual Effects & CSS Features

- **Glassmorphism panels**: `bg-opacity-70`, `backdrop-blur`, white border
- **Glow effects**: box-shadow and text-shadow utilities for blue, purple, red
- **Scanline overlay**: CSS `repeating-linear-gradient`
- **Noise texture**: inline SVG `feTurbulence`
- **Corner brackets**: CSS `::before`/`::after` pseudo-elements
- **HUD line decorations**: horizontal gradient lines via `::before`
- **Custom scrollbar**: 4px thin, dark theme
- **Selection color**: cyan tint (`rgba(0, 212, 255, 0.3)`)

---

## shadcn/ui Configuration

- **Style**: New York
- **RSC**: `false` (client-side React)
- **TSX**: `true`
- **Base color**: Slate
- **CSS Variables**: enabled
- **Icon library**: Lucide
- **50+ UI primitives** available under `src/components/ui/` (accordion, dialog, dropdown-menu, tabs, tooltip, etc.)

---

## Scripts

| Command          | Action                        |
| ---------------- | ----------------------------- |
| `npm run dev`    | Start Vite dev server (HMR)   |
| `npm run build`  | TypeScript check + Vite build |
| `npm run lint`   | Run ESLint                    |
| `npm run preview`| Preview production build       |

---

## Key Dependencies (Notable)

| Package                    | Purpose                                      |
| -------------------------- | -------------------------------------------- |
| `gsap`                     | ScrollTrigger, timeline animations           |
| `lenis`                    | Smooth scroll engine                         |
| `three` / `@react-three/*`| 3D rendering (available, not in current use) |
| `recharts`                 | Chart library (available, not in current use) |
| `class-variance-authority` | Component variant management (shadcn/ui)     |
| `tailwind-merge` / `clsx` | Conditional className merging                |
| `react-hook-form` / `zod` | Form handling + validation (available)       |
| `vaul`                     | Drawer component                             |
| `cmdk`                     | Command palette                              |
| `embla-carousel-react`    | Carousel                                     |
| `sonner`                   | Toast notifications                          |
| `next-themes`              | Theme switching (available)                  |

---

## Design Philosophy

- **Dark-first**: Pure black backgrounds (`#000000`) with white/cyan text
- **Monospace HUD aesthetic**: All system/data text uses JetBrains Mono at tiny sizes (`10px`, `11px`)
- **Scroll-as-narrative**: Each scroll section tells a chapter of the space debris story
- **Canvas-heavy**: Wireframe globes, starfields, and particle systems rendered with Canvas 2D for performance
- **Cinematic pacing**: Boot sequence → hero → data → timeline → conclusion
- **Minimalist interaction**: No complex navigation; scroll is the primary interaction model
