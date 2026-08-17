"use client";

import { useState, useEffect } from "react";
import { Achievement, siteTheme } from "@/lib/data";
import { FaTimes, FaChevronLeft, FaChevronRight, FaExternalLinkAlt } from "react-icons/fa";
import { useLenis } from "lenis/react";

interface AchievementModalProps {
  achievement: Achievement;
  onClose: () => void;
}

export default function AchievementModal({ achievement, onClose }: AchievementModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const lenis = useLenis();
  
  // Create a combined media array: if achievement.media exists, use it.
  // Otherwise fallback to achievement.thumbnail as a single-item array, or empty.
  const mediaList = achievement.media?.length 
    ? achievement.media 
    : achievement.thumbnail 
      ? [{ type: "image" as const, url: achievement.thumbnail }] 
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

    if (currentMedia?.type === "video") return;

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
    if (lenis) {
      lenis.stop();
    }
    return () => {
      document.body.style.overflow = "auto";
      if (lenis) {
        lenis.start();
      }
    };
  }, [lenis]);

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
                  key={currentMedia.url}
                  src={currentMedia.url}
                  autoPlay
                  controls
                  muted
                  className="h-full w-full object-contain"
                  onEnded={goToNext}
                />
              ) : (
                <img
                  key={currentMedia?.url}
                  src={currentMedia?.url}
                  alt={`${achievement.title} certificate ${currentIndex + 1}`}
                  className="h-full w-full object-contain animate-in fade-in duration-500"
                />
              )}

              {mediaList.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToPrev(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white/70 backdrop-blur-md transition-all hover:bg-black/80 hover:text-white hover:scale-110"
                    aria-label="Previous media"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); goToNext(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-3 text-white/70 backdrop-blur-md transition-all hover:bg-black/80 hover:text-white hover:scale-110"
                    aria-label="Next media"
                  >
                    <FaChevronRight />
                  </button>
                  
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
              <span className="text-7xl opacity-50 mb-4">🏆</span>
              <span className="text-muted/50 text-sm font-medium">No certificate preview available</span>
            </div>
          )}
        </div>

        {/* Right Side: Details */}
        <div className="flex h-full max-h-[50vh] w-full flex-col overflow-y-auto p-6 md:max-h-none md:w-[35%] lg:w-[30%] md:p-8 lg:p-10 custom-scrollbar">
          <div className="mb-4">
            <span className="inline-block rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              {achievement.badge}
            </span>
          </div>
          
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl">
            {achievement.title}
          </h2>
          
          <div className="prose prose-invert mb-8 max-w-none text-sm text-muted/90 md:text-base leading-relaxed">
            <p>{achievement.detailedDescription || achievement.description}</p>
          </div>

          <div className="mt-auto">
            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex w-full items-center justify-center gap-2 rounded-xl ${siteTheme.activeGradient} px-6 py-3 font-semibold text-white transition-all hover:scale-[1.02] ${siteTheme.activeShadow}`}
              >
                View Certificate <FaExternalLinkAlt className="text-sm" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
