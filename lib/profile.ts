export const siteTheme = {
  // Brand gradient (used for buttons and active states)
  activeGradient: "bg-gradient-to-r from-blue-500 to-blue-700",
  activeGradientReversed: "bg-gradient-to-r from-blue-700 to-blue-500",
  
  // Shadow used for primary buttons
  activeShadow: "shadow-[0_10px_30px_rgba(59,130,246,0.35)] hover:shadow-[0_16px_40px_rgba(59,130,246,0.5)]",
  
  // Background gradient for cards (translucent)
  cardGradient: "bg-gradient-to-br from-blue-500/10 to-blue-700/10",
  
  // Background gradient for project cards
  projectGradient: "bg-gradient-to-br from-blue-500/20 via-blue-600/10 to-transparent",
  projectGradientHover: "bg-gradient-to-br from-blue-500/25 via-blue-600/15 to-transparent",
  
  // Timeline line gradient
  timelineGradient: "bg-gradient-to-b from-blue-400 to-blue-700 to-transparent",

  // Background blobs in Hero section
  blob1: "bg-blue-500",
  blob2: "bg-blue-700",
  
  // Text gradient for Hero section
  textGradient: "bg-gradient-to-r from-blue-400 to-blue-600 text-transparent bg-clip-text",
};

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
  { label: "About Me", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Contact", href: "#contact", cta: true },
];

export const aboutFacts = [
  { label: "CGPA", value: "8.47 / 10" },
  { label: "Focus", value: "AI Agents, RAG, MERN" },
  { label: "Location", value: "Mumbai, India" },
  { label: "Open to", value: "Dev roles & collabs" },
];
