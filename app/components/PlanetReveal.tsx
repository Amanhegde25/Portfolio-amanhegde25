"use client";

import { useRef, type ReactNode } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PlanetReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!containerRef.current) return;

    const currentSection = containerRef.current.closest("section");
    if (!currentSection) return;

    // Single timeline that covers the full lifecycle of the section:
    // Phase 1 (enter): blurred & small → full size
    // Phase 2 (stay):  hold at full size while section is in view
    // Phase 3 (exit):  full size → shrinks back toward center
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: currentSection,
        start: "top bottom",    // Timeline starts when section top enters viewport bottom
        end: "bottom top",      // Timeline ends when section bottom leaves viewport top
        scrub: 1.5,
      },
    });

    // Phase 1: Enter — scale up and unblur (0% → 25% of timeline)
    tl.fromTo(
      containerRef.current,
      {
        scale: 0.88,
        opacity: 0,
        filter: "blur(6px)",
        rotationX: 4,
        transformPerspective: 1200,
        transformOrigin: "center center",
      },
      {
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
        rotationX: 0,
        ease: "power2.out",
        duration: 0.25,
      }
    );

    // Phase 2: Hold at full size (25% → 65% of timeline)
    tl.to(containerRef.current, {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      rotationX: 0,
      duration: 0.4, // Holds longer, starts shrinking higher up
    });

    // Phase 3: Exit — shrink back toward center (65% → 100% of timeline)
    tl.to(containerRef.current, {
      scale: 0.25, // Gets much smaller (more shorter) at the end
      opacity: 0.05,
      filter: "blur(12px)",
      rotationX: -3,
      transformPerspective: 1200,
      transformOrigin: "center center",
      ease: "power2.in",
      duration: 0.35,
    });
  }, []);

  return (
    <div ref={containerRef} className={className} style={{ willChange: "transform, opacity, filter" }}>
      {children}
    </div>
  );
}
