const BOOKING_URL = "https://calendly.com/alananoaj/mvp-call";

export default function FinalCTA() {
  return (
    <section id="cta" className="relative py-16 text-center">
      <div className="mx-auto max-w-xl px-6">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
          Ready to launch properly?
        </h2>
        <p className="mt-3 text-base text-slate-400">
          Let&apos;s build a system that works for your business — not just a
          website that sits there.
        </p>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-glow relative mt-6 inline-block rounded-full bg-indigo px-8 py-3 text-base font-semibold text-white transition-transform hover:scale-105"
        >
          Book Your Strategy Call
        </a>
      </div>
    </section>
  );
}
