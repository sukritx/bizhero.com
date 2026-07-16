"use client";

import { usePathname } from "next/navigation";
import { dictionaries } from "./dictionaries";

export function useT() {
  const pathname = usePathname();
  const locale = pathname.startsWith("/en") ? "en" : "th";
  const dict = dictionaries[locale];

  function t(key: string): string {
    const keys = key.split(".");
    let current: unknown = dict;
    for (const k of keys) {
      if (current && typeof current === "object" && k in current) {
        current = (current as Record<string, unknown>)[k];
      } else {
        return key;
      }
    }
    return typeof current === "string" ? current : key;
  }

  return { t, locale };
}
