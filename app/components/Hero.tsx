import { profile } from "@/lib/data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-8 pt-20">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="grid-overlay absolute inset-0" />
        <div className="blob -right-32 -top-32 h-[520px] w-[520px] bg-indigo-600" />
        <div className="blob -bottom-36 -left-36 h-[460px] w-[460px] bg-fuchsia-700 [animation-delay:-6s]" />
      </div>

      <div className="mx-auto max-w-4xl text-center">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-borderline bg-white/[0.03] px-5 py-2 font-mono text-sm text-muted">
          <span className="text-emerald-400">&gt;</span> hello world
        </p>

        <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl">
          I build <span className="grad-text">intelligent, full-stack</span>
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
            className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-7 py-3.5 font-semibold text-white shadow-[0_10px_30px_rgba(147,51,234,0.35)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(147,51,234,0.5)]"
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