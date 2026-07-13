import Link from "next/link";

export function Hero() {
  return (
    <section className="mx-auto max-w-shell px-6 pb-24 pt-16 sm:pt-24">
      <h1 className="max-w-4xl text-4xl font-light leading-[1.15] tracking-tight text-ink sm:text-6xl lg:text-[66px] lg:leading-[1.08] lg:tracking-[-1.32px]">
        Hello, I am Cindy, a thoughtful UX Designer who create{" "}
        <span className="text-accent">intuitive</span> and{" "}
        <span className="text-accent">visually pleasing</span> web and mobile
        experiences.
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
