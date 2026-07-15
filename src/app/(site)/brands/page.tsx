import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { brands } from "@/data/brandsData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Our Brands | BizHero Lubricants - Valvoline, PETRONAS, Monroe",
  description:
    "BizHero is an authorized distributor of Valvoline, PETRONAS, and Monroe lubricants. Explore our trusted brand partnerships for automotive and industrial applications.",
};

const BrandsPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Our Trusted Brands
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  BizHero is an authorized distributor of world-class lubricant
                  brands, bringing you quality products backed by decades of
                  research and innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="group rounded-xl border border-stroke bg-white p-8 shadow-1 transition duration-300 hover:shadow-xl"
              >
                <div className="mb-6 flex h-16 items-center">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={48}
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <h2 className="mb-4 text-2xl font-bold text-dark group-hover:text-primary">
                  {brand.name}
                </h2>
                <p className="mb-6 text-base leading-relaxed text-body-color line-clamp-4">
                  {brand.description}
                </p>
                <div className="flex items-center text-sm font-semibold text-primary">
                  View Products
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

export default BrandsPage;
