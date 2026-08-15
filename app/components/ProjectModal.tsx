"use client";

import { useState, useEffect } from "react";
import { Project, siteTheme } from "@/lib/data";
import { FaTimes, FaChevronLeft, FaChevronRight, FaGithub } from "react-icons/fa";

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Create a combined media array: if project.media exists, use it.
  // Otherwise fallback to project.thumbnail as a single-item array, or empty.
  const mediaList = project.media?.length 
    ? project.media 
    : project.thumbnail 
      ? [{ type: "image" as const, url: project.thumbnail }] 
      : [];

  const hasMedia = mediaList.length > 0;
  const currentMedia = hasMedia ? mediaList[currentIndex] : null;

  // Handle manual next/prev
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % mediaList.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + mediaList.length) % mediaList.length);
  };

  // Slideshow auto-advance logic
  useEffect(() => {
    if (!hasMedia) return;

    // If current media is a video, we don't set an interval.
    // The video's onEnded event will handle the transition.
    if (currentMedia?.type === "video") return;

    // For images, auto-advance every 5 seconds
    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, hasMedia, currentMedia]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  // Prevent scroll on body when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 md:px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative z-10 flex w-[92vw] max-w-[1450px] flex-col overflow-hidden rounded-2xl border border-borderline bg-card shadow-2xl md:flex-row md:h-[85vh]">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-20 rounded-full bg-black/50 p-2 text-white/70 backdrop-blur-md transition-colors hover:bg-black/80 hover:text-white md:right-6 md:top-6"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {/* Left Side: Media Slideshow */}
        <div className="relative flex h-[300px] w-full shrink-0 items-center justify-center bg-black md:h-full md:w-[65%] lg:w-[70%]">
          {hasMedia ? (
            <>
              {currentMedia?.type === "video" ? (
                <video
                  key={currentMedia.url} // Force remount on URL change to ensure autoplay works reliably
                  src={currentMedia.url}
                  autoPlay
                  controls
                  muted // Often required for autoplay policies
                  className="h-full w-full object-contain"
                  onEnded={goToNext}
                />
              ) : (
                <img
                  key={currentMedia?.url}
                  src={currentMedia?.url}
                  alt={`${project.title} screenshot ${currentIndex + 1}`}
                  className="h-full w-full object-contain animate-in fade-in duration-500"
                />
              )}

              {/* Navigation Arrows (only if more than 1 media) */}
              {mediaList.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white/70 backdrop-blur-md transition-all hover:bg-black/80 hover:text-white hover:scale-110"
                    aria-label="Previous image"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white/70 backdrop-blur-md transition-all hover:bg-black/80 hover:text-white hover:scale-110"
                    aria-label="Next image"
                  >
                    <FaChevronRight />
                  </button>
                  
                  {/* Dots indicator */}
                  <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                    {mediaList.map((_, i) => (
                      <button
                        key={i}
                        onClick={(e) => { e.stopPropagation(); setCurrentIndex(i); }}
                        className={`h-2 rounded-full transition-all ${i === currentIndex ? 'w-6 bg-accent' : 'w-2 bg-white/50 hover:bg-white/80'}`}
                        aria-label={`Go to slide ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </>
          ) : (
            <div className={`flex h-full w-full flex-col items-center justify-center ${siteTheme.cardGradient}`}>
              <span className="text-7xl opacity-50 mb-4">{project.emoji}</span>
              <span className="text-muted/50 text-sm font-medium">No media available</span>
            </div>
          )}
        </div>

        {/* Right Side: Details */}
        <div className="flex h-full max-h-[50vh] w-full flex-col overflow-y-auto p-6 md:max-h-none md:w-[35%] lg:w-[30%] md:p-8 lg:p-10 custom-scrollbar">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-4xl">{project.emoji}</span>
            {project.badge && (
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                {project.badge}
              </span>
            )}
          </div>
          
          <h2 className="mb-2 text-2xl font-bold tracking-tight md:text-3xl">
            {project.title}
          </h2>
          
          <p className="mb-6 font-mono text-sm text-accent">
            {project.tags}
          </p>

          <div className="prose prose-invert mb-8 max-w-none text-sm text-muted/90 md:text-base leading-relaxed">
            <p>{project.detailedDescription || project.description}</p>
          </div>

          <div className="mt-auto">
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">Technologies</h4>
            <div className="mb-8 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-borderline bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-xl ${siteTheme.activeGradient} px-6 py-3 font-semibold text-white transition-all hover:scale-[1.02] ${siteTheme.activeShadow}`}
              >
                <FaGithub className="text-lg" />
                View Source on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
