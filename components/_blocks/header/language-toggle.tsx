import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export default function LanguageToggle({
  lang,
  label,
}: {
  lang: Locale;
  label: string;
}) {
  return (
    <div className="flex items-center text-xs font-semibold tracking-[0.15em]">
      {(["en", "es"] as const).map((locale, i) => (
        <span key={locale} className="flex items-center">
          {i > 0 && <span className="text-border mx-1.5">|</span>}
          {locale === lang ? (
            <span className="text-foreground">{locale.toUpperCase()}</span>
          ) : (
            <Link
              href={`/${locale}`}
              aria-label={label}
              className="text-muted-foreground hover:text-gold transition-colors"
            >
              {locale.toUpperCase()}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
