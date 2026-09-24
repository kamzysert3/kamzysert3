/**
 * Single source of truth for all resume-backed content on this site.
 * Every section reads from here. Nothing resume-adjacent is hard-coded in
 * components. Numbers mirror the owner's resume exactly — do not add figures
 * that are not present in this file.
 */

export const SITE_URL = "https://kamsicho.vercel.app";

export const RESUME_URL = "/resume.pdf";
export const RESUME_FILENAME = "Kamsicho_Raymond_Nnaegbuna_Resume.pdf";

export const NAV_ITEMS: ReadonlyArray<{ href: string; label: string }> = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export interface ContactInfo {
  email: string;
  phone: string;
  phoneHref: string;
  linkedinUrl: string;
  githubUrl: string;
  location: string;
}

export interface Profile {
  name: string;
  shortName: string;
  headline: string;
  role: string;
  summary: string;
  about: string[];
  openToWork: boolean;
  contact: ContactInfo;
}

export const profile: Profile = {
  name: "Kamsicho Raymond Nnaegbuna",
  shortName: "Kamsicho Nnaegbuna",
  headline: "Software Engineer | AI/ML Developer",
  role: "Software Engineer",
  summary:
    "Software Engineer specializing in full-stack development and applied AI/ML, with experience building production web platforms, AI-powered systems, and backend infrastructure.",
  about: [
    "Software engineer building full-stack platforms and applied AI/ML — RAG pipelines, multi-agent orchestration, and real-time inference. I lead engineering at Eventix Africa and recently shipped Efinsuite's tax and accounting migration across 96 edge functions.",
    "Earlier: CI/CD and containerised Node services at Greysoft, Python test tooling at Emerging Trees, and TypeScript component work at CoLab.",
    "B.Sc. Software Engineering, Veritas University Abuja, CGPA 4.37.",
  ],
  openToWork: false,
  contact: {
    email: "Kamsinnaegbuna@gmail.com",
    phone: "+234 704 619 4679",
    phoneHref: "tel:+2347046194679",
    linkedinUrl: "https://linkedin.com/in/kamsicho-nnaegbuna",
    githubUrl: "https://github.com/kamzysert3",
    location: "Abuja, Nigeria",
  },
};

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  stack: string[];
  outcome: string;
  measure: string;
  method: string[];
}

export const experience: ReadonlyArray<Experience> = [
  {
    id: "efinsuite",
    role: "Software Engineer",
    company: "Efinsuite",
    location: "Remote",
    period: "Jul 2026 – Present",
    stack: ["React", "TypeScript", "Supabase", "Postgres", "Node.js", "Vercel"],
    outcome:
      "Shipped core features of eFinSuite — AI-powered accounting, payroll, tax, and treasury for multi-country organizations.",
    measure:
      "96 edge functions migrated in five phases; four slip types (T4, T4A, T5, T5018) integrated across two schema years.",
    method: [
      "Built features in React/TypeScript on Supabase (Postgres).",
      "Debugged a Postgres column-type mismatch and a Supabase Storage configuration error.",
      "Configured a custom API subdomain via Supabase Custom Domains.",
      "Led the Lovable-to-Vercel migration and the Supabase database migration.",
      "Integrating the CRA's draft 2027 XML schema for Electronic Filing of Information Returns.",
    ],
  },
  {
    id: "eventix",
    role: "CTO",
    company: "Eventix Africa",
    location: "Abuja",
    period: "Jun 2025 – Present",
    stack: ["React", "TypeScript", "Supabase Edge Functions", "Node.js", "Express", "Vercel", "GitHub CI/CD"],
    outcome: "Automated code generation, testing, and deployment with GitHub CI/CD and branch-per-feature isolation.",
    measure: "3x monthly deployments; 25% lower cloud spend.",
    method: [
      "Standardized PR workflows with automated checks across the React/TypeScript frontend and Supabase Edge Function backend.",
      "Migrated backend services to Vercel with Node/Express microservices.",
    ],
  },
  {
    id: "greysoft",
    role: "Back-End Developer",
    company: "Greysoft Technologies",
    location: "Kaduna",
    period: "Jul 2024 – Oct 2024",
    stack: ["Node.js", "Express", "TypeScript", "Docker", "MongoDB", "CI/CD"],
    outcome: "TypeScript REST APIs adopted by three frontend teams across two products.",
    measure: "API layer in use by three teams across two products.",
    method: [
      "Containerised Node/Express services with Docker in CI/CD.",
      "Applied MongoDB indexing and normalisation.",
    ],
  },
  {
    id: "emerging-trees",
    role: "Software Development Intern",
    company: "Emerging Trees LTD",
    location: "Kaduna",
    period: "Jul 2023 – Oct 2023",
    stack: ["Python", "Test scripting", "Code review"],
    outcome: "Reduced the bug backlog with Python test scripting.",
    measure: "Shorter QA cycles from reproducible test documentation.",
    method: [
      "Wrote Python test scripts for the QA pipeline.",
      "Produced reproducible test documentation.",
      "Ran peer code reviews.",
    ],
  },
  {
    id: "colab",
    role: "Frontend Developer",
    company: "CoLab Innovation Hub",
    location: "Kaduna",
    period: "Jul 2022 – Oct 2022",
    stack: ["React", "TypeScript", "REST APIs"],
    outcome: "TypeScript component architecture reduced UI rendering bugs.",
    measure: "Fewer UI rendering bugs across shipped interfaces.",
    method: [
      "Built responsive React interfaces consuming real-time REST data.",
    ],
  },
];

