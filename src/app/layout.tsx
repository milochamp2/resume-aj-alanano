import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import StickyCTA from "@/components/StickyCTA";

export const metadata: Metadata = {
  title: {
    default: "AJ Alanano — Web Developer & Automation Specialist",
    template: "%s | AJ Alanano",
  },
  description:
    "Modern Web Developer with hands-on experience building full-stack websites, automation workflows, and marketing systems. TypeScript, Next.js, Tailwind CSS, Zapier, n8n.",
  keywords: [
    "AJ Alanano",
    "Web Developer",
    "Automation Specialist",
    "TypeScript",
    "Next.js",
    "React",
    "Tailwind CSS",
    "n8n",
    "Zapier",
    "Philippines",
    "Remote Developer",
  ],
  authors: [{ name: "AJ Alanano" }],
  openGraph: {
    title: "AJ Alanano — Web Developer & Automation Specialist",
    description:
      "Full-stack websites, automation workflows, and marketing systems.",
    type: "website",
    locale: "en_PH",
  },
  twitter: {
    card: "summary_large_image",
    title: "AJ Alanano — Web Developer & Automation Specialist",
    description:
      "Full-stack websites, automation workflows, and marketing systems.",
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
      <body className="antialiased">
        <SmoothScroll>
          <Navbar />
          <main className="pt-12">{children}</main>
          <Footer />
          <StickyCTA />
        </SmoothScroll>
      </body>
    </html>
  );
}
