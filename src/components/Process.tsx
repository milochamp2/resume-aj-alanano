import Section from "./Section";

const steps = [
  {
    number: "01",
    title: "Strategy Mapping",
    description: "Define goals, audience, positioning, and system requirements.",
  },
  {
    number: "02",
    title: "Design & Build",
    description: "Premium UI built with Next.js + Tailwind — fast, clean, on-brand.",
  },
  {
    number: "03",
    title: "Automation Setup",
    description: "Wire up workflows, AI integrations, lead capture, and follow-ups.",
  },
  {
    number: "04",
    title: "Launch & Support",
    description: "Deploy to production, configure DNS, and provide post-launch support.",
  },
];

export default function Process() {
  return (
    <Section
      id="process"
      title="Process"
      subtitle="Simple. Clean. Professional."
    >
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s) => (
          <div key={s.number} className="glass-card rounded-2xl p-4">
            <span className="mb-2 block text-2xl font-extrabold text-indigo/40">
              {s.number}
            </span>
            <h3 className="mb-1 text-sm font-semibold text-white">
              {s.title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-400">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