export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  domain: string;
  stat?: { value: string; label: string };
  codeUrl?: string;
  demoUrl?: string;
  note?: string;
}

export const projects: ReadonlyArray<Project> = [
  {
    id: "eventix",
    title: "Eventix Africa Platform",
    summary:
      "The event management platform I architect as CTO — automated CI/CD, branch-per-feature isolation, and edge-function backend.",
    tags: ["React", "TypeScript", "Supabase Edge Functions", "Vercel", "Node.js", "Express"],
    domain: "Events Platform",
    stat: { value: "3x", label: "monthly deployments" },
    demoUrl: "https://eventixafrica.com/",
  },
  {
    id: "maize",
    title: "Maize Leaf Virus Detection",
    summary:
      "On-device, real-time detection of maize leaf viruses with a YOLO v11 and Inception v4 pipeline exported to TFLite.",
    tags: ["YOLO v11", "Inception v4", "TFLite", "Computer Vision"],
    domain: "Computer Vision",
    stat: { value: "94%", label: "validation accuracy" },
    codeUrl: "https://github.com/kamzysert3/maize_leaf_virus_detection_api",
    demoUrl: "https://maize-leaf-virus-detection-api.onrender.com/docs",
  },
  {
    id: "chatroom",
    title: "AI-Powered Chatroom",
    summary:
      "Private and group messaging platform with a personalised Llama 3.1 agent layer, fine-tuned for low-latency responses.",
    tags: ["Next.js", "Flask", "Llama 3.1", "Multi-Agent"],
    domain: "AI Messaging",
    stat: { value: "<200ms", label: "message latency" },
    codeUrl: "https://github.com/kamzysert3/Chatroom-App",
  },
  {
    id: "nura",
    title: "Nura Assistant",
    summary:
      "Retrieval-augmented health assistant built on a LangChain RAG pipeline.",
    tags: ["Python", "RAG", "LangChain", "LLMs"],
    domain: "Conversational AI",
    stat: { value: "95%", label: "user satisfaction" },
    demoUrl: "https://nura-ai.onrender.com/docs",
    codeUrl: "https://github.com/kamzysert3/nura_ai",
  },
    {
    id: "storybook",
    title: "Adaptive Digital Storybook & Puzzle Game",
    summary:
      "Adaptive reading and puzzle experience with scikit-learn-inspired difficulty adjustment and OCR.",
    tags: ["React", "Adaptive difficulty", "OCR"],
    stat: { value: "85%", label: "user engagement" },
    domain: "Adaptive Learning",
  },
];

export type SkillClusterId = "ai" | "backend" | "frontend" | "data" | "devops";

export interface SkillCluster {
  id: SkillClusterId;
  label: string;
}

