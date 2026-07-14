import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { services } from "@/data/servicesData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Services | BizHero Lubricants - Oil Change, Sump Tank Cleaning, Used Oil Analysis",
  description:
    "BizHero provides industrial maintenance services including oil change, sump tank cleaning, and used oil analysis. Beyond lubricant supply, we help maintain your machinery.",
};

const ServicesPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Our Maintenance Services
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Beyond supplying premium lubricants, BizHero offers industrial
                  maintenance services to help you reduce downtime and extend
                  equipment life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group rounded-xl border border-stroke bg-white p-8 shadow-1 transition duration-300 hover:shadow-xl"
              >
                <h2 className="mb-4 text-2xl font-bold text-dark group-hover:text-primary">
                  {service.title}
                </h2>
                <p className="mb-4 text-sm font-medium text-primary">
                  {service.tagline}
                </p>
                <p className="mb-6 text-base leading-relaxed text-body-color line-clamp-3">
                  {service.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-primary">
                  Learn More
                  <svg
                    className="ml-1 h-4 w-4 transition group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 lg:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[700px] text-center">
            <h2 className="mb-6 text-3xl font-bold text-dark sm:text-4xl">
              Not Sure What Service You Need?
            </h2>
            <p className="mb-8 text-lg text-body-color">
              Our technical team can assess your equipment and recommend the
              best maintenance approach. Contact us for a consultation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-primary px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-primary/90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ServicesPage;
