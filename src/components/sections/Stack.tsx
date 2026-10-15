import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { stackLayers } from "@/content/stack";

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="bg-cream-2 px-4 py-24 md:px-[60px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel n="03">Stack</SectionLabel>
            <h2 id="stack-title" className="mt-5 font-serif text-[52px] font-medium leading-[0.95] tracking-[-0.015em] text-hunter md:text-[80px]">
              My stack, <span className="italic">layer by layer.</span>
            </h2>
          </div>
          <div className="max-w-[360px]">
            <p className="text-[15px] leading-normal text-ink-2">What I use, where it sits in the product, and how often.</p>
            <p className="label mt-3.5 flex gap-4 text-[11px] tracking-[0.08em] text-muted">
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="size-3.5 rounded-[3px] bg-hunter" />
                Daily
              </span>
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="size-3.5 rounded-[3px] border border-hunter" />
                Used in production
              </span>
            </p>
          </div>
        </div>

        <ol className="mt-12 border-b border-line">
          {stackLayers.map((layer, i) => (
            <Reveal
              as="li"
              key={layer.name}
              className={`grid gap-4 border-t border-line px-0 py-6 md:grid-cols-[220px_minmax(0,300px)_minmax(0,1fr)] md:items-center md:gap-7 md:px-6 ${
                i % 2 ? "" : "bg-cream"
              }`}
            >
              <div>
                <span className="font-mono text-[10px] tracking-[0.16em] text-muted">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-1 font-serif text-[32px] font-medium leading-none text-hunter">{layer.name}</h3>
              </div>
              <p className="text-[15px] leading-normal text-ink-2">{layer.text}</p>
              <ul className="flex flex-wrap gap-2" aria-label={`${layer.name} tools`}>
                {layer.tools.map((t) => (
                  <li
                    key={t.name}
                    className={`rounded-full border border-hunter px-3 py-2 text-[13px] font-medium ${
                      t.daily ? "bg-hunter text-cream-2" : "text-hunter"
                    }`}
                  >
                    {t.name}
                    {t.daily && <span className="sr-only"> (daily)</span>}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
