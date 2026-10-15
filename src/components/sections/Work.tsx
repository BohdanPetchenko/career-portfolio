import { SectionLabel } from "@/components/ui/SectionLabel";
import { WorkExplorer } from "@/components/ui/WorkExplorer";

export function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="bg-hunter px-4 py-24 text-cream md:px-[60px]">
      <div className="mx-auto max-w-[1320px]">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel n="04" dark>
              Selected work
            </SectionLabel>
            <h2 id="work-title" className="mt-5 font-serif text-[60px] font-medium leading-[0.92] tracking-[-0.015em] md:text-[96px]">
              Things I&apos;ve <span className="italic">built.</span>
            </h2>
          </div>
          <p className="max-w-[360px] text-[15px] leading-normal text-on-dark">
            Eight cases from five years of product work. The products are under NDA, so each case shows the problem,
            what I did and what changed.
          </p>
        </div>

        <WorkExplorer />

        <div className="mt-[72px] flex flex-wrap items-center justify-between gap-8 border-t border-hunter-2 pt-10">
          <p className="max-w-[720px] font-serif text-[34px] leading-[1.1] text-cream-2 md:text-[44px]">
            Need one engineer who owns a feature from database to screen?{" "}
            <span className="italic text-brass">Let&apos;s talk.</span>
          </p>
          <div className="flex flex-wrap gap-3.5">
            <a
              href="#contact"
              className="bg-brass px-7 py-[17px] text-xs font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:bg-cream"
            >
              Start a conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
