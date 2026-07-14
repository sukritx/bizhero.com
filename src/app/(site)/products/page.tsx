import { Metadata } from "next";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";

export const metadata: Metadata = {
  title: "Our Plumbing Services | A-1 Total Service Plumbing",
  description:
    "A-1 Total Service Plumbing offers drain cleaning, hydro jetting, leak detection, sewer line repair, trenchless pipe relining, repiping, water heater installation, and 24/7 emergency plumbing.",
};

const Products = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Our Plumbing Services
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Comprehensive plumbing solutions for residential, commercial, and municipal clients throughout Southern California.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20 lg:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="mb-6 text-3xl font-bold text-dark dark:text-white sm:text-4xl">
              Full Service Details
            </h2>
            <p className="mb-8 text-lg text-body-color dark:text-dark-6">
              Visit our dedicated services page for detailed descriptions of all our plumbing services, or contact us for a free estimate.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md bg-primary px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-primary/90"
              >
                View All Services
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md border border-stroke bg-white px-7 py-3 text-base font-bold text-dark transition duration-300 hover:border-primary hover:text-primary dark:border-dark-3 dark:bg-dark-2 dark:text-white"
              >
                Request Free Estimate
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Products;
