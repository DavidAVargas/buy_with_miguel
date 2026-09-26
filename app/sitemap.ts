import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((lang) => [lang, `${site.url}/${lang}`]),
  );

  return locales.map((lang) => ({
    url: `${site.url}/${lang}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
    alternates: { languages },
  }));
}
