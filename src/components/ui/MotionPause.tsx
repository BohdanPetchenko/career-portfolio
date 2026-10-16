"use client";

import { useEffect, useState } from "react";

/** Pauses all infinite decorative motion on the page (orbit, marquees). WCAG 2.2.2. */
export function MotionPause({ className = "" }: { className?: string }) {
  const [paused, setPaused] = useState(false);

  // The pause lives on <html>; clear it when this control goes away so it can't outlive its state.
  useEffect(() => () => void delete document.documentElement.dataset.motion, []);
  return (
    <button
      type="button"
      aria-pressed={paused}
      onClick={() => {
        const next = !paused;
        setPaused(next);
        if (next) document.documentElement.dataset.motion = "paused";
        else delete document.documentElement.dataset.motion;
      }}
      className={`label inline-flex items-center gap-2 rounded-full border border-hunter px-3 py-2 text-[10px] tracking-[0.14em] text-hunter transition-colors hover:bg-hunter hover:text-cream-2 ${className}`}
    >
      <span aria-hidden="true">{paused ? "▶︎" : "❚❚"}</span>
      {paused ? "Play motion" : "Pause motion"}
    </button>
  );
}
