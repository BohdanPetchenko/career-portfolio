/** Decorative ticker. The words are listed elsewhere as real text, so the whole track is aria-hidden. */
// "✳", "↗" and "▶" across the site are followed by U+FE0E (invisible) so iOS draws them as text, not emoji.
export function Marquee({ items, className = "" }: { items: readonly string[]; className?: string }) {
  const row = items.flatMap((item) => [item, "✳︎"]);
  return (
    <div aria-hidden="true" className={`marquee-track overflow-hidden whitespace-nowrap ${className}`}>
      <div className="animate-marquee inline-block">
        {[...row, ...row].map((word, i) => (
          <span key={i} className={`px-7 ${word === "✳︎" ? "text-brass" : ""}`}>
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}
