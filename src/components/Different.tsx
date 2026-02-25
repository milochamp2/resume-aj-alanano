import Section from "./Section";

const items = [
  {
    title: "Automation-first mindset",
    description: "Every build includes workflow automation from the start — not as an afterthought.",
  },
  {
    title: "Clean modern design",
    description: "Premium, brand-conscious UI that makes your startup look established from day one.",
  },
  {
    title: "Clear build process",
    description: "Strategy → Design → Automation → Launch. No guesswork, no wasted time.",
  },
  {
    title: "Business-focused approach",
    description: "I build systems that convert and scale — not just pages that look nice.",
  },
  {
    title: "Selective client intake",
    description: "I work with a small number of clients at a time to deliver premium results.",
  },
];

export default function Different() {
  return (
    <Section
      id="different"
      title="What Makes Me Different"
      subtitle="Premium = confidence + boundaries."
    >
      <div className="mx-auto max-w-2xl space-y-3">
        {items.map((item, i) => (
          <div
            key={item.title}
            className="glass-card flex items-start gap-4 rounded-xl px-5 py-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-indigo/20 text-xs font-bold text-indigo-light">
              {i + 1}
            </span>
            <div>
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="mt-0.5 text-sm text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
