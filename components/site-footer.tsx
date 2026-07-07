import Link from "next/link";

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/", abbr: "in" },
  { label: "Behance", href: "https://www.behance.net/", abbr: "Bē" },
  { label: "Instagram", href: "https://www.instagram.com/", abbr: "Ig" },
];

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-shell px-6 py-16">
      <div className="flex flex-col gap-8 border-t border-white/5 pt-12 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-sm">
          <h2 className="text-2xl font-semibold text-white">Let&rsquo;s Connect</h2>
          <p className="mt-3 text-sm leading-relaxed text-haze-muted">
            Feel free to reach out for collaboration or just a friendly hello!
          </p>
        </div>

        <ul className="flex items-center gap-4">
          {socials.map((s) => (
            <li key={s.label}>
              <Link
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-11 w-11 items-center justify-center rounded-xl
                           bg-white/5 text-sm font-medium text-haze
                           transition-all duration-300 ease-soft
                           hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                {s.abbr}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
