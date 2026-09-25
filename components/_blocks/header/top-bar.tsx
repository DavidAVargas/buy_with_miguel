import { Instagram, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";
import TikTokIcon from "@/components/icons/tiktok";

export default function TopBar({ dict }: { dict: Dictionary["topbar"] }) {
  return (
    <div className="bg-ink text-white/85">
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
          <span className="text-gold-light hidden tracking-wide md:inline">
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
    </div>
  );
}
