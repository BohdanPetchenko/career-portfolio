"use client";

import { useRef, useState } from "react";

export function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setStatus("idle"), 2000);
  };

  return (
    <div className="mt-7 flex flex-wrap items-center gap-4">
      <button
        type="button"
        onClick={copy}
        className={`inline-flex items-center gap-4 rounded-full border border-cream px-6 py-[18px] text-lg font-medium transition-colors md:text-xl ${
          status === "copied" ? "bg-cream text-hunter" : "text-cream hover:bg-cream/10"
        }`}
      >
        {email}
        <span className="label text-[11px] tracking-[0.12em]">{status === "copied" ? "Copied ✓" : "Copy"}</span>
      </button>
      <a href={`mailto:${email}?subject=${encodeURIComponent("A role for you")}`} className="label text-[11px] tracking-[0.12em] text-on-dark underline-offset-4 hover:underline">
        Open in mail app
      </a>
      <span role="status" aria-live="polite" className="sr-only">
        {status === "copied" ? "Email copied to clipboard" : status === "failed" ? "Couldn't copy — use the mail link" : ""}
      </span>
    </div>
  );
}
