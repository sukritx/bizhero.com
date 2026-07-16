export type Bilingual = { th: string; en: string };

export function t(value: Bilingual | string, locale: string): string {
  if (typeof value === "string") return value;
  if (locale in value) return value[locale as keyof Bilingual];
  return value.th;
}

export function tArr(arr: Bilingual[] | string[], locale: string): string[] {
  return arr.map((item) => t(item as Bilingual, locale));
}
