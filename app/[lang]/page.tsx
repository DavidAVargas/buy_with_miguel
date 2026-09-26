import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n";
import Hero from "@/components/_blocks/hero/hero";
import Services from "@/components/_blocks/services/services";
import RecentSales from "@/components/_blocks/recent-sales/recent-sales";
import About from "@/components/_blocks/about/about";
import Areas from "@/components/_blocks/areas/areas";
import Contact from "@/components/_blocks/contact/contact";
import AgentJsonLd from "@/components/seo/agent-json-ld";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <AgentJsonLd lang={lang} description={dict.meta.description} />
      <Hero dict={dict.hero} />
      <Services dict={dict.services} />
      <RecentSales lang={lang} dict={dict.sold} />
      <About dict={dict.about} />
      <Areas dict={dict.areas} />
      <Contact dict={dict.contact} />
    </>
  );
}
