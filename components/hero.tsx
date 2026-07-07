import Link from "next/link";

export function Hero() {
  return (
    <section className="relative mx-auto max-w-shell px-6 pb-24 pt-10">
      {/* Ambient glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px]
                   bg-[radial-gradient(40rem_22rem_at_60%_30%,rgba(180,107,216,0.25),transparent_60%),radial-gradient(30rem_20rem_at_10%_20%,rgba(109,94,252,0.3),transparent_60%)]"
      />

      {/* Mark */}
      <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-full bg-glow-violet text-2xl font-bold text-white shadow-lg shadow-glow-violet/30">
        N
      </div>

      <p className="mb-4 text-2xl font-light text-haze sm:text-3xl">
        Hello, I am Ningning, a thoughtful UX Designer who
      </p>

      <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
        create{" "}
        <span className="bg-gradient-to-r from-glow-violet to-glow-plum bg-clip-text text-transparent">
          intuitive
        </span>{" "}
        and <span className="text-white">visually pleasing</span> web and mobile
        experiences.
      </h1>

      <Link
        href="#work"
        aria-label="Scroll to featured work"
        className="mt-12 inline-flex h-11 w-11 items-center justify-center rounded-full
                   text-white/70 transition-all duration-300 ease-soft
                   hover:translate-y-1 hover:text-white"
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
