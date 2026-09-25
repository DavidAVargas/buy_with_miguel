import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n";
import Hero from "@/components/_blocks/hero/hero";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return <Hero dict={dict.hero} />;
}
