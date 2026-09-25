import { ArrowRight, Building2, Home, KeyRound, Tag } from "lucide-react";
import type { Dictionary } from "@/lib/i18n";

const icons = {
  buy: Home,
  sell: Tag,
  rent: KeyRound,
  commercial: Building2,
};

type ServicesProps = { dict: Dictionary["services"] };

export default function Services({ dict }: ServicesProps) {
  return (
    <section id="services" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
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

        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.items.map((item) => {
            const Icon = icons[item.icon as keyof typeof icons];
            return (
              <li
                key={item.title}
                className="group border-border bg-background hover:border-gold-light flex flex-col border p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Icon
                  className="text-gold size-8"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <span
                  className="bg-gold-light mt-6 h-px w-10"
                  aria-hidden="true"
                />
                <h3 className="font-display mt-6 text-2xl">{item.title}</h3>
                <p className="text-muted-foreground mt-3 grow leading-relaxed">
                  {item.body}
                </p>
                <a
                  href="#contact"
                  className="text-foreground hover:text-gold mt-8 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase transition-colors"
                >
                  {dict.cta}
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
