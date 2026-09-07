# XeTech Club — Modern Single-Page Web Application

> **Student Technology Community** focused on **Cloud Engineering, DevOps, Automation, Agentic AI, AIOps, and Platform Engineering**.

A futuristic, high-contrast, production-grade responsive web application built with **React 19, TypeScript, Tailwind CSS v4, and Vite**. Featuring an interactive DevOps/AI terminal simulator, particle constellation background, CloudForge flagship masterclass portal, student project showcase, learning roadmap, and open developer resources.

---

## 🚀 Live Demo & Deployment

This project is pre-configured for automated **GitHub Pages** deployment via **GitHub Actions**.

### Option A: Automatic Deployment via GitHub Actions (Recommended)

1. Push your code to the `main` branch:
   ```bash
   git push origin main
   ```
2. In your GitHub repository (`https://github.com/ABHILASH9519/xetech-club`):
   - Go to **Settings** → **Pages** (in the left sidebar).
   - Under **Build and deployment** → **Source**, select **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` will automatically build and publish the site to:
   ```
   https://ABHILASH9519.github.io/xetech-club/
   ```

### Option B: Manual One-Command Deployment

You can also deploy directly using `gh-pages`:
```bash
npm run deploy
```
*(Ensure `Settings → Pages → Source` is set to `Deploy from a branch` → `gh-pages`)*

---

## 🛠️ Tech Stack & Architecture

- **Core**: React 19, TypeScript, Vite
- **Styling**: Tailwind CSS v4 (Custom Magenta → Purple → Deep Violet design system)
- **Icons**: Lucide React + custom SVG brand marks
- **Visuals**: HTML5 Canvas particle & neural mesh with mouse repulsion (respects `prefers-reduced-motion`)
- **Deployment**: GitHub Pages, GitHub Actions CI/CD pipeline

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/ABHILASH9519/xetech-club.git
cd xetech-club

# Install dependencies
npm install

# Start local development server
npm run dev

# Run production build & typecheck
npm run build

# Preview production build locally
npm run preview
```

---

## 📂 Project Structure

```
xetech-club/
├── .github/workflows/deploy.yml # Automated GitHub Pages workflow
├── src/
│   ├── components/
│   │   ├── background/          # ParticleCanvas & AmbientGlow
│   │   ├── layout/              # Navbar & Footer
│   │   ├── hero/                # Hero banner & TerminalSimulator
│   │   ├── about/               # Mission, pillars & impact metrics
│   │   ├── domains/             # 6 Technology tracks & curriculum modal
│   │   ├── events/              # CloudForge flagship & upcoming events
│   │   ├── projects/            # Student innovation project cards & modals
│   │   ├── roadmap/             # 6-stage progressive learning pathway
│   │   ├── team/                # Leadership & mentorship profile cards
│   │   ├── resources/           # Developer guides, starter kits & search
│   │   ├── contact/             # Transmission form & FAQ accordion
│   │   ├── cta/                 # High-impact community CTA
│   │   └── ui/                  # Toast notifications, modals & icons
│   ├── data/                    # Modular data sources (domains, events, team...)
│   ├── types/                   # TypeScript interfaces
│   ├── App.tsx                  # Main single-page application
│   └── index.css                # Tailwind v4 imports & theme utilities
└── vite.config.ts               # Configured with relative base path ('./')
```

---

## 📄 License

© 2026 XeTech Club. All rights reserved. Built with passion by university student builders.