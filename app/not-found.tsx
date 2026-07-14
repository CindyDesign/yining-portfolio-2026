import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-shell flex-col items-center px-6 py-32 text-center">
      <p className="text-7xl font-bold text-ink sm:text-8xl">404</p>
      <h1 className="mt-6 text-2xl font-medium text-ink">Oops!</h1>
      <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-muted">
        Looks like something went wrong and the page you are looking for
        can&rsquo;t be found.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-2xl border border-ink/15 px-8 py-3 text-sm
                   font-medium text-ink transition-all duration-300 ease-soft
                   hover:-translate-y-0.5 hover:border-ink/40"
      >
        Go Back
      </Link>
    </section>
  );
}
