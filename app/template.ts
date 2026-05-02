import type { Badge, TechStack } from "./stores/useEditorStore";

export type TemplateType =
  | "blank"
  | "cli-tool"
  | "sass-app"
  | "open-source"
  | "api-backend"
  | "hackathon-project";

export interface TemplateData {
  projectName: string;
  description: string;
  logoUrl: string;
  badges: Badge[];
  aboutProject: string;
  features: string[];
  techStack: TechStack[];
  prerequisites: string;
  installation: string;
  usageInstallation: string;
  includeCodeExample: boolean;
  codeExample: string;
  contributing: string;
  license: string;
  acknowledgements: string[];
}

interface Template {
  type: TemplateType;
  title: string;
  description: string;
  data: TemplateData;
}

const defaultData: TemplateData = {
  projectName: "",
  description: "A short description of your project",
  logoUrl: "",
  badges: [],
  aboutProject: "Now a long one here",
  features: [],
  techStack: [],
  prerequisites: "",
  installation: "",
  usageInstallation: "",
  includeCodeExample: false,
  codeExample: "",
  contributing:
    "Contributions are welcome! Please open an issue or submit a PR.",
  license: "MIT",
  acknowledgements: [],
};

const templates: Template[] = [
  {
    type: "blank",
    title: "Blank",
    description: "Start from Scratch with an empty template",
    data: { ...defaultData, projectName: "Project Name" },
  },
  {
    type: "cli-tool",
    title: "CLI Tool",
    description: "For CLI tools with installation and usage examples",
    data: {
      ...defaultData,
      projectName: "SuperCLI",
      description:
        "A lightning-fast command line interface for automating daily tasks.",
      badges: [
        {
          name: "npm",
          image: "https://img.shields.io/npm/v/supercli",
          category: "version",
        },
      ],
      features: [
        "Interactive CLI prompts",
        "Configurable via .json",
        "Global binary support",
      ],
      techStack: [
        { name: "Node.js", icon: "nodejs" },
        { name: "Commander.js", icon: "terminal" },
      ],
      prerequisites: "Node.js v14 or higher",
      installation: "npm install -g supercli",
      usageInstallation: "supercli --init",
      includeCodeExample: true,
      codeExample: "supercli deploy --env production",
    },
  },
  {
    type: "sass-app",
    title: "SaaS App",
    description: "For Web Applications and Saas products",
    data: {
      ...defaultData,
      projectName: "SaaS Rocket",
      description:
        "The complete platform for managing customer relationships and analytics.",
      badges: [
        {
          name: "Build",
          image:
            "https://img.shields.io/github/actions/workflow/status/user/repo/main.yml",
          category: "status",
        },
      ],
      aboutProject:
        "This project provides a dashboard to monitor live metrics with integrated payment processing.",
      features: [
        "Multi-tenant architecture",
        "Stripe Integration",
        "Real-time Analytics",
      ],
      techStack: [
        { name: "React", icon: "react" },
        { name: "Tailwind CSS", icon: "tailwind" },
        { name: "PostgreSQL", icon: "postgresql" },
      ],
      prerequisites: "Docker and Node.js installed",
      installation: "git clone repo && npm install",
      usageInstallation: "npm run dev",
    },
  },
  {
    type: "open-source",
    title: "Open Source Library",
    description: "For npm and reusable library",
    data: {
      ...defaultData,
      projectName: "UtilityLib",
      description:
        "A lightweight, tree-shakable utility library for modern JavaScript projects.",
      badges: [
        {
          name: "License",
          image: "https://img.shields.io/github/license/user/repo",
          category: "legal",
        },
        {
          name: "Downloads",
          image: "https://img.shields.io/npm/dm/utilitylib",
          category: "stats",
        },
      ],
      features: [
        "Zero dependencies",
        "Full TypeScript support",
        "Supports ESM and CJS",
      ],
      techStack: [
        { name: "TypeScript", icon: "typescript" },
        { name: "Vitest", icon: "test" },
      ],
      installation: "npm install utilitylib",
      includeCodeExample: true,
      codeExample:
        "import { formatData } from 'utilitylib';\nconst result = formatData(input);",
    },
  },
  {
    type: "api-backend",
    title: "API / Backend",
    description: "For REST APIs and backend services",
    data: {
      ...defaultData,
      projectName: "Core API",
      description: "Scalable RESTful API powering mobile and web clients.",
      badges: [
        {
          name: "Coverage",
          image: "https://img.shields.io/codecov/c/github/user/repo",
          category: "quality",
        },
      ],
      features: [
        "JWT Authentication",
        "Rate Limiting",
        "Swagger Documentation",
      ],
      techStack: [
        { name: "NestJS", icon: "nestjs" },
        { name: "Redis", icon: "redis" },
        { name: "Prisma", icon: "prisma" },
      ],
      prerequisites: "PostgreSQL instance running",
      installation: "npm install && npx prisma migrate dev",
      usageInstallation:
        "The API will be available at http://localhost:3000/api",
    },
  },
  {
    type: "hackathon-project",
    title: "Hackathon Project",
    description: "For Hackathon submissions and weekend projects",
    data: {
      ...defaultData,
      projectName: "HackConnect",
      description:
        "Built for Global Hack 2024 to connect developers with social impact causes.",
      aboutProject:
        "Our team developed this in 48 hours to bridge the gap between non-profits and volunteer coders.",
      features: ["Social Login", "Project Matching Algorithm"],
      techStack: [
        { name: "Next.js", icon: "nextjs" },
        { name: "Supabase", icon: "supabase" },
      ],
      acknowledgements: ["The Hackathon Organizers", "Our Mentor Jane Doe"],
      license: "MIT",
    },
  },
];

export default templates;
