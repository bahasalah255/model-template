"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { photos, series } from "../lib/data";

export default function Book() {
  const [filter, setFilter] = useState("Tout");
  const [open, setOpen] = useState(null); // index dans la liste filtrée

  const list = useMemo(() => (filter === "Tout" ? photos : photos.filter((p) => p.series === filter)), [filter]);

  const close = useCallback(() => setOpen(null), []);
  const step = useCallback((d) => setOpen((i) => (i === null ? i : (i + d + list.length) % list.length)), [list.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open !== null ? list[open] : null;

  return (
    <section id="book" className="section">
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.05]">Book</h2>
        <span className="label text-muted">{photos.length} photos · 2026</span>
      </div>

      <div className="mb-9 flex flex-wrap gap-2" role="tablist" aria-label="Filtrer le book">
        {series.map((s) => (
          <button
            key={s}
            type="button"
            role="tab"
            aria-selected={filter === s}
            onClick={() => setFilter(s)}
            className={`label border px-4 py-2 transition-colors ${
              filter === s ? "border-accent bg-accent text-accent-ink" : "border-line text-muted hover:border-ink hover:text-ink"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="columns-1 gap-4 min-[520px]:columns-2 lg:columns-3">
        {list.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpen(i)}
            aria-label={`Agrandir la photo : ${p.tag}`}
            className="group relative mb-4 block w-full cursor-zoom-in overflow-hidden break-inside-avoid bg-panel p-0"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={p.w}
              height={p.h}
              sizes="(min-width: 1024px) 360px, (min-width: 520px) 48vw, 92vw"
              className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="label absolute bottom-3 left-3 bg-bg px-[9px] py-1 text-ink">{p.tag}</span>
          </button>
        ))}
      </div>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo agrandie"
          onClick={close}
          className="fixed inset-0 z-50 grid cursor-zoom-out place-items-center bg-black/92 p-4 sm:p-8"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={current.src}
            alt={current.alt}
            onClick={(e) => e.stopPropagation()}
            className="h-auto max-h-[86vh] w-auto max-w-[min(92vw,760px)] cursor-default"
          />
          <div
            onClick={(e) => e.stopPropagation()}
            className="label absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 px-5 py-4 text-white"
          >
            <button type="button" onClick={() => step(-1)} className="px-3 py-2 hover:text-accent" aria-label="Photo précédente">
              ← Préc.
            </button>
            <span>
              {open + 1} / {list.length} · {current.tag}
            </span>
            <button type="button" onClick={() => step(1)} className="px-3 py-2 hover:text-accent" aria-label="Photo suivante">
              Suiv. →
            </button>
          </div>
          <button
            type="button"
            onClick={close}
            aria-label="Fermer"
            className="label absolute right-4 top-4 px-3 py-2 text-white hover:text-accent"
          >
            Fermer ✕
          </button>
        </div>
      )}
    </section>
  );
}
