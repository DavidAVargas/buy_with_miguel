import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";
import { Button } from "@/components/button/button";

// Placeholder photography until Miguel's own listing photos are added.
const BACKDROP = "https://images.unsplash.com/photo-1598228723793-52759bba239c";
const FEATURE = "https://images.unsplash.com/photo-1570129477492-45c003edd2be";

export default function Hero({ dict }: { dict: Dictionary["hero"] }) {
  return (
    <section>
      <div className="grid lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-[1.1fr_1fr]">
        <div className="flex items-center px-4 py-16 sm:px-6 lg:py-24 lg:pr-16 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))]">
          <div className="max-w-xl">
            <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
              {dict.eyebrow}
            </p>
            <h1 className="font-display text-foreground mt-6 text-5xl leading-[1.05] sm:text-6xl xl:text-7xl">
              {dict.title}
            </h1>
            <p className="text-muted-foreground mt-6 text-lg leading-relaxed">
              {dict.body}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
              <Button
                as="a"
                href="#contact"
                variant="gold"
                size="lg"
                className="h-14 px-8 text-xs"
              >
                {dict.primaryCta}
              </Button>
              <a
                href="#contact"
                className="group text-foreground hover:text-gold inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold tracking-wide transition-colors"
              >
                {dict.secondaryCta}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="bg-ink relative min-h-[420px] overflow-hidden lg:overflow-visible">
          <Image
            src={BACKDROP}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover opacity-85"
          />
          <div className="from-ink/10 to-ink/40 absolute inset-0 bg-linear-to-b via-transparent" />
          <div className="absolute inset-x-6 top-1/2 z-10 aspect-[3/2] -translate-y-1/2 shadow-2xl sm:inset-x-12 lg:inset-x-auto lg:-left-[12%] lg:w-[82%]">
            <Image
              src={FEATURE}
              alt={dict.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="bg-ink text-white">
        <ul className="mx-auto grid max-w-7xl divide-y divide-white/10 px-4 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-6 lg:px-8">
          {dict.highlights.map((item) => (
            <li
              key={item}
              className="py-6 text-center text-xs font-medium tracking-[0.2em] text-white/85 uppercase sm:py-8"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
