import { aboutFacts, profile, siteTheme } from "@/lib/data";
import Reveal from "./Reveal";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-background-soft">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <div className="mb-14 max-w-3xl">
            <span className="mb-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent">
              <span className="text-faint">( 01 )</span>
              <span>About Me</span>
            </span>
            <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">
              My approach to work is{" "}
              <span className={siteTheme.textGradient}>logic, consistency, and rationality</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid items-start gap-10 md:grid-cols-[340px_1fr]">
          <Reveal delay={120}>
            <div className="rounded-2xl border border-borderline bg-card p-9 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <div className="mb-4 inline-grid place-items-center">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="avatar-grad" x1="0" y1="0" x2="72" y2="72">
                      <stop stopColor="#3b82f6" />
                      <stop offset="1" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                  <rect width="72" height="72" rx="18" fill="url(#avatar-grad)" />
                  <circle cx="36" cy="28" r="11" fill="#fff" opacity="0.92" />
                  <path d="M18 58c2.5-11 9.5-16.5 18-16.5S51.5 47 54 58" fill="#fff" opacity="0.92" />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight">{profile.name}</h3>
              <p className="mt-1 font-medium text-accent">{profile.role}</p>
              <p className="mt-2.5 text-sm text-muted">
                B.Tech Information Technology · KJ Somaiya College of Engineering · Mumbai
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="link-underline rounded-full border border-borderline px-4 py-2 text-xs text-muted transition hover:border-accent hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal delay={240}>
              <p className="text-lg leading-relaxed text-muted md:text-xl">
                Full Stack Developer focused on building practical, scalable solutions. Currently exploring{" "}
                <strong className="font-semibold text-foreground">AI agents and automation</strong> — from offline LLM
                pipelines to face-recognition systems. I design in Figma, build with React &amp; Node, and ship products
                people actually use.
              </p>
            </Reveal>

            <ul className="mt-9 grid grid-cols-2 gap-3.5">
              {aboutFacts.map((fact, i) => (
                <Reveal as="li" key={fact.label} delay={320 + i * 100}>
                  <div className="group rounded-xl border border-borderline bg-card px-5 py-5 transition-colors duration-300 hover:border-accent/40">
                    <span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.14em] text-faint">
                      {fact.label}
                    </span>
                    <span className="text-base font-bold tracking-tight transition-colors duration-300 group-hover:text-accent">
                      {fact.value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}