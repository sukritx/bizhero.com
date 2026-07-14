import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { industries } from "@/data/industriesData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries Served | BizHero Lubricants",
  description:
    "BizHero provides lubrication solutions for manufacturing, construction, transportation, agriculture, heavy equipment, and logistics industries.",
};

const IndustriesPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Industries We Serve
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  BizHero delivers specialized lubrication solutions tailored to
                  the unique demands of each industry. Find the right products
                  for your sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="group rounded-xl border border-stroke bg-white p-8 shadow-1 transition duration-300 hover:shadow-xl"
              >
                <h2 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">
                  {industry.title}
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color line-clamp-3">
                  {industry.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {industry.products.map((product, i) => (
                    <span
                      key={i}
                      className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {product}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center text-sm font-semibold text-primary">
                  View Details
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

      <CallToAction />
    </>
  );
};

export default IndustriesPage;
