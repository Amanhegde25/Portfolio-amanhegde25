import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman Arun Hegde — Full Stack Developer & AI Enthusiast",
  description:
    "Portfolio of Aman Arun Hegde — Full Stack Developer & AI enthusiast building intelligent, scalable web and mobile applications.",
  keywords: [
    "Aman Arun Hegde",
    "Full Stack Developer",
    "AI",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
  ],
  authors: [{ name: "Aman Arun Hegde" }],
  openGraph: {
    title: "Aman Arun Hegde — Full Stack Developer & AI Enthusiast",
    description:
      "Portfolio of Aman Arun Hegde — Full Stack Developer & AI enthusiast building intelligent, scalable web and mobile applications.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">{children}</body>
    </html>
  );
}