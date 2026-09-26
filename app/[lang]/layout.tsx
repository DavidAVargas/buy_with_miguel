import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cormorant, inter } from "@/utils/fonts";
import { defaultLocale, getDictionary, hasLocale, locales } from "@/lib/i18n";
import { site } from "@/lib/site";
import TopBar from "@/components/_blocks/header/top-bar";
import Header from "@/components/_blocks/header/header";
import Footer from "@/components/_blocks/footer/footer";
import CallBar from "@/components/_blocks/call-bar/call-bar";
import "@/styles/globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: LayoutProps<"/[lang]">): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};

  const { meta } = getDictionary(lang);
  return {
    metadataBase: new URL(site.url),
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `/${lang}`,
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, `/${l}`])),
        "x-default": `/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      url: `/${lang}`,
      siteName: `${site.name}, ${site.title}`,
      title: meta.title,
      description: meta.description,
      locale: lang === "es" ? "es_US" : "en_US",
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: LayoutProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${cormorant.variable} pb-16 lg:pb-0`}>
        <TopBar dict={dict.topbar} />
        <Header lang={lang} dict={dict.nav} />
        <main>{children}</main>
        <Footer lang={lang} dict={dict} />
        <CallBar dict={dict.callBar} />
      </body>
    </html>
  );
}
