import Image from "next/image";
import { site, photo } from "../lib/data";

export default function Hero() {
  const main = photo("orange-standing");
  const inset = photo("orange-walk");
  return (
    <header id="top" className="grid items-end gap-14 pb-14 pt-6 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:pb-[72px]">
      <div className="min-w-0">
        <span className="label text-muted">{site.tagline}</span>
        <h1 className="my-[18px] mb-7 font-display text-[clamp(3.6rem,13vw,9.4rem)] font-normal leading-[0.88] tracking-[-0.02em]">
          {site.first}
          <em className="block pl-[0.5em] italic text-accent">{site.last}</em>
        </h1>
        <p className="mb-8 max-w-[34ch] text-[1.08rem] text-muted">{site.lead}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#book"
            className="inline-block border border-accent bg-accent px-6 py-[13px] font-medium text-accent-ink transition-transform hover:-translate-y-0.5"
          >
            Voir le book
          </a>
          <a
            href="#contact"
            className="inline-block border border-ink px-6 py-[13px] font-medium transition-transform hover:-translate-y-0.5"
          >
            Me contacter
          </a>
        </div>
      </div>

      <figure className="relative m-0 min-w-0 pb-10 pl-6 md:pl-10">
        <div aria-hidden className="absolute bottom-0 left-12 right-[-14px] top-7 bg-panel md:left-16" />
        <Image
          src={main.src}
          alt={main.alt}
          width={main.w}
          height={main.h}
          priority
          sizes="(min-width: 768px) 520px, 90vw"
          className="relative ml-auto aspect-[2/3] w-[82%] object-cover object-top"
        />
        <Image
          src={inset.src}
          alt={inset.alt}
          width={inset.w}
          height={inset.h}
          sizes="200px"
          className="absolute bottom-0 left-0 aspect-[4/5] w-[38%] border-[6px] border-bg object-cover"
        />
        <figcaption className="label relative mt-3 pr-1 text-right text-muted">Editorial · Studio</figcaption>
      </figure>
    </header>
  );
}
