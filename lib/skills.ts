export type SkillCategory = {
  id: string;
  label: string;
  heading: string;
  chips: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    heading: "Frontend",
    chips: ["React.js", "Next.js",  "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    id: "backend",
    label: "Backend",
    heading: "Backend",
    chips: ["Node.js", "Express.js", "Flask", "Laravel", "PHP", "REST APIs", "JWT", "Auth0"],
  },
  {
    id: "mobile",
    label: "Mobile",
    heading: "Mobile Development",
    chips: ["React Native", "Expo", "Android Studio"],
  },
  {
    id: "ai",
    label: "AI & ML",
    heading: "AI & Machine Learning",
    chips: ["LLMs", "LangChain", "RAG", "AI Agents", "Hugging Face", "Ollama", "NLP", "Pandas", "NumPy"],
  },
  {
    id: "data",
    label: "Databases",
    heading: "Databases & Caching",
    chips: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
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
