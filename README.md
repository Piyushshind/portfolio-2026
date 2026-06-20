# Piyush Shinde — Portfolio

A modern, fully responsive, animated personal portfolio built with React, TypeScript, Tailwind CSS and Motion. Design concept: **"Aurora Glass"** — a deep midnight canvas with animated cyan→violet gradient mesh, frosted-glass panels, and orchestrated scroll animations.

## ✨ Features

- Animated hero with staggered reveal and gradient-animated name
- Sticky glass navbar with scroll-spy and light/dark theme toggle
- Sections: About, Skills (marquee + cards), Experience timeline, Projects (3D-tilt cards), Contact
- Magnetic buttons, scroll-triggered reveals, and an animated aurora background
- Fully responsive / mobile-first, accessible (WCAG), and reduced-motion friendly
- Single source of truth for content in `src/data/resume.ts`

## 🛠️ Tech Stack 

- **Framework:** React 19 + TypeScript + Vite
- **Styling:** Tailwind CSS v4 + shadcn/ui
- **Animation:** Motion (Framer Motion)
- **Icons:** lucide-react

## 🚀 Getting Started

```bash
# install dependencies
npm install

# start dev server (http://localhost:5173)
npm run dev

# production build
npm run build

# preview the production build
npm run preview
```

## 📁 Structure

```
src/
  components/
    layout/      → Navbar, Footer
    sections/    → Hero, About, Skills, Experience, Projects, Contact
    shared/      → reveal, magnetic, tilt-card, section-heading, icons
    ui/          → shadcn primitives
  data/          → resume.ts (all content lives here)
  hooks/         → useTheme, useScrollSpy
  index.css      → Aurora Glass design system
```

## 👤 Author

**Piyush Shinde** — Frontend Engineer
[GitHub](https://github.com/Piyushshind) · [LinkedIn](https://www.linkedin.com/in/piyush-shinde-lk)
