import Section from "./Section";

const layers = [
  {
    label: "Core Stack",
    color: "text-aqua",
    borderColor: "border-aqua/20",
    items: ["Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS"],
  },
  {
    label: "Automation & AI",
    color: "text-indigo-light",
    borderColor: "border-indigo/20",
    items: ["n8n", "Zapier", "OpenAI GPT", "Claude API", "Webhooks"],
  },
  {
    label: "Back End (Learning)",
    color: "text-aqua-light",
    borderColor: "border-aqua/15",
    items: ["Supabase", "PostgreSQL", "Auth", "Storage", "API Integration"],
  },
  {
    label: "Deployment",
    color: "text-slate-300",
    borderColor: "border-white/10",
    items: ["Vercel", "DNS & Domain Setup"],
  },
];

export default function Skills() {
  return (
    <Section
      id="skills"
      title="Tech Stack"
      subtitle="Strategically layered for speed and scale."
    >
      <div className="space-y-3">
        {layers.map((layer) => (
          <div key={layer.label} className="glass-card rounded-2xl p-4">
            <div className="mb-2 flex items-center gap-3">
              <span
                className={`text-xs font-semibold uppercase tracking-widest ${layer.color}`}
              >
                {layer.label}
              </span>
              <div
                className={`h-px flex-1 border-t ${layer.borderColor}`}
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {layer.items.map((item) => (
                <span
                  key={item}
                  className="glass rounded-full px-2.5 py-0.5 text-sm text-slate-300 transition-colors hover:text-white"
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
