import Section from "./Section";

export default function ContactCTA() {
  return (
    <Section
      id="contact"
      title="Let's Connect"
      subtitle="I'm open to new opportunities."
    >
      <div className="glass-strong mx-auto max-w-2xl rounded-2xl p-6 text-center md:p-8">
        <p className="mb-5 text-base text-slate-300">
          Interested in working together? Let&apos;s talk about how I can help
          your team.
        </p>

        <div className="mb-5 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:alananoaj@gmail.com"
            className="hover-underline text-sm text-aqua"
          >
            alananoaj@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/alananoaj7/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline text-sm text-slate-300 transition-colors hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/milochamp2"
            target="_blank"
            rel="noopener noreferrer"
            className="hover-underline text-sm text-slate-300 transition-colors hover:text-white"
          >
            GitHub
          </a>
        </div>

        <a
          href="https://calendly.com/alananoaj/mvp-call"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow relative inline-block rounded-2xl bg-indigo/90 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-indigo-light hover:shadow-lg hover:shadow-indigo/25 hover:scale-105"
        >
          Book a Call
        </a>
      </div>
    </Section>
  );
}
