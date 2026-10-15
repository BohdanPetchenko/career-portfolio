import { orbitRings } from "@/content/stack";
import type { CSSProperties } from "react";

const SIZE = 640;
const C = SIZE / 2;
const DURATIONS = [70, 95, 120];

/** Decorative: the same stack is listed as text in the Stack section, so this is aria-hidden. */
export function StackOrbit() {
  return (
    <figure className="m-0 flex flex-col items-center gap-4">
      <div aria-hidden="true" className="orbit relative aspect-square w-full max-w-[640px]">
        <div className="absolute inset-0">
          {orbitRings.map((ring, k) => {
            const vars = {
              "--orbit-duration": `${DURATIONS[k]}s`,
              "--orbit-direction": k % 2 ? "reverse" : "normal",
            } as CSSProperties;
            return (
              <div
                key={ring.name}
                className={`orbit-ring absolute rounded-full border border-hunter ${k === 2 ? "border-dashed" : ""}`}
                style={{
                  ...vars,
                  left: `${((C - ring.radius) / SIZE) * 100}%`,
                  top: `${((C - ring.radius) / SIZE) * 100}%`,
                  width: `${((ring.radius * 2) / SIZE) * 100}%`,
                  height: `${((ring.radius * 2) / SIZE) * 100}%`,
                }}
              >
                {ring.icons.map((icon, i) => {
                  const a = (i / ring.icons.length) * Math.PI * 2 - Math.PI / 2 + k * 0.35;
                  const dark = k === 0;
                  return (
                    <span
                      key={icon.slug}
                      title={icon.title}
                      className={`orbit-badge absolute flex size-12 items-center justify-center rounded-full shadow-[0_8px_18px_-10px_rgba(31,58,46,.6)] max-md:size-9 ${
                        dark ? "bg-hunter text-cream-2" : "bg-cream-2 text-hunter"
                      }`}
                      style={{
                        ...vars,
                        left: `${50 + Math.cos(a) * 50}%`,
                        top: `${50 + Math.sin(a) * 50}%`,
                        translate: "-50% -50%",
                      }}
                    >
                      <svg viewBox="0 0 24 24" className="size-6 max-md:size-[18px]" fill="currentColor">
                        <path d={icon.path} />
                      </svg>
                    </span>
                  );
                })}
              </div>
            );
          })}
          <div className="absolute left-1/2 top-1/2 flex size-[27.5%] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-hunter text-center text-cream-2">
            <p className="font-serif text-[clamp(32px,5vw,52px)] leading-[0.9]">
              5+ <span className="text-[0.6em] italic">yrs</span>
            </p>
            <p className="label mt-2 text-[9px] tracking-[0.16em] text-on-dark">in production</p>
          </div>
        </div>
      </div>
      <figcaption className="label flex flex-wrap justify-center gap-x-5 gap-y-1 text-[10px] tracking-[0.14em] text-muted">
        <span>Inner — Frontend</span>
        <span>Middle — Backend &amp; data</span>
        <span>Outer — Quality, delivery &amp; AI</span>
      </figcaption>
    </figure>
  );
}
