"use client";

import { useState } from "react";
import { skillCategories } from "@/lib/data";
import Reveal from "./Reveal";
import {
  SiReact, SiNextdotjs, SiTypescript, SiHtml5, SiCss, SiTailwindcss, SiJavascript,
  SiNodedotjs, SiExpress, SiFlask, SiLaravel, SiPhp, SiJsonwebtokens, SiAuth0,
  SiExpo, SiAndroidstudio, SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiGit, SiGithub, SiFigma, SiArduino, SiNumpy, SiPandas, SiHuggingface, SiOllama, SiLangchain
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { FaAws, FaRobot, FaNetworkWired, FaMicrosoft, FaCode } from "react-icons/fa";

const iconMap: Record<string, React.ElementType> = {
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "React Native": SiReact,
  "TypeScript": SiTypescript,
  "JavaScript": SiJavascript,
  "HTML5": SiHtml5,
  "CSS3": SiCss,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "Flask": SiFlask,
  "Laravel": SiLaravel,
  "PHP": SiPhp,
  "REST APIs": TbApi,
  "JWT": SiJsonwebtokens,
  "Auth0": SiAuth0,
  "Expo": SiExpo,
  "Android Studio": SiAndroidstudio,
  "LLMs": FaRobot,
  "LangChain": SiLangchain,
  "RAG": FaNetworkWired,
  "AI Agents": FaRobot,
  "Hugging Face": SiHuggingface,
  "Ollama": SiOllama,
  "NLP": FaNetworkWired,
  "Pandas": SiPandas,
  "NumPy": SiNumpy,
  "MongoDB": SiMongodb,
  "PostgreSQL": SiPostgresql,
  "MySQL": SiMysql,
  "Redis": SiRedis,
  "AWS": FaAws,
  "Git": SiGit,
  "GitHub": SiGithub,
  "Figma": SiFigma,
  "Power Apps": FaMicrosoft,
  "Power Automate": FaMicrosoft,
  "Arduino C": SiArduino,
};

const brandColors: Record<string, string> = {
  "React.js": "#61DAFB",
  "Next.js": "#FFFFFF",
  "React Native": "#61DAFB",
  "TypeScript": "#3178C6",
  "JavaScript": "#F7DF1E",
  "HTML5": "#E34F26",
  "CSS3": "#1572B6",
  "Tailwind CSS": "#06B6D4",
  "Node.js": "#5FA04E",
  "Express.js": "#FFFFFF",
  "Flask": "#FFFFFF",
  "Laravel": "#FF2D20",
  "PHP": "#777BB4",
  "REST APIs": "#06B6D4",
  "JWT": "#FB015B",
  "Auth0": "#EB5424",
  "Expo": "#4630EB",
  "Android Studio": "#3DDC84",
  "LLMs": "#A855F7",
  "LangChain": "#65D6AD",
  "RAG": "#10B981",
  "AI Agents": "#A855F7",
  "Hugging Face": "#FFD21E",
  "Ollama": "#FFFFFF",
  "NLP": "#10B981",
  "Pandas": "#E70488",
  "NumPy": "#4DABCF",
  "MongoDB": "#47A248",
  "PostgreSQL": "#4169E1",
  "MySQL": "#4479A1",
  "Redis": "#FF4438",
  "AWS": "#FF9900",
  "Git": "#F05032",
  "GitHub": "#FFFFFF",
  "Figma": "#F24E1E",
  "Power Apps": "#742774",
  "Power Automate": "#0066FF",
  "Arduino C": "#00878F",
};

export default function Skills() {
  const [active, setActive] = useState<string | null>(null);
  const [hoveredCat, setHoveredCat] = useState<string | null>(null);
  const [hoveredChip, setHoveredChip] = useState<string | null>(null);
  const activeChips = active
    ? (skillCategories.find((c) => c.id === active)?.chips ?? [])
    : [];

  // Which chips to highlight with brand color (only on tab hover)
  const hoveredChips = hoveredCat
    ? (skillCategories.find((c) => c.id === hoveredCat)?.chips ?? [])
    : [];
  
  // Flatten all chips from all categories for the Work Stack grid
  const allChips = Array.from(new Set(skillCategories.flatMap(c => c.chips)));

  return (
    <section id="skills" className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6 flex flex-col lg:flex-row gap-12 lg:gap-16">
        {/* Left Column */}
        <div className="lg:w-[32%] lg:min-w-0 flex flex-col gap-12">
          <div>
            <Reveal>
              <h2 className="text-3xl md:text-[40px] font-bold tracking-tight mb-8">My Skills</h2>
            </Reveal>
            <Reveal>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-2">I build things for the people</h3>
              <p className="text-lg italic text-muted-foreground font-serif">I can Design, Develop, Deploy</p>
            </Reveal>
          </div>
          <div className="hidden lg:flex flex-col gap-8 mt-4">
             <Reveal>
               <div className="font-bold text-lg flex items-center gap-4">
                 Skills <span className="text-muted-foreground/50">→</span>
               </div>
             </Reveal>
             <Reveal>
               <div className="font-bold text-lg flex items-center gap-4 mt-20">
                 Work Stack <span className="text-muted-foreground/50">→</span>
               </div>
             </Reveal>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="lg:flex-1 lg:min-w-0 flex flex-col gap-10">
          <Reveal>
            <p className="text-muted-foreground/90 leading-relaxed text-sm md:text-[15px] font-medium">
              My go-to stack is Next.js + TypeScript + Tailwind, built on a strong MERN foundation, with React Native for mobile, AWS for deployment and an AI toolkit (LLMs, RAG, LangChain) close at hand.
            </p>
          </Reveal>
          <Reveal>
            <p className="text-muted-foreground/90 leading-relaxed text-sm md:text-[15px] font-medium mt-[-16px]">
              I design unique UIs in Figma and build them with Tailwind, and I&apos;ve shipped AI projects like an LLM statement parser, an NLP chatbot and a face-recognition attendance system — certified in Oracle Agentic AI &amp; OCI AI Foundations.
            </p>
          </Reveal>

          {/* Mobile Labels (Hidden on lg+) */}
          <div className="font-bold text-lg flex items-center gap-4 lg:hidden mt-4">
            Skills <span className="text-muted-foreground/50">→</span>
          </div>

          <Reveal>
            <div className="flex flex-wrap gap-2.5" role="tablist" aria-label="Skill categories">
              {skillCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={active === cat.id}
                  onClick={() => setActive(prev => prev === cat.id ? null : cat.id)}
                  onMouseEnter={() => setHoveredCat(cat.id)}
                  onMouseLeave={() => setHoveredCat(null)}
                  className={`rounded-[10px] px-5 py-2 text-sm font-medium transition duration-300 ${
                    active === cat.id
                      ? "bg-gradient-to-r from-fuchsia-500 to-indigo-500 text-white shadow-lg"
                      : "bg-white/5 text-muted-foreground hover:bg-white/10 hover:text-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Mobile Labels (Hidden on lg+) */}
          <div className="font-bold text-lg flex items-center gap-4 lg:hidden mt-4">
            Work Stack <span className="text-muted-foreground/50">→</span>
          </div>

          <Reveal>
             <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-5 gap-x-4">
               {allChips.map(chip => {
                 const isActive = activeChips.includes(chip);
                 const isTabHovered = hoveredChips.includes(chip);
                 const isChipHovered = hoveredChip === chip;
                 const Icon = iconMap[chip] || FaCode;
                 const color = brandColors[chip] || "#a78bfa";

                 // Chip hover shows its unique brand colour; tab hover glows the category white
                 const inlineStyle: React.CSSProperties | undefined = isChipHovered
                   ? { color, opacity: 1, filter: "none" }
                   : isTabHovered
                     ? { color: "#ffffff", opacity: 1, filter: "none" }
                     : undefined;

                 return (
                   <div 
                     key={chip}
                     onMouseEnter={() => setHoveredChip(chip)}
                     onMouseLeave={() => setHoveredChip(null)}
                     className={`flex items-center gap-2.5 min-w-0 cursor-default transition-all duration-300 ${
                       active === null
                         ? "text-muted-foreground opacity-70"
                         : isActive ? "text-foreground opacity-100" : "text-muted-foreground opacity-30 grayscale"
                     }`}
                     style={inlineStyle}
                   >
                     <div className="flex items-center justify-center w-5 h-5 transition-colors duration-300 shrink-0">
                       <Icon className="text-lg" />
                     </div>
                     <span 
                       className={`text-sm leading-snug transition-colors duration-300 ${
                         isActive ? "font-bold" : "font-semibold"
                       }`}
                     >
                       {chip}
                     </span>
                   </div>
                 );
               })}
             </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}