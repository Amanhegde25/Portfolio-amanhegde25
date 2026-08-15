import { projects } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section-pad bg-background-soft">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <SectionHeading
            tag="Projects"
            title={
              <>
                Things I&apos;ve <span className="grad-text">built &amp; shipped</span>
              </>
            }
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.title}>
              <article className="flex h-full flex-col rounded-2xl border border-borderline bg-card p-7 transition duration-300 hover:-translate-y-1.5 hover:border-accent/50 hover:shadow-[0_20px_60px_rgba(0,0,0,0.45)]">
                <div className="mb-4 flex items-start justify-between">
                  <span className="text-3xl leading-none" aria-hidden="true">
                    {project.emoji}
                  </span>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-accent hover:underline"
                    >
                      {project.linkLabel}
                    </a>
                  ) : (
                    <span className="rounded-full border border-borderline px-3 py-1 text-xs text-faint">
                      {project.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold tracking-tight">{project.title}</h3>
                <p className="mt-1 font-mono text-sm text-accent">{project.tags}</p>
                <p className="mt-3 flex-1 text-sm text-muted">{project.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-borderline bg-white/[0.04] px-2.5 py-1 text-xs text-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}