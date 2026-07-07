import Link from "next/link";

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.5h5V24H0V8.5zM8 8.5h4.78v2.11h.07c.67-1.2 2.3-2.47 4.73-2.47C22.4 8.14 24 10.6 24 14.86V24h-5v-8.1c0-1.93-.03-4.42-2.69-4.42-2.7 0-3.11 2.1-3.11 4.28V24H8V8.5z" />
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "https://www.behance.net/",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
        <path d="M8.2 6.5c.72 0 1.38.06 1.98.2.6.12 1.1.33 1.53.62.42.28.75.66.97 1.15.23.48.34 1.08.34 1.78 0 .77-.17 1.4-.53 1.92-.34.5-.86.92-1.55 1.24.95.27 1.66.75 2.12 1.44.47.68.7 1.5.7 2.47 0 .78-.15 1.45-.45 2.02-.3.56-.72 1.03-1.23 1.38-.52.36-1.12.62-1.78.79-.66.16-1.35.24-2.03.24H0V6.5h8.2zm-.5 5.42c.6 0 1.08-.14 1.46-.42.38-.29.56-.75.56-1.38 0-.35-.06-.65-.19-.87-.13-.23-.3-.4-.52-.53-.22-.12-.47-.2-.75-.25a5.2 5.2 0 0 0-.9-.07H3.4v3.99h4.3zm.23 5.7c.33 0 .65-.03.94-.1.3-.06.56-.17.78-.32.22-.16.4-.36.53-.63.13-.26.19-.6.19-1 0-.8-.22-1.36-.67-1.7-.44-.34-1.03-.5-1.76-.5H3.4v4.24h4.53zM15.9 8.03h5.68v1.38H15.9V8.03zM24 15.1c0 .27-.02.53-.05.78h-6.6c0 .72.25 1.4.68 1.77.42.36.94.55 1.55.55.44 0 .82-.11 1.14-.33.32-.22.52-.46.6-.72h2.4c-.38 1.2-.97 2.05-1.77 2.57-.8.52-1.76.78-2.9.78-.8 0-1.5-.13-2.14-.38a4.5 4.5 0 0 1-1.62-1.1 4.9 4.9 0 0 1-1.02-1.7 6.3 6.3 0 0 1-.36-2.16c0-.77.12-1.48.37-2.13a5 5 0 0 1 2.7-2.83 5.3 5.3 0 0 1 2.1-.4c.86 0 1.6.16 2.24.5a4.6 4.6 0 0 1 1.58 1.33c.42.55.72 1.18.9 1.9.1.4.15.83.15 1.3zm-2.74-1.1c-.06-.63-.28-1.1-.65-1.44-.37-.33-.85-.5-1.44-.5-.4 0-.73.07-1 .2-.27.14-.48.3-.65.5-.16.2-.28.4-.35.63-.07.22-.12.42-.13.6h4.27z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
      </svg>
    ),
  },
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
                           bg-white/5 text-haze
                           transition-all duration-300 ease-soft
                           hover:-translate-y-0.5 hover:bg-white/10 hover:text-white"
              >
                {s.icon}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
