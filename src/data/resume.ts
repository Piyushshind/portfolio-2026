/* ============================================================
   Single source of truth for portfolio content.
   Update values here — every section reads from this file.
   ============================================================ */

export const profile = {
  name: "Piyush Shinde",
  firstName: "Piyush",
  lastName: "Shinde",
  role: "Frontend Engineer",
  roles: ["Frontend Engineer", "React Specialist", "UI Architect"],
  tagline: "I build scalable, accessible, high-performance web products.",
  location: "Bengaluru, India",
  experienceYears: "3+",
  available: true,
  resumeUrl: "/Piyush_Shinde_Resume.pdf", // drop your PDF in /public with this name
  about: [
    "I'm a Frontend Engineer with 3+ years of experience building enterprise SaaS products for global and U.A.E.-based clients. I turn complex requirements into clean, maintainable UI architecture.",
    "Right now I lead frontend development of Assisto — a full-scale enterprise HRMS at NSP Global Tech — spanning onboarding, offboarding, performance management, and reporting.",
    "I care deeply about performance budgets, design systems, real-time experiences, and accessible, pixel-perfect interfaces.",
  ],
  stats: [
    { value: "3+", label: "Years experience" },
    { value: "30+", label: "Reusable components" },
    { value: "40%", label: "Faster load times" },
    { value: "10+", label: "Products shipped" },
  ],
} as const;

export const socials = {
  github: "https://github.com/Piyushshind",
  linkedin: "https://www.linkedin.com/in/piyush-shinde-lk",
  email: "shindepiyush.work@gmail.com",
  portfolio: "https://master--warm-lolly-e4375f.netlify.app/",
} as const;

export type SkillGroup = {
  title: string;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      "React.js",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "React Hook Form",
      "Node.js",
      "Express.js",
    ],
  },
  {
    title: "Styling & UI",
    items: ["Tailwind CSS", "shadcn/ui", "Framer Motion", "Bootstrap", "Figma"],
  },
  {
    title: "Concepts",
    items: [
      "Component Architecture",
      "Micro Frontends",
      "Module Federation (Vite)",
      "SSR / SSG",
      "Performance Optimization",
      "WebRTC",
      "WebSockets",
      "RBAC",
      "REST APIs",
      "WCAG Accessibility",
    ],
  },
  {
    title: "Tooling & Practices",
    items: ["Vite", "Git", "GitHub", "Jest", "Jira", "Postman", "Agile / Scrum"],
  },
];

/* Marquee row — short labels for the moving skills strip */
export const skillMarquee: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Redux Toolkit",
  "React Query",
  "Tailwind CSS",
  "Micro Frontends",
  "Module Federation",
  "Framer Motion",
  "WebRTC",
  "Node.js",
  "REST APIs",
  "Accessibility",
  "Performance",
];

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "NSP Global Tech",
    role: "Frontend Developer",
    period: "Jan 2026 — Present",
    location: "Bengaluru, India",
    current: true,
    highlights: [
      "Architecting the frontend of Assisto, an enterprise HRMS, with React, TypeScript, Redux Toolkit, React Query & Tailwind CSS.",
      "Built the platform as micro-frontends using Vite + Module Federation for independent, scalable module delivery across teams.",
      "Built a library of 30+ reusable, accessible components that cut feature-delivery time by ~25%.",
      "Shipped Onboarding, Offboarding, Performance Management (9-box matrices), and a cross-module Reports engine.",
      "Implemented RBAC and permission-driven UI; reduced initial load time by ~40% via code splitting, lazy loading & memoization.",
    ],
  },
  {
    company: "Techshed Technologies",
    role: "Frontend Developer",
    period: "Nov 2022 — Dec 2025",
    location: "Pune, India",
    highlights: [
      "Built enterprise-grade React, Next.js & TypeScript apps with reusable, component-based architecture and micro-frontend patterns.",
      "Integrated REST APIs (Spring Boot, Node.js) with JWT auth; built real-time features with WebRTC, STOMP.js & WebSockets.",
      "Converted Figma / Adobe XD designs into pixel-perfect, WCAG-accessible, cross-browser interfaces.",
      "Wrote Jest unit tests and collaborated in Agile/Scrum (team of 8) using Git, Jira & Postman.",
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  description: string;
  tags: string[];
  accent: "cyan" | "violet";
  featured?: boolean;
  links?: { live?: string; github?: string };
};

export const projects: Project[] = [
  {
    title: "Assisto HRMS",
    blurb: "Enterprise Human Resource Management System",
    description:
      "Full-scale HRMS covering onboarding, offboarding, performance management & reporting — with RBAC, OCR document review, e-signature flows, and a cross-module query builder.",
    tags: ["React", "TypeScript", "Module Federation", "Redux Toolkit", "React Query"],
    accent: "cyan",
    featured: true,
  },
  {
    title: "SuccessScript Services",
    blurb: "ATS resume builder & career platform · Freelance (UAE client)",
    description:
      "Solo-delivered the complete frontend for an Abu Dhabi career-services SaaS — an ATS-friendly online CV builder with live resume editing, multiple templates, profile management, and career-guidance pages. Built, shipped & deployed to production.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Responsive UI"],
    accent: "violet",
    featured: true,
    links: { live: "https://www.successscriptservices.com/" },
  },
  {
    title: "Video KYC Platform",
    blurb: "Real-time peer-to-peer video verification",
    description:
      "Live video KYC with WebRTC & STUN/TURN servers for secure, low-latency calls, plus role-based dashboards (Admin, Agent, Auditor) and OCR document verification.",
    tags: ["React", "WebRTC", "STOMP.js", "Spring Boot", "PostgreSQL"],
    accent: "violet",
    featured: true,
  },
  {
    title: "Liveliness Verification",
    blurb: "Multi-factor biometric e-KYC",
    description:
      "Multi-factor e-KYC system using facial landmark detection, voice-based OTP, and geolocation — with anti-spoofing, retry logic, and a scalable microservice backend.",
    tags: ["React", "Flask", "OpenCV", "Librosa"],
    accent: "cyan",
  },
  {
    title: "CareerSphere",
    blurb: "Job-search & career-coaching SaaS",
    description:
      "Complete React frontend for a career SaaS with client & admin dashboards, multi-step profiles, subscription management, payments, and an analytics-rich admin console.",
    tags: ["React", "React Router", "REST APIs"],
    accent: "violet",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;
