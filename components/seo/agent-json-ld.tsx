import { site } from "@/lib/site";
import type { Locale } from "@/lib/i18n";

type AgentJsonLdProps = {
  lang: Locale;
  description: string;
};

// Structured data so search engines understand this is a local real estate
// agent: who, where, which languages, and which brokerage.
export default function AgentJsonLd({ lang, description }: AgentJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${site.url}/#agent`,
    name: `${site.name}, ${site.title}`,
    url: `${site.url}/${lang}`,
    description,
    telephone: site.phoneHref.replace("tel:", ""),
    email: site.email,
    ...(site.headshot && { image: `${site.url}${site.headshot}` }),
    knowsLanguage: ["en", "es"],
    address: {
      "@type": "PostalAddress",
      addressRegion: "NJ",
      addressCountry: "US",
    },
    areaServed: site.areas.flatMap((area) =>
      area.towns.map((town) => ({
        "@type": "City",
        name: `${town}, NJ`,
      })),
    ),
    parentOrganization: {
      "@type": "RealEstateAgent",
      name: site.brokerage,
    },
    sameAs: [site.social.instagram, site.social.tiktok],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}
