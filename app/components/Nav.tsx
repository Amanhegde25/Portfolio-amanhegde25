"use client";

import { useEffect, useState } from "react";
import { navLinks } from "@/lib/data";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-borderline bg-background/75 backdrop-blur-md transition-shadow ${
        scrolled ? "shadow-[0_10px_30px_rgba(0,0,0,0.35)]" : ""
      }`}
    >
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-3.5">
        <a href="#home" className="flex items-center gap-2.5 font-bold tracking-tight">
          <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500 font-mono text-sm text-white">
            A
          </span>
          <span>aman.hegde</span>
        </a>

        <nav
          className={`fixed inset-x-0 top-[57px] flex flex-col items-center gap-4 border-b border-borderline bg-background-soft px-6 py-6 transition-transform duration-300 md:static md:inset-auto md:flex-row md:gap-8 md:border-0 md:bg-transparent md:p-0 md:translate-y-0 ${
            open ? "translate-y-0" : "-translate-y-[130%]"
          }`}
          aria-label="Main navigation"
        >
          {navLinks.map((link) =>
            link.cta ? (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-5 py-2 text-sm font-semibold text-white"
              >
                {link.label}
              </a>
            ) : (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            )
          )}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 p-1 md:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded bg-foreground transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span className={`h-0.5 w-5 rounded bg-foreground transition-opacity ${open ? "opacity-0" : ""}`} />
          <span
            className={`h-0.5 w-5 rounded bg-foreground transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>
    </header>
  );
}