import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { LanyardBadge } from "@/components/ui/LanyardBadge";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { disciplines } from "@/content/work";
import { aboutFacts } from "@/content/site";

export function About() {
  return (
    <>
      <section id="about" aria-labelledby="about-title" className="bg-cream-2">
        <div className="mx-auto flex max-w-[1320px] flex-wrap items-start gap-16 px-4 py-24 md:px-[60px] md:pb-[110px]">
          <Reveal className="min-w-0 flex-[999_1_560px]">
            <SectionLabel n="01">About</SectionLabel>
            <h2 id="about-title" className="mt-7 font-serif text-[56px] font-medium leading-[0.95] tracking-[-0.015em] text-hunter md:text-[88px]">
              Hi, I&apos;m <span className="italic">Bohdan.</span>
            </h2>
            <p className="mt-8 max-w-[640px] text-lg leading-[1.45] text-ink-2 md:text-[22px]">
              I&apos;m a Full Stack Engineer with five years of TypeScript in production. On a SaaS recruiting platform for
              colleges, athletes and clubs, used by 10,000 people a day, I design the NestJS APIs and MySQL schemas — and
              build the six React apps on top of them.
            </p>
            <dl className="mt-14 grid max-w-[680px] grid-cols-1 gap-x-10 sm:grid-cols-2">
              {aboutFacts.map((f) => (
                <div key={f.term} className="border-t border-line py-4">
                  <dt className="label text-[11px] tracking-[0.16em] text-muted">{f.term}</dt>
                  <dd className="mt-1.5 text-[17px]">{f.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <div className="flex-[1_1_340px]">
            <LanyardBadge />
          </div>
        </div>
      </section>

      <section aria-label="Disciplines" className="bg-hunter px-4 py-14 text-cream md:px-[60px]">
        <ul className="mx-auto grid max-w-[1320px] gap-10 md:grid-cols-3">
          {disciplines.map((d, i) => (
            <Reveal as="li" key={d.title} delay={i * 80} className="flex items-stretch gap-6">
              <Image
                src={d.image}
                alt={d.alt}
                width={765}
                height={1024}
                sizes="150px"
                className="h-[200px] w-[150px] flex-none rounded-t-[75px] object-cover"
              />
              <div className="flex min-w-0 flex-col">
                <div className="flex items-baseline gap-2.5">
                  <span className="font-mono text-[11px] text-brass">{d.n}</span>
                  <h3 className="text-[22px] font-semibold uppercase tracking-[0.02em]">{d.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-normal text-on-dark">{d.text}</p>
                <a
                  href={d.title === "AI-DLC" ? "#how" : "#work"}
                  className="mt-auto self-start border-b border-brass pb-1 text-xs font-semibold uppercase tracking-[0.08em] text-cream"
                >
                  {d.cta} →
                </a>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>
    </>
  );
}
