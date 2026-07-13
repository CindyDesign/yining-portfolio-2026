import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "Behance", href: "https://www.behance.net/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
];

export function SiteFooter() {
  return (
    <footer className="w-full">
      <div className="mx-auto flex max-w-shell flex-col gap-12 px-6 pb-6 pt-24">
        <div className="h-px w-full bg-line" />

        <div className="flex flex-col items-start justify-between gap-10 sm:flex-row">
          <div className="flex max-w-md flex-col gap-4">
            <h2 className="text-3xl font-light tracking-tight text-ink sm:text-4xl">
              Let&rsquo;s Connect
            </h2>
            <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
              Feel free to reach out for collaboration or just a friendly hello!
            </p>
            <a
              href="mailto:ningningerdesign@gmail.com"
              className="text-lg font-medium text-accent transition-opacity hover:opacity-80"
            >
              ningningerdesign@gmail.com
            </a>
          </div>

          <ul className="flex items-center gap-8 pt-2 text-[13px] font-medium uppercase tracking-[0.06em] text-ink">
            {socials.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity hover:opacity-60"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="text-[13px] text-ink-muted">© 2026 Cindy — UX Designer</p>
      </div>
    </footer>
  );
}
