import Section from "./Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Have a project in mind? Let's talk."
    >
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="mailto:alananoaj@gmail.com"
          className="rounded-2xl bg-indigo px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-light"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/alananoaj7/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/milochamp2"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          GitHub
        </a>
      </div>
    </Section>
  );
}
