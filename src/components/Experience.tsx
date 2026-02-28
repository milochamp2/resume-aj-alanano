"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
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

const experiences = [
  {
    company: "Kingdom Climate Solutions",
    location: "Australia",
    roles: "Automation Specialist \u2192 General Admin VA \u2192 Web Developer",
    period: "July 2025 \u2013 August 2025",
    contributions: [
      "Designed and implemented lead capture and chatbot automation systems using Zapier and n8n integrated with Ascora.",
      "Automated customer lead workflows (Gmail \u2192 Google Sheets \u2192 Google Calendar) to improve operational efficiency.",
      "Created full-stack website (Hyperfit.com.au) using TypeScript, Next.js, React, Tailwind CSS.",
      "Developed UI components and responsive layouts for modern web experiences.",
      "Designed marketing graphics for Facebook and Instagram content.",
      "Assisted in running and optimizing Meta ad campaigns for multiple business accounts.",
    ],
  },
  {
    company: "Raindance AI",
    location: "",
    roles: "Web Developer & Automation Specialist",
    period: "December 2025 \u2013 January 2026",
    contributions: [
      "Built an analytical dashboard interface for internal data visualization.",
      "Designed and structured a reusable chatbot UI design system.",
      "Contributed to frontend architecture using modern React ecosystem tools.",
    ],
  },
];

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Where I've made an impact."
    >
      <motion.div
        className="relative pl-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Timeline line */}
        <div className="timeline-line" />

        {experiences.map((exp, i) => (
          <motion.div
            key={exp.company}
            variants={itemVariants}
            className="relative mb-8 last:mb-0"
          >
            {/* Timeline node */}
            <div className="timeline-node" style={{ top: "24px" }} />

            <div className="glass-card rounded-2xl p-5">
              <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                <span className="text-xs text-slate-500">{exp.period}</span>
              </div>
              <p className="mb-1 text-sm font-medium text-indigo-light">
                {exp.roles}
              </p>
              {exp.location && (
                <p className="mb-3 text-xs text-slate-500">{exp.location}</p>
              )}
              <ul className="space-y-1.5">
                {exp.contributions.map((c) => (
                  <li
                    key={c}
                    className="flex gap-2 text-sm leading-relaxed text-slate-300"
                  >
                    <span className="mt-1 shrink-0 text-aqua">&bull;</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
