export const profile = {
  name: "Aman Arun Hegde",
  firstName: "Aman",
  role: "Full Stack Developer & AI Enthusiast",
  email: "amanhegde2527@gmail.com",
  phone: "+91 75062 02138",
  phoneRaw: "+917506202138",
  github: "https://github.com/Amanhegde25",
  githubHandle: "github.com/Amanhegde25",
  linkedin: "https://www.linkedin.com/in/aman-hegde-748877324",
  linkedinHandle: "linkedin.com/in/aman-hegde",
  location: "Mumbai, India",
  cgpa: "8.47",
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact", cta: true },
];

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
    chips: ["React.js", "Next.js", "React Native", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"],
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
    chips: ["Expo", "Android Studio"],
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

export type Project = {
  title: string;
  emoji: string;
  tags: string;
  description: string;
  stack: string[];
  link?: string;
  linkLabel?: string;
  badge?: string;
  thumbnail?: string;
  media?: { type: "image" | "video"; url: string }[];
  detailedDescription?: string;
};

export const projects: Project[] = [
  {
    title: "Meeting Notes AI",
    emoji: "📝",
    tags: "Python · FastAPI · Ollama · LLMs",
    description:
      "Turn messy meeting notes into clean, well-organized PDFs using a local AI model (Ollama) running on your machine — fully offline, no data ever leaves your computer.",
    stack: ["Python", "FastAPI", "Ollama", "LLMs", "PDF generation"],
    link: "https://github.com/Amanhegde25/meeting-notes-ai",
    linkLabel: "GitHub ↗",
    thumbnail: "/project-media/meeting-notes-ai.png",
    media: [
      { type: "image", url: "/project-media/meeting-notes-ai.png" },
      { type: "image", url: "https://placehold.co/600x400/1e1e2e/a78bfa?text=Image+2" },
      { type: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" }
    ],
    detailedDescription: "Meeting Notes AI is an offline-first desktop solution that leverages local Large Language Models (LLMs) via Ollama to transform raw, unstructured meeting transcripts into cleanly formatted PDF documents. Security and privacy are at its core—no data is sent to external APIs. The Python and FastAPI backend efficiently orchestrates document generation."
  },
  {
    title: "TheraMind",
    emoji: "🧠",
    tags: "Python · NLP · Transformers",
    description:
      "AI chatbot for mental health support using NLP and sentiment analysis, with emotional classification (stress, anxiety, etc.) powered by Hugging Face Transformers and spaCy.",
    stack: ["Python", "Pandas", "NumPy", "NLTK", "spaCy", "Hugging Face", "Next.js"],
    link: "https://github.com/Amanhegde25/TheraMind",
    linkLabel: "GitHub ↗",
  },
  {
    title: "IDENTI-SCAN",
    emoji: "👁️",
    tags: "Python · OpenCV · Haar Cascades",
    description:
      "Automated attendance system using real-time facial recognition. Captures and matches facial features via Haar cascade classifiers to verify identity and mark attendance automatically.",
    stack: ["Python", "OpenCV", "Haar Cascades", "NumPy", "Pandas"],
    link: "https://github.com/Amanhegde25/IDENTI-SCAN",
    linkLabel: "GitHub ↗",
  },
  {
    title: "PDF Manager",
    emoji: "🗂️",
    tags: "Python · Flask · PDF",
    description:
      "Sleek Flask web app to merge, reorder, preview and password-protect documents — with drag & drop uploads, Word/Image-to-PDF conversion, AES encryption and no data stored after download.",
    stack: ["Python", "Flask", "AES encryption", "JavaScript"],
    link: "https://github.com/Amanhegde25/Pdf-Manager",
    linkLabel: "GitHub ↗",
  },
  {
    title: "Statement Parser",
    emoji: "📄",
    tags: "Python · Flask · Ollama · LLMs",
    description:
      "AI-powered financial statement parser that extracts structured transaction data from credit card statement PDFs using local LLMs (Llama 3.2) — an offline, privacy-preserving pipeline with no cloud APIs.",
    stack: ["Python", "Flask", "Ollama", "Llama 3.2", "pdfplumber", "Jinja2"],
    link: "https://github.com/Amanhegde25/Statement-Parser",
    linkLabel: "GitHub ↗",
  },
  {
    title: "PhotoGallery",
    emoji: "🖼️",
    tags: "Python · Flask · Auth",
    description:
      "Photo gallery web app built with Flask — authenticated users can upload, browse and edit images through a clean template-driven interface.",
    stack: ["Python", "Flask", "SQLite", "HTML/CSS/JS"],
    link: "https://github.com/Amanhegde25/PhotoGallery",
    linkLabel: "GitHub ↗",
  },
  {
    title: "Student Exam Performance Predictor",
    emoji: "📊",
    tags: "Python · ML · Flask",
    description:
      "End-to-end machine learning project predicting student exam performance — complete pipeline with EDA, training and evaluation, served through a Flask web interface.",
    stack: ["Python", "pandas", "scikit-learn", "Flask", "ML pipeline"],
    link: "https://github.com/Amanhegde25/Student-Exam-Performance-Predictor",
    linkLabel: "GitHub ↗",
  },
  {
    title: "Cricket Data Analysis",
    emoji: "🏏",
    tags: "Python · pandas · ETL",
    description:
      "Processed raw T20 World Cup cricket data into clean dimensional and fact tables — batting summaries, bowling summaries, match results and player info (JSON → CSV ETL).",
    stack: ["Python", "pandas", "Jupyter", "JSON → CSV"],
    link: "https://github.com/Amanhegde25/Cricket_DataAnalysis",
    linkLabel: "GitHub ↗",
  },
  // {
  //   title: "MED-TRACKER",
  //   emoji: "💊",
  //   tags: "React · JavaScript",
  //   description:
  //     "Simple React app to help you keep track of your medications — built with Create React App.",
  //   stack: ["React.js", "Create React App", "JavaScript"],
  //   link: "https://github.com/Amanhegde25/MED-TRACKER",
  //   linkLabel: "GitHub ↗",
  // },
  // {
  //   title: "Avinex",
  //   emoji: "🌐",
  //   tags: "PHP · MySQL",
  //   description:
  //     "PHP web application with dynamic pages, user authentication and shared components (header, navbar, database layer), backed by a MySQL schema.",
  //   stack: ["PHP", "MySQL", "HTML/CSS/JS"],
  //   link: "https://github.com/Amanhegde25/Avinex",
  //   linkLabel: "GitHub ↗",
  // },
  {
    title: "Message App",
    emoji: "💬",
    tags: "Laravel · PHP · Realtime",
    description:
      "A WhatsApp-style messaging application built with Laravel — conversations, contacts and realtime chat in a clean PHP ecosystem.",
    stack: ["Laravel", "PHP", "MySQL", "Blade"],
    link: "https://github.com/Amanhegde25/Message-App",
    linkLabel: "GitHub ↗",
  }
];

export type Experience = {
  role: string;
  org: string;
  date: string;
  points: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    role: "Full Stack Development Intern",
    org: "Gourmet Gambit PVT LTD",
    date: "Jan 2026 — Present",
    points: [
      "Building an AI-powered chess learning platform using React Native, Node.js and MongoDB.",
      "Developed scalable RESTful APIs for authentication, reels, comments and user engagement.",
      "Implemented role-based access control with an admin dashboard.",
      "Engineered interactive chessboard modules for GM game replays, puzzles and analysis.",
      "Integrated AI for move evaluation, blunder detection, personalized training and game insights.",
    ],
    stack: ["Expo", "Android Studio", "AWS", "Auth0", "Redis"],
  },
  {
    role: "Intern",
    org: "IDIOLISE SOLUTIONS",
    date: "3 Weeks",
    points: [
      "Developed software bots using Microsoft Power Automate & Power Apps to implement hyperautomation.",
      "Orchestrated end-to-end workflows: form automation, database sync, web scraping, API integrations and BPA.",
      "Designed scalable low-code solutions to optimize operational efficiency.",
    ],
    stack: ["Power Apps", "Power Automate"],
  },
  {
    role: "AI & MERN Stack Developer",
    org: "KJ Somaiya College of Engineering",
    date: "Mar 2025 — Jun 2025",
    points: [
      "Developed an AI-powered Faculty Performance Management System on the MERN stack.",
      "Engineered secure RESTful APIs, MongoDB schemas and a responsive React.js dashboard with RBAC.",
      "Integrated Generative AI (LLMs) to summarize achievements, answer queries and generate insights.",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "LLMs"],
  },
  {
    role: "Coding Team Member — ROBOCON",
    org: "KJSCE",
    date: "3 Months",
    points: [
      "Programmed Arduino microcontrollers for bot movement and sensor integration.",
      "Collaborated with mechanical/electronics teams on automation features.",
    ],
    stack: ["Arduino", "TinkerCAD"],
  },
];

export type Achievement = {
  badge: string;
  title: string;
  description: string;
  thumbnail?: string;
  media?: { type: "image" | "video"; url: string }[];
  detailedDescription?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    badge: "Oracle",
    title: "Agentic AI Certified Foundations Associate",
    description:
      "Certified in agentic AI concepts, design patterns and tooling for building autonomous intelligent systems.",
    media: [
      { type: "image", url: "/Certifications-media/Oracle Agentic AI Certified Foundations Associate.png" }
    ],
    thumbnail: "/Certifications-media/Oracle Agentic AI Certified Foundations Associate.png",
  },
  {
    badge: "Oracle",
    title: "Cloud Infrastructure AI Foundations",
    description: "Foundations in Oracle Cloud AI services and infrastructure for deploying AI workloads.",
    media:[{
      type:"image",
      url:"/Certifications-media/Oracle Cloud Infrastructure Certified AI Foundations Associate.png"
    }],
    thumbnail:"/Certifications-media/Oracle Cloud Infrastructure Certified AI Foundations Associate.png",
  },
];

export const aboutFacts = [
  { label: "CGPA", value: "8.47 / 10" },
  { label: "Focus", value: "AI Agents, RAG, MERN" },
  { label: "Location", value: "Mumbai, India" },
  { label: "Open to", value: "Dev roles & collabs" },
];