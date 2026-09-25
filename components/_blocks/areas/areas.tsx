import { ArrowRight, MapPin } from "lucide-react";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

export default function Areas({ dict }: { dict: Dictionary["areas"] }) {
  return (
    <section id="areas" className="bg-ink py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-[2fr_3fr] lg:gap-24 lg:px-8">
        <div>
          <p className="text-gold-light text-xs font-semibold tracking-[0.25em] uppercase">
            {dict.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">
            {dict.title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/70">
            {dict.body}
          </p>
          <a
            href="#contact"
            className="text-gold-light group mt-10 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase transition-colors hover:text-white"
          >
            {dict.ask}
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </a>
        </div>

        <div className="space-y-10">
          {site.areas.map((area) => (
            <div key={area.county}>
              <h3 className="border-b border-white/10 pb-3 text-xs font-semibold tracking-[0.25em] text-white/50 uppercase">
                {dict.county.replace("{name}", area.county)}
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-x-6 sm:grid-cols-3">
                {area.towns.map((town) => (
                  <li
                    key={town}
                    className="font-display flex items-center gap-2.5 py-2.5 text-xl"
                  >
                    <MapPin
                      className="text-gold-light size-4 shrink-0"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                    {town}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
