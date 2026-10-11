import { site } from "../lib/data";

const links = [
  { href: "#book", label: "Book" },
  { href: "#profil", label: "Profil" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <nav className="flex flex-wrap items-center justify-between gap-x-7 gap-y-3 py-6">
      <a href="#top" className="font-display text-[1.15rem] tracking-[0.04em]">
        {site.name}
      </a>
      <ul className="label flex gap-6">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-muted transition-colors hover:text-accent">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
