"use client";

import { useState } from "react";
import { achievements, siteTheme, type Achievement } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import PlanetReveal from "./PlanetReveal";
import AchievementModal from "./AchievementModal";

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  return (
    <section id="achievements" className="snap-start snap-always section-pad bg-background-soft">
      <PlanetReveal>
        <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <SectionHeading
            num="( 05 )"
            tag="Achievements"
            title={
              <>
                Certifications &amp; <span className={siteTheme.textGradient}>highlights</span>
              </>
            }
          />
        </Reveal>

        <div className="grid gap-4 md:gap-6 md:grid-cols-3">
          {achievements.map((item) => (
            <Reveal key={item.title}>
              <div 
                className="group h-full cursor-pointer flex flex-col overflow-hidden rounded-2xl border border-borderline bg-card shadow-[0_12px_28px_rgba(0,0,0,0.28)] transition duration-400 hover:-translate-y-2 hover:border-blue-500/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
                onClick={() => setSelectedAchievement(item)}
              >
                {/* Thumbnail Area (Optional) */}
                {(item.thumbnail || item.media?.length) && (
                  <div className="relative h-48 w-full overflow-hidden bg-black/50 border-b border-borderline">
                    <img 
                      src={item.thumbnail || item.media?.[0]?.url || ""} 
                      alt={item.title} 
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" 
                    />
                  </div>
                )}
                
                {/* Content Area */}
                <div className="flex flex-1 flex-col p-5 md:p-8">
                  <span className="mb-4 self-start rounded-full border border-blue-500/30 bg-blue-500/15 px-3.5 py-1 font-mono text-xs uppercase tracking-[0.06em] text-blue-300">
                    {item.badge}
                  </span>
                  <h3 className="mb-2.5 text-lg font-bold leading-snug tracking-tight group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
      </PlanetReveal>

      {selectedAchievement && (
        <AchievementModal 
          achievement={selectedAchievement} 
          onClose={() => setSelectedAchievement(null)} 
        />
      )}
    </section>
  );
}