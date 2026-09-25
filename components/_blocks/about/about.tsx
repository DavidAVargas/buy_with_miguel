import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";
import { Button } from "@/components/button/button";

export default function About({ dict }: { dict: Dictionary["about"] }) {
  return (
    <section id="about" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:gap-24 lg:px-8">
        <div className="relative mx-auto w-[calc(100%-1rem)] max-w-md sm:w-full lg:max-w-none">
          <div
            className="border-gold-light absolute inset-0 translate-x-4 translate-y-4 border sm:translate-x-6 sm:translate-y-6"
            aria-hidden="true"
          />
          <div className="bg-ink relative aspect-[4/5] overflow-hidden shadow-2xl">
            {site.headshot ? (
              <Image
                src={site.headshot}
                alt={dict.photoAlt}
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-white">
                <span className="font-display text-gold-light text-8xl">
                  MH
                </span>
                <span className="text-xs tracking-[0.25em] text-white/60 uppercase">
                  {dict.photoSoon}
                </span>
              </div>
            )}
          </div>
        </div>

        <div>
          <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
            {dict.eyebrow}
          </p>
          <h2 className="font-display mt-4 text-4xl sm:text-5xl">
            {dict.title}
          </h2>
          <div className="text-muted-foreground mt-6 space-y-4 text-lg leading-relaxed">
            {dict.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {dict.values.map((value) => (
              <li
                key={value}
                className="flex items-center gap-3 text-sm font-medium"
              >
                <Check
                  className="text-gold size-4 shrink-0"
                  aria-hidden="true"
                />
                {value}
              </li>
            ))}
          </ul>

          <dl className="border-border mt-10 grid grid-cols-2 gap-6 border-t pt-8">
            <div>
              <dt className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
                {dict.brokerage}
              </dt>
              <dd className="font-display mt-1 text-xl">{site.brokerage}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground text-xs tracking-[0.2em] uppercase">
                {dict.team}
              </dt>
              <dd className="font-display mt-1 text-xl">
                <a
                  href={site.social.team}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors"
                >
                  {site.team}
                </a>
              </dd>
            </div>
          </dl>

          <Button
            as="a"
            href={site.phoneHref}
            variant="gold"
            size="lg"
            className="mt-10 h-14 px-8 text-xs"
          >
            <Phone aria-hidden="true" />
            {dict.call}
          </Button>
        </div>
      </div>
    </section>
  );
}
