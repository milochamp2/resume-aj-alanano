import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AJ Alanano — Web Developer (Vibe Coder)",
  description:
    "I build modern Next.js applications, high-converting landing pages, and automation-first systems using Supabase, n8n/Zapier, and AI (GPT + Claude).",
  keywords: [
    "AJ Alanano",
    "Web Developer",
    "Next.js",
    "React",
    "TypeScript",
    "Supabase",
    "Tailwind CSS",
    "AI Integration",
    "Automation",
    "Vercel",
  ],
  authors: [{ name: "AJ Alanano" }],
  openGraph: {
    title: "AJ Alanano — Web Developer (Vibe Coder)",
    description:
      "Modern Next.js applications, landing pages, and AI-powered automation systems.",
    type: "website",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Alanano — Web Developer (Vibe Coder)",
    description:
      "Modern Next.js applications, landing pages, and AI-powered automation systems.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
