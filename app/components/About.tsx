import { aboutFacts, profile } from "@/lib/data";
import Reveal from "./Reveal";

const socials = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function About() {
  return (
    <section id="about" className="section-pad bg-background-soft">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="mb-14 max-w-2xl">
            <span className="mb-3.5 inline-block font-mono text-sm uppercase tracking-[0.08em] text-accent">
              About Me
            </span>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">
              My approach to work is{" "}
              <span className="grad-text">logic, consistency, and rationality</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid items-start gap-10 md:grid-cols-[340px_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-borderline bg-card p-9 text-center shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
              <div className="mb-4 inline-grid place-items-center">
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true">
                  <defs>
                    <linearGradient id="avatar-grad" x1="0" y1="0" x2="72" y2="72">
                      <stop stopColor="#6366f1" />
                      <stop offset="1" stopColor="#d946ef" />
                    </linearGradient>
                  </defs>
                  <rect width="72" height="72" rx="18" fill="url(#avatar-grad)" />
                  <circle cx="36" cy="28" r="11" fill="#fff" opacity="0.92" />
                  <path d="M18 58c2.5-11 9.5-16.5 18-16.5S51.5 47 54 58" fill="#fff" opacity="0.92" />
                </svg>
              </div>
              <h3 className="text-xl font-bold tracking-tight">{profile.name}</h3>
              <p className="mt-1 font-medium text-accent">{profile.role}</p>
              <p className="mt-2.5 text-sm text-faint">
                B.Tech Information Technology · KJ Somaiya College of Engineering · Mumbai
              </p>
              <div className="mt-6 flex flex-wrap justify-center gap-2.5">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="rounded-full border border-borderline px-4 py-2 text-xs text-muted transition hover:border-accent hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="mb-4 text-muted">
                I&apos;m a Full Stack Developer with a background in Information Technology, focused on building
                practical, scalable solutions across front-end and back-end systems. Currently exploring{" "}
                <strong className="font-semibold text-foreground">AI agents and automation</strong>, with a strong
                interest in integrating intelligent systems into everyday workflows.
              </p>
              <p className="text-muted">
                From AI-powered platforms to facial recognition and offline LLM pipelines, I enjoy taking problems
                from research to production — designing clean UIs on Figma, wiring robust APIs, and shipping products
                people actually use.
              </p>
            </Reveal>

            <ul className="mt-7 grid grid-cols-2 gap-3.5">
              {aboutFacts.map((fact, i) => (
                <Reveal as="li" key={fact.label} className={i >= 2 ? "col-span-1" : ""}>
                  <div className="rounded-xl border border-borderline bg-card px-4 py-4">
                    <span className="mb-1 block text-xs uppercase tracking-[0.06em] text-faint">
                      {fact.label}
                    </span>
                    <span className="text-sm font-semibold">{fact.value}</span>
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