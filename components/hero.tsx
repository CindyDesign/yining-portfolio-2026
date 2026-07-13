"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const segments = [
  { text: "Hello, I am Cindy, a thoughtful UX Designer who create ", accent: false },
  { text: "intuitive", accent: true },
  { text: " and ", accent: false },
  { text: "visually pleasing", accent: true },
  { text: " web and mobile experiences.", accent: false },
] as const;

const fullText = segments.map((s) => s.text).join("");

export function Hero() {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setCharCount(fullText.length);
      return;
    }

    let count = 0;
    const interval = setInterval(() => {
      count += 1;
      setCharCount(count);
      if (count >= fullText.length) clearInterval(interval);
    }, 28);

    return () => clearInterval(interval);
  }, []);

  const isDone = charCount >= fullText.length;

  let consumed = 0;
  const rendered = segments.map((segment, i) => {
    const start = consumed;
    consumed += segment.text.length;
    const visible = segment.text.slice(0, Math.max(0, charCount - start));
    if (!visible) return null;
    return segment.accent ? (
      <span key={i} className="text-accent">
        {visible}
      </span>
    ) : (
      <span key={i}>{visible}</span>
    );
  });

  return (
    <section className="mx-auto max-w-shell px-6 pb-24 pt-16 sm:pt-24">
      <h1 className="max-w-4xl text-4xl font-light leading-[1.15] tracking-tight text-ink sm:text-6xl lg:text-[66px] lg:leading-[1.08] lg:tracking-[-1.32px]">
        <span className="sr-only">{fullText}</span>
        <span aria-hidden="true">
          {rendered}
          <span
            className={`ml-1 inline-block h-[0.85em] w-[2px] translate-y-[0.1em] bg-ink align-middle ${
              isDone ? "animate-[blink_1s_steps(1)_infinite]" : ""
            }`}
          />
        </span>
      </h1>

      <Link
        href="#work"
        aria-label="Scroll to featured work"
        className="mt-12 inline-flex h-11 w-11 items-center justify-center rounded-full
                   text-ink/60 transition-all duration-300 ease-soft
                   hover:translate-y-1 hover:text-ink"
      >
        <svg width="20" height="24" viewBox="0 0 20 24" fill="none" aria-hidden>
          <path
            d="M10 1v22M10 23l-8-8M10 23l8-8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </section>
  );
}
