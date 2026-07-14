import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Resume", href:"/Cindy-Zhang-Resume.pdf" },
];

export function SiteNav() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-shell items-center justify-between px-6 py-8">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-ink transition-opacity hover:opacity-70"
        >
          Cindy
        </Link>
        <ul className="flex items-center gap-10 text-[13px] font-medium uppercase tracking-[0.06em] text-ink">
          {links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition-opacity hover:opacity-60">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
