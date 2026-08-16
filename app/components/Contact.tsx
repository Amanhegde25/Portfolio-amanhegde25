"use client";

import { useState, type FormEvent } from "react";
import { profile } from "@/lib/data";
import { FaGithub, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Reveal from "./Reveal";
import { siteTheme } from "@/lib/data";

const contactLinks = [
  { icon: SiGmail, label: profile.email, href: `mailto:${profile.email}` },
  { icon: FaPhoneAlt, label: profile.phone, href: `tel:${profile.phoneRaw}` },
  { icon: FaGithub, label: profile.githubHandle, href: profile.github },
  { icon: FaLinkedinIn, label: profile.linkedinHandle, href: profile.linkedin },
];

export default function Contact() {
  const [status, setStatus] = useState<{ text: string; error?: boolean } | null>(null);
  const [sending, setSending] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") ?? "").trim();
    const email = String(formData.get("email") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    if (!name || !email || !message) {
      setStatus({ text: "Please fill in all the fields.", error: true });
      return;
    }

    setSending(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ text: "Message sent — thanks for reaching out!" });
        form.reset();
      } else {
        setStatus({ text: data.error ?? "Something went wrong. Please try again.", error: true });
      }
    } catch {
      setStatus({ text: "Network error. Please try again.", error: true });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="contact" className="section-pad bg-background-soft">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <div>
              <span className="mb-3.5 inline-block font-mono text-sm uppercase tracking-[0.08em] text-accent">
                Contact
              </span>
              <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight md:text-5xl">
                Ready to
                <span className={siteTheme.textGradient}> Build Something?</span>
              </h2>
              <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
                Have a project idea, a role to fill, or just want to connect? I&apos;d love to hear from you.
              </p>

              <div className="mt-8 grid gap-3.5">
                {contactLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-3 text-[15px] text-muted transition hover:translate-x-1 hover:text-foreground"
                    >
                      <span className="grid h-11 w-11 place-items-center rounded-[10px] border border-borderline bg-card text-sm text-accent transition-colors group-hover:text-foreground">
                        <Icon aria-hidden="true" />
                      </span>
                      {link.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <form
              onSubmit={handleSubmit}
              className="grid gap-5 rounded-2xl border border-borderline bg-card p-8 shadow-[0_20px_60px_rgba(0,0,0,0.45)]"
            >
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-muted">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-borderline bg-background px-4 py-3 text-[15px] text-foreground outline-none transition placeholder:text-faint focus:border-accent focus:ring-[3px] focus:ring-accent/15"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-muted">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="w-full rounded-xl border border-borderline bg-background px-4 py-3 text-[15px] text-foreground outline-none transition placeholder:text-faint focus:border-accent focus:ring-[3px] focus:ring-accent/15"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-muted">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  className="w-full resize-y rounded-xl border border-borderline bg-background px-4 py-3 text-[15px] text-foreground outline-none transition placeholder:text-faint focus:border-accent focus:ring-[3px] focus:ring-accent/15"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className={`inline-flex w-full items-center justify-center gap-2.5 rounded-full ${siteTheme.activeGradient} px-7 py-3.5 min-h-[48px] font-semibold text-white ${siteTheme.activeShadow} transition disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0`}
              >
                {sending ? "Sending…" : "Send Message"}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M1 8h13m0 0L9 3m5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {status ? (
                <p className={`min-h-[1.4em] text-sm ${status.error ? "text-red-400" : "text-emerald-400"}`} role="status">
                  {status.text}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}