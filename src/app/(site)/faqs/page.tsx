import Faq from "@/components/Faq";
import CallToAction from "@/components/CallToAction";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | BizHero Lubricants",
  description:
    "Frequently asked questions about lubricant selection, maintenance, and our products and services.",
};

const FaqsPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Frequently Asked Questions
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Find answers to common questions about our lubricant products,
                  services, and maintenance solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <CallToAction />
    </>
  );
};

export default FaqsPage;
