import Section from "./Section";

const reasons = [
  {
    title: "Clean, Scalable Architecture",
    description: "Code built for growth, not just deadlines.",
  },
  {
    title: "Automation-First Mindset",
    description: "I eliminate repetitive work before it becomes technical debt.",
  },
  {
    title: "Business-Oriented Thinking",
    description: "Every feature serves a goal — revenue, retention, or speed.",
  },
  {
    title: "Clear Communication",
    description: "No jargon walls. Transparent updates and honest timelines.",
  },
  {
    title: "Fast Iteration Cycles",
    description: "Ship, learn, improve. Momentum over perfection.",
  },
];

export default function WhyMe() {
  return (
    <Section
      id="why-me"
      title="Why Work With Me"
      subtitle="What you get beyond the code."
    >
      <div className="mx-auto max-w-2xl space-y-2">
        {reasons.map((r, i) => (
          <div
            key={r.title}
            className="glass-card flex items-start gap-3 rounded-xl p-3"
          >
            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-indigo/15 text-xs font-bold text-indigo-light">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-white">{r.title}</h3>
              <p className="text-xs text-slate-400">{r.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
