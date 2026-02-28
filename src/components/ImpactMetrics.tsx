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

const metrics = [
  { value: "30%", label: "Reduced manual lead processing time" },
  { value: "Faster", label: "Lead response time through automation" },
  { value: "$10K+", label: "Meta campaign budget managed" },
];

export default function ImpactMetrics() {
  return (
    <Section
      id="impact"
      title="Impact"
      subtitle="Measurable results I've delivered."
    >
      <motion.div
        className="grid gap-4 sm:grid-cols-3"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {metrics.map((m) => (
          <motion.div
            key={m.value}
            variants={itemVariants}
            className="glass-card rounded-2xl p-5 text-center"
          >
            <span className="block bg-gradient-to-r from-indigo-light to-aqua bg-clip-text text-3xl font-extrabold text-transparent">
              {m.value}
            </span>
            <p className="mt-2 text-sm text-slate-400">{m.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
