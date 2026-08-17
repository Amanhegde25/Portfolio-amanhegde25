"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { profile, siteTheme } from "@/lib/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import PlanetReveal from "./PlanetReveal";
import { SiGmail } from "react-icons/si";

const phrases = [
  "hello world",
  "['React', 'Next.js', 'AI']",
  "const role = 'Full Stack'",
  "{ status: 'Building' }",
  "console.log('Let\\'s connect!')",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const [roleText, setRoleText] = useState("");

  useEffect(() => {
    let i = 0;
    const roleString = profile.role;
    const typingInterval = setInterval(() => {
      if (i < roleString.length) {
        setRoleText(roleString.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval);
  }, []);

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
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed]);

  return (
    <section id="home" className="snap-start snap-always relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-24 pb-10 md:pt-28">
      {/* Background effects */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0" />
        <div className={`blob -right-32 -top-32 h-[520px] w-[520px] ${siteTheme.blob1}`} />
        <div className={`blob -bottom-36 -left-36 h-[460px] w-[460px] ${siteTheme.blob2} [animation-delay:-6s]`} />
      </div>
      <PlanetReveal>
      <div className="page-enter mx-auto flex w-full max-w-[1400px] flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">
        {/* Left: Text Content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Typing terminal widget */}
          <div className="mx-auto max-w-4xl lg:mx-0">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-borderline bg-white/[0.03] px-4 py-1.5 md:px-5 md:py-2 font-mono text-xs md:text-sm text-muted md:min-w-[280px]">
              <span className="text-emerald-400">&gt;</span>
              <span>{text}<span className="animate-pulse font-bold">_</span></span>
            </p>
          </div>

          <h1 className="text-[40px] font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>

          <h2 className="mt-4 text-lg font-bold tracking-tight md:text-2xl lg:text-3xl">
            I&apos;m a{" "}
            <span className={siteTheme.textGradient}>
              <span>{roleText}<span className="animate-pulse font-bold">_</span></span>
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed font-medium text-foreground/90 lg:mx-0 md:text-lg">
            Building scalable full-stack applications &amp; intelligent AI solutions that solve real problems.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row lg:justify-start md:gap-4">
            <a
              href="#contact"
              className={`inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full ${siteTheme.activeGradient} px-7 py-3.5 md:px-8 md:py-4 text-base font-semibold text-white ${siteTheme.activeShadow} transition`}
            >
              Let&apos;s Work Together
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 8h12m0 0L9 3m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="/Resume.pdf"
              download
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 rounded-full border border-white px-7 py-3.5 md:px-8 md:py-4 text-base font-semibold text-foreground transition hover:border-blue-400 hover:text-blue-400"
            >
              Download CV
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center justify-center gap-3 lg:justify-start md:gap-4">
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
        </div>

        {/* Right: Hexagonal Photo */}
        <div className="flex-shrink-0">
          <div className="hero-hexagon-wrapper">
            <div className="hero-hexagon-glow" />
            <div className="hero-hexagon-border" />
            <div className="hero-hexagon-fill" />
            <div className="hero-hexagon-img">
              <Image
                src="/imgs/Photo-without-bg.png"
                alt={profile.name}
                fill
                sizes="(max-width: 768px) 170px, (max-width: 1024px) 400px, 440px"
                priority
                unoptimized
                style={{ objectFit: "cover", objectPosition: "top center" }}
              />
            </div>
          </div>
        </div>
      </div>
      </PlanetReveal>
    </section>
  );
}