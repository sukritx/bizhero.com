"use client";

import { useState } from "react";
import { useT } from "@/i18n/useT";

const Faq = ({ dict }: { dict: any }) => {
  const faqItems = dict?.faq?.items || [];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <div className="wow fadeInUp mx-auto mb-12 max-w-[640px] text-center lg:mb-20" data-wow-delay=".1s">
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            {dict?.faq?.title || "FAQ"}
          </h2>
          <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
            {dict?.faq?.subtitle || ""}
          </p>
        </div>

        <div className="wow fadeInUp mx-auto max-w-[780px]" data-wow-delay=".2s">
          {faqItems.map((faq: { question: string; answer: string }, i: number) => (
            <div key={i} className="border-b border-gray-200 dark:border-dark-3">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="flex w-full items-center justify-between py-5 text-left sm:py-6">
                <span className="pr-4 text-lg font-semibold text-dark dark:text-white sm:text-xl">{faq.question}</span>
                <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6L8 10L12 6" /></svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-[800px] pb-6" : "max-h-0"}`}>
                <p className="whitespace-pre-line text-base leading-relaxed text-body-color dark:text-dark-6">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
