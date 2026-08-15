export type SkillCategory = {
  id: string;
  label: string;
  heading: string;
  chips: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Web",
    heading: "Web Development",
    chips: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "mobile",
    label: "Mobile",
    heading: "Mobile Development",
    chips: ["React Native", "Expo", "Android Studio"],
  },
  {
    id: "backend",
    label: "Backend",
    heading: "Backend",
    chips: ["Node.js", "Express.js", "Flask", "Laravel", "PHP", "JWT", "Auth0"],
  },
  {
    id: "data",
    label: "Databases",
    heading: "Databases & Caching",
    chips: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    id: "ai",
    label: "AI & ML",
    heading: "AI & Machine Learning",
    chips: ["Ollama", "AI Agents", "LangChain", "OpenAI Agent SDK", "MCP", "Pandas", "NumPy"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    heading: "Cloud & DevOps",
    chips: ["AWS", "Git", "GitHub"],
  },
  {
    id: "other",
    label: "Other",
    heading: "Tools & Automation",
    chips: ["Figma", "Power Apps", "Power Automate", "Arduino C"],
  },
];
