import Image from "next/image";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

// Halo Realty's logo when available, otherwise the name set in the display
// font. NJ advertising rules require the brokerage to be clearly identified.
export default function BrokerageLogo({ className }: { className?: string }) {
  if (site.brokerageLogo) {
    return (
      <Image
        src={site.brokerageLogo}
        alt={site.brokerage}
        width={545}
        height={366}
        className={cn("h-16 w-auto", className)}
      />
    );
  }

  return (
    <span className={cn("font-display text-2xl", className)}>
      {site.brokerage}
    </span>
  );
}
