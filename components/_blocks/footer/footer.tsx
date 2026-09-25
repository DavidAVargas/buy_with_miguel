import Link from "next/link";
import { Instagram } from "lucide-react";
import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";
import TikTokIcon from "@/components/icons/tiktok";
import EqualHousingIcon from "@/components/icons/equal-housing";

type FooterProps = {
  lang: Locale;
  dict: Dictionary;
};

const headingClass =
  "text-gold-light text-xs font-semibold tracking-[0.25em] uppercase";
const linkClass = "text-white/70 transition-colors hover:text-white";

export default function Footer({ lang, dict }: FooterProps) {
  const t = dict.footer;

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-[2fr_1fr_1fr_1.3fr] lg:px-8 lg:py-20">
        <div>
          <Link href={`/${lang}`} className="flex items-center gap-3">
            <span className="font-display text-3xl leading-none">MH</span>
            <span className="bg-gold-light h-8 w-px" aria-hidden="true" />
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-semibold tracking-[0.2em] uppercase">
                {site.name}
              </span>
              <span className="text-[0.65rem] tracking-[0.25em] text-white/60 uppercase">
                {site.title}
              </span>
            </span>
          </Link>
          <p className="mt-6 max-w-xs leading-relaxed text-white/60">
            {t.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              {
                href: site.social.instagram,
                label: "Instagram",
                Icon: Instagram,
              },
              { href: site.social.tiktok, label: "TikTok", Icon: TikTokIcon },
            ].map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:border-gold-light hover:text-gold-light flex size-10 items-center justify-center border border-white/15 transition-colors"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className={headingClass}>{t.explore}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {dict.nav.links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={linkClass}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className={linkClass}>
                {dict.nav.contact}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>{t.contact}</h3>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a href={site.phoneHref} className={linkClass}>
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className={`${linkClass} break-all`}
              >
                {site.email}
              </a>
            </li>
            <li className="text-white/70">{dict.contact.languages}</li>
          </ul>
        </div>

        <div>
          <h3 className={headingClass}>{t.brokerage}</h3>
          <p className="font-display mt-5 text-2xl">{site.brokerage}</p>
          <p className="mt-1 text-sm text-white/70">{site.team}</p>
          <p className="mt-3 text-sm text-white/50">{site.license}</p>
          <div className="mt-6 flex items-center gap-3 text-white/70">
            <EqualHousingIcon className="size-9 shrink-0" />
            <span className="text-xs leading-snug tracking-wide uppercase">
              {t.equalHousing}
            </span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-white/50 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}, {site.title}. {t.rights}
          </p>
          <p>
            {site.brokerage} · {site.state}
          </p>
        </div>
      </div>
    </footer>
  );
}
