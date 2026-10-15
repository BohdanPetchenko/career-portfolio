"use client";

import { m } from "motion/react";
import Image from "next/image";

/** ID badge on a strap. Drag it — it springs back. Idle sway is CSS so it costs nothing. */
export function LanyardBadge() {
  return (
    <div className="flex min-h-[560px] justify-center">
      <m.div
        drag
        dragSnapToOrigin
        dragElastic={0.35}
        dragTransition={{ bounceStiffness: 120, bounceDamping: 8 }}
        whileDrag={{ cursor: "grabbing", rotate: -4 }}
        className="flex origin-top cursor-grab flex-col items-center"
        style={{ touchAction: "none" }}
      >
        <div className="badge-sway flex flex-col items-center">
          <div aria-hidden="true" className="h-[150px] w-[26px]" style={{ background: "repeating-linear-gradient(90deg, #1f3a2e 0 2px, #2a4538 2px 4px)" }} />
          <div aria-hidden="true" className="-mt-0.5 h-[22px] w-[54px] rounded bg-brass" />
          <figure className="mt-2 w-[300px] rounded-[18px] bg-hunter p-[22px] text-cream shadow-[0_40px_70px_-30px_rgba(0,0,0,.5)] select-none">
            <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-muted-dark">
              <span>Engineer</span>
              <span>Since 2021</span>
            </div>
            <div aria-hidden="true" className="mx-auto mt-2.5 h-1.5 w-[22px] rounded-sm bg-ink-2" />
            <Image
              src="/images/portrait.jpg"
              alt="Portrait of Bohdan Petchenko"
              width={733}
              height={1100}
              draggable={false}
              className="mt-3.5 h-[260px] w-full rounded-[10px] object-cover object-[center_22%] saturate-[.92]"
            />
            <figcaption>
              <p className="mt-4 text-[26px] font-semibold leading-none tracking-[-0.02em]">Bohdan Petchenko</p>
              <p className="mt-2 font-serif text-xl italic text-on-dark">Full Stack Engineer</p>
              <p className="mt-4 flex justify-between border-t border-dashed border-hunter-2 pt-3.5 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-dark">
                <span>Frontend · Backend · AI-DLC</span>
                <span aria-hidden="true">▮▯▮▮▯▮</span>
              </p>
            </figcaption>
          </figure>
        </div>
      </m.div>
    </div>
  );
}
