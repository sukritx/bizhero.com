import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { brands, getBrandBySlug } from "@/data/brandsData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return brands.map((brand) => ({ slug: brand.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) return { title: "Brand Not Found" };
  return {
    title: `${brand.name} Lubricants | BizHero - Authorized Distributor`,
    description: brand.description.substring(0, 160),
  };
}

const BrandPage = async ({ params }: Props) => {
  const { slug } = await params;
  const brand = getBrandBySlug(slug);
  if (!brand) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  {brand.name} Lubricants
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Authorized distributor of {brand.name} products for automotive
                  and industrial applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[800px]">
            <p className="mb-12 text-lg leading-relaxed text-body-color">
              {brand.description}
            </p>

            <div className="space-y-10">
              {brand.products.map((category, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-stroke bg-white p-8 shadow-1"
                >
                  <h2 className="mb-4 text-2xl font-bold text-dark">
                    {category.name}
                  </h2>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {category.items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-3 text-base text-body-color"
                      >
                        <svg
                          className="h-4 w-4 flex-shrink-0 text-primary"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-primary/90"
              >
                Request a Quote for {brand.name} Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default BrandPage;
