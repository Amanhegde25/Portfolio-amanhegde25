import { achievements } from "@/lib/data";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

export default function Achievements() {
  return (
    <section id="achievements" className="section-pad bg-background-soft">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            tag="Achievements"
            title={
              <>
                Certifications &amp; <span className="grad-text">highlights</span>
              </>
            }
          />
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {achievements.map((item) => (
            <Reveal key={item.title}>
              <article className="h-full rounded-2xl border border-borderline bg-card p-8 transition duration-300 hover:-translate-y-1.5 hover:border-fuchsia-500/50">
                <span className="mb-4 inline-block rounded-full border border-fuchsia-500/30 bg-fuchsia-500/15 px-3.5 py-1 font-mono text-xs uppercase tracking-[0.06em] text-fuchsia-300">
                  {item.badge}
                </span>
                <h3 className="mb-2.5 text-lg font-bold leading-snug tracking-tight">{item.title}</h3>
                <p className="text-sm text-muted">{item.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}