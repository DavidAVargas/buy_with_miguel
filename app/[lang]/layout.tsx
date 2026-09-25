import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { cormorant, inter } from "@/utils/fonts";
import { getDictionary, hasLocale, locales } from "@/lib/i18n";
import TopBar from "@/components/_blocks/header/top-bar";
import Header from "@/components/_blocks/header/header";
import Footer from "@/components/_blocks/footer/footer";
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
    title: meta.title,
    description: meta.description,
    alternates: { languages: { en: "/en", es: "/es" } },
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
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <TopBar dict={dict.topbar} />
        <Header lang={lang} dict={dict.nav} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
