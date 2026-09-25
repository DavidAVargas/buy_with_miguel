"use client";

import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { site } from "@/lib/site";
import type { Dictionary, Locale } from "@/lib/i18n";
import { Button } from "@/components/button/button";
import LanguageToggle from "./language-toggle";

type MobileMenuProps = {
  lang: Locale;
  dict: Dictionary["nav"];
};

export default function MobileMenu({ lang, dict }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? dict.closeMenu : dict.openMenu}
        className="text-foreground -mr-2 p-2"
      >
        {open ? <X className="size-6" /> : <Menu className="size-6" />}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="border-border bg-background absolute inset-x-0 top-full border-b shadow-lg"
        >
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6">
            {dict.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={close}
                className="border-border border-b py-4 text-base font-medium tracking-wide"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center justify-between py-5">
              <LanguageToggle lang={lang} label={dict.switchLanguage} />
              <a
                href={site.phoneHref}
                className="text-gold flex items-center gap-2 text-sm font-medium"
              >
                <Phone className="size-4" aria-hidden="true" />
                {site.phone}
              </a>
            </div>
            <Button
              as="a"
              href="#contact"
              onClick={close}
              variant="gold"
              size="lg"
              fullWidth
              className="text-xs"
            >
              {dict.contact}
            </Button>
          </nav>
        </div>
      )}
    </div>
  );
}
