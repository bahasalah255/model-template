"use client";

import { useState } from "react";
import { site } from "../lib/data";

function CopyRow({ label, value, actionHref, actionTarget, actionRel }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1400);
    } catch {
      /* Le texte reste sélectionnable à la main si le presse-papiers est refusé. */
    }
  }

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-line py-[18px]">
      <b className="font-medium">{label}</b>
      <span className="break-all font-mono text-[0.9rem]">{value}</span>
      <div className="flex flex-wrap gap-2">
        <a
          href={actionHref}
          target={actionTarget}
          rel={actionRel}
          className="border border-line px-3 py-1.5 text-[0.8rem] transition-colors hover:border-accent hover:text-accent"
        >
          Écrire
        </a>
        <button
          type="button"
          onClick={copy}
          className="border border-line px-3 py-1.5 text-[0.8rem] transition-colors hover:border-accent hover:text-accent"
        >
          {copied ? "Copié" : "Copier"}
        </button>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section">
      <h2 className="mb-9 max-w-[16ch] font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.05]">
        Un projet en tête ?
      </h2>
      <p className="max-w-[46ch] text-muted">
        Pour un casting, un shooting ou une collaboration, écrivez directement. Réponse rapide.
      </p>

      <div className="mt-9 grid max-w-[640px]">
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-line py-[18px]">
          <b className="font-medium">Instagram</b>
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.9rem] transition-colors hover:text-accent"
          >
            {site.instagram.handle}
          </a>
        </div>
        <CopyRow
          label="WhatsApp"
          value={site.whatsapp}
          actionHref={site.whatsappLink}
          actionTarget="_blank"
          actionRel="noopener noreferrer"
        />
        <CopyRow label="Email" value={site.email} actionHref={`mailto:${site.email}`} />
      </div>
    </section>
  );
}
