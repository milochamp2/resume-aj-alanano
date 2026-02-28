"use client";

import { motion } from "framer-motion";
import Section from "./Section";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
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

const categories = [
  {
    label: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "Shadcn UI",
      "Lucide Icons",
    ],
  },
  {
    label: "Automation & Systems",
    items: [
      "Zapier",
      "n8n",
      "Google Workspace Automation",
      "CRM Workflow Integration",
    ],
  },
  {
    label: "Marketing & Design",
    items: [
      "Meta Ads (Facebook Ads)",
      "Graphic Design for Social Media",
      "Landing Page Design",
      "Video Editing",
    ],
  },
];

export default function TechStack() {
  return (
    <Section
      id="tech-stack"
      title="Tech Stack"
      subtitle="Tools and technologies I work with."
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.label}
            variants={itemVariants}
            className="mb-6 last:mb-0"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
              {cat.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span key={item} className="tech-badge">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
