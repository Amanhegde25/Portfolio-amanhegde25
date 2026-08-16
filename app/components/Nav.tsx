"use client";

import { useEffect, useState } from "react";
import { navLinks, siteTheme } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Scroll progress calculation
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(Math.min(progress, 100));
      
      let current = "";
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Select section if its top is above 1/3rd of the viewport
          if (rect.top <= window.innerHeight / 3) {
            current = `#${section}`;
          }
        }
      }
      
      // If we are near the bottom of the page, select the last section
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        current = navLinks[navLinks.length - 1].href;
      }
      
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-borderline bg-background/75 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3.5">
        <a href="#home" className="flex items-center gap-2.5 font-bold tracking-tight">
          <span className={`grid h-7 w-7 place-items-center rounded-lg ${siteTheme.activeGradient} font-mono text-sm text-white`}>
            A
          </span>
          <span>Aman Arun Hegde</span>
        </a>

        <nav
          className={`fixed inset-x-0 top-[57px] flex flex-col items-center gap-1 border-b border-borderline bg-background-soft px-6 py-4 transition-transform duration-300 md:static md:inset-auto md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0 md:translate-y-0 ${
            open ? "translate-y-0" : "-translate-y-[130%]"
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href;
            
            return link.cta ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-full ${siteTheme.activeGradient} px-5 py-2.5 md:py-2 text-sm font-semibold text-white mt-2 md:mt-0`}
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`relative text-sm font-medium transition-colors hover:text-foreground py-3.5 md:py-0 w-full md:w-auto text-center ${
                  isActive ? "text-foreground" : "text-muted"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className={`absolute -bottom-1.5 left-1/2 h-[2.5px] w-1/2 -translate-x-1/2 ${siteTheme.activeGradient} rounded-full hidden md:block`} />
                )}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 rounded bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 rounded bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Scroll progress bar */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Page scroll progress"
      />
    </header>
  );
}