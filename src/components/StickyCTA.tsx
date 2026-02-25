"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  // Hide on contact page
  const isContact = pathname === "/contact";

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (isContact) return null;

  return (
    <a
      href="mailto:alananoaj@gmail.com"
      className={`btn-glow fixed bottom-5 right-5 z-50 rounded-2xl bg-indigo/90 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo/20 backdrop-blur-sm transition-all duration-300 hover:bg-indigo-light hover:shadow-xl hover:shadow-indigo/30 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      Start a Project
    </a>
  );
}
