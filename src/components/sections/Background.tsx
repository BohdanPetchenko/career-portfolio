import { Reveal } from "@/components/motion/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { education, languages, roles } from "@/content/background";
import { site } from "@/content/site";
import { hasCv } from "@/lib/cv";

export function Background() {
  return (
    <section id="background" aria-labelledby="background-title" className="bg-cream px-4 py-24 md:px-[60px]">
      <div className="mx-auto max-w-[1320px]">
        <SectionLabel n="05">Background</SectionLabel>
        <div className="mt-5 flex flex-wrap items-end justify-between gap-6">
          <h2 id="background-title" className="font-serif text-[60px] font-medium leading-[0.95] tracking-[-0.015em] text-hunter md:text-[88px]">
            Work <span className="italic">&amp;</span> study.
          </h2>
          {hasCv && (
            <a
              href={site.links.cv}
              download
              className="bg-hunter px-[26px] py-4 text-xs font-semibold uppercase tracking-[0.08em] text-cream-2 transition-colors hover:bg-hunter-2"
            >
              Full CV (PDF) ↓
            </a>
          )}
        </div>

        <div className="mt-14 grid items-start gap-16 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)]">
          <section aria-labelledby="experience-title">
            <div className="flex items-baseline justify-between border-b border-hunter pb-3">
              <h3 id="experience-title" className="label text-xs text-ink">
                Experience
              </h3>
              <span className="font-mono text-[11px] text-muted">ITRDev · 2021 — now</span>
            </div>
            <ol className="ml-1.5 border-l border-brass pl-7">
              {roles.map((r) => (
                <Reveal as="li" key={r.role} className="relative pb-2 pt-7">
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[35px] top-9 size-[13px] rounded-full border border-hunter ${r.current ? "bg-hunter" : "bg-cream"}`}
                  />
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted">{r.period}</p>
                  <h4 className="mt-1.5 font-serif text-[34px] font-medium leading-[1.05] text-hunter">{r.role}</h4>
                  <ul className="mt-3 flex flex-col gap-1.5">
                    {r.points.map((p) => (
                      <li key={p} className="text-[15px] leading-normal text-ink-2">
                        <span aria-hidden="true" className="text-brass">
                          —{" "}
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ol>
          </section>

          <section aria-labelledby="education-title" className="bg-cream-2 p-7 lg:sticky lg:top-24">
            <h3 id="education-title" className="label border-b border-hunter pb-3 text-xs text-ink">
              Education
            </h3>
            {education.map((e) => (
              <div key={e.degree} className="border-b border-line py-5">
                <p className="font-mono text-[11px] text-muted">{e.period}</p>
                <h4 className="mt-1.5 font-serif text-[28px] font-medium leading-[1.05] text-hunter">{e.degree}</h4>
                <p className="mt-1.5 text-sm text-ink-2">{e.school}</p>
              </div>
            ))}
            <h3 className="label mt-7 text-xs text-ink">Languages</h3>
            <ul className="mt-3 flex flex-wrap gap-2.5">
              {languages.map((l) => (
                <li key={l} className="rounded-full border border-hunter px-3.5 py-2 text-[13px]">
                  {l}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
