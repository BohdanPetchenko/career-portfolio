import { CopyEmail } from "@/components/ui/CopyEmail";
import { Marquee } from "@/components/ui/Marquee";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { site } from "@/content/site";
import { hasCv } from "@/lib/cv";

export function Contact() {
  const links = [
    { label: "Telegram ↗", href: site.links.telegram, external: true },
    { label: "LinkedIn ↗", href: site.links.linkedin, external: true },
    ...(hasCv ? [{ label: "CV (PDF) ↓", href: site.links.cv, external: false }] : []),
  ];

  return (
    <section id="contact" aria-labelledby="contact-title" className="overflow-hidden bg-hunter text-cream">
      <div className="mx-auto max-w-[1440px] px-4 pt-24 md:px-[60px]">
        <SectionLabel n="06" dark>
          Contact
        </SectionLabel>
      </div>
      <h2 id="contact-title" className="sr-only">
        Let&apos;s talk
      </h2>
      <Marquee items={["Let's talk ↗"]} className="mt-9 font-serif text-[120px] leading-[0.9] md:text-[220px]" />

      <div className="mx-auto flex max-w-[1440px] flex-wrap items-end justify-between gap-10 px-4 pt-14 md:px-[60px]">
        <div>
          <p className="max-w-[560px] font-serif text-[34px] leading-[1.1] text-cream-2 md:text-[40px]">
            Tell me about your product. <span className="italic text-brass">I&apos;ll tell you where I&apos;d start.</span>
          </p>
          <p className="mt-4 max-w-[460px] text-[17px] leading-normal text-on-dark">
            Open to Full Stack and Frontend roles. Send me the role — email or Telegram is fastest.
          </p>
          <CopyEmail email={site.email} />
        </div>
        <ul className="flex flex-wrap gap-9 text-sm font-semibold uppercase tracking-[0.08em]">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                {...(l.external ? { target: "_blank", rel: "noreferrer" } : { download: true })}
                className="border-b border-brass pb-1 hover:text-cream-2"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <footer className="mx-auto mt-24 flex max-w-[1440px] flex-wrap justify-between gap-4 border-t border-hunter-2 px-4 py-6 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-dark md:px-[60px]">
        <span>© 2026 {site.name}</span>
        <span>{site.location}</span>
        <span>Built with Next.js · Motion</span>
        <a href="#main" className="hover:text-cream">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
