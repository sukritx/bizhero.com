import Link from "next/link";
import CallToAction from "@/components/CallToAction";
import { industries, getIndustryBySlug } from "@/data/industriesData";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return { title: "Industry Not Found" };
  return {
    title: `Lubricants for ${industry.title} | BizHero Lubricants`,
    description: industry.description.substring(0, 160),
  };
}

const IndustryPage = async ({ params }: Props) => {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return (
    <>
      <section className="relative overflow-hidden bg-primary pt-[120px] pb-20 md:pt-[130px] lg:pt-[160px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[780px] text-center">
                <h1 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug lg:text-5xl lg:leading-[1.2]">
                  Lubricants for {industry.title}
                </h1>
                <p className="mx-auto mb-9 max-w-[600px] text-base font-medium text-white sm:text-lg sm:leading-[1.44]">
                  Specialized lubrication solutions for the{" "}
                  {industry.title.toLowerCase()} sector.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-[120px]">
        <div className="container">
          <div className="mx-auto max-w-[900px]">
            <p className="mb-12 text-lg leading-relaxed text-body-color">
              {industry.description}
            </p>

            <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-xl bg-gray-50 p-8">
                <h2 className="mb-4 text-xl font-bold text-dark">
                  Recommended Products
                </h2>
                <ul className="space-y-3">
                  {industry.products.map((product, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-base text-body-color"
                    >
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary"
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
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-gray-50 p-8">
                <h2 className="mb-4 text-xl font-bold text-dark">
                  Key Applications
                </h2>
                <ul className="space-y-3">
                  {industry.applications.map((app, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-base text-body-color"
                    >
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-primary"
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
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary px-7 py-3 text-base font-bold text-white transition duration-300 hover:bg-primary/90"
              >
                Request a Quote for {industry.title} Lubricants
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default IndustryPage;
