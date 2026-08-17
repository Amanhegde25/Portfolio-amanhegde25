import { experiences, siteTheme } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <SectionHeading
            num="( 04 )"
            tag="Experience"
            title={
              <>
                My <span className={siteTheme.textGradient}>journey</span> so far
              </>
            }
            sub="From hyperautomation bots to an AI chess platform — the roles that shaped how I build."
          />
        </Reveal>

        <div className="relative">
          {/* Timeline line */}
          <div
            aria-hidden="true"
            className={`absolute bottom-6 left-[7px] top-2 w-[3px] md:left-[190px] ${siteTheme.timelineGradient}`}
          />

          <ol className="space-y-12 md:space-y-16">
            {experiences.map((job, i) => (
              <Reveal as="li" key={job.org + job.role} delay={i * 120}>
                <div className="group relative md:grid md:grid-cols-[190px_1fr] md:gap-12">
                  {/* Desktop dot */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[190px] top-1.5 hidden h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-accent bg-background transition-transform duration-300 group-hover:scale-125 md:block"
                  />
                  {/* Mobile dot */}
                  <span
                    aria-hidden="true"
                    className="absolute left-[7px] top-1.5 h-4 w-4 -translate-x-1/2 rounded-full border-[3px] border-accent bg-background md:hidden"
                  />

                  {/* Date (desktop) */}
                  <div className="hidden md:block md:pr-6 md:text-right">
                    <span className="font-mono text-sm uppercase tracking-[0.14em] text-faint">{job.date}</span>
                  </div>

                  <article className="pl-8 md:pl-0">
                    <p className="mb-2 font-mono text-sm uppercase tracking-[0.14em] text-faint md:hidden">
                      {job.date}
                    </p>
                    <h3 className="text-2xl font-extrabold tracking-tight transition-colors duration-300 group-hover:text-accent md:text-4xl">
                      {job.role}
                    </h3>
                    <p className="mt-1.5 font-mono text-sm text-accent/80">
                      <span className="text-faint">@</span> {job.org}
                    </p>

                    <ul className="mt-4 grid list-disc gap-2 pl-5 text-[15px] leading-relaxed text-muted">
                      {job.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {job.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-accent/20 bg-accent/[0.08] px-2.5 py-1 font-mono text-xs text-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}