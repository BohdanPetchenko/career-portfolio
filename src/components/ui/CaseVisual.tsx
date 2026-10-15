import type { CaseVisual as Kind } from "@/content/work";

/** Small animated illustrations for each case (CSS only; decorative). */
export function CaseVisual({ kind }: { kind: Kind }) {
  return (
    <div aria-hidden="true" className="relative flex h-[280px] items-center justify-center overflow-hidden bg-sand font-mono text-[10px]">
      {kind === "boards" && (
        <div className="flex gap-3.5">
          {["Prospects · 24", "Contacted · 9"].map((col, i) => (
            <div key={col} className="flex w-[160px] flex-col gap-2 rounded-lg bg-cream-2 p-2.5">
              <span className="tracking-[0.12em] uppercase">{col}</span>
              {i === 0 && <span className="case-drag relative z-10 h-8 rounded-md bg-hunter shadow-[0_12px_24px_-10px_rgba(0,0,0,.5)]" />}
              {i === 1 && <span className="border-t border-dashed border-stone pt-1 text-[8px] text-muted">DIVIDER · VERIFIED</span>}
              <span className="h-8 rounded-md bg-line" />
              <span className="h-8 rounded-md bg-line" />
            </div>
          ))}
        </div>
      )}
      {kind === "migration" && (
        <div className="flex items-center gap-5 text-[11px]">
          <div className="flex h-[140px] w-[120px] items-center justify-center rounded-lg" style={{ background: "repeating-linear-gradient(45deg,#8e8676 0 6px,#bdb6a5 6px 12px)" }}>
            legacy.php
          </div>
          <span className="text-2xl">→</span>
          <div className="flex w-[170px] flex-col gap-1.5">
            <span className="rounded-md bg-hunter p-3 text-cream-2">Controllers · 12</span>
            <span className="rounded-md bg-hunter-2 p-3 text-cream-2">Services · 15</span>
            <span className="rounded-md bg-stone p-3 text-ink">MySQL · ~40 tables</span>
          </div>
        </div>
      )}
      {kind === "errors" && (
        <div className="w-[340px] rounded-lg bg-hunter p-3.5 leading-[1.8] text-cream">
          <div className="flex justify-between">
            <span>TypeError · board.tsx:212</span>
            <span className="animate-pulse-dot text-brass">● spike</span>
          </div>
          <div className="text-muted-dark">user · env · backend message attached</div>
          <div className="mt-2 flex h-12 items-end gap-1.5">
            {[20, 25, 18, 95, 30, 12].map((h, i) => (
              <span key={i} className={`flex-1 ${h > 90 ? "bg-brass" : "bg-hunter-2"}`} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="mt-2 text-muted-dark">▶ session replay · source maps ✓</div>
        </div>
      )}
      {kind === "live" && (
        <div className="w-[340px] overflow-hidden rounded-lg bg-hunter text-cream">
          <div className="flex h-[140px] items-center justify-center bg-gradient-to-br from-hunter-2 to-hunter font-serif text-5xl">2 : 1</div>
          <div className="flex items-center gap-2.5 px-3 py-2.5">
            <span className="animate-pulse-dot rounded-sm bg-cream px-1.5 py-0.5 text-hunter">LIVE</span>
            <span className="relative h-[3px] flex-1 bg-hunter-2">
              <span className="case-fill absolute inset-y-0 left-0 bg-cream" />
            </span>
            <span>↻ jump to live</span>
          </div>
        </div>
      )}
      {kind === "perf" && (
        <div className="flex gap-6 text-[10px] tracking-[0.08em]">
          <div className="flex flex-col items-center gap-1.5">
            <div className="grid grid-cols-3 gap-1">
              {[0, 1, 2].map((i) => (
                <span key={i} className="h-20 w-11 bg-stone" />
              ))}
            </div>
            <span>BEFORE · 6,612 NODES</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <span className="h-20 w-11 bg-hunter" />
            <span>AFTER · 1,123</span>
          </div>
        </div>
      )}
      {kind === "widgets" && (
        <div className="w-[340px] overflow-hidden rounded-lg bg-cream-2 shadow-[0_18px_36px_-20px_rgba(0,0,0,.45)]">
          <div className="flex items-center gap-1.5 bg-stone px-3 py-2">
            <span className="size-1.5 rounded-full bg-cream-2" />
            <span className="size-1.5 rounded-full bg-cream-2" />
            <span className="ml-2 tracking-[0.08em]">your-club.com</span>
          </div>
          <div className="p-3.5">
            <span className="tracking-[0.12em] uppercase">Where our athletes committed</span>
            <div className="mt-2.5 grid grid-cols-4 gap-1.5">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <span key={i} className={`h-9 rounded ${i === 2 ? "bg-brass" : i % 3 === 0 ? "bg-hunter" : "bg-line"}`} />
              ))}
            </div>
            <div className="mt-3 rounded bg-hunter px-2.5 py-2 text-cream">&lt;script src=&quot;…/widget.js&quot;&gt;</div>
          </div>
        </div>
      )}
      {kind === "funnel" && (
        <div className="flex w-[320px] flex-col gap-1.5 uppercase tracking-[0.08em]">
          {[
            ["Visit", 100],
            ["Sign up", 64],
            ["Profile done", 41],
            ["Checkout", 18],
            ["Paid", 11],
          ].map(([label, w], i) => (
            <div key={label} className="flex items-center gap-2.5">
              <span className="w-[86px] text-right">{label}</span>
              <span className={`h-6 rounded-sm ${i === 4 ? "bg-brass" : "bg-hunter"}`} style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      )}
      {kind === "ai" && (
        <ol className="flex items-center gap-2 text-[10px] uppercase tracking-[0.08em]">
          {["Plan", "Agents", "Review", "Checks"].map((s, i) => (
            <li key={s} className="flex items-center gap-2">
              <span className={`rounded-full px-3 py-2.5 ${i === 1 ? "bg-hunter text-cream-2" : "border border-hunter"}`}>{s}</span>
              {i < 3 && <span>→</span>}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}
