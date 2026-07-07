import Link from "next/link";

const links = [
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume.pdf" },
];

export function SiteNav() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-shell items-center justify-between px-6 py-8">
        <Link
          href="/"
          className="text-lg font-bold text-white transition-opacity hover:opacity-80"
        >
          Ningning
        </Link>
        <ul className="flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white/90 transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
