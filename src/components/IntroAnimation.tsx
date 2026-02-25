"use client";

import { useState, useEffect } from "react";
import Logo from "./Logo";

export default function IntroAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  const [phase, setPhase] = useState<"loading" | "exiting" | "done">(
    "loading"
  );

  useEffect(() => {
    const exitTimer = setTimeout(() => setPhase("exiting"), 1800);
    const doneTimer = setTimeout(() => setPhase("done"), 2400);
    return () => {
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  return (
    <>
      {/* Overlay */}
      {phase !== "done" && (
        <div
          className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy ${
            phase === "exiting" ? "animate-intro-overlay-exit" : ""
          }`}
        >
          {/* Logo mark */}
          <div
            className="animate-intro-logo-pulse mb-4"
            style={{ animationDelay: "0.1s" }}
          >
            <Logo size={72} />
          </div>

          {/* Expanding line */}
          <div
            className="animate-intro-line-expand h-[2px] bg-gradient-to-r from-indigo to-aqua"
            style={{ animationDelay: "0.6s", width: 0 }}
          />

          {/* Subtitle */}
          <p
            className="animate-intro-fade-up mt-4 text-sm tracking-widest text-slate-400 opacity-0"
            style={{ animationDelay: "0.9s" }}
          >
            WEB DEVELOPER
          </p>
        </div>
      )}

      {/* Main content — rendered immediately but hidden behind overlay */}
      <div
        className={
          phase === "done"
            ? "animate-intro-fade-up"
            : phase === "exiting"
              ? "opacity-0"
              : "opacity-0"
        }
        style={phase === "done" ? { animationDelay: "0s" } : undefined}
      >
        {children}
      </div>
    </>
  );
}
