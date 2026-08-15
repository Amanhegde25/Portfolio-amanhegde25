"use client";

import { useState, useEffect } from "react";
import { profile, siteTheme } from "@/lib/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const phrases = [
  "hello world",
  "['React', 'Next.js', 'AI']",
  "const role = 'Full Stack'",
  "{ status: 'Building' }",
  "console.log('Let\\'s connect!')"
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const i = loopNum % phrases.length;
    const fullText = phrases[i];

    const handleTyping = () => {
      setText(
        isDeleting 
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 100);

      if (!isDeleting && text === fullText) {
        // Pause at the end of the phrase before deleting
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // pause before starting next word
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-8 pt-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0" />
        <div className={`blob -right-32 -top-32 h-[520px] w-[520px] ${siteTheme.blob1}`} />
        <div className={`blob -bottom-36 -left-36 h-[460px] w-[460px] ${siteTheme.blob2} [animation-delay:-6s]`} />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-borderline bg-white/[0.03] px-5 py-2 font-mono text-sm text-muted min-w-[280px] justify-center">
          <span className="text-emerald-400">&gt;</span> 
          <span>{text}<span className="animate-pulse font-bold">_</span></span>
        </p>

        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
          I build <span className={siteTheme.textGradient}>intelligent, full-stack</span>
          <br />
          applications for the real world
        </h1>

        <p className="mx-auto mt-5 max-w-xl text-base text-muted md:text-lg">
          Hello, I&apos;m <strong className="font-semibold text-foreground">{profile.firstName}</strong>, a{" "}
          {profile.role} from Mumbai with a passion for crafting scalable web &amp; mobile apps and integrating AI
          into everyday workflows.
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            className={`inline-flex items-center gap-2.5 rounded-full ${siteTheme.activeGradient} px-7 py-3.5 font-semibold text-white ${siteTheme.activeShadow} transition`}
          >
            See Projects
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 8h12m0 0L9 3m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 rounded-full border border-borderline px-7 py-3.5 font-semibold text-foreground transition hover:border-accent hover:text-accent"
          >
            Contact Me
          </a>
        </div>

        <div className="mt-8 flex items-center justify-center gap-6 text-sm font-medium text-muted">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 transition hover:text-foreground">
            <FaGithub className="text-lg transition-colors group-hover:text-accent" aria-hidden="true" />
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 transition hover:text-foreground">
            <FaLinkedinIn className="text-lg transition-colors group-hover:text-accent" aria-hidden="true" />
            LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="group inline-flex items-center gap-2 transition hover:text-foreground">
            <SiGmail className="text-lg transition-colors group-hover:text-accent" aria-hidden="true" />
            Email
          </a>
        </div>
      </div>

      <a
        href="#about"
        aria-label="Scroll down"
        className="bounce-soft absolute bottom-7 left-1/2 -translate-x-1/2 text-faint hover:text-foreground"
      >
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M11 4v14m0 0 6-6m-6 6-6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}