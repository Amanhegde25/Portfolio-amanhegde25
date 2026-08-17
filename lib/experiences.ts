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
      "Built an AI-powered chess learning platform using React Native, Node.js, and MongoDB, developing RESTful APIs for authentication, reels, comments, and user engagement with role-based admin controls.",
      "Engineered interactive chessboard modules for replays, puzzles, and analysis, integrating AI for move evaluation, blunder detection, personalized training, and game insights."
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
