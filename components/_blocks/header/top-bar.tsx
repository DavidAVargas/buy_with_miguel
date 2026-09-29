import { Instagram, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";
import TikTokIcon from "@/components/icons/tiktok";

type TopBarProps = {
  lang: Locale;
  dict: Dictionary["topbar"];
};

export default function TopBar({ lang, dict }: TopBarProps) {
  return (
    <aside
      aria-label={dict.label}
      className="bg-ink text-white/85 [--ring:var(--gold-light)]"
    >
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between gap-4 px-4 text-xs sm:px-6 lg:px-8">
        <div className="flex items-center gap-5">
          <a
            href={site.phoneHref}
            className="hover:text-gold-light flex items-center gap-1.5 transition-colors"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            {site.phone}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="hover:text-gold-light hidden items-center gap-1.5 transition-colors sm:flex"
          >
            <Mail className="size-3.5" aria-hidden="true" />
            {site.email}
          </a>
        </div>

        <div className="flex items-center gap-4">
          <span
            lang={lang === "en" ? "es" : "en"}
            className="text-gold-light hidden tracking-wide md:inline"
          >
            {dict.language}
          </span>
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-gold-light transition-colors"
          >
            <Instagram className="size-4" aria-hidden="true" />
          </a>
          <a
            href={site.social.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-gold-light transition-colors"
          >
            <TikTokIcon className="size-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
