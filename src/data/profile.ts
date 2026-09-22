/**
 * =============================================================================
 *  PROFILE DATA   —  single source of truth for the whole website
 * =============================================================================
 *
 *   NOTE ON CONTENT
 *   ----------------------------------------------------------------------------
 *  LinkedIn blocks automated access (HTTP 999 bot protection), so the values
 *  below are *sample / placeholder* content designed to look professional and
 *  coherent. They are NOT verified facts about Janani Asokumar.
 *
 *  To make this a real, accurate website, open
 *  https://www.linkedin.com/in/janani-asokumar/ and replace every value below
 *  with the corresponding real data. Each section is commented so it is obvious
 *  where to edit.
 * =============================================================================
 */

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

export type SocialKind = "github" | "linkedin" | "email" | "twitter" | "globe";

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialKind;
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  start: string;
  end: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tech: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location: string;
  start: string;
  end: string;
  details: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: string[];
  repo?: string;
  live?: string;
  featured?: boolean;
}

export interface Profile {
  name: string;
  initials: string;
  role: string;
  tagline: string;
  location: string;
  email: string;
  available: string;
  /** Leave "" to hide the "Download resume" button, or set to a file in /public. */
  resumeUrl: string;
  about: string[];
  stats: { label: string; value: string }[];
  facts: string[];
  socials: SocialLink[];
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillGroup[];
  projects: Project[];
}

/* -------------------------------------------------------------------------- */
/*  Content — replace with Janani's real LinkedIn data                         */
/* -------------------------------------------------------------------------- */

export const profile: Profile = {
  /* ---- Identity --------------------------------------------------------- */
  name: "Janani Asokumar",
  initials: "JA",
  role: "Full-Stack Software Engineer",
  tagline:
   "I design and build fast, accessible, and delightful web applications — turning complex problems into clean, maintainable products.",
  location: "San Francisco, CA",
  email: "janani.asokumar@example.com",
  available: "Open to new opportunities",
   // Set to a PDF placed in /public (e.g. "/resume.pdf") to enable the button.
  resumeUrl: "",

  /* ---- About ------------------------------------------------------------ */
  about: [
   "I'm a software engineer who enjoys the full lifecycle of a product — from shaping ideas and designing APIs to shipping polished, well-tested front ends. I care deeply about developer experience, performance, and accessible interfaces that work for everyone.",
   "Over the years I've shipped features across teams, mentored newer engineers, and owned services end-to-end. I thrive in collaborative, fast-moving environments where quality and empathy for users go hand in hand.",
   "When I'm not coding you'll find me exploring typography, contributing to open source, or hunting for a good cup of coffee.",
  ],

  /* ---- Quick stats (optional; used in the Hero/About) ------------------- */
  stats: [
   { label: "Years of experience", value: "5+" },
   { label: "Projects shipped", value: "30+" },
   { label: "Open-source PRs", value: "40+" },
  ],

  /* ---- Quick facts (used in the About section) -------------------------- */
  facts: [
   "San Francisco, CA",
   "B.Sc. Computer Science",
   "TypeScript · React · Node.js",
   "Coffee-driven productivity",
  ],

  /* ---- Social links ----------------------------------------------------- */
  socials: [
   {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/janani-asokumar/",
    icon: "linkedin",
   },
   {
    label: "GitHub",
     // Placeholder — replace with Janani's real GitHub profile.
    href: "https://github.com/janani-asokumar",
    icon: "github",
   },
   {
    label: "Email",
    href: "mailto:janani.asokumar@example.com",
    icon: "email",
   },
  ],

   /* ---- Professional experience ---------------------------------------- */
  experience: [
    {
    role: "Senior Software Engineer",
    company: "Acme Cloud",
    location: "Remote",
    start: "2022",
    end: "Present",
    current: true,
    summary:
     "Lead engineer on the web platform team, owning the design system and the developer tooling used across the organization.",
    highlights: [
     "Drove a migration to a modern component library that cut feature delivery time by ~40%.",
     "Introduced end-to-end testing and CI gates, reducing production incidents by 60%.",
     "Mentored 5 engineers and led the weekly frontend guild.",
    ],
    tech: ["TypeScript", "React", "Next.js", "Node.js", "GraphQL"],
    },
    {
    role: "Software Engineer",
    company: "Brightwave Labs",
    location: "San Francisco, CA",
    start: "2020",
    end: "2022",
    summary:
     "Built customer-facing dashboards and internal tooling for a fast-growing SaaS product.",
    highlights: [
     "Shipped a real-time analytics dashboard adopted by 2,000+ users.",
     "Reduced initial page load by 55% through code-splitting and caching.",
     "Collaborated with design to launch a responsive redesign.",
    ],
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "AWS"],
    },
    {
    role: "Junior Software Engineer",
    company: "Northwind Systems",
    location: "Austin, TX",
    start: "2019",
    end: "2020",
    summary:
     "Started my career building APIs and supporting the migration of a legacy codebase.",
    highlights: [
     "Built REST APIs serving 100k+ requests/day.",
     "Automated release pipelines, saving the team several hours per week.",
    ],
    tech: ["JavaScript", "Node.js", "Express", "MongoDB"],
    },
   ],

   /* ---- Education ------------------------------------------------------ */
  education: [
    {
    degree: "B.Sc. in Computer Science",
    school: "University of California, Berkeley",
    location: "Berkeley, CA",
    start: "2015",
    end: "2019",
    details:
     "Focused on distributed systems, human–computer interaction, and algorithms. Graduated with honors.",
    },
    {
    degree: "Full-Stack Web Development",
    school: "Coding Bootcamp (Sample)",
    location: "Online",
    start: "2018",
    end: "2018",
    details:
     "Intensive program covering modern front-end and back-end development. Replace with any certifications or courses.",
    },
   ],

   /* ---- Skills --------------------------------------------------------- */
  skills: [
    { category: "Languages", items: ["TypeScript", "JavaScript", "Python", "Go"] },
    { category: "Frontend", items: ["React", "Next.js", "Tailwind CSS", "Redux", "Framer Motion"] },
    { category: "Backend", items: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB"] },
    { category: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel"] },
    { category: "Practices", items: ["Accessibility", "Testing", "Mentorship", "Agile", "Code Review"] },
   ],

   /* ---- Projects ------------------------------------------------------- */
  projects: [
    {
    name: "Aurora UI",
    description:
     "An open-source, accessible component library with 50+ themeable components built on React and Tailwind CSS.",
    tags: ["React", "TypeScript", "Tailwind"],
    repo: "https://github.com/janani-asokumar/aurora-ui",
    live: "https://example.com",
    featured: true,
    },
    {
    name: "TaskFlow",
    description:
     "A collaborative project-management app with real-time updates, drag-and-drop boards, and team analytics.",
    tags: ["Next.js", "WebSocket", "PostgreSQL"],
    live: "https://example.com",
    featured: true,
    },
    {
    name: "DevPulse",
    description:
     "A developer productivity dashboard that aggregates CI, PR, and deployment metrics into one clean view.",
    tags: ["Node.js", "GraphQL", "Chart.js"],
    repo: "https://github.com/janani-asokumar/devpulse",
    },
    {
    name: "SnapLearn",
    description:
     "A spaced-repetition flashcard app with offline support and a delightful mobile-first UI.",
    tags: ["React", "PWA", "IndexedDB"],
    live: "https://example.com",
    },
   ],
};

