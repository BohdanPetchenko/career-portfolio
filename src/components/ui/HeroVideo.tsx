"use client";

import { useEffect, useRef, useState } from "react";

const MOBILE = "(max-width: 767px)";

/**
 * Full-bleed hero background. The start poster is server-rendered (LCP, no JS needed).
 * After mount the video is added unless the user prefers reduced motion; it plays once and
 * holds its last frame. If autoplay is blocked or the video fails, the end frame is shown instead.
 */
export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mode, setMode] = useState<"poster" | "video" | "end">("poster");

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- decided once after mount, browser-only info
    setMode(reduce ? "end" : "video");
  }, []);

  useEffect(() => {
    if (mode !== "video") return;
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;

    const tryPlay = () => {
      if (document.visibilityState !== "visible" || video.ended) return;
      video.play().catch((err: DOMException) => {
        // AbortError = the browser paused background media (hidden tab) — retry when visible.
        // NotAllowedError / NotSupportedError = autoplay blocked or no playable source — show the end frame.
        if (err.name !== "AbortError") setMode("end");
      });
    };

    tryPlay();
    document.addEventListener("visibilitychange", tryPlay);
    return () => document.removeEventListener("visibilitychange", tryPlay);
  }, [mode]);

  const objectPosition = "50% 30%";

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden bg-cream">
      <picture>
        <source media={MOBILE} srcSet={mode === "end" ? "/hero/hero-bg-end-mobile.jpg" : "/hero/hero-bg-start-mobile.jpg"} />
        <img
          src={mode === "end" ? "/hero/hero-bg-end.jpg" : "/hero/hero-bg-start.jpg"}
          alt=""
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
        />
      </picture>
      {mode === "video" && (
        <video
          ref={videoRef}
          muted
          playsInline
          autoPlay
          preload="metadata"
          disablePictureInPicture
          onError={(e) => {
            // A non-matching <source media> also fires "error"; only give up on a real media error
            // or when no source could be used at all.
            const v = e.currentTarget;
            if (v.error || v.networkState === HTMLMediaElement.NETWORK_NO_SOURCE) setMode("end");
          }}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ objectPosition }}
        >
          <source media={MOBILE} src="/hero/hero-bg-mobile.webm" type="video/webm" />
          <source media={MOBILE} src="/hero/hero-bg-mobile.mp4" type="video/mp4" />
          <source src="/hero/hero-bg.webm" type="video/webm" />
          <source src="/hero/hero-bg.mp4" type="video/mp4" />
        </video>
      )}
    </div>
  );
}
