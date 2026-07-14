"use client";

import { useState } from "react";

const faqData = [
  {
    question: "Do you offer 24/7 emergency plumbing service?",
    answer:
      "Yes! We provide 24/7 emergency plumbing service throughout Los Angeles County and Orange County. Whether it's a burst pipe, sewer backup, gas leak, or any other plumbing emergency, our team is ready to respond day or night. Call us at (323) 410-2068 anytime.",
  },
  {
    question: "What is trenchless pipe relining?",
    answer:
      "Trenchless pipe relining (also called CIPP — Cured-In-Place Pipe lining) is a method of rehabilitating damaged underground pipes without the need for extensive excavation. We insert a resin-saturated liner into the existing pipe, which cures to form a new pipe within the old one. This method works for pipes from 2\"–48\" in diameter and saves significant time, cost, and damage to your property compared to traditional dig-and-replace methods.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Absolutely. A-1 Total Service Plumbing is fully licensed (California State License #1135475), bonded, and insured. This protects both our team and our customers, giving you complete peace of mind when we work on your property.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We primarily serve Los Angeles County and Orange County, including Commerce, Vernon, Monterey Park, Montebello, Anaheim, La Habra, South Bay, and East Los Angeles. For trenchless pipe relining projects, we also offer nationwide support for industrial and municipal applications.",
  },
  {
    question: "How much does a plumbing service call cost?",
    answer:
      "Our pricing varies depending on the service needed. We offer free estimates for most services and always provide upfront pricing before any work begins — no hidden fees or surprise charges. We also offer financing options and military discounts to help make quality plumbing service accessible.",
  },
  {
    question: "How quickly can you respond to a service call?",
    answer:
      "We pride ourselves on fast response times. For emergency calls, we typically have a technician at your location within 1–2 hours. For scheduled appointments, we offer flexible scheduling including early morning and evening time slots. Our regular business hours are 6:00 AM – 7:00 PM, 7 days a week.",
  },
  {
    question: "Do you offer warranties on your work?",
    answer:
      "Yes, we stand behind the quality of our workmanship. We offer warranties on our plumbing services and installations. The specific warranty terms depend on the type of service performed. Our team will always explain the warranty coverage before starting any work.",
  },
  {
    question: "What is hydro jetting and when is it needed?",
    answer:
      "Hydro jetting uses high-pressure water streams (up to 4,000 PSI) to clear severe blockages, tree roots, grease buildup, and mineral deposits from pipes. It's typically needed when traditional drain snaking isn't sufficient, or as preventative maintenance for commercial properties and older plumbing systems. It's safe for most pipe types and environmentally friendly since it uses only water.",
  },
];

const SingleFaq = ({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  return (
    <div className="border-b border-gray-200 dark:border-dark-3">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-5 text-left sm:py-6"
      >
        <span className="pr-4 text-lg font-semibold text-dark dark:text-white sm:text-xl">
          {question}
        </span>
        <span
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M4 6L8 10L12 6" />
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[800px] pb-6" : "max-h-0"
        }`}
      >
        <p className="whitespace-pre-line text-base leading-relaxed text-body-color dark:text-dark-6">
          {answer}
        </p>
      </div>
    </div>
  );
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative z-20 overflow-hidden bg-white pb-8 pt-20 dark:bg-dark lg:pb-[50px] lg:pt-[120px]">
      <div className="container">
        <div className="wow fadeInUp mx-auto mb-12 max-w-[640px] text-center lg:mb-20" data-wow-delay=".1s">
          <h2 className="mb-3 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]">
            Frequently Asked Questions
          </h2>
          <p className="text-base leading-relaxed text-body-color dark:text-dark-6">
            Common questions about our plumbing services. Don&apos;t see yours? Call us at <a href="tel:3234102068" className="text-primary hover:underline">(323) 410-2068</a>.
          </p>
        </div>

        <div className="wow fadeInUp mx-auto max-w-[780px]" data-wow-delay=".2s">
          {faqData.map((faq, i) => (
            <SingleFaq
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
