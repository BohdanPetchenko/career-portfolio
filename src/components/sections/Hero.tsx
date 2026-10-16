import { HeroVideo } from "@/components/ui/HeroVideo";
import { heroHighlights, site } from "@/content/site";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <HeroVideo />
      {/* Scrims: text legibility on both the first and the last frame; solid on mobile. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(234,227,214,.96) 0%, rgba(234,227,214,.84) 26%, rgba(234,227,214,0) 42%, rgba(234,227,214,0) 62%, rgba(234,227,214,.72) 82%, rgba(234,227,214,.92) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 lg:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(234,227,214,.9) 0%, rgba(234,227,214,.45) 22%, rgba(234,227,214,0) 34%, rgba(234,227,214,0) 60%, rgba(234,227,214,.94) 76%, #eae3d6 100%)",
        }}
      />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-cream to-transparent" />

      <div className="relative mx-auto flex h-full max-w-[1440px] flex-col px-4 pb-6 pt-[96px] lg:px-[60px] lg:pb-9 lg:pt-[148px] md:px-10">
        <div className="flex flex-1 flex-col lg:grid lg:grid-cols-[minmax(0,1fr)_250px] lg:grid-rows-[auto_1fr] lg:gap-x-10">
          <div className="max-w-[480px] lg:max-w-[calc(37vw-60px)]">
            <p className="label animate-fade-up text-muted" style={{ animationDelay: "200ms" }}>
              {site.role}
            </p>
            <h1 id="hero-title" className="mt-4 font-serif text-[64px] font-medium leading-[0.86] tracking-[-0.02em] text-hunter md:text-[88px] lg:mt-6 lg:text-[clamp(64px,8vw,120px)]">
              <span className="block overflow-hidden pb-[0.04em]">
                <span className="animate-rise inline-block" style={{ animationDelay: "250ms" }}>
                  {site.firstName}
                </span>
              </span>
              <span className="block overflow-hidden pb-[0.06em]">
                <span className="animate-rise inline-block italic" style={{ animationDelay: "370ms" }}>
                  {site.lastName}
                </span>
              </span>
            </h1>
          </div>

          <ul
            aria-label="Highlights"
            className="animate-fade-up hidden w-[250px] flex-col gap-6 pt-10 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex"
            style={{ animationDelay: "1100ms" }}
          >
            {heroHighlights.map((h) => (
              <li key={h.unit} className="border-t border-hunter pt-3">
                <p className="font-serif text-[52px] leading-[0.9] text-hunter">
                  {h.value} <span className="text-[30px] italic">{h.unit}</span>
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.45] text-ink-2">{h.text}</p>
              </li>
            ))}
          </ul>

          <div className="mt-auto max-w-[560px] lg:col-start-1 lg:row-start-2 lg:mt-8 lg:max-w-[calc(37vw-60px)]">
            <HookAndCtas />
          </div>
        </div>

        <div className="mt-8 hidden items-end justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted lg:flex">
          <span>{site.location}</span>
          <a href="#about" className="flex flex-col items-center gap-2.5">
            Scroll
            <span aria-hidden="true" className="animate-scroll-line block h-[46px] w-px bg-hunter" />
          </a>
          <span>{site.stackLine}</span>
        </div>
      </div>
    </section>
  );
}

function HookAndCtas() {
  return (
    <div className="animate-fade-up" style={{ animationDelay: "700ms" }}>
      <p className="text-base leading-[1.45] text-ink-2 lg:text-xl">
        {site.hook.before}
        <strong className="font-semibold text-ink">{site.hook.strong}</strong>
        {site.hook.after}
      </p>
      <div className="mt-5 flex gap-2.5 lg:mt-9 lg:items-center lg:gap-6">
        <a
          href="#work"
          className="flex-1 bg-hunter px-[30px] py-4 text-center text-xs font-semibold uppercase tracking-[0.08em] text-cream-2 transition-colors hover:bg-hunter-2 lg:flex-none lg:py-[17px]"
        >
          View work
        </a>
        <a
          href="#contact"
          className="flex-1 border border-hunter bg-cream-2 py-4 text-center text-xs font-semibold uppercase tracking-[0.08em] lg:flex-none lg:border-0 lg:border-b lg:border-brass lg:bg-transparent lg:px-0 lg:py-1.5"
        >
          Let&apos;s talk ↗︎
        </a>
      </div>
    </div>
  );
}
