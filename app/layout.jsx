import "./globals.css";
import { site } from "../lib/data";

export const metadata = {
  title: `${site.name} | Mannequin`,
  description: "Omar Bader, mannequin à Casablanca. Book, profil et contact pour shootings, publicité, campagnes et cinéma.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,600;1,6..96,400&family=DM+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
        />
      </head>
      <body className="bg-bg font-body text-base leading-relaxed text-ink antialiased">{children}</body>
    </html>
  );
}
