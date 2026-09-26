"use client";

import { useState } from "react";
import { ArrowUpRight, Check, Copy, Mail } from "lucide-react";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";
import { Button } from "@/components/button/button";
import { cn } from "@/lib/utils";

type EmailCardDict = Dictionary["contact"]["emailCard"];
type Draft = { subject: string; body: string };

const encode = (value: string) => encodeURIComponent(value);

// Compose links for each way a visitor might send the pre-filled email.
// Desktop browsers often have no mail app configured, so mailto alone would
// open a blank page; Gmail/Outlook web compose covers most of those visitors.
function links({ subject, body }: Draft) {
  const to = encode(site.email);
  const su = encode(subject);
  const bd = encode(body);
  return {
    app: `mailto:${site.email}?subject=${su}&body=${bd}`,
    gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}&body=${bd}`,
    outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}&body=${bd}`,
  };
}

// Phones always have a mail app, so they skip the chooser.
const isTouch = () => window.matchMedia("(pointer: coarse)").matches;

export default function EmailCard({ dict }: { dict: EmailCardDict }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const draft = (intro: string, subject: string): Draft => ({
    subject,
    body: [dict.greeting, intro, dict.fields, dict.closing].join("\n\n"),
  });

  const drafts: Record<string, Draft> = {
    ...Object.fromEntries(
      Object.entries(dict.topics).map(([key, t]) => [
        key,
        draft(t.intro, t.subject),
      ]),
    ),
    general: draft(dict.generalIntro, dict.generalSubject),
  };

  function choose(key: string) {
    return (event: React.MouseEvent) => {
      if (isTouch()) return; // let the mailto link open the mail app
      event.preventDefault();
      setSelected(key);
      setCopied(false);
    };
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(site.email);
    setCopied(true);
  }

  const active = selected ? links(drafts[selected]) : null;
  const optionClass =
    "border-input hover:border-gold hover:text-gold flex items-center justify-center gap-2 border py-3 text-sm font-medium transition-colors";

  return (
    <div className="bg-background p-6 shadow-xl sm:p-10">
      <h3 className="font-display text-3xl">{dict.title}</h3>
      <p className="text-muted-foreground mt-3 leading-relaxed">
        {dict.subtitle}
      </p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {Object.entries(dict.topics).map(([key, topic]) => (
          <li key={key}>
            <a
              href={links(drafts[key]).app}
              onClick={choose(key)}
              aria-current={selected === key ? "true" : undefined}
              className={cn(
                "group border-input hover:border-gold hover:bg-gold flex items-center justify-between border px-5 py-5 transition-colors hover:text-white",
                selected === key && "border-gold bg-gold text-white",
              )}
            >
              <span className="font-display text-2xl">{topic.label}</span>
              <ArrowUpRight
                className={cn(
                  "text-gold size-5 transition-colors group-hover:text-white",
                  selected === key && "text-white",
                )}
                aria-hidden="true"
              />
            </a>
          </li>
        ))}
      </ul>

      <Button
        as="a"
        href={links(drafts.general).app}
        onClick={choose("general")}
        variant="gold"
        size="lg"
        fullWidth
        className="mt-6 h-14 text-xs"
      >
        <Mail aria-hidden="true" />
        {dict.general}
      </Button>

      {active && (
        <div className="bg-cream mt-6 p-5" role="region" aria-live="polite">
          <p className="text-muted-foreground text-xs font-semibold tracking-[0.2em] uppercase">
            {dict.sendWith}
          </p>
          <div className="mt-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <a
              href={active.gmail}
              target="_blank"
              rel="noopener noreferrer"
              className={optionClass}
            >
              {dict.gmail}
            </a>
            <a
              href={active.outlook}
              target="_blank"
              rel="noopener noreferrer"
              className={optionClass}
            >
              {dict.outlook}
            </a>
            <a href={active.app} className={optionClass}>
              {dict.app}
            </a>
            <button type="button" onClick={copyEmail} className={optionClass}>
              {copied ? (
                <Check className="text-gold size-4" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
              {copied ? dict.copied : dict.copy}
            </button>
          </div>
        </div>
      )}

      <p className="text-muted-foreground mt-6 text-center text-sm">
        {dict.note}{" "}
        <a
          href={site.phoneHref}
          className="text-foreground hover:text-gold font-medium whitespace-nowrap transition-colors"
        >
          {site.phone}
        </a>
      </p>
    </div>
  );
}
