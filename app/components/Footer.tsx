import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-borderline py-9">
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-3 px-6 text-center text-sm text-muted md:justify-between">
        <p>
          Crafted By{" "}
          <a href={`mailto:${profile.email}`} className="font-semibold text-muted transition hover:text-accent">
            {profile.name}
          </a>
        </p>
        <p>Crafted Using Next.js · TypeScript · Tailwind CSS</p>
        <p>© 2026 {profile.name}</p>
      </div>
    </footer>
  );
}