"use client";

import { useState } from "react";
import { projects, siteTheme } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import ProjectModal from "./ProjectModal";
import type { Project } from "@/lib/data";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? projects : projects.slice(0, 5);

  return (
    <section id="projects" className="section-pad bg-background-soft">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <SectionHeading
            num="( 03 )"
            tag="Selected Work"
            title={
              <>
                Built in <span className={siteTheme.textGradient}>code, made to work</span>
              </>
            }
            sub="AI pipelines, realtime apps and data tools — pick any project to see the full story."
          />
        </Reveal>

        {/* Numbered project rows */}
        <div className="border-t border-borderline">
          {visible.map((project, i) => (
            <Reveal key={project.title} delay={i * 60}>
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                className="group grid w-full cursor-pointer grid-cols-[44px_1fr_auto] items-start gap-4 border-b border-borderline py-6 text-left transition-colors duration-300 hover:bg-white/[0.02] md:grid-cols-[64px_1fr_80px] md:gap-8 md:py-8"
              >
                {/* Number */}
                <span
                  className={`font-mono text-sm tabular-nums transition-colors duration-300 pt-1 ${
                    i < 9 ? "text-faint" : "text-faint/60"
                  } group-hover:text-accent`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Title + Meta + Accordion Thumbnail */}
                <span className="min-w-0 flex flex-col">
                  <span className="block truncate text-xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-3xl">
                    {project.title}
                  </span>
                  <span className="mt-1.5 block font-mono text-xs uppercase tracking-[0.1em] text-faint">
                    {project.tags}
                  </span>

                  {/* Expanding Accordion Thumbnail */}
                  {project.thumbnail && (
                    <div className="grid grid-rows-[0fr] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:grid-rows-[1fr]">
                      <div className="overflow-hidden">
                        <div className="mt-6 aspect-video w-full md:w-[65%] rounded-xl border border-white/10 bg-card overflow-hidden shadow-2xl">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={project.thumbnail}
                            alt=""
                            className="h-full w-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </span>

                {/* Arrow */}
                <span className="flex items-center justify-end">
                  <span
                    className={`grid h-10 w-10 shrink-0 place-items-center rounded-full border border-borderline text-muted transition-all duration-300 group-hover:-rotate-45 group-hover:border-accent group-hover:bg-accent group-hover:text-white ${
                      selectedProject === project ? "bg-accent text-white" : ""
                    }`}
                  >
                    <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M2 8h12m0 0L9 3m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>

        {/* Show All / Show Less toggle */}
        {projects.length > 5 && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((v) => !v)}
              className="link-underline inline-flex items-center gap-2 px-2 py-1 text-sm font-semibold text-muted transition hover:text-foreground"
            >
              {showAll ? "Show Less" : `Show All Projects (${projects.length})`}
              <svg
                width="13"
                height="13"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className={`transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
              >
                <path d="M3 5.5L7 9.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        )}
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