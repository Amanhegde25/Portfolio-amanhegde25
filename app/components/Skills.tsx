"use client";

import { useState } from "react";
import { skillCategories, siteTheme } from "@/lib/data";
import Reveal from "./Reveal";
import {
  SiReact, SiNextdotjs, SiTypescript, SiHtml5, SiCss, SiTailwindcss, SiJavascript,
  SiNodedotjs, SiExpress, SiFlask, SiLaravel, SiPhp, SiJsonwebtokens, SiAuth0,
  SiExpo, SiAndroidstudio, SiMongodb, SiPostgresql, SiMysql, SiRedis,
  SiGit, SiGithub, SiFigma, SiArduino, SiNumpy, SiPandas, SiHuggingface, SiOllama, SiLangchain
} from "react-icons/si";
import { TbApi, TbBrandOpenai } from "react-icons/tb";
import { FaAws, FaRobot, FaNetworkWired, FaMicrosoft, FaCode, FaProjectDiagram } from "react-icons/fa";

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
  "OpenAI Agent SDK": TbBrandOpenai,
  "MCP": FaProjectDiagram,
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
  "OpenAI Agent SDK": "#10A37F",
  "MCP": "#3B82F6",
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
      <div className="mx-auto max-w-[1400px] px-6 flex flex-col">
        
        {/* Top Text Section */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <div className="lg:w-[32%] lg:min-w-0 flex flex-col gap-12">
            <div>
              <Reveal>
                <span className="mb-4 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent">
                  <span className="text-faint">( 02 )</span>
                  <span>Skills</span>
                </span>
                <h3 className="text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">My Skills</h3>
              </Reveal>
              <Reveal delay={120}>
                <h4 className="mt-6 text-xl md:text-2xl font-bold tracking-tight">I build things for the people</h4>
                <p className="mt-1 text-lg italic text-muted">I can Design, Develop, Deploy</p>
              </Reveal>
            </div>
          </div>
          
          <div className="lg:flex-1 lg:min-w-0 flex flex-col gap-4">
            <Reveal>
              <p className="text-muted leading-relaxed text-sm md:text-[15px] font-medium">
                My go-to stack is Next.js + TypeScript + Tailwind, built on a strong MERN foundation, with React Native for mobile, AWS for deployment and an AI toolkit (LLMs, RAG, LangChain) close at hand.
              </p>
            </Reveal>
            <Reveal>
              <p className="text-muted leading-relaxed text-sm md:text-[15px] font-medium">
                I design unique UIs in Figma and build them with Tailwind, and I&apos;ve shipped AI projects like an LLM statement parser, an NLP chatbot and a face-recognition attendance system — certified in Oracle Agentic AI &amp; OCI AI Foundations.
              </p>
            </Reveal>
          </div>
        </div>

        {/* Skills Tabs Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 mt-6 lg:mt-6">
          <div className="lg:w-[32%] lg:min-w-0">
             <div className="font-bold text-lg flex items-center lg:items-start gap-4 lg:mt-2">
               Skills <span className="text-muted/50">→</span>
             </div>
          </div>
          <div className="lg:flex-1 lg:min-w-0">
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
                        ? `${siteTheme.activeGradientReversed} text-white shadow-lg`
                        : "bg-background-soft text-muted hover:bg-card hover:text-foreground"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* Work Stack Grid Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 mt-10 lg:mt-10">
          <div className="lg:w-[32%] lg:min-w-0">
             <div className="font-bold text-lg flex items-center lg:items-start gap-4 lg:mt-2">
               Work Stack <span className="text-muted/50">→</span>
             </div>
          </div>
          <div className="lg:flex-1 lg:min-w-0">
            <Reveal>
               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-y-3 gap-x-3 md:gap-y-5 md:gap-x-4">
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
                            ? "text-muted opacity-70"
                            : isActive ? "text-foreground opacity-100" : "text-muted opacity-30 grayscale"
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
      </div>
    </section>
  );
}