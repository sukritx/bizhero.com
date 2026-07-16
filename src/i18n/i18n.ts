import { dictionaries, Dictionary } from "./dictionaries";

export const locales = ["th", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "th";

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale];
}

export type { Dictionary } from "./dictionaries";
