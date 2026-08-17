import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-borderline bg-background-soft py-9">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-3 px-6 text-center text-sm text-muted md:justify-between">
        <p>
          Crafted By{" "}
          <a href={`mailto:${profile.email}`} className="link-underline font-semibold text-muted transition hover:text-accent">
            {profile.name}
          </a>
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.14em] text-faint">
          Next.js · TypeScript · Tailwind
        </p>
        <p>© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}