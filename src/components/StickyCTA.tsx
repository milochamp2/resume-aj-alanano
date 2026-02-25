"use client";

import { useEffect, useState } from "react";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="mailto:alananoaj@gmail.com"
      className={`btn-glow fixed bottom-6 right-6 z-50 rounded-2xl bg-indigo/90 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo/20 backdrop-blur-sm transition-all duration-300 hover:bg-indigo-light hover:shadow-xl hover:shadow-indigo/30 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      Start a Project
    </a>
  );
}
