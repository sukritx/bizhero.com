"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  locale?: string;
};

export function LocaleLink({ href, locale, ...props }: Props) {
  const pathname = usePathname();
  const currentLocale = pathname.startsWith("/en") ? "en" : "th";
  const targetLocale = locale || currentLocale;

  const resolvedHref =
    typeof href === "string" && href.startsWith("/")
      ? `/${targetLocale}${href}`
      : href;

  return <Link href={resolvedHref} {...props} />;
}
