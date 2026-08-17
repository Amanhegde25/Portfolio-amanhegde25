import type { ReactNode } from "react";

type SectionHeadingProps = {
  num?: string;
  tag: string;
  title: ReactNode;
  sub?: string;
};

export default function SectionHeading({ num, tag, title, sub }: SectionHeadingProps) {
  return (
    <div className="mb-12 max-w-3xl">
      <span className="mb-5 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-accent">
        {num ? <span className="text-faint">{num}</span> : null}
        <span>{tag}</span>
      </span>
      <h2 className="text-4xl font-extrabold leading-[1.02] tracking-tight md:text-6xl">{title}</h2>
      {sub ? <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">{sub}</p> : null}
    </div>
  );
}