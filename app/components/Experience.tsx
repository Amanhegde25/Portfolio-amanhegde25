import { experiences, siteTheme } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section-pad">
      <div className="mx-auto max-w-[1400px] px-6">
        <Reveal>
          <SectionHeading
            tag="Work Experience"
            title={
              <>
                Where I&apos;ve <span className={siteTheme.textGradient}>worked &amp; grown</span>
              </>
            }
          />
        </Reveal>

        <div className="relative pl-9">
          <div
            aria-hidden="true"
            className={`absolute bottom-2 left-[9px] top-2 w-0.5 ${siteTheme.timelineGradient}`}
          />
          <ol className="space-y-7">
            {experiences.map((job) => (
              <Reveal as="li" key={job.org + job.role}>
                <article className="relative rounded-2xl border border-borderline bg-card p-7">
                  <span
                    aria-hidden="true"
                    className="absolute -left-9 top-6 h-5 w-5 rounded-full border-[3px] border-accent bg-background shadow-[0_0_0_6px_rgba(129,140,248,0.15)]"
                  />
                  <div className="mb-3.5">
                    <h3 className="text-lg font-bold tracking-tight">{job.role}</h3>
                    <p className="text-[15px] font-semibold text-accent">{job.org}</p>
                    <p className="mt-0.5 font-mono text-sm text-faint">{job.date}</p>
                  </div>
                  <ul className="grid list-disc gap-2 pl-5 text-sm text-muted">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {job.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-accent/25 bg-accent/[0.12] px-2.5 py-1 text-xs text-indigo-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}