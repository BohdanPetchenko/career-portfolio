import { Reveal } from "@/components/motion/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { MotionPause } from "@/components/ui/MotionPause";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { StackOrbit } from "@/components/ui/StackOrbit";
import { marquee, numbers, principles } from "@/content/site";

export function HowIWork() {
  return (
    <>
      <section id="how" aria-labelledby="how-title" className="bg-gradient-to-b from-sand to-sand-2 px-4 py-24 md:px-[60px] md:pb-[88px]">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-start gap-16">
          <Reveal className="flex min-w-0 flex-[999_1_480px] flex-col">
            <SectionLabel n="02">How I work</SectionLabel>
            <h2 id="how-title" className="mt-5 font-serif text-[72px] font-medium leading-[0.9] tracking-[-0.015em] text-hunter md:text-[120px]">
              Start to <span className="italic">finish.</span>
            </h2>
            <p className="mt-6 max-w-[520px] text-lg leading-normal text-ink-2 md:text-[19px]">
              Five years on one platform, owning features from the database to the screen. These are the habits that
              came out of it.
            </p>
            <ol className="mt-11 border-t border-ink">
              {principles.map((p, i) => (
                <li
                  key={p.title}
                  className="grid gap-x-5 gap-y-1 border-b border-[#c2b7a3] py-5 md:grid-cols-[56px_240px_minmax(0,1fr)] md:items-baseline"
                >
                  <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="font-serif text-[30px] font-medium leading-[1.05] text-hunter">{p.title}</h3>
                  <p className="text-[15px] leading-normal text-ink-2">{p.text}</p>
                </li>
              ))}
            </ol>
            <a
              href="#work"
              className="mt-8 self-start bg-hunter px-[30px] py-[17px] text-xs font-semibold uppercase tracking-[0.08em] text-cream-2 transition-colors hover:bg-hunter-2"
            >
              See the work
            </a>
          </Reveal>
          <div className="flex w-full flex-[1_1_440px] flex-col items-center gap-5">
            <StackOrbit />
            <MotionPause />
          </div>
        </div>
      </section>

      <Marquee items={marquee} className="bg-hunter py-[18px] text-[30px] font-medium text-cream" />

      <section aria-labelledby="numbers-title" className="bg-cream px-4 py-16 md:px-[60px] md:pb-[72px]">
        <div className="mx-auto max-w-[1320px]">
          <h2 id="numbers-title" className="label text-muted">
            By the <span className="font-serif text-lg normal-case italic tracking-normal">numbers</span>
          </h2>
          <ul className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {numbers.map((n, i) => (
              <Reveal as="li" key={n.text} delay={i * 80} className="border-t border-hunter pt-[22px]">
                <p className="font-serif text-[72px] leading-[0.9] text-hunter md:text-[80px]">
                  {n.value}
                  <span className="text-[44px] italic">{n.unit}</span>
                </p>
                <p className="mt-3.5 max-w-[240px] text-[15px] leading-[1.45] text-ink-2">{n.text}</p>
              </Reveal>
            ))}
          </ul>
          <p className="mt-12 flex flex-wrap items-baseline gap-x-5 gap-y-3 border-t border-line pt-8 font-serif text-[28px] leading-[1.15] text-hunter md:text-[34px]">
            Want results like these on your product?
            <a
              href="#contact"
              className="border-b border-brass pb-1 font-sans text-xs font-semibold uppercase tracking-[0.08em] text-ink transition-colors hover:text-hunter-2"
            >
              Let&apos;s talk ↗︎
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
