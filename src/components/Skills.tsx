import Section from "./Section";

const groups = [
  {
    label: "Frontend",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Backend",
    items: [
      "Supabase (PostgreSQL, Auth, Storage)",
      "API Integration",
      "Edge Functions",
    ],
  },
  {
    label: "Automation & AI",
    items: [
      "n8n",
      "Zapier",
      "OpenAI GPT Integration",
      "Claude API Integration",
      "Webhooks",
    ],
  },
  {
    label: "Deployment",
    items: ["Vercel", "DNS & Domain Setup"],
  },
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies I work with daily.">
      <div className="grid gap-5 sm:grid-cols-2">
        {groups.map((g) => (
          <div
            key={g.label}
            className="glass rounded-2xl p-5"
          >
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-aqua">
              {g.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <span
                  key={item}
                  className="glass rounded-full px-3 py-1 text-sm text-slate-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
