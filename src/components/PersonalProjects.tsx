"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5 },
  },
};

const projects = [
  {
    title: "Premium Landing Page Concepts",
    description:
      "High-converting landing pages built with Next.js and Tailwind CSS, featuring glassmorphic design systems and smooth animations.",
    tags: ["Next.js", "Tailwind CSS", "Design"],
  },
  {
    title: "Animated UI Interfaces",
    description:
      "Interactive user interfaces with fluid animations using Framer Motion, scroll-triggered effects, and micro-interactions.",
    tags: ["Framer Motion", "React", "Animation"],
  },
  {
    title: "Social Media & Video Content",
    description:
      "Graphics and promotional video content for social media campaigns and brand presence.",
    tags: ["Graphic Design", "Video Editing"],
  },
  {
    title: "Automation Workflows",
    description:
      "Small-scale automation workflows streamlining business processes and reducing manual tasks.",
    tags: ["n8n", "Zapier", "Automation"],
  },
];

export default function PersonalProjects() {
  return (
    <Section
      id="projects"
      title="Personal Projects"
      subtitle="Selected things I build on my own time."
    >
      <motion.div
        className="grid gap-4 sm:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {projects.map((p) => (
          <motion.div
            key={p.title}
            variants={itemVariants}
            className="glass-card group rounded-2xl p-5"
          >
            <h3 className="mb-2 text-base font-semibold text-white transition-colors group-hover:text-indigo-light">
              {p.title}
            </h3>
            <p className="mb-3 text-sm leading-relaxed text-slate-400">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-indigo/10 px-2.5 py-0.5 text-xs font-medium text-indigo-light"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
