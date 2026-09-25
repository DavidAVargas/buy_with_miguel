import Link from "next/link";
import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";
import { Button } from "@/components/button/button";
import LanguageToggle from "./language-toggle";
import MobileMenu from "./mobile-menu";

type HeaderProps = {
  lang: Locale;
  dict: Dictionary["nav"];
};

export default function Header({ lang, dict }: HeaderProps) {
  return (
    <header className="border-border bg-background/95 sticky top-0 z-50 border-b backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <Link href={`/${lang}`} className="flex items-center gap-3">
          <span className="font-display text-foreground text-3xl leading-none">
            MH
          </span>
          <span className="bg-gold-light h-8 w-px" aria-hidden="true" />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-[0.2em] uppercase">
              {site.name}
            </span>
            <span className="text-muted-foreground text-[0.65rem] tracking-[0.25em] uppercase">
              {site.title} · {site.brokerage}
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {dict.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-foreground/80 hover:text-gold text-sm font-medium tracking-wide transition-colors"
            >
              {link.label}
            </a>
          ))}
          <LanguageToggle lang={lang} label={dict.switchLanguage} />
          <Button
            as="a"
            href="#contact"
            variant="gold"
            size="lg"
            className="text-xs"
          >
            {dict.contact}
          </Button>
        </nav>

        <MobileMenu lang={lang} dict={dict} />
      </div>
    </header>
  );
}
