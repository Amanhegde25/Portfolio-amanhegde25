"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-6 pb-8 pt-20">
      {/* Background effects */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0" />
        <div className={`blob -right-32 -top-32 h-[520px] w-[520px] ${siteTheme.blob1}`} />
        <div className={`blob -bottom-36 -left-36 h-[460px] w-[460px] ${siteTheme.blob2} [animation-delay:-6s]`} />
      </div>

      <div className="mx-auto w-full max-w-[1400px] flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
        
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Typing terminal widget */}
          <div className="mx-auto max-w-4xl lg:mx-0">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-borderline bg-white/[0.03] px-5 py-2 font-mono text-sm text-muted min-w-[280px] justify-center">
              <span className="text-emerald-400">&gt;</span> 
              <span>{text}<span className="animate-pulse font-bold">_</span></span>
            </p>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight mb-3">
            {profile.name}
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-6">
            And I&apos;m a <span className={siteTheme.textGradient}>{profile.role}</span>
          </h2>

          <p className="max-w-xl text-base text-muted md:text-lg mx-auto lg:mx-0 mb-8">
            A passionate developer from Mumbai, crafting scalable web &amp; mobile apps 
            and integrating AI into everyday workflows.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 justify-center lg:justify-start mb-8">
            <a 
              href={profile.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-social-icon group"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg transition-colors group-hover:text-blue-400" />
            </a>
            <a 
              href={profile.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hero-social-icon group"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-lg transition-colors group-hover:text-blue-400" />
            </a>
            <a 
              href={`mailto:${profile.email}`} 
              className="hero-social-icon group"
              aria-label="Email"
            >
              <SiGmail className="text-lg transition-colors group-hover:text-blue-400" />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 justify-center lg:justify-start">
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
              className="inline-flex items-center gap-2.5 rounded-full border border-borderline px-7 py-3.5 font-semibold text-foreground transition hover:border-blue-400 hover:text-blue-400"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Right: Hexagonal Photo */}
        <div className="flex-shrink-0 flex items-center justify-center">
          <div className="hero-hexagon-wrapper">
            <div className="hero-hexagon-glow" />
            {/* Hexagon border frame */}
            <div className="hero-hexagon-border" />
            {/* Blue fill behind the photo */}
            <div className="hero-hexagon-fill" />
            {/* Image — open-top clip so head overflows */}
            <div className="hero-hexagon-img">
              <Image
                src="/imgs/Photo-without-bg.png"
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 300px, (max-width: 1024px) 400px, 440px"
                priority
                unoptimized
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
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