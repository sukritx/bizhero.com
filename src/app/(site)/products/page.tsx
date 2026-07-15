import Image from "next/image";
import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { productCategories } from "@/data/productsData";
import { brands } from "@/data/brandsData";
import { Metadata } from "next";

const brandLogoMap = Object.fromEntries(
  brands.map((b) => [b.name, b.logo]),
);

export const metadata: Metadata = {
  title:
    "Products | BizHero Lubricants - Automotive & Industrial Lubricants",
  description:
    "Browse our complete range of automotive and industrial lubricants including engine oil, hydraulic oil, gear oil, grease, compressor oil, and more from Valvoline, PETRONAS, and Monroe.",
};

const ProductsPage = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Our Product Range
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Comprehensive range of automotive and industrial lubricants
                  from Valvoline, PETRONAS, and Monroe. Browse by category to
                  find the right product for your application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map((category) => (
              <Link
                key={category.slug}
                href={`/products/${category.slug}`}
                className="group rounded-xl border border-stroke bg-white p-8 shadow-1 transition duration-300 hover:shadow-xl"
              >
                <h2 className="mb-4 text-xl font-bold text-dark group-hover:text-primary">
                  {category.title}
                </h2>
                <p className="mb-4 text-base leading-relaxed text-body-color line-clamp-3">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.applications.slice(0, 3).map((app, i) => (
                    <span
                      key={i}
                      className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {app}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-3">
                  {category.brands.map((b) => (
                    <Image
                      key={b.name}
                      src={brandLogoMap[b.name] || ""}
                      alt={b.name}
                      width={80}
                      height={32}
                      className="h-8 w-auto object-contain"
                    />
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

export default ProductsPage;
