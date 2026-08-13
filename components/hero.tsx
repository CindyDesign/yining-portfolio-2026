import Link from "next/link";
import { HeroShader } from "@/components/hero-shader";

/**
 * Landing hero, matching Figma 227:5644.
 *
 * The typewriter animation is gone, which also means this no longer needs to be
 * a client component — it renders as static HTML with no JS and no layout
 * reservation hack.
 *
 * Headline is Figma 10:512: 48px Regular, 58px line height, -0.9px tracking,
 * #182230, with the two accent phrases in #bc532b.
 */
export function Hero() {
  return (
    /*
     * Fills exactly one viewport minus the header, so the work section starts
     * below the fold rather than peeking above it. svh rather than vh so mobile
     * browser chrome doesn't push content out of view; the vh rule is the
     * fallback for engines without svh.
     */
    <section
      className="relative isolate mx-auto flex max-w-shell flex-col justify-center px-6 py-12
                 min-h-[calc(100vh-var(--header-h))]
                 [@supports(height:100svh)]:min-h-[calc(100svh-var(--header-h))]"
    >
      <HeroShader />
      <h1 className="max-w-4xl text-3xl font-normal leading-tight tracking-[-0.9px] text-ink-stat sm:text-4xl lg:text-5xl lg:leading-[58px]">
        Hi, I&rsquo;m Cindy. I&rsquo;m a Senior Product Designer &amp; AI native builder
        who turns complex Fintech challenges into{" "}
        <span className="text-accent">intuitive</span>,{" "}
        <span className="text-accent">visually pleasing</span> experiences
      </h1>

      {/* Figma 227:5662 — solid primary scrolls to the work list, ghost secondary
          goes to the About page. */}
      <div className="mt-10 flex flex-wrap items-center gap-4">
        <a
          href="#work"
          className="inline-flex items-center rounded-card bg-ink-strong px-[30px] py-3 text-sm
                     font-medium leading-5 text-[#fcfcfd] transition-opacity duration-300
                     ease-soft hover:opacity-90"
        >
          See selected work
        </a>

        <Link
          href="/about"
          className="group inline-flex items-center gap-3 rounded-card px-[22px] py-3 text-sm
                     font-medium leading-5 text-ink transition-colors duration-300 ease-soft
                     hover:text-accent"
        >
          About Cindy
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
            className="transition-transform duration-300 ease-soft group-hover:translate-x-1"
          >
            <path
              d="M2 8h11M9 4l4 4-4 4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
