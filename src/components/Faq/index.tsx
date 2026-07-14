"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What brands of lubricants does BizHero distribute?",
    answer:
      "BizHero is an authorized distributor of Valvoline, PETRONAS, and Monroe lubricants. Valvoline provides automotive and industrial lubricants, PETRONAS offers industrial and commercial solutions, and Monroe specializes in metal working fluids.",
  },
  {
    question: "How do I choose the right engine oil?",
    answer:
      "The right engine oil depends on your vehicle or equipment specifications, operating conditions, and manufacturer recommendations. Our technical team can help you select the appropriate viscosity grade and performance level for your application.",
  },
  {
    question: "Do you offer maintenance services?",
    answer:
      "Yes, we provide oil change services, sump tank cleaning, and used oil analysis. These services help maintain your machinery, reduce equipment downtime, and extend the service life of your lubricants.",
  },
  {
    question: "What is used oil analysis and why is it important?",
    answer:
      "Used oil analysis is a diagnostic service that evaluates wear metals, contamination, viscosity, and oil condition in used lubricants. It enables predictive maintenance, early fault detection, lower maintenance costs, and reduced unplanned downtime.",
  },
  {
    question: "Do you supply lubricants for industrial manufacturing?",
    answer:
      "Yes, we supply hydraulic oils, gear oils, compressor oils, and metal working fluids for manufacturing plants, CNC machining operations, food factories, steel plants, plastic injection molding, and packaging facilities.",
  },
  {
    question: "Which industries do you serve?",
    answer:
      "We serve manufacturing, construction, transportation, agriculture, heavy equipment, logistics, and energy sectors. Each industry has specific lubrication requirements that we can help address.",
  },
  {
    question: "How can I get a quote for lubricant products?",
    answer:
      "You can contact us through our website contact form or visit our facility. Provide your equipment details, required products, and quantities, and our team will prepare a competitive quote for you.",
  },
  {
    question: "Do you provide technical support for lubricant selection?",
    answer:
      "Yes, our team offers technical support to help you select the right lubricant for your specific equipment and application. We consider factors like operating temperature, load conditions, and manufacturer specifications.",
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
            Common questions about our lubricants and services. Contact us for more information.
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