export const skillClusters: ReadonlyArray<SkillCluster> = [
  { id: "ai", label: "AI / ML" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "data", label: "Data" },
  { id: "devops", label: "DevOps" },
];

export interface SkillPoint {
  name: string;
  cluster: SkillClusterId;
  x: number;
  y: number;
}

/**
 * Hand-placed coordinates in a 1000 x 600 space. Purely illustrative — the
 * position of a skill says nothing about its real ranking. Nearest-neighbour
 * highlighting is computed from these coordinates at runtime.
 */
export const skillPoints: ReadonlyArray<SkillPoint> = [
  // AI/ML cluster
  { name: "PyTorch", cluster: "ai", x: 560, y: 130 },
  { name: "TensorFlow", cluster: "ai", x: 640, y: 100 },
  { name: "scikit-learn", cluster: "ai", x: 505, y: 205 },
  { name: "Computer Vision", cluster: "ai", x: 465, y: 95 },
  { name: "Deep Learning", cluster: "ai", x: 585, y: 55 },
  { name: "LLMs", cluster: "ai", x: 705, y: 160 },
  { name: "RAG", cluster: "ai", x: 770, y: 235 },
  { name: "Vector databases", cluster: "ai", x: 660, y: 290 },
  { name: "Multi-agent systems", cluster: "ai", x: 800, y: 330 },
  { name: "Model fine-tuning", cluster: "ai", x: 615, y: 200 },
  { name: "Prompt engineering", cluster: "ai", x: 700, y: 355 },
  { name: "Real-time inference", cluster: "ai", x: 755, y: 100 },
  // Backend cluster
  { name: "Node.js", cluster: "backend", x: 265, y: 195 },
  { name: "Express", cluster: "backend", x: 205, y: 250 },
  { name: "FastAPI", cluster: "backend", x: 330, y: 265 },
  { name: "Flask", cluster: "backend", x: 395, y: 315 },
  { name: "REST APIs", cluster: "backend", x: 170, y: 130 },
  { name: "AI moderation", cluster: "backend", x: 300, y: 165 },
  // Frontend cluster
  { name: "TypeScript", cluster: "frontend", x: 830, y: 470 },
  { name: "JavaScript", cluster: "frontend", x: 900, y: 540 },
  { name: "React", cluster: "frontend", x: 755, y: 505 },
  { name: "Next.js", cluster: "frontend", x: 800, y: 415 },
  { name: "HTML", cluster: "frontend", x: 950, y: 460 },
  { name: "CSS", cluster: "frontend", x: 935, y: 560 },
  // Data cluster
  { name: "MongoDB", cluster: "data", x: 420, y: 480 },
  { name: "SQL", cluster: "data", x: 355, y: 535 },
  { name: "Supabase (Postgres)", cluster: "data", x: 495, y: 545 },
  // DevOps cluster
  { name: "Docker", cluster: "devops", x: 140, y: 435 },
  { name: "CI/CD", cluster: "devops", x: 225, y: 385 },
  { name: "Git", cluster: "devops", x: 270, y: 485 },
  { name: "GitHub", cluster: "devops", x: 340, y: 425 },
];

export interface Education {
  degree: string;
  major: string;
  institution: string;
  location: string;
  status: string;
  graduatedDate: string;
  cgpa: number;
  coursework: string[];
}

export const education: Education = {
  degree: "B.Sc. Software Engineering",
  major: "Computer Software Engineering",
  institution: "Veritas University Abuja",
  location: "Abuja, Nigeria",
  status: "Graduated",
  graduatedDate: "Jul 2026",
  cgpa: 4.37,
  coursework: [
    "Machine Learning",
    "Data Structures",
    "Software Systems Engineering",
    "Database Management",
  ],
};

/**
 * First-glance figures for the hero. Every value is derived from the arrays
 * above, so the strip stays accurate as the data file changes — nothing is
 * typed twice.
 */
export const KEY_FIGURES: ReadonlyArray<{ value: string; label: string }> = [
  { value: String(projects.length), label: "products shipped" },
  { value: String(experience.length), label: "companies, intern → CTO" },
  { value: String(skillPoints.length), label: "tools on the map" },
  { value: String(skillClusters.length), label: "engineering domains" },
];