import Section from "./Section";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Clarify goals, pages, content, and brand direction.",
  },
  {
    number: "02",
    title: "Build",
    description:
      "Modern Next.js + Tailwind implementation with scalable structure.",
  },
  {
    number: "03",
    title: "Deploy",
    description:
      "Vercel deployment, DNS configuration, and launch support.",
  },
];

export default function Process() {
  return (
    <Section
      id="process"
      title="Process"
      subtitle="How I work — simple and direct."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.number}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
          >
            <span className="mb-3 block text-3xl font-extrabold text-indigo/40">
              {s.number}
            </span>
            <h3 className="mb-2 text-lg font-semibold text-white">
              {s.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-400">
              {s.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
