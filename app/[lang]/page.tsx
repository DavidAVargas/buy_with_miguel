import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n";
import Hero from "@/components/_blocks/hero/hero";
import Services from "@/components/_blocks/services/services";
import RecentSales from "@/components/_blocks/recent-sales/recent-sales";
import About from "@/components/_blocks/about/about";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Hero dict={dict.hero} />
      <Services dict={dict.services} />
      <RecentSales lang={lang} dict={dict.sold} />
      <About dict={dict.about} />
    </>
  );
}
