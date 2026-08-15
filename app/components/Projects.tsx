"use client";

import { useState } from "react";
import { projects, siteTheme } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/lib/data";

export default function Projects() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featured = projects[0];
  const rest = projects.slice(1);

  return (
    <section id="projects" className="section-pad bg-background-soft">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <SectionHeading
            tag="Projects"
            title={
              <>
                Things I&apos;ve <span className={siteTheme.textGradient}>built &amp; shipped</span>
              </>
            }
          />
        </Reveal>

        {/* Featured Project (first one) */}
        <Reveal>
          <div
            onClick={() => setSelectedProject(featured)}
            className="group relative mb-8 block overflow-hidden rounded-2xl border border-borderline bg-card transition-all duration-500 hover:border-accent/50 hover:shadow-[0_30px_80px_rgba(0,0,0,0.5)] cursor-pointer"
          >
            {/* Image Area */}
            <div className="relative h-[280px] md:h-[380px] overflow-hidden">
              {featured.thumbnail ? (
                <img
                  src={featured.thumbnail}
                  alt={featured.title}
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={`h-full w-full ${siteTheme.projectGradient} flex items-center justify-center`}>
                  <span className="text-7xl select-none opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{featured.emoji}</span>
                </div>
              )}
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />

              {/* Content overlaid at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-3">
                  {featured.badge && (
                    <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-3 py-1 text-xs font-semibold text-emerald-400">
                      {featured.badge}
                    </span>
                  )}
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-muted backdrop-blur-sm">
                    Featured
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
                  {featured.title}
                </h3>
                <p className="mt-1 font-mono text-sm text-accent/80">{featured.tags}</p>
                <p className="mt-3 max-w-2xl text-sm md:text-base text-muted leading-relaxed">{featured.description}</p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  {featured.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-muted backdrop-blur-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {featured.link && (
                    <span className="ml-auto inline-flex items-center gap-2 text-sm font-semibold text-accent opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                      View Project <FaExternalLinkAlt className="text-xs" />
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Rest of Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <Reveal key={project.title}>
              <div
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-borderline bg-card transition-all duration-400 hover:-translate-y-2 hover:border-accent/40 hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)] cursor-pointer"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image / Placeholder */}
                <div className="relative h-[180px] overflow-hidden">
                  {project.thumbnail ? (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    />
                  ) : (
                    <div className={`h-full w-full flex items-center justify-center transition-all duration-500 ${
                      hoveredIdx === i
                        ? siteTheme.projectGradientHover
                        : "bg-gradient-to-br from-white/[0.03] via-white/[0.01] to-transparent"
                    }`}>
                      <span className={`text-5xl select-none transition-all duration-500 ${
                        hoveredIdx === i ? "opacity-100 scale-110" : "opacity-40 scale-100"
                      }`}>
                        {project.emoji}
                      </span>
                    </div>
                  )}
                  {/* Bottom gradient fade */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent" />

                  {/* Badge / Link overlay */}
                  <div className="absolute top-4 right-4 flex items-center gap-2">
                    {project.badge && (
                      <span className="rounded-full bg-black/50 border border-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                        {project.badge}
                      </span>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-8 w-8 place-items-center rounded-full bg-black/50 border border-white/10 text-white/70 backdrop-blur-sm transition-all duration-300 hover:bg-accent hover:text-white hover:border-accent z-10"
                        aria-label={`View ${project.title} on GitHub`}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="text-sm" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 pt-2">
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-accent/70">{project.tags}</p>
                  <p className="mt-3 flex-1 text-sm text-muted leading-relaxed">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-borderline bg-white/[0.04] px-2 py-1 text-[11px] font-medium text-muted transition-colors duration-300 group-hover:border-accent/20 group-hover:text-foreground/70"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom accent line on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] ${siteTheme.activeGradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
}