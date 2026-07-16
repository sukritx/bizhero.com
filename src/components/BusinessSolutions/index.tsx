"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState, useCallback } from "react";
import { useT } from "@/i18n/useT";
import { industries } from "@/data/industriesData";

export default function BusinessSolutions() {
  const { t, locale } = useT();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth ?? 320;
    const gap = 32;
    const scrollAmount = cardWidth + gap;
    el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-[700px] text-center">
          <span className="mb-4 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
            {t("businessSolutions.badge")}
          </span>
          <h2 className="mb-4 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
            {t("businessSolutions.headline")}
          </h2>
          <p className="text-lg text-gray-600">{t("businessSolutions.subtitle")}</p>
        </div>

        <div className="relative px-10">
          {canScrollLeft && (
            <button onClick={() => scroll("left")} className="absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition hover:border-primary hover:text-primary" aria-label="Scroll left">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
            </button>
          )}
          <div ref={scrollRef} onScroll={updateScrollButtons} className="flex snap-x snap-mandatory gap-8 overflow-x-auto pb-4 scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {industries.map((industry) => (
              <Link key={industry.slug} href={`/industries/${industry.slug}`} className="group w-[300px] flex-shrink-0 snap-start overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image src={industry.image} alt={industry.title[locale as keyof typeof industry.title]} fill className="object-cover transition duration-500 group-hover:scale-110" sizes="300px" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-xl font-bold text-white">{industry.title[locale as keyof typeof industry.title]}</h3>
                </div>
                <div className="p-5">
                  <p className="mb-4 line-clamp-2 text-sm leading-relaxed text-gray-600">{industry.description[locale as keyof typeof industry.description]}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-primary">
                    {t("businessSolutions.learnMore")}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {canScrollRight && (
            <button onClick={() => scroll("right")} className="absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white shadow-lg transition hover:border-primary hover:text-primary" aria-label="Scroll right">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
