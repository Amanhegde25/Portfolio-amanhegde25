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
