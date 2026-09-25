import { MessageCircle, Phone } from "lucide-react";
import { site } from "@/lib/site";
import type { Dictionary } from "@/lib/i18n";

// Always-visible call/text shortcuts for phone visitors (most traffic comes
// from Instagram and TikTok).
export default function CallBar({ dict }: { dict: Dictionary["callBar"] }) {
  return (
    <div className="bg-ink fixed inset-x-0 bottom-0 z-40 grid h-16 grid-cols-2 pb-[env(safe-area-inset-bottom)] text-white lg:hidden">
      <a
        href={site.phoneHref}
        className="flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase"
      >
        <Phone className="size-4" aria-hidden="true" />
        {dict.call}
      </a>
      <a
        href={site.smsHref}
        className="bg-gold flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase"
      >
        <MessageCircle className="size-4" aria-hidden="true" />
        {dict.text}
      </a>
    </div>
  );
}
