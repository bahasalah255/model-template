import Image from "next/image";
import { site, photo, measurements } from "../lib/data";

export default function Profile() {
  const portrait = photo("blue-headshot");
  return (
    <section id="profil" className="section">
      <div className="mb-9 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-normal leading-[1.05]">Profil</h2>
        <span className="label text-muted">Comp card</span>
      </div>

      <div className="grid items-start gap-8 md:grid-cols-[0.8fr_1.2fr] md:gap-12">
        <Image
          src={portrait.src}
          alt={`Portrait de ${site.name}`}
          width={portrait.w}
          height={portrait.h}
          sizes="(min-width: 768px) 420px, 92vw"
          className="aspect-[3/4] w-full object-cover object-[50%_32%]"
        />
        <div className="min-w-0">
          {site.bio.map((paragraph, index) => (
            <p key={paragraph} className={`${index === site.bio.length - 1 ? "mb-7" : "mb-4"} max-w-[52ch] text-muted`}>
              {paragraph}
            </p>
          ))}
          <div className="mb-7 text-muted">
            <span className="label">Publicités TV</span> {site.credits.join(" · ")}
          </div>
          <div className="border-t-2 border-ink">
            <h3 className="label mb-2 mt-3 font-normal text-muted">Infos & mensurations</h3>
            <dl className="grid grid-cols-2">
              {measurements.map((m) => (
                <div key={m.label} className="border-b border-line py-3.5 pr-4">
                  <dt className="label text-muted">{m.label}</dt>
                  <dd
                    className={
                      m.value
                        ? "mt-0.5 font-display text-2xl"
                        : "mt-0.5 pt-2 font-mono text-[0.8rem] tracking-[0.1em] text-accent"
                    }
                  >
                    {m.value ?? "à confirmer"}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
