import Image from "next/image";
import { ArrowUpRight, Instagram } from "lucide-react";
import { listings } from "@/lib/listings";
import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

type RecentSalesProps = {
  lang: Locale;
  dict: Dictionary["sold"];
};

export default function RecentSales({ lang, dict }: RecentSalesProps) {
  const currency = new Intl.NumberFormat(lang === "es" ? "es-US" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <section id="sold" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <p className="text-gold text-xs font-semibold tracking-[0.25em] uppercase">
              {dict.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-4xl sm:text-5xl">
              {dict.title}
            </h2>
            <p className="text-muted-foreground mt-5 text-lg leading-relaxed">
              {dict.intro}
            </p>
          </div>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-gold group inline-flex shrink-0 items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
          >
            <Instagram className="size-4" aria-hidden="true" />
            {dict.instagram}
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        <ul className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {listings.map((listing, i) => (
            <li key={i} className="group">
              <div className="bg-muted relative aspect-[4/3] overflow-hidden">
                <Image
                  src={listing.image}
                  alt={`${dict.kinds[listing.kind]}, ${listing.town}, NJ`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span
                  className={cn(
                    "absolute top-4 left-4 px-3 py-1.5 text-[0.65rem] font-semibold tracking-[0.2em] text-white uppercase",
                    listing.status === "sold" ? "bg-ink" : "bg-gold",
                  )}
                >
                  {dict.status[listing.status]}
                </span>
              </div>
              <div className="mt-5 flex items-baseline justify-between gap-4">
                <p className="font-display text-3xl lining-nums">
                  {currency.format(listing.price)}
                  {listing.status === "leased" && (
                    <span className="text-muted-foreground text-lg">
                      {dict.perMonth}
                    </span>
                  )}
                </p>
                <p className="text-gold text-xs font-semibold tracking-[0.15em] uppercase">
                  {listing.town}
                </p>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                {[
                  dict.kinds[listing.kind],
                  listing.beds && `${listing.beds} ${dict.beds}`,
                  listing.baths &&
                    `${listing.baths} ${listing.baths === 1 ? dict.bath : dict.baths}`,
                ]
                  .filter(Boolean)
                  .join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
