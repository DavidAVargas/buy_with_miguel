import en from "./dictionaries/en";
import es from "./dictionaries/es";

const dictionaries = { en, es };

export type Locale = keyof typeof dictionaries;
export type { Dictionary } from "./dictionaries/en";

export const locales = Object.keys(dictionaries) as Locale[];
export const defaultLocale: Locale = "en";

export const hasLocale = (locale: string): locale is Locale =>
  locale in dictionaries;

export const getDictionary = (locale: Locale) => dictionaries[locale];
