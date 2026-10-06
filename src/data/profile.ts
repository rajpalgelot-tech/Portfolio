/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  RAJPAL'S PORTFOLIO — ALL PERSONAL CONTENT LIVES IN THIS ONE FILE.
 *
 *  Edit the values below and the whole site updates. No other file needs
 *  to be touched for day-to-day changes.
 *  (Colors are an exception: see src/app/globals.css → "CHANGE ACCENT".)
 * ─────────────────────────────────────────────────────────────────────────────
 */

export type TimelineItem = {
  /** Job/degree/certificate title, e.g. "Software Developer" */
  designation: string;
  /** Organisation + period, e.g. "@Wimetrix | 2022 - Present" */
  place: string;
  /** Optional bullet points (Education usually has none) */
  points?: string[];
};

export type TimelineEntry = {
  /** Big heading, e.g. "Experience" */
  heading: string;
  items: TimelineItem[];
};

export type TechItem = {
  /** Tooltip label shown on hover */
  name: string;
  /** Icon key — must exist in src/components/iconMap.tsx */
  icon: string;
  /** Brand color used for the tile's glow */
  color: string;
};

export type TechGroup = {
  label: string;
  items: TechItem[];
};

export const profile = {
  // ── Identity ─────────────────────────────────────────────────────────────
  /** Big word in the hero (usually the first name, shown in CAPS) */
  firstName: "Rajpal",
  /** Full name, used in the browser tab title and meta tags */
  fullName: "Rajpal Gelot",
  /** Hero subtitle and tab title, e.g. "Software Developer" */
  role: "Software Developer",

  // ── About section: short bio card (2–3 short paragraphs work best) ───────
  intro: [
    "👋 Hey, I'm Rajpal Gelot, a Software Developer.",
    "I love writing code and building software that solves real problems — fast, reliable and user-friendly.",
    "I like solving problems, learning new things, and experimenting with different technologies. When I'm not coding, I'm probably working on a side project or exploring something new.",
  ],

  // ── Timeline (Experience / Certification / Education …) ──────────────────
  timeline: [
    {
      heading: "Experience",
      items: [
        {
          designation: "Software Developer",
          place: "@Company Name | 2023 - Present", // TODO: real company + dates
          points: [
            // TODO: replace with Rajpal's real work bullets
            "Built and shipped production software end to end, from database schema to polished UI.",
            "Designed and developed responsive, accessible interfaces with React and TypeScript.",
            "Collaborated with a small team using Git, code reviews and agile sprints.",
          ],
        },
      ],
    },
    {
      heading: "Certification",
      items: [
        {
          designation: "Software Development Certification", // TODO: real title
          place: "Issuing Organisation | 2022 - 2023", // TODO: real issuer + dates
          points: [
            // TODO: replace with Rajpal's real certification details
            "Completed an intensive software development program covering frontend, backend and databases.",
            "Built and presented a capstone project as part of the final assessment.",
          ],
        },
      ],
    },
    {
      heading: "Education",
      items: [
        {
          designation: "Bachelor of Science in Computer Science (BSCS)", // TODO: real degree
          place: "University Name | 2020 - 2024", // TODO: real university + dates
        },
      ],
    },
  ] as TimelineEntry[],

  // ── Tech stack (icon keys come from src/components/iconMap.tsx) ──────────
  techGroups: [
    {
      label: "Core Stack I Work With",
      items: [
        { name: "C++", icon: "cplusplus", color: "#649ad2" },
        { name: "Python", icon: "python", color: "#ffd845" },
        { name: "JavaScript", icon: "javascript", color: "#f7df1e" },
        { name: "TypeScript", icon: "typescript", color: "#3178c6" },
        { name: "React JS", icon: "react", color: "#61dafb" },
        { name: "Node JS", icon: "nodejs", color: "#5fa04e" },
      ],
    },
    {
      label: "UI & Styling",
      items: [
        { name: "HTML5", icon: "html5", color: "#e8622c" },
        { name: "CSS3", icon: "css3", color: "#3c99d4" },
        { name: "Tailwind CSS", icon: "tailwind", color: "#38bdf8" },
        { name: "Bootstrap", icon: "bootstrap", color: "#a373e8" },
      ],
    },
    {
      label: "Databases I Use",
      items: [
        { name: "MySQL", icon: "mysql", color: "#0e7bb8" },
        { name: "MongoDB", icon: "mongodb", color: "#47a248" },
        { name: "PostgreSQL", icon: "postgresql", color: "#699eca" },
      ],
    },
  ] as TechGroup[],

  // ── Social links (hero icon buttons) ─────────────────────────────────────
  socials: {
    github: "https://github.com/rajpalgelot-tech",
    linkedin: "https://www.linkedin.com/in/rajpal-gelot-825b29298",
    email: "mailto:rajpalgelot16705@gmail.com",
  },

  // ── "⭐ Star this repo" corner ribbon (set to "" to hide the ribbon) ──────
  repoUrl: "https://github.com/rajpalgelot-tech/Portfolio",

  // ── SEO ──────────────────────────────────────────────────────────────────
  metaDescription:
    "Explore Rajpal Gelot's portfolio — a Software Developer building modern, reliable applications with C++, Python, React and Node.js.",
};
