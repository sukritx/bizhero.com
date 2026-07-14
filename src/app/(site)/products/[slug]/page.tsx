import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { productCategories, getProductBySlug } from "@/data/productsData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return productCategories.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Product Not Found" };
  return {
    title: `${product.title} | BizHero Lubricants`,
    description: product.description.substring(0, 160),
  };
}

const ProductPage = async ({ params }: Props) => {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  {product.title}
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  {product.description.substring(0, 150)}...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[900px]">
            <div className="mb-12 rounded-xl bg-gray-50 p-8 sm:p-10">
              <h2 className="mb-6 text-2xl font-bold text-dark">
                About {product.title}
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-body-color">
                {product.description}
              </p>
              <div>
                <h3 className="mb-4 text-lg font-semibold text-dark">
                  Applications
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.applications.map((app, i) => (
                    <span
                      key={i}
                      className="inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="mb-8 text-2xl font-bold text-dark">
                Available Products by Brand
              </h2>
              <div className="space-y-6">
                {product.brands.map((brand, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-stroke bg-white p-6 shadow-1"
                  >
                    <h3 className="mb-4 text-xl font-bold text-dark">
                      {brand.name}
                    </h3>
                    <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                      {brand.items.map((item, j) => (
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
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-stroke pt-10">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-primary/90"
              >
                Request a Quote
              </Link>
              <Link
                href="/products/engine-oil"
                className="inline-flex items-center justify-center border border-stroke bg-white px-7 py-3 text-base font-bold text-dark transition duration-300 hover:border-primary hover:text-primary"
              >
                View All Products
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ProductPage;
