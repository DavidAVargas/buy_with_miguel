"use client";

import { useEffect, useRef, useState } from "react";
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
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  // Following a link should leave focus where the browser puts it (the
  // linked section), so only Escape, the toggle, and outside clicks send
  // focus back to the menu button.
  const returnFocus = useRef(true);

  const close = (restoreFocus = true) => {
    returnFocus.current = restoreFocus;
    setOpen(false);
  };

  useEffect(() => {
    const root = rootRef.current;
    const trigger = triggerRef.current;
    if (!open || !root) return;

    // Make the rest of the page inert while the menu is open so Tab and
    // screen readers stay inside the menu and its toggle button.
    const inerted: HTMLElement[] = [];
    for (let el: HTMLElement = root; el.parentElement; el = el.parentElement) {
      if (el === document.body) break;
      for (const sibling of el.parentElement.children) {
        if (
          sibling !== el &&
          sibling instanceof HTMLElement &&
          !sibling.inert
        ) {
          sibling.inert = true;
          inerted.push(sibling);
        }
      }
    }

    const dismiss = (restoreFocus: boolean) => {
      returnFocus.current = restoreFocus;
      setOpen(false);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss(true);
        return;
      }
      if (event.key !== "Tab") return;

      // Wrap Tab around the menu instead of escaping to the browser UI.
      const focusable = root.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    // Listen for click (not pointerdown) so the tap lands while the page is
    // still inert and can't also activate a link underneath.
    const onOutsideClick = (event: MouseEvent) => {
      if (!root.contains(event.target as Node)) dismiss(true);
    };

    // The menu is hidden at the lg breakpoint; close it so the page isn't
    // left inert behind an invisible menu.
    const desktop = window.matchMedia("(min-width: 64rem)");
    const onResize = () => desktop.matches && dismiss(false);

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onOutsideClick);
    desktop.addEventListener("change", onResize);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onOutsideClick);
      desktop.removeEventListener("change", onResize);
      for (const el of inerted) el.inert = false;
      if (returnFocus.current) trigger?.focus();
    };
  }, [open]);

  return (
    <div ref={rootRef} className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? dict.closeMenu : dict.openMenu}
        className="text-foreground -mr-2 p-2"
      >
        {open ? (
          <X className="size-6" aria-hidden="true" />
        ) : (
          <Menu className="size-6" aria-hidden="true" />
        )}
      </button>

      {open && (
        <div
          id="mobile-menu"
          className="border-border bg-background absolute inset-x-0 top-full border-b shadow-lg"
        >
          {/* Any link (section, language, phone) closes the menu. */}
          <nav
            onClick={(event) => {
              if ((event.target as HTMLElement).closest("a")) close(false);
            }}
            className="mx-auto flex max-w-7xl flex-col px-4 py-4 sm:px-6"
          >
            {dict.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
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
