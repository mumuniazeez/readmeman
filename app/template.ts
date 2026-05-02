interface Template {
  key: string;
  title: string;
  description: string;
}

const templates: Template[] = [
  {
    key: "blank",
    title: "Blank",
    description: "Start from Scratch with an empty template",
  },
  {
    key: "cli-tool",
    title: "CLI Tool",
    description: "For CLI tools with installation and usage examples",
  },
  {
    key: "sass-app",
    title: "SaaS App",
    description: "For Web Applications and Saas products",
  },
  {
    key: "open-source",
    title: "Open Source Library",
    description: "For npm and reusable library",
  },
  {
    key: "api-backend",
    title: "API / Backend",
    description: "For REST APIs and backend services",
  },
  {
    key: "hackathon-project",
    title: "Hackathon Project",
    description: "For Hackathon submissions and weekend projects",
  },
];

export default templates;
