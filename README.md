# Aman Arun Hegde — Portfolio

A modern, dark-themed portfolio for **Aman Arun Hegde** (Full Stack Developer & AI Enthusiast), built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4 and React 19.

Live sections: Hero · About · Skills · Projects · Experience · Achievements · Contact.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** react-icons
- **Fonts:** Inter & JetBrains Mono via `next/font`
- **Email:** Nodemailer (Gmail SMTP)

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Install & run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command          | Description                       |
| ---------------- | --------------------------------- |
| `npm run dev`    | Start the development server      |
| `npm run build`  | Create a production build         |
| `npm run start`  | Start the production server       |
| `npm run lint`   | Run ESLint (Next 16 removed `next lint`) |

## Project Structure

```
app/
  api/contact/route.ts   # POST endpoint that emails contact form submissions
  components/            # Nav, Hero, About, Skills, Projects, Experience,
                         # Achievements, Contact, Footer, SectionHeading, Reveal
  globals.css            # Tailwind v4 theme tokens & custom utilities
  layout.tsx             # Root layout, fonts, metadata
  page.tsx               # Composes all sections
lib/
  data.ts                # All portfolio content (profile, skills, projects, experience…)
public/                  # Static assets
```

All portfolio content lives in `lib/data.ts` — edit it to update text without touching components.

## Contact Form

The form posts to `/api/contact`, which sends the message to your inbox (and CCs the sender) via Gmail SMTP using Nodemailer.

### Setup

1. Enable **2-Step Verification** on the Google account that will send emails.
2. Generate an App Password at https://myaccount.google.com/apppasswords.
3. Copy `.env.example` to `.env.local` and fill in your values:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-gmail@gmail.com
SMTP_PASS=your-16-char-app-password
CONTACT_TO=your-gmail@gmail.com
```

`.env.local` is gitignored — never commit your credentials.

## Deploy

The easiest way to deploy is the [Vercel Platform](https://vercel.com/new). Set the same environment variables (`.env.local`) in your Vercel project settings.