import { site } from "../lib/data";

export default function Footer() {
  return (
    <footer className="label flex flex-wrap justify-between gap-x-6 gap-y-2 border-t border-line py-9 text-muted">
      <span>
        © {site.year} {site.name}
      </span>
      <span>{site.city}</span>
    </footer>
  );
}
