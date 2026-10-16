"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/content/site";

export function Nav({ hasCv = false }: { hasCv?: boolean }) {
  const [solid, setSolid] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = () => dialogRef.current?.showModal();
  const closeMenu = () => dialogRef.current?.close();

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "border-b border-line bg-cream/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav aria-label="Main" className="mx-auto grid h-[72px] max-w-[1440px] grid-cols-[1fr_auto_1fr] items-center px-4 md:px-7">
        <ul className="hidden gap-7 text-xs font-medium uppercase tracking-[0.06em] md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="hover:text-hunter-2">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#main" aria-label={`${site.name}, back to top`} className="col-start-1 font-serif text-[28px] font-medium text-hunter md:col-start-2">
          B<span className="italic">/</span>P
        </a>
        <div className="col-start-3 flex items-center justify-end gap-5">
          <span className="hidden items-center gap-2 font-mono text-[11px] uppercase tracking-[0.08em] lg:flex">
            <span className="animate-pulse-dot size-[7px] rounded-full bg-brass" aria-hidden="true" />
            Open to new roles
          </span>
          {hasCv && (
            <a
              href={site.links.cv}
              download
              className="hidden border-b border-brass pb-1 text-xs font-medium uppercase tracking-[0.06em] transition-colors hover:text-hunter-2 md:inline-block"
            >
              CV ↓
            </a>
          )}
          <a
            href="#contact"
            className="hidden rounded-full bg-hunter px-[18px] py-3 text-xs font-medium uppercase tracking-[0.06em] text-cream-2 transition-colors hover:bg-hunter-2 md:inline-block"
          >
            Let&apos;s talk ↗︎
          </a>
          <button
            ref={triggerRef}
            type="button"
            onClick={openMenu}
            aria-label="Open menu"
            aria-haspopup="dialog"
            className="flex size-11 flex-col items-center justify-center gap-[5px] rounded-full border border-ink bg-cream-2/60 md:hidden"
          >
            <span className="block h-[1.5px] w-4 bg-hunter" />
            <span className="block h-[1.5px] w-4 bg-hunter" />
          </button>
        </div>
      </nav>

      <dialog
        ref={dialogRef}
        aria-label="Menu"
        onClose={() => triggerRef.current?.focus()}
        className="m-0 h-dvh max-h-none w-screen max-w-none bg-hunter p-0 text-cream backdrop:bg-transparent open:flex open:flex-col"
        onClick={(e) => {
          if ((e.target as HTMLElement).closest("a")) closeMenu();
        }}
      >
        <div className="flex items-center justify-between px-4 pb-3 pt-6">
          <span className="font-serif text-[28px] text-cream">
            B<span className="italic">/</span>P
          </span>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="size-11 rounded-full border border-cream text-lg text-cream"
          >
            ×
          </button>
        </div>
        <ul className="mt-10 flex flex-col gap-1.5 px-4">
          {[...nav, { label: "Contact", href: "#contact" }].map((item, i) => (
            <li key={item.href} className="overflow-hidden border-b border-hunter-2">
              <a
                href={item.href}
                className="animate-rise flex items-baseline justify-between py-2.5 font-serif text-[52px] leading-none"
                style={{ animationDelay: `${80 + i * 60}ms` }}
              >
                {item.label}
                <span className="font-mono text-[11px] text-muted-dark">{String(i + 1).padStart(2, "0")}</span>
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-col gap-3.5 px-4 pb-7 font-mono text-[11px] uppercase tracking-[0.12em] text-muted-dark">
          <span>{site.email}</span>
          <div className="flex gap-5">
            <a href={site.links.telegram} target="_blank" rel="noreferrer">
              Telegram ↗︎
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn ↗︎
            </a>
            {hasCv && (
              <a href={site.links.cv} download className="text-cream">
                CV ↓
              </a>
            )}
          </div>
        </div>
      </dialog>
    </header>
  );
}
