"use client";

import { AnimatePresence, m } from "motion/react";
import { useState } from "react";
import { CaseVisual } from "@/components/ui/CaseVisual";
import { cases } from "@/content/work";

/**
 * Case list + preview. On desktop the preview sits beside the list and follows hover/focus;
 * on mobile each case expands in place (same content, no dead links).
 */
export function WorkExplorer() {
  const [active, setActive] = useState(0);
  const current = cases[active];

  return (
    <div className="mt-14 flex flex-wrap items-start gap-12">
      <ol className="min-w-0 flex-[999_1_560px] border-t border-hunter-2">
        {cases.map((c, i) => {
          const isActive = i === active;
          return (
            <li key={c.id} className="border-b border-hunter-2">
              <button
                type="button"
                aria-expanded={isActive}
                aria-controls={`case-m-${c.id}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`grid w-full grid-cols-[40px_minmax(0,1fr)_auto] items-center gap-4 py-6 text-left transition-[padding,color] duration-500 ease-[cubic-bezier(.16,1,.3,1)] md:grid-cols-[56px_minmax(0,1fr)_150px_40px] ${
                  isActive ? "text-cream-2 md:pl-[18px]" : "text-muted-dark hover:text-cream"
                }`}
              >
                <span className="font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-[26px] font-medium leading-[1.05] tracking-[-0.03em] md:text-[34px]">{c.title}</span>
                <span className="label hidden text-[11px] tracking-[0.12em] md:block">{c.tag}</span>
                <span aria-hidden="true" className="text-right font-mono text-xs">
                  {isActive ? "→" : "+"}
                </span>
              </button>
              {/* Mobile: details in place */}
              {isActive && (
                <div className="pb-6 md:hidden">
                  <CasePanel id={`case-m-${c.id}`} index={i} />
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <aside aria-live="polite" className="sticky top-24 hidden min-w-0 flex-[1_1_440px] md:block">
        <AnimatePresence mode="wait" initial={false}>
          <m.div
            key={current.id}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <CasePanel id="case-preview" index={active} />
          </m.div>
        </AnimatePresence>
      </aside>
    </div>
  );
}

function CasePanel({ id, index }: { id: string; index: number }) {
  const c = cases[index];
  return (
    <article id={id} className="overflow-hidden rounded-[14px] bg-cream text-ink">
      <CaseVisual kind={c.visual} />
      <div className="px-6 pb-6 pt-6">
        <p className="label flex justify-between text-[11px] tracking-[0.12em] text-muted">
          <span>{c.tag}</span>
          <span>{c.period}</span>
        </p>
        <h3 className="sr-only">{c.title}</h3>
        <p className="mt-3.5 text-lg leading-[1.45]">{c.summary}</p>
        <p className="mt-4 border-l-2 border-brass pl-3.5 text-[15px] font-medium leading-[1.45] text-hunter">
          <span className="label mr-2 text-[10px] tracking-[0.14em] text-muted">Result</span>
          {c.result}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Stack">
          {c.chips.map((chip) => (
            <li key={chip} className="label rounded-full border border-ink px-2.5 py-1.5 text-[10px] tracking-[0.08em]">
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}
