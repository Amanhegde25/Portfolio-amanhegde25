import type { ReactNode } from "react";

type SectionHeadingProps = {
  tag: string;
  title: ReactNode;
  sub?: string;
};

export default function SectionHeading({ tag, title, sub }: SectionHeadingProps) {
  return (
    <div className="mb-14 max-w-2xl">
      <span className="mb-3.5 inline-block font-mono text-sm uppercase tracking-[0.08em] text-accent">
        {tag}
      </span>
      <h2 className="text-3xl font-extrabold leading-tight tracking-tight md:text-4xl">{title}</h2>
      {sub ? <p className="mt-4 text-muted">{sub}</p> : null}
    </div>
  );
}