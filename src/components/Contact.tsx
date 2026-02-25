import Section from "./Section";

export default function Contact() {
  return (
    <Section
      id="contact"
      title="Get in Touch"
      subtitle="Have a project in mind? Let's talk."
    >
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="mailto:alananoaj@gmail.com"
          className="rounded-2xl bg-indigo/90 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-indigo-light hover:shadow-lg hover:shadow-indigo/20"
        >
          Email Me
        </a>
        <a
          href="https://www.linkedin.com/in/alananoaj7/"
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-2xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/milochamp2"
          target="_blank"
          rel="noopener noreferrer"
          className="glass rounded-2xl px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-white/10"
        >
          GitHub
        </a>
      </div>
    </Section>
  );
}
