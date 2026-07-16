"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useT } from "@/i18n/useT";

const NotFound = () => {
  const { t, locale } = useT();

  return (
    <section className="bg-white py-20 dark:bg-dark-2 lg:py-[110px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 md:w-5/12 lg:w-6/12">
            <div className="relative mx-auto aspect-[129/138] max-w-[357px] text-center">
              <Image src="/images/404.svg" alt="image" fill className="mx-auto max-w-full dark:hidden" />
              <Image src="/images/404-dark.svg" alt="image" fill className="mx-auto hidden max-w-full dark:block" />
            </div>
          </div>
          <div className="w-full px-4 md:w-7/12 lg:w-6/12 xl:w-5/12">
            <div>
              <div className="mb-8">
                <svg width="327" height="132" viewBox="0 0 327 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <mask id="path-1-outside-1_2014_12631" maskUnits="userSpaceOnUse" x="4" y="22" width="312" height="107" fill="black">
                    <rect fill="white" x="4" y="22" width="312" height="107" />
                    <path d="M80.4688 65C80.4688 73.724 78.8151 81.1458 75.5078 87.2656C72.2266 93.3854 67.7474 98.0599 62.0703 101.289C56.4193 104.492 50.0651 106.094 43.0078 106.094C35.8984 106.094 29.5182 104.479 23.8672 101.25C18.2161 98.0208 13.75 93.3464 10.4688 87.2266C7.1875 81.1068 5.54688 73.6979 5.54688 65C5.54688 56.276 7.1875 48.8542 10.4688 42.7344C13.75 36.6146 18.2161 31.9531 23.8672 28.75C29.5182 25.5208 35.8984 23.9062 43.0078 23.9062C50.0651 23.9062 56.4193 25.5208 62.0703 28.75C67.7474 31.9531 72.2266 36.6146 75.5078 42.7344C78.8151 48.8542 80.4688 56.276 80.4688 65ZM63.3203 65C63.3203 59.349 62.474 54.5833 60.7812 50.7031C59.1146 46.8229 56.7578 43.8802 53.7109 41.875C50.6641 39.8698 47.0964 38.8672 43.0078 38.8672C38.9193 38.8672 35.3516 39.8698 32.3047 41.875C29.2578 43.8802 26.888 46.8229 25.1953 50.7031C23.5286 54.5833 22.6953 59.349 22.6953 65C22.6953 70.651 23.5286 75.4167 25.1953 79.2969C26.888 83.1771 29.2578 86.1198 32.3047 88.125C35.3516 90.1302 38.9193 91.1328 43.0078 91.1328C47.0964 91.1328 50.6641 90.1302 53.7109 88.125C56.7578 86.1198 59.1146 83.1771 60.7812 79.2969C62.474 75.4167 63.3203 70.651 63.3203 65Z" />
                  </mask>
                  <path d="M75.5078 87.2656L74.6281 86.7902L74.6265 86.7931L75.5078 87.2656ZM62.0703 101.289L62.5634 102.159L62.5647 102.158L62.0703 101.289ZM23.8672 101.25L24.3633 100.382L23.8672 101.25ZM10.4688 87.2266L9.58744 87.6991L10.4688 87.2266ZM10.4688 42.7344L11.3501 43.2069L10.4688 42.7344ZM23.8672 28.75L24.3603 29.62L24.3633 29.6182L23.8672 28.75ZM62.0703 28.75L61.5742 29.6183L61.5789 29.6209L62.0703 28.75ZM75.5078 42.7344L74.6265 43.2069L74.6281 43.2098L75.5078 42.7344ZM60.7812 50.7031L59.8624 51.0978L59.8647 51.103L60.7812 50.7031ZM53.7109 41.875L53.1612 42.7103L53.7109 41.875ZM32.3047 41.875L32.8544 42.7103L32.3047 41.875ZM25.1953 50.7031L24.2787 50.3033L24.2765 50.3085L25.1953 50.7031ZM25.1953 79.2969L24.2765 79.6915L24.2787 79.6967L25.1953 79.2969ZM32.3047 88.125L32.8544 87.2897L32.3047 88.125ZM53.7109 88.125L53.1612 87.2897L53.7109 88.125ZM60.7812 79.2969L59.8647 78.897L59.8624 78.9022L60.7812 79.2969Z" fill="#3758F9" mask="url(#path-1-outside-1_2014_12631)" />
                </svg>
              </div>
              <h3 className="mb-5 text-2xl font-semibold text-dark dark:text-white">{t("notFound.title")}</h3>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">{t("notFound.description")}</p>
              <Link href={`/${locale}`} className="bg-dark px-7 py-3 text-base font-bold text-white transition hover:bg-primary dark:bg-primary dark:hover:bg-primary/80">
                {t("notFound.goHome")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
