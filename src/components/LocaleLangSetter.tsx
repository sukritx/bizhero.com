"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function LocaleLangSetter() {
  const pathname = usePathname();

  useEffect(() => {
    const locale = pathname.startsWith("/en") ? "en" : "th";
    document.documentElement.lang = locale;
  }, [pathname]);

  return null;
}
